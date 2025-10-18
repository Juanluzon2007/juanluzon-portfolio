"use client"

import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils"
import SocialLinks from "./SocialLinks"

export default function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const innerHeight = window.innerHeight;
      const bodyHeight = document.body.scrollHeight;
      
      // Threshold to hide when near the top or bottom
      const topThreshold = 50; 
      const bottomThreshold = bodyHeight - innerHeight - 150; 

      if (scrollY > topThreshold && scrollY < bottomThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed left-1/2 -translate-x-1/2 px-3 py-2 rounded-full z-50 flex items-center gap-3 transition-all duration-300",
        "bottom-4",
        "bg-gray-800/50 border border-white/10 shadow-lg",
        isVisible ? "opacity-100 visible" : "opacity-0 invisible"
      )}
    >
      <SocialLinks />
    </nav>
  )
}
