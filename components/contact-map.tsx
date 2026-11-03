'use client'

import { Clock, MapPin, Phone } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { CLINIC } from '@/lib/translations'

export function ContactMap() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="bg-sky-soft py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center gap-4 text-center">
          <span className="rounded-full bg-background px-4 py-1.5 text-xs font-medium text-navy">
            {t.contact.badge}
          </span>
          <h2 className="font-serif text-3xl font-semibold text-navy text-balance md:text-4xl">
            {t.contact.title}
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-5 rounded-3xl border border-border bg-background p-7 md:p-9">
            <div className="flex items-start gap-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/15">
                <MapPin className="size-5 text-navy" aria-hidden="true" />
              </div>
              <div>
                <h3 className="mb-1 text-sm font-semibold text-navy">{t.contact.addressLabel}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{CLINIC.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/15">
                <Phone className="size-5 text-navy" aria-hidden="true" />
              </div>
              <div>
                <h3 className="mb-1 text-sm font-semibold text-navy">{t.contact.phoneLabel}</h3>
                <a
                  href={`tel:${CLINIC.phone}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {CLINIC.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/15">
                <Clock className="size-5 text-navy" aria-hidden="true" />
              </div>
              <div>
                <h3 className="mb-1 text-sm font-semibold text-navy">{t.contact.hoursLabel}</h3>
                <ul className="flex flex-col gap-0.5">
                  {t.contact.hours.map((line) => (
                    <li key={line} className="text-sm text-muted-foreground">
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <a
              href={CLINIC.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-navy-foreground shadow-md transition-colors hover:bg-navy/90"
            >
              <MapPin className="size-4" aria-hidden="true" />
              {t.contact.directions}
            </a>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border">
            <iframe
              src={CLINIC.mapsEmbed}
              title="Google Maps — Dr Hazem Tahoun, Nasr City, Cairo"
              className="h-full min-h-80 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
