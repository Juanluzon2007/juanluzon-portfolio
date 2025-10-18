'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/language-context';
import { Menu, X } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import LanguageSwitcher from './LanguageSwitcher';

// SVG Icons for navigation
const HomeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M27.9167 30H20.4167C19.2658 30 18.3333 29.1392 18.3333 28.0769V21.1538C18.3333 20.3038 17.5875 19.6154 16.6667 19.6154H13.3333C12.4125 19.6154 11.6667 20.3038 11.6667 21.1538V28.0769C11.6667 29.1392 10.7342 30 9.58333 30H2.08333C0.9325 30 0 29.1392 0 28.0769V13.3946C0 11.6262 0.878334 9.95539 2.3825 8.86154L14.2258 0.246923C14.68 -0.0823077 15.32 -0.0823077 15.7733 0.246923L27.6183 8.86154C29.1225 9.95539 30 11.6254 30 13.3931V28.0769C30 29.1392 29.0675 30 27.9167 30Z" fill="white" />
  </svg>
);

const AboutIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.0013 0C10.482 0 6.81914 3.50348 6.81914 7.82609V9.13044C6.81914 13.453 10.482 16.9565 15.0013 16.9565C19.5206 16.9565 23.1835 13.453 23.1835 9.13044V7.82609C23.1835 3.50348 19.5206 0 15.0013 0ZM14.9987 20.8696C9.53569 20.8696 2.52628 23.6959 0.509366 26.2041C-0.737054 27.755 0.44947 30 2.49366 30H27.5063C29.5505 30 30.7371 27.755 29.4906 26.2041C27.4737 23.6972 20.4616 20.8696 14.9987 20.8696Z" fill="white" />
  </svg>
);

const ExperienceIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.6923 0C10.1547 0 8.07692 2.16563 8.07692 4.8V6H10.3846V4.8C10.3846 3.45938 11.4032 2.4 12.6923 2.4H17.3077C18.5968 2.4 19.6154 3.45938 19.6154 4.8V6H21.9231V4.8C21.9231 2.16563 19.8453 0 17.3077 0H12.6923ZM5.625 7.2C2.51953 7.2 0 9.82031 0 13.05V24.15C0 27.3797 2.51953 30 5.625 30H24.375C27.4805 30 30 27.3797 30 24.15V13.05C30 9.82031 27.4805 7.2 24.375 7.2H5.625ZM15 15.4875C16.3386 15.4875 17.4159 16.6078 17.4159 18C17.4159 19.3922 16.3386 20.5125 15 20.5125C13.6614 20.5125 12.5841 19.3922 12.5841 18C12.5841 16.6078 13.6614 15.4875 15 15.4875Z" fill="white" />
    </svg>
);

const ProjectsIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} id="Filled" viewBox="0 0 24 24">
        <path fill="white" d="M18,19v4.7a4.968,4.968,0,0,0,1.879-1.164l2.656-2.658A4.954,4.954,0,0,0,23.7,18H19A1,1,0,0,0,18,19Z"/>
        <path fill="white" d="M7.172,13.828A4,4,0,0,0,6,16.657V18H7.343a4,4,0,0,0,2.829-1.172L21.5,5.5a2.121,2.121,0,0,0-3-3Z"/>
        <path fill="white" d="M24,4.952a4.087,4.087,0,0,1-1.08,1.962L11.586,18.243A5.961,5.961,0,0,1,7.343,20H6a2,2,0,0,1-2-2V16.657a5.957,5.957,0,0,1,1.758-4.242L17.086,1.086A4.078,4.078,0,0,1,19.037,0c-.013,0-.024,0-.037,0H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H16V19a3,3,0,0,1,3-3h5V5C24,4.984,24,4.969,24,4.952Z"/>
    </svg>
);


const CertificatesIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} id="Layer_1" viewBox="0 0 24 24" data-name="Layer 1">
        <path fill="white" d="m18 13a3.987 3.987 0 0 0 -2 7.444v2.833a.721.721 0 0 0 1.231.51l.769-.768.769.768a.721.721 0 0 0 1.231-.51v-2.833a3.987 3.987 0 0 0 -2-7.444z"/>
        <path fill="white" d="m12 17a5.993 5.993 0 0 1 9-5.191v-6.809a5.006 5.006 0 0 0 -5-5h-8a5.006 5.006 0 0 0 -5 5v12a5.006 5.006 0 0 0 5 5h6v-.54a5.975 5.975 0 0 1 -2-4.46zm-4-13h8a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2zm0 4h8a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2zm3 6h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2z"/>
    </svg>
);


const navItems = [
    { href: '/#home', labelKey: 'home', es: 'Inicio', en: 'Home', icon: HomeIcon },
    { href: '/#about-me', labelKey: 'about', es: 'Sobre Mí', en: 'About', icon: AboutIcon },
    { href: '/experiencia', labelKey: 'experience', es: 'Experiencia', en: 'Experience', icon: ExperienceIcon },
    { href: '/proyectos', labelKey: 'projects', es: 'Proyectos', en: 'Projects', icon: ProjectsIcon },
    { href: '/certificados', labelKey: 'certificates', es: 'Certificados', en: 'Certificates', icon: CertificatesIcon },
];

const MobileNav = () => {
    const { language } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (isOpen) {
                setIsOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isOpen]);

    return (
        <div className="md:hidden">
            <div className="fixed top-4 right-4 z-[60] flex items-center gap-2">
                <LanguageSwitcher />
                <Sheet open={isOpen} onOpenChange={setIsOpen} modal={false}>
                    <SheetTrigger asChild>
                        <button
                            className={cn(
                              'p-2 rounded-full',
                              'bg-gray-800/50 border border-white/10 shadow-lg backdrop-blur-md',
                              'text-white transition-transform duration-300 hover:scale-110',
                              'data-[state=open]:opacity-0'
                            )}
                            aria-label="Toggle menu"
                        >
                            <Menu size={24} />
                        </button>
                    </SheetTrigger>
                    <SheetContent side="right" className="bg-transparent border-none w-[80px] p-0">
                        <SheetTitle className="sr-only">Navegación móvil</SheetTitle>
                        <nav
                            className="flex flex-col items-center justify-center h-full gap-4"
                        >
                            {navItems.map((item) => (
                                <SheetClose asChild key={item.labelKey}>
                                    <Link href={item.href} className="relative group p-3 rounded-full hover:bg-slate-800/60 transition-colors duration-300">
                                        <item.icon className="w-6 h-6" />
                                        <div className="absolute top-1/2 -translate-y-1/2 right-full mr-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 scale-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 pointer-events-none">
                                            {item[language]}
                                        </div>
                                    </Link>
                                </SheetClose>
                            ))}
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    );
};

export default MobileNav;
