'use client'

import { Star } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

export function Testimonials() {
  const { t } = useLanguage()

  return (
    <section className="bg-sky-soft py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center gap-4 text-center">
          <span className="rounded-full bg-background px-4 py-1.5 text-xs font-medium text-navy">
            {t.testimonials.badge}
          </span>
          <h2 className="font-serif text-3xl font-semibold text-navy text-balance md:text-4xl">
            {t.testimonials.title}
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {t.testimonials.items.map((item) => (
            <figure
              key={item.name}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-background p-7"
            >
              <div className="flex gap-1" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 fill-primary text-primary"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className="text-sm leading-relaxed text-foreground text-pretty">
                {`"${item.text}"`}
              </blockquote>
              <figcaption className="mt-auto text-sm font-semibold text-navy">
                {item.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
