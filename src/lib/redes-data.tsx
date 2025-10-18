import React, { type SVGProps } from "react";
import { Github, Instagram, Linkedin, Youtube } from "lucide-react";

// Use simple functional components for SVG icons to mimic lucide-react's behavior
const XIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 16 16" {...props}>
      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" fill="currentColor"/>
    </svg>
)

const TikTokIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.89 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
    </svg>
)

export const siteConfig = {
  socialLinks: [
    {
      name: "linkedin",
      href: "https://www.linkedin.com/in/juanluzondev/",
      icon: Linkedin,
    },
    {
      name: "github",
      href: "https://github.com/Juanluzon2007",
      icon: Github,
    },
    {
      name: "x",
      href: "https://x.com/juanluzondev",
      icon: XIcon,
    },
    {
      name: "instagram",
      href: "https://www.instagram.com/juanluzondev/",
      icon: Instagram,
    },
    {
      name: "tiktok",
      href: "https://www.tiktok.com/@juanluzondev",
      icon: TikTokIcon,
    },
    {
      name: "youtube",
      href: "https://www.youtube.com/@juanluzondev",
      icon: Youtube,
    },
  ]
};
