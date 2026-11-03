'use client'

import { useState } from 'react'
import { LogoMark } from '@/components/logo-mark'
import { Menu, Phone, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/language-context'
import { SocialIcons } from '@/components/social-icons'
import { CLINIC, type Lang } from '@/lib/translations'

const langs: { code: Lang; label: string }[] = [
  { code: 'fr', label: 'FR' },
  { code: 'ar', label: 'عربي' },
  { code: 'en', label: 'EN' },
]

export function SiteHeader() {
  const { lang, setLang, t } = useLanguage()
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#about', label: t.nav.about },
    { href: '#services', label: t.nav.services },
    { href: '#implants', label: t.nav.implants },
    { href: '#social', label: t.nav.social },
    { href: '#why-us', label: t.nav.whyUs },
    { href: '#results', label: t.nav.results },
    { href: '#faq', label: t.nav.faq },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 lg:px-6">
        <a href="#top" className="flex items-center gap-2">
          <LogoMark variant="light" className="h-10 w-10" />
          <div className="flex flex-col leading-tight">
            <span className="font-serif text-sm font-semibold tracking-wide text-navy">
              {CLINIC.name}
            </span>
            <span className="text-[11px] text-muted-foreground">
              {CLINIC.doctor}
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <SocialIcons className="hidden lg:flex" />
          <div
            className="flex items-center rounded-full border border-border bg-secondary p-0.5"
            role="group"
            aria-label="Language"
          >
            {langs.map((l) => (
              <button
                key={l.code}
                type="button"
                onClick={() => setLang(l.code)}
                className={`rounded-full px-2.5 py-1 text-xs font-medium transition-colors ${
                  lang === l.code
                    ? 'bg-navy text-navy-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                aria-pressed={lang === l.code}
              >
                {l.label}
              </button>
            ))}
          </div>

          <Button
            size="sm"
            className="hidden bg-navy text-navy-foreground hover:bg-navy/90 md:inline-flex"
            render={<a href={`tel:${CLINIC.phone}`} />}
          >
            <Phone className="size-4" />
            {t.hero.call}
          </Button>

          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-md text-foreground lg:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="border-t border-border bg-background px-4 py-4 lg:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <Button
              className="mt-2 bg-navy text-navy-foreground hover:bg-navy/90"
              render={<a href={`tel:${CLINIC.phone}`} />}
            >
              <Phone className="size-4" />
              {t.hero.call} — {CLINIC.phoneDisplay}
            </Button>
          </div>
        </nav>
      )}
    </header>
  )
}
