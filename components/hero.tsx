'use client'

import Image from 'next/image'
import { CalendarCheck, MapPin, Phone, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/language-context'
import { WhatsAppIcon } from '@/components/whatsapp-icon'
import { CLINIC } from '@/lib/translations'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="top" className="bg-sky-soft pt-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-6 lg:py-24">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-background px-4 py-1.5 text-xs font-medium text-navy">
            <Sparkles className="size-3.5 text-primary" aria-hidden="true" />
            {t.hero.badge}
          </span>

          <h1 className="font-serif text-4xl font-semibold leading-tight text-navy text-balance md:text-5xl lg:text-6xl">
            {t.hero.title}
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-muted-foreground text-pretty md:text-lg">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-wrap gap-3">
            <Button
              size="lg"
              className="bg-navy text-navy-foreground hover:bg-navy/90"
              render={<a href="#appointment" />}
            >
              <CalendarCheck className="size-4" />
              {t.hero.cta}
            </Button>
            <Button
              size="lg"
              className="bg-[#25D366] text-white hover:bg-[#1fb457]"
              render={<a href={CLINIC.whatsapp} target="_blank" rel="noopener noreferrer" />}
            >
              <WhatsAppIcon className="size-4" />
              {t.hero.whatsapp}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-navy/30 bg-background text-navy hover:bg-secondary"
              render={<a href={`tel:${CLINIC.phone}`} />}
            >
              <Phone className="size-4" />
              {t.hero.call}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-navy/30 bg-background text-navy hover:bg-secondary"
              render={<a href={CLINIC.mapsUrl} target="_blank" rel="noopener noreferrer" />}
            >
              <MapPin className="size-4" />
              {t.hero.directions}
            </Button>
          </div>

          <dl className="mt-4 grid w-full grid-cols-3 gap-4 border-t border-navy/10 pt-6">
            {t.hero.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-serif text-2xl font-semibold text-navy md:text-3xl">
                  {stat.value}
                </dd>
                <dd className="text-xs text-muted-foreground md:text-sm">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl shadow-xl shadow-primary/20">
            <Image
              src="/images/clinic-hero.jpg"
              alt="Modern dental clinic interior of Dr Hazem Tahoun"
              width={720}
              height={560}
              priority
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl border border-border bg-background px-5 py-3 shadow-lg md:left-8">
            <Image
              src="/images/clinic-hero.jpg"
              alt=""
              width={36}
              height={36}
              className="h-9 w-9 rounded-full object-cover"
            />
            <div className="leading-tight">
              <p className="text-sm font-semibold text-navy">{CLINIC.doctor}</p>
              <p className="text-xs text-muted-foreground">{t.about.role}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
