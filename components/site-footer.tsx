'use client'

import { useLanguage } from '@/lib/language-context'
import { LogoMark } from '@/components/logo-mark'
import { CLINIC } from '@/lib/translations'
import { SocialIcons } from '@/components/social-icons'

export function SiteFooter() {
  const { t } = useLanguage()

  const links = [
    { href: '#about', label: t.nav.about },
    { href: '#services', label: t.nav.services },
  { href: '#implants', label: t.nav.implants },
    { href: '#results', label: t.nav.results },
  { href: '#social', label: t.nav.social },
    { href: '#faq', label: t.nav.faq },
    { href: '#appointment', label: t.nav.book },
  ]

  return (
    <footer className="bg-navy">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3 lg:px-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <LogoMark variant="dark" className="h-10 w-10" />
            <div className="leading-tight">
              <p className="font-serif font-semibold text-navy-foreground">{CLINIC.name}</p>
              <p className="text-xs text-navy-foreground/60">{CLINIC.doctor}</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-navy-foreground/70">{t.footer.tagline}</p>
          <SocialIcons tone="dark" />
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">
            {t.footer.quickLinks}
          </h3>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="w-fit text-sm text-navy-foreground/70 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">
            {t.footer.contactTitle}
          </h3>
          <a
            href={`tel:${CLINIC.phone}`}
            className="w-fit text-sm text-navy-foreground/70 transition-colors hover:text-primary"
          >
            {CLINIC.phoneDisplay}
          </a>
          <p className="text-sm leading-relaxed text-navy-foreground/70">{CLINIC.address}</p>
        </div>
      </div>

      <div className="border-t border-navy-foreground/10 py-5 text-center text-xs text-navy-foreground/50">
        {`© ${new Date().getFullYear()} ${CLINIC.name}. ${t.footer.rights}`}
      </div>
    </footer>
  )
}
