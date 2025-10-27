"use client";

import { ParallaxProvider } from "react-scroll-parallax";
import StoryblokProvider from "../Storyblok/Provider";

const Providers = ({ children }: { children: React.ReactNode }) => (
  <StoryblokProvider>
    <ParallaxProvider>{children}</ParallaxProvider>
  </StoryblokProvider>
);

export default Providers;
