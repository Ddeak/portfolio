import { renderRichText } from "@storyblok/react";

// @ts-expect-error
import type { StoryblokRichtext } from "@/app/types/storyblok.d.ts";

const RICH_TEXT_MAX = 120;

const useExcerpt = (richText: StoryblokRichtext) => {
  const html = renderRichText(richText);
  if (!html) return "";

  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;
  const plainText = tempDiv.textContent || tempDiv.innerText || "";

  const excerpt = plainText.length > RICH_TEXT_MAX
    ? plainText.substring(0, RICH_TEXT_MAX) + "..."
    : plainText;
  
    return excerpt.replace(/:([^ \n])/g, ': $1');
};

export default useExcerpt;
