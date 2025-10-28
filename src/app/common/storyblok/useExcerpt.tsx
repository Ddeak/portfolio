import { renderRichText } from "@storyblok/react";

// @ts-expect-error
import type { StoryblokRichtext } from '@/app/types/storyblok.d.ts';

const useExcerpt = (richText: StoryblokRichtext) => {
  const html = renderRichText(richText);
  if (!html) return '';

  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;
  const plainText = tempDiv.textContent || tempDiv.innerText || "";

    

  return plainText.length > 50 ? plainText.substring(0, 10) + "..." : plainText;
};

export default useExcerpt;
