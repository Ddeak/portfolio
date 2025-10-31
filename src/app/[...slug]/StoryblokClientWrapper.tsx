// app/[...slug]/StoryblokClientWrapper.tsx
'use client';

import { useStoryblokState, StoryblokComponent } from '@storyblok/react';
import type { ISbStoryData } from '@storyblok/react';

interface Props {
  story: ISbStoryData;
}

export default function StoryblokClientWrapper({ story }: Props) {
  const liveStory = useStoryblokState(story);

  return <StoryblokComponent blok={liveStory.content} />;
}