import { renderRichText } from "@storyblok/react";

// @ts-expect-error
import type { StoryblokRichtext } from "@/app/types/storyblok.d.ts";

const RICH_TEXT_MAX = 50;

const useExcerpt = (richText: StoryblokRichtext) => {
  const html = renderRichText(richText);
  if (!html) return "";

  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;
  const plainText = tempDiv.textContent || tempDiv.innerText || "";

  return plainText.length > RICH_TEXT_MAX
    ? plainText.substring(0, RICH_TEXT_MAX) + "..."
    : plainText;
};

export default useExcerpt;
