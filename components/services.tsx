'use client'

import { useLanguage } from '@/lib/language-context'

const icons = [
  '/images/icon-implant.png',
  '/images/icon-ortho.png',
  '/images/icon-whitening.png',
  '/images/icon-prostheses.png',
  '/images/icon-care.png',
  '/images/icon-surgery.png',
]

export function Services() {
  const { t } = useLanguage()

  return (
    <section id="services" className="bg-sky-soft py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center gap-4 text-center">
          <span className="rounded-full bg-background px-4 py-1.5 text-xs font-medium text-navy">
            {t.services.badge}
          </span>
          <h2 className="font-serif text-3xl font-semibold text-navy text-balance md:text-4xl">
            {t.services.title}
          </h2>
          <p className="leading-relaxed text-muted-foreground text-pretty">
            {t.services.subtitle}
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.services.items.map((service, i) => {
            const icon = icons[i % icons.length]
            return (
              <article
                key={service.title}
                className="group flex flex-col gap-4 rounded-2xl border border-border bg-background p-6 transition-shadow hover:shadow-lg hover:shadow-primary/10"
              >
                <img src={icon} alt="" className="h-14 w-14 rounded-2xl object-cover shadow-md" />
                <h3 className="font-serif text-lg font-semibold text-navy">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.desc}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
