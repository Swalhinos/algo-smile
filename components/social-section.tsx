"use client"
import { BadgeCheck } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { FacebookIcon, InstagramIcon } from '@/components/brand-icons'
const FACEBOOK_URL = 'https://facebook.com/AlgoSmileDr.HazemTahoun'
const INSTAGRAM_URL = 'https://www.instagram.com/drhazemtahoun_algosmileclinic'
export function SocialSection() {
  const { t } = useLanguage()
  const cards = [
    { name: 'Facebook', handle: 'Algo Smile - Dr.Hazem Tahoun', url: FACEBOOK_URL, desc: t.social.facebookDesc, Icon: FacebookIcon, verified: true },
    { name: 'Instagram', handle: '@drhazemtahoun_algosmileclinic', url: INSTAGRAM_URL, desc: t.social.instagramDesc, Icon: InstagramIcon, verified: true },
  ]
  return (
    <section id="social" className="py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center gap-4 text-center">
          <span className="rounded-full bg-background px-4 py-1.5 text-xs font-medium text-navy">{t.social.badge}</span>
          <h2 className="font-serif text-3xl font-semibold text-navy text-balance md:text-4xl">{t.social.title}</h2>
          <p className="leading-relaxed text-muted-foreground text-pretty">{t.social.subtitle}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {cards.map(({ name, handle, url, desc, Icon, verified }) => (
            <article key={name} className="flex flex-col items-start gap-3 rounded-3xl border border-border bg-card p-6">
              <span className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-navy"><Icon className="size-6" /></span>
              <h3 className="font-serif text-xl font-semibold text-navy">{name}</h3>
              <p className="text-sm text-muted-foreground">{handle}</p>
              <p className="flex-1 leading-relaxed text-muted-foreground">{desc}</p>
              {verified ? (<span className="flex items-center gap-1.5 text-sm font-medium text-navy"><BadgeCheck className="size-4" />{t.social.verified}</span>) : (<p className="text-sm font-medium text-amber-700">{t.social.facebookNote}</p>)}
              <a href={url} target="_blank" rel="noopener noreferrer" className="mt-1 inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-navy-foreground transition-colors hover:bg-navy/90">{t.social.cta}</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
