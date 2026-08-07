import { createSocialImage, socialImageSize } from "@/lib/social-image";

export const dynamic = "force-static";
export const alt = "Sharare Keshvari — Frontend Developer";
export const size = socialImageSize;
export const contentType = "image/png";

export default function TwitterImage() {
  return createSocialImage();
}
