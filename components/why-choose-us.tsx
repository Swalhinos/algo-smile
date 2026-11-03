'use client'

import { HeartHandshake, MapPin, Microscope, Users } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

const icons = [Microscope, HeartHandshake, Users, MapPin]

export function WhyChooseUs() {
  const { t } = useLanguage()

  return (
    <section id="why-us" className="mx-auto max-w-6xl px-4 py-16 lg:px-6 lg:py-24">
      <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center gap-4 text-center">
        <span className="rounded-full bg-sky-soft px-4 py-1.5 text-xs font-medium text-navy">
          {t.why.badge}
        </span>
        <h2 className="font-serif text-3xl font-semibold text-navy text-balance md:text-4xl">
          {t.why.title}
        </h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {t.why.items.map((item, i) => {
          const Icon = icons[i % icons.length]
          return (
            <div
              key={item.title}
              className="flex flex-col items-center gap-4 rounded-2xl bg-navy p-8 text-center"
            >
              <div className="flex size-14 items-center justify-center rounded-full bg-primary/20">
                <Icon className="size-7 text-primary" aria-hidden="true" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-navy-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-navy-foreground/70">
                {item.desc}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
