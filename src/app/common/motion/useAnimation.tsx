"use client";

import { MotionGlobalConfig } from "framer-motion";
import { useEffect } from "react";

const useAnimation = (enabled: boolean) => {
  useEffect(() => {
    MotionGlobalConfig.skipAnimations = !enabled;
  }, [enabled]);
};

export default useAnimation;
