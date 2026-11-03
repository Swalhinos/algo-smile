'use client'

import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-6 lg:py-24">
      <div className="relative order-2 lg:order-1">
        <div className="overflow-hidden rounded-3xl">
          <Image
            src="/images/clinic-hero.jpg"
            alt="Interior of Algo Smile"
            width={640}
            height={720}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute -right-3 -top-3 -z-10 h-full w-full rounded-3xl bg-primary/20 md:-right-5 md:-top-5" aria-hidden="true" />
      </div>

      <div className="order-1 flex flex-col gap-5 lg:order-2">
        <span className="w-fit rounded-full bg-sky-soft px-4 py-1.5 text-xs font-medium text-navy">
          {t.about.badge}
        </span>
        <h2 className="font-serif text-3xl font-semibold text-navy text-balance md:text-4xl">
          {t.about.title}
        </h2>
        <p className="text-sm font-medium uppercase tracking-widest text-primary">
          {t.about.role}
        </p>
        <p className="leading-relaxed text-muted-foreground text-pretty">{t.about.p1}</p>
        <p className="leading-relaxed text-muted-foreground text-pretty">{t.about.p2}</p>
        <ul className="mt-2 flex flex-col gap-3">
          {t.about.points.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
              <span className="text-sm leading-relaxed text-foreground">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
