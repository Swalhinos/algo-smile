'use client'

import { useState } from 'react'
import { MoveHorizontal } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

function Slider({
  before,
  after,
  beforeLabel,
  afterLabel,
  title,
}: {
  before: string
  after: string
  beforeLabel: string
  afterLabel: string
  title: string
}) {
  const [pos, setPos] = useState(50)

  return (
    <figure className="overflow-hidden rounded-3xl border border-border bg-card">
      <div className="relative w-full cursor-ew-resize select-none overflow-hidden">
        <img
          src={before}
          alt={`${title} — ${beforeLabel}`}
          draggable={false}
          className="pointer-events-none block h-auto w-full"
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
          aria-hidden="true"
        >
          <img
            src={after}
            alt=""
            draggable={false}
            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-navy/85 px-3 py-1 text-xs font-medium text-navy-foreground">
          {beforeLabel}
        </span>
        <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-navy/85 px-3 py-1 text-xs font-medium text-navy-foreground">
          {afterLabel}
        </span>
        <div
          className="pointer-events-none absolute inset-y-0"
          style={{ left: `${pos}%` }}
          aria-hidden="true"
        >
          <div className="absolute inset-y-0 -left-px w-0.5 bg-white/90 shadow" />
          <div className="absolute top-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy shadow-lg">
            <MoveHorizontal className="size-5" />
          </div>
        </div>
        <input
          type="range"
          min={4}
          max={96}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label={`${beforeLabel} / ${afterLabel}`}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
    </figure>
  )
}

export function BeforeAfter() {
  const { t } = useLanguage()

  return (
    <section id="results" className="py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center gap-4 text-center">
          <span className="rounded-full bg-background px-4 py-1.5 text-xs font-medium text-navy">
            {t.beforeAfter.badge}
          </span>
          <h2 className="font-serif text-3xl font-semibold text-navy text-balance md:text-4xl">
            {t.beforeAfter.title}
          </h2>
          <p className="leading-relaxed text-muted-foreground text-pretty">{t.beforeAfter.subtitle}</p>
        </div>

        <div className="mx-auto flex max-w-3xl flex-col gap-8">
          <Slider
            before="/images/case1-before.jpg"
            after="/images/case1-after.jpg"
            beforeLabel={t.beforeAfter.labels.before}
            afterLabel={t.beforeAfter.labels.after}
            title={t.beforeAfter.title}
          />
          <Slider
            before="/images/case2-before.jpg"
            after="/images/case2-after.jpg"
            beforeLabel={t.beforeAfter.labels.before}
            afterLabel={t.beforeAfter.labels.after}
            title={t.beforeAfter.title}
          />
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">{t.beforeAfter.note}</p>
      </div>
    </section>
  )
}
