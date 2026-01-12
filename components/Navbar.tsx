"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

const nav = [
  { label: "HOME", href: "#" },
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close menu when user clicks a hash link
  const handleNavClick = () => setOpen(false);

  // Close menu on Escape key
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-blue-100 bg-blue-50/90 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-6">
        {/* Logo / Avatar */}
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 overflow-hidden rounded-full border border-blue-200">
            <Image
              src="/Elibert.png"
              alt="Elibert Hernandez"
              width={40}
              height={40}
              className="object-cover"
              priority
            />
          </div>
          <span className="font-semibold tracking-wide text-slate-900">
            ELIBERT
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-semibold tracking-[0.18em] text-slate-700">
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="hover:text-blue-600 transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile button */}
        <button
          type="button"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-blue-200 bg-white hover:bg-blue-50"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {/* hamburger / X */}
          <div className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-slate-900 transition ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-5 bg-slate-900 transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-0.5 w-5 bg-slate-900 transition ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-blue-100 bg-blue-50">
          <nav className="mx-auto max-w-6xl px-6 py-4">
            <ul className="flex flex-col gap-3 text-sm font-semibold tracking-[0.18em] text-slate-800">
              {nav.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={handleNavClick}
                    className="block rounded-lg px-3 py-2 hover:bg-blue-100"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
