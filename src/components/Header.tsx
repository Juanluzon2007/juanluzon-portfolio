'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useLanguage } from '@/context/language-context';
import LanguageSwitcher from './LanguageSwitcher';
import { Separator } from './ui/separator';
import Logo from './Logo';


const SECTIONS = [
  { id: 'home', es_title: 'Inicio', en_title: 'Home' },
  { id: 'experience', es_title: 'Experiencia', en_title: 'Experience' },
  { id: 'projects', es_title: 'Proyectos', en_title: 'Projects' },
  { id: 'about-me', es_title: 'Sobre Mí', en_title: 'About' },
  { id: 'certificates', es_title: 'Certificados', en_title: 'Certificates' },
];


export default function Header() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const { language } = useLanguage();

  useEffect(() => {
    if (isHomePage) {
      SECTIONS.forEach(section => {
        sectionRefs.current[section.id] = document.getElementById(section.id);
      });
    }

    const handleScroll = () => {
      // Background on scroll
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section logic
      if (isHomePage) {
        let currentSection: string | null = null;
        const scrollPosition = window.scrollY + window.innerHeight / 2.5;

        for (const sectionId in sectionRefs.current) {
          const sectionEl = sectionRefs.current[sectionId];
          if (sectionEl && sectionEl.offsetTop <= scrollPosition && sectionEl.offsetTop + sectionEl.offsetHeight > scrollPosition) {
            currentSection = sectionId;
            break;
          }
        }
        
        if (window.scrollY < 200) {
            currentSection = SECTIONS[0].id;
        }

        setActiveSection(currentSection);
      } else {
        const path = pathname.split('/')[1];
        // Normalize path for comparison, e.g. 'experiencia' -> 'experience'
        const normalizedPath = path === 'proyectos' ? 'projects' : path === 'certificados' ? 'certificates' : path === 'experiencia' ? 'experience' : path;
        const currentSection = SECTIONS.find(s => s.id === normalizedPath);
        setActiveSection(currentSection?.id || null);
      }
    };

    document.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [isHomePage, pathname]);

  const mainNavLinks = [
    { href: isHomePage ? '#home' : '/#home', label: language === 'es' ? 'Inicio' : 'Home', sectionId: 'home' },
    { href: "/experiencia", label: language === 'es' ? 'Experiencia' : 'Experience', sectionId: 'experience' },
    { href: "/proyectos", label: language === 'es' ? 'Proyectos' : 'Projects', sectionId: 'projects' },
    { href: isHomePage ? '#about-me' : '/#about-me', label: language === 'es' ? 'Sobre Mí' : 'About', sectionId: 'about-me' },
    { href: "/certificados", label: language === 'es' ? 'Certificados' : 'Certificates', sectionId: 'certificates' },
  ];

  return (
    <header
      className="fixed top-0 flex w-full p-4 transition-all duration-300 z-50 items-center"
    >
        <div className="flex">
          <Link href="/#home" aria-label="Ir al inicio" className="flex items-center gap-2">
            <Logo className="w-10 h-10 text-primary" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav
            className={cn(
            'hidden md:flex absolute left-1/2 -translate-x-1/2', // Centering classes
            'rounded-full px-4 sm:px-6 py-2 transform hover:scale-[1.02] transition-all duration-300',
            isScrolled && 'bg-gray-800/50 border border-white/10 shadow-lg backdrop-blur-md'
            )}
        >
            <div className="flex items-center justify-center space-x-1">
                {mainNavLinks.map(link => (
                <Link
                    key={link.sectionId}
                    href={link.href}
                    className={cn(
                    "transition-all duration-300 text-sm px-3 py-1 rounded-full whitespace-nowrap",
                    activeSection === link.sectionId || (pathname === link.href && link.href !== '/') ? 'text-blue-500 font-semibold' : 'text-blue-100/80 hover:text-blue-400'
                    )}
                >
                    {link.label}
                </Link>
                ))}
              <div className="flex items-center gap-2 pl-2">
                <Separator orientation="vertical" className="h-6 bg-white/10" />
                <LanguageSwitcher />
              </div>
            </div>
        </nav>
    </header>
  );
}
