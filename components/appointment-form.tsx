'use client'

import { useState, type FormEvent } from 'react'
import { CalendarCheck, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/language-context'
import { CLINIC } from '@/lib/translations'

export function AppointmentForm() {
  const { t } = useLanguage()
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    message: '',
  })

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const lines = [
      `${t.appointment.title} — ${CLINIC.name}`,
      `${t.appointment.name}: ${form.name}`,
      `${t.appointment.phone}: ${form.phone}`,
      `${t.appointment.service}: ${form.service}`,
      `${t.appointment.date}: ${form.date}`,
      form.message ? `${t.appointment.message.replace(/\s*\(.*\)\s*/, '')}: ${form.message}` : '',
    ]
      .filter(Boolean)
      .join('\n')
    window.open(`${CLINIC.whatsapp}?text=${encodeURIComponent(lines)}`, '_blank')
  }

  const inputClass =
    'w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring'

  return (
    <section id="appointment" className="mx-auto max-w-6xl px-4 py-16 lg:px-6 lg:py-24">
      <div className="grid gap-10 rounded-3xl bg-navy p-6 md:p-10 lg:grid-cols-5 lg:gap-14 lg:p-14">
        <div className="flex flex-col gap-5 lg:col-span-2">
          <span className="w-fit rounded-full bg-primary/20 px-4 py-1.5 text-xs font-medium text-primary">
            {t.appointment.badge}
          </span>
          <h2 className="font-serif text-3xl font-semibold text-navy-foreground text-balance md:text-4xl">
            {t.appointment.title}
          </h2>
          <p className="leading-relaxed text-navy-foreground/70 text-pretty">
            {t.appointment.subtitle}
          </p>
          <div className="mt-2 flex items-center gap-3 rounded-2xl bg-navy-foreground/10 p-4">
            <CalendarCheck className="size-8 shrink-0 text-primary" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-navy-foreground/80">{t.appointment.note}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 lg:col-span-3">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="apt-name" className="text-sm font-medium text-navy-foreground">
                {t.appointment.name}
              </label>
              <input
                id="apt-name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder={t.appointment.namePh}
                className={inputClass}
                autoComplete="name"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="apt-phone" className="text-sm font-medium text-navy-foreground">
                {t.appointment.phone}
              </label>
              <input
                id="apt-phone"
                required
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder={t.appointment.phonePh}
                className={inputClass}
                autoComplete="tel"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="apt-service" className="text-sm font-medium text-navy-foreground">
                {t.appointment.service}
              </label>
              <select
                id="apt-service"
                required
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className={inputClass}
              >
                <option value="" disabled>
                  {t.appointment.servicePh}
                </option>
                {t.services.items.map((s) => (
                  <option key={s.title} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="apt-date" className="text-sm font-medium text-navy-foreground">
                {t.appointment.date}
              </label>
              <input
                id="apt-date"
                required
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className={inputClass}
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="apt-message" className="text-sm font-medium text-navy-foreground">
              {t.appointment.message}
            </label>
            <textarea
              id="apt-message"
              rows={3}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder={t.appointment.messagePh}
              className={inputClass}
            />
          </div>

          <Button type="submit" size="lg" className="mt-2 w-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-fit">
            <Send className="size-4" />
            {t.appointment.submit}
          </Button>
        </form>
      </div>
    </section>
  )
}
