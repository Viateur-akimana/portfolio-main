'use client';
import React, { useEffect, useState } from "react";
import { Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "../app/utils/cn";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleTOScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Home"
          onClick={() => handleTOScroll("home")}
        />
        <MenuItem
          setActive={setActive}
          active={active}
          item="About"
          onClick={() => handleTOScroll("about")}
        />
        <MenuItem
          setActive={setActive}
          active={active}
          item="Techstack"
          onClick={() => handleTOScroll("skills")}
        />
        <MenuItem
          setActive={setActive}
          active={active}
          item="Projects"
          onClick={() => handleTOScroll("projects")}
        />
        <MenuItem
          setActive={setActive}
          active={active}
          item="Experience"
          onClick={() => handleTOScroll("experience")}
        />
        <MenuItem
          setActive={setActive}
          active={active}
          item="Contact"
          onClick={() => handleTOScroll("contact")}
        />
      </Menu>
    </div>
  );
}
