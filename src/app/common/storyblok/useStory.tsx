import { fetchStory } from "@/utils/fetchStory";
import { useEffect, useReducer } from "react";

type StoryResult<T> = {
  data: T | undefined;
  loading: boolean;
  error: Error | null;
};

type Action<T> =
  | { type: "loading" }
  | { type: "success"; payload: T }
  | { type: "error"; payload: Error };


const storyReducer = <T,>(state: StoryResult<T>, action: Action<T>): StoryResult<T> => {
  switch (action.type) {
    case "loading":
      return { ...state, loading: true, error: null };
    case "success":
      return { ...state, loading: false, data: action.payload };
    case "error":
      return { ...state, loading: false, error: action.payload };
  }
};

const useStory = <T, >(name: string): StoryResult<T | undefined> => {
  const [state, dispatch] = useReducer(storyReducer, {
    data: undefined,
    loading: true,
    error: null,
  });
  

  useEffect(() => {
    let cancelled = false;
    dispatch({ type: "loading" });

    const getStories = async () => {
      try {
        const item = await fetchStory(name) as T;
        //@ts-expect-error
        dispatch({ type: "success", payload: item });
      } catch (e) {
        if (!cancelled) {
          dispatch({ type: "error", payload: e as Error });
        }
      }
    };

    getStories();

    return () => {
      cancelled = true;
    };
  }, [name]);

  return state
};

export default useStory;
