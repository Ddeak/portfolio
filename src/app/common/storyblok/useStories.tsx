import { fetchStories } from "@/utils/fetchStory";
import { useEffect, useReducer } from "react";

type StoriesResult<T> = {
  data: T[];
  loading: boolean;
  error: Error | null;
};

type Action<T> =
  | { type: "loading" }
  | { type: "success"; payload: T[] }
  | { type: "error"; payload: Error };


const storiesReducer = <T,>(state: StoriesResult<T>, action: Action<T>): StoriesResult<T> => {
  switch (action.type) {
    case "loading":
      return { ...state, loading: true, error: null, data: [] };
    case "success":
      return { ...state, loading: false, data: action.payload };
    case "error":
      return { ...state, loading: false, error: action.payload };
  }
};

const useStories = <T, >(name: string): StoriesResult<T> => {
  const [state, dispatch] = useReducer(storiesReducer, {
    data: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    let cancelled = false;
    dispatch({ type: "loading" });

    const getStories = async () => {
      try {
        const items = await fetchStories(name) as T[];
        // @ts-expect-error
        dispatch({ type: "success", payload: items });
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

  return state;
};

export default useStories;
