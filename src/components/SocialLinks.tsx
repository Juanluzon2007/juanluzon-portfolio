"use client"

import { siteConfig } from "@/lib/redes-data"

export default function SocialLinks() {
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
