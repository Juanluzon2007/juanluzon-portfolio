"use client"

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

const siteConfig = {
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

function SocialLinks() {
  return (
    <ul className="flex items-center justify-center gap-1">
      {siteConfig.socialLinks.map(({ name, href, icon: Icon }) => (
        <li key={name} className="social-icon relative group">
          <a
            href={href}
            aria-label={name}
            data-social={name}
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden flex justify-center items-center w-8 h-8 rounded-full text-white transition-all duration-300 ease-in-out hover:shadow-lg"
          >
            <div className="filled" />
            <Icon className="relative z-[1] w-4 h-4" />
          </a>
          <div className="tooltip capitalize">{name}</div>
        </li>
      ))}
    </ul>
  )
}

export default function Footer() {
  return (
    <footer className="w-full py-8 text-sm text-gray-400">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 px-4 sm:px-6 lg:px-8">
        <div className="text-center sm:text-left">
          <p>&copy; {new Date().getFullYear()} Juan Luzon. Todos los derechos reservados.</p>
          <p>Hecho con <span className="text-yellow-300">Next.js</span> y <span className="text-yellow-300">Tailwind CSS</span>.</p>
        </div>
        <SocialLinks />
      </div>
    </footer>
  );
}
