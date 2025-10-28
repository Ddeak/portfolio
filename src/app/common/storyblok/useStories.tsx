import { Project } from "@/app/types/storyblok";
import { fetchStories } from "@/utils/fetchStory";
import { useEffect, useReducer, useRef } from "react";

type StoriesResult = {
  data: Project[];
  loading: boolean;
  error: Error | null;
};

type Action =
  | { type: "loading" }
  | { type: "success"; payload: Project[] }
  | { type: "error"; payload: Error };

const storiesReducer = (state: StoriesResult, action: Action): StoriesResult => {
  switch (action.type) {
    case "loading":
      return { ...state, loading: true, error: null, data: [] };
    case "success":
      return { ...state, loading: false, data: action.payload };
    case "error":
      return { ...state, loading: false, error: action.payload };
  }
};

const useStories = (name: string): StoriesResult => {
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
        const projects = await fetchStories(name);
        dispatch({ type: "success", payload: projects as Project[] });
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
