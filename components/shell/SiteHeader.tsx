"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Logo } from "@/components/Logo";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { navLinks, site } from "@/content/site";
import { cn } from "@/lib/utils";
import { IconArrow } from "@/components/icons";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background,border-color,backdrop-filter] duration-300",
        scrolled
          ? "border-border bg-[#0B0D10]/75 backdrop-blur-xl"
          : "border-transparent bg-transparent",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-sm focus:text-[#04110c]"
      >
        Skip to main content
      </a>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <MagneticButton href="/contact">
            Request a briefing
            <IconArrow />
          </MagneticButton>
        </div>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span aria-hidden className="relative block h-3.5 w-4">
            <span
              className={cn(
                "absolute left-0 top-0 h-px w-full bg-current transition-transform",
                open && "translate-y-[6px] rotate-45",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-[6px] h-px w-full bg-current transition-opacity",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-[12px] h-px w-full bg-current transition-transform",
                open && "-translate-y-[6px] -rotate-45",
              )}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="border-t border-border bg-[#0B0D10]/95 backdrop-blur-xl lg:hidden"
          >
            <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-md px-3 py-3 text-base text-foreground hover:bg-white/[0.04]"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-accent px-4 py-3 text-sm font-medium text-[#04110c]"
                onClick={() => setOpen(false)}
              >
                Request a briefing
              </Link>
              <a
                href={`mailto:${site.email}`}
                className="px-3 py-2 text-sm text-muted"
                onClick={() => setOpen(false)}
              >
                {site.email}
              </a>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
