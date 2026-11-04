'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowDown, CalendarCheck, ChevronRight, MapPin, Phone, Send, X } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { CLINIC, type Lang } from '@/lib/translations'
import { faqAnswer } from '@/lib/chat-faq'
import { WhatsAppIcon } from '@/components/whatsapp-icon'
import { FacebookIcon, InstagramIcon } from '@/components/brand-icons'

type CardKind = 'whatsapp' | 'booking' | 'maps' | 'phone' | 'facebook' | 'instagram'
type ChatMessage = { role: 'user' | 'assistant'; text: string; local?: boolean; cards?: CardKind[]; answerLang?: Lang }

const HINTS: Record<Lang, string> = { fr: 'En un clic', ar: 'بنقرة واحدة', en: 'In one tap' }

const CARD_DEFS: Record<
  CardKind,
  { href: string; external: boolean; bg: string; Icon: (p: { className?: string }) => React.ReactNode; label: Record<Lang, string>; sub: Record<Lang, string> }
> = {
  whatsapp: {
    href: CLINIC.whatsapp,
    external: true,
    bg: 'bg-[#25D366] shadow-[#25D366]/30',
    Icon: WhatsAppIcon,
    label: { fr: 'Réserver sur WhatsApp', ar: 'احجز عبر واتساب', en: 'Book on WhatsApp' },
    sub: { fr: CLINIC.phoneDisplay, ar: CLINIC.phoneDisplay, en: CLINIC.phoneDisplay },
  },
  booking: {
    href: '#appointment',
    external: false,
    bg: 'bg-gradient-to-r from-[#14273D] to-[#2E6E9E] shadow-navy/30',
    Icon: CalendarCheck,
    label: { fr: 'Prendre rendez-vous ici', ar: 'احجز موعدك هنا', en: 'Book your appointment here' },
    sub: { fr: 'Formulaire du site', ar: 'نموذج الموقع', en: 'Website form' },
  },
  maps: {
    href: CLINIC.mapsUrl,
    external: true,
    bg: 'bg-[#1A73E8] shadow-[#1A73E8]/30',
    Icon: MapPin,
    label: { fr: 'Itinéraire vers le cabinet', ar: 'الاتجاهات إلى العيادة', en: 'Directions to the clinic' },
    sub: { fr: 'Google Maps', ar: 'Google Maps', en: 'Google Maps' },
  },
  phone: {
    href: 'tel:201008000172',
    external: false,
    bg: 'bg-rose-600 shadow-rose-600/30',
    Icon: Phone,
    label: { fr: 'Appeler le cabinet', ar: 'اتصل بالعيادة الآن', en: 'Call the clinic now' },
    sub: { fr: CLINIC.phoneDisplay, ar: CLINIC.phoneDisplay, en: CLINIC.phoneDisplay },
  },
  facebook: {
    href: 'https://facebook.com/AlgoSmileDr.HazemTahoun',
    external: true,
    bg: 'bg-[#1877F2] shadow-[#1877F2]/30',
    Icon: FacebookIcon,
    label: { fr: 'Notre page Facebook', ar: 'صفحتنا على فيسبوك', en: 'Our Facebook page' },
    sub: { fr: 'Algo Smile - Dr.Hazem Tahoun', ar: 'Algo Smile - Dr.Hazem Tahoun', en: 'Algo Smile - Dr.Hazem Tahoun' },
  },
  instagram: {
    href: 'https://www.instagram.com/drhazemtahoun_algosmileclinic',
    external: true,
    bg: 'bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] shadow-[#DD2A7B]/30',
    Icon: InstagramIcon,
    label: { fr: 'Notre Instagram', ar: 'حسابنا على إنستغرام', en: 'Our Instagram' },
    sub: { fr: '@drhazemtahoun_algosmileclinic', ar: '@drhazemtahoun_algosmileclinic', en: '@drhazemtahoun_algosmileclinic' },
  },
}

const STRINGS: Record<
  Lang,
  { title: string; subtitle: string; greeting: string; placeholder: string; send: string; open: string; whatsappCta: string; error: string; typing: string; tapHint: string; bookWhatsapp: string }
> = {
  fr: {
    title: 'Assistant du cabinet',
    subtitle: 'Réponses immédiates, 24h/24',
    greeting:
      'Bonjour et bienvenue au cabinet du Dr Hazem Tahoun ! Je peux vous renseigner sur nos services, les implants, ou la prise de rendez-vous. Comment puis-je vous aider ?',
    placeholder: 'Écrivez votre question…',
    send: 'Envoyer',
    open: 'Discuter avec notre assistant',
    whatsappCta: 'Ou réservez directement sur WhatsApp',
    error:
      "Je n'ai pas pu répondre pour le moment. Contactez le cabinet sur WhatsApp au +20 100 800 0172, nous vous répondrons rapidement.",
    typing: "L'assistant écrit",
    tapHint: 'En un clic',
    bookWhatsapp: 'Réserver sur WhatsApp',
  },
  ar: {
    title: 'مساعد العيادة',
    subtitle: 'ردود فورية، على مدار الساعة',
    greeting:
      'مرحباً بكم في عيادة الدكتور حازم طاحون! يمكنني إخباركم بخدماتنا، زراعة الأسنان، أو كيفية حجز موعد. كيف يمكنني مساعدتكم؟',
    placeholder: 'اكتب سؤالك…',
    send: 'إرسال',
    open: 'تحدث مع مساعدنا',
    whatsappCta: 'أو احجز مباشرة عبر واتساب',
    error:
      'لم أتمكن من الرد في الوقت الحالي. تواصل مع العيادة عبر واتساب على ‎+20 100 800 0172‎ وسنرد عليك بسرعة.',
    typing: 'المساعد يكتب الآن',
    tapHint: 'بنقرة واحدة',
    bookWhatsapp: 'احجز عبر واتساب',
  },
  en: {
    title: 'Clinic assistant',
    subtitle: 'Instant answers, 24/7',
    greeting:
      "Hello and welcome to Dr Hazem Tahoun's clinic! I can tell you about our services, dental implants, or how to book an appointment. How can I help you?",
    placeholder: 'Type your question…',
    send: 'Send',
    open: 'Chat with our assistant',
    whatsappCta: 'Or book directly on WhatsApp',
    error:
      'I could not answer just now. Contact the clinic on WhatsApp at +20 100 800 0172 and we will reply quickly.',
    typing: 'Assistant is typing',
    tapHint: 'In one tap',
    bookWhatsapp: 'Book on WhatsApp',
  },
}

export function ChatWidget() {
  const { lang } = useLanguage()
  const s = STRINGS[lang] ?? STRINGS.fr
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState('')
  const [sending, setSending] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ role: 'assistant', text: s.greeting, local: true }])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open ])

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, sending, open])

  function send() {
    const text = input.trim()
    if (!text || sending) return
    const next: ChatMessage[] = [...messages, { role: 'user', text }]
    setMessages(next)
    setInput('')
    setSending(true)
    // Instant local FAQ — no network call, no API, nothing to wait for and
    // nothing that can fail. A short "typing" pause (the animated dots the
    // visitor sees) keeps the exchange feeling natural while the answer
    // still lands in about a second.
    const answer = faqAnswer(text, lang)
    const cards = answer.cards.filter((c) => c in CARD_DEFS) as CardKind[]
    const delay = Math.min(1400, Math.max(650, 450 + answer.text.length * 4))
    window.setTimeout(() => {
      setMessages([...next, { role: 'assistant', text: answer.text, cards, answerLang: answer.answerLang }])
      setSending(false)
    }, delay)
  }

  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-5 z-50 flex h-[min(70vh,540px)] w-[min(92vw,380px)] flex-col overflow-hidden rounded-3xl border border-border bg-background shadow-2xl shadow-black/25">
          <div className="flex items-center gap-3 bg-gradient-to-r from-[#14273D] via-navy to-[#2E6E9E] px-4 py-3 text-navy-foreground">
            <img
              src="/images/chat-icon.png"
              alt=""
              className="size-10 shrink-0 rounded-full object-cover shadow-md"
            />
            <span className="min-w-0 flex-1">
              <span className="block truncate text-sm font-semibold">{s.title}</span>
              <span className="block text-xs opacity-80">{s.subtitle}</span>
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="rounded-full p-1.5 transition-colors hover:bg-white/10"
            >
              <X className="size-5" />
            </button>
          </div>

          <div ref={scrollRef} className="flex flex-1 flex-col gap-2.5 overflow-y-auto bg-secondary/40 px-3.5 py-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
                <div
                  className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed shadow-sm ${
                    m.role === 'user'
                      ? 'bg-navy text-navy-foreground'
                      : 'border border-border/60 bg-background text-foreground'
                  }`}
                >
                  {m.text}
                </div>
                {m.role === 'assistant' && m.cards && m.cards.length > 0 && (
                  <div className="mt-2 flex w-[85%] flex-col gap-2">
                    <div className="flex items-center gap-1 text-[11px] font-bold text-[#128C4B]">
                      <ArrowDown className="size-3.5 animate-bounce" />
                      {HINTS[m.answerLang ?? lang]}
                    </div>
                    {m.cards.map((kind) => {
                      const def = CARD_DEFS[kind]
                      const Icon = def.Icon
                      const cardLang = m.answerLang ?? lang
                      return (
                        <a
                          key={kind}
                          href={def.href}
                          {...(def.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                          className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-white shadow-md transition-transform hover:scale-[1.02] ${def.bg}`}
                        >
                          <Icon className="size-6 shrink-0" />
                          <span className="min-w-0 flex-1">
                            <span className="block text-sm font-bold">{def.label[cardLang]}</span>
                            <span className="block text-xs opacity-90" dir="ltr">
                              {def.sub[cardLang]}
                            </span>
                          </span>
                          <ChevronRight className="size-5 shrink-0 rtl:-scale-x-100" />
                        </a>
                      )
                    })}
                  </div>
                )}
              </div>
            ))}
            {sending && (
              <div className="flex items-center gap-2 self-start rounded-2xl border border-border/60 bg-background px-3.5 py-2.5 shadow-sm">
                <span className="flex items-end gap-1" aria-hidden="true">
                  {[0, 1, 2].map((d) => (
                    <span
                      key={d}
                      className="size-1.5 animate-bounce rounded-full bg-navy/70"
                      style={{ animationDelay: `${d * 160}ms`, animationDuration: '0.9s' }}
                    />
                  ))}
                </span>
                <span className="text-xs text-muted-foreground">{s.typing}…</span>
              </div>
            )}
          </div>

          <div className="border-t border-border bg-background px-3.5 py-3">
            <form
              className="flex items-center gap-2"
              onSubmit={(e) => {
                e.preventDefault()
                send()
              }}
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={s.placeholder}
                maxLength={1000}
                className="min-w-0 flex-1 rounded-full border border-border bg-secondary/50 px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
              />
              <button
                type="submit"
                disabled={sending || !input.trim()}
                aria-label={s.send}
                className="flex size-10 shrink-0 items-center justify-center rounded-full bg-navy text-navy-foreground transition-transform hover:scale-105 disabled:opacity-40"
              >
                <Send className="size-4 rtl:-scale-x-100" />
              </button>
            </form>
            <a
              href={CLINIC.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2.5 block text-center text-xs font-medium text-navy underline-offset-2 hover:underline"
            >
              {s.whatsappCta} — {CLINIC.phoneDisplay}
            </a>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={s.open}
        className="fixed bottom-5 right-5 z-50 rounded-full shadow-xl shadow-navy/40 ring-1 ring-black/10 transition-transform hover:scale-105"
      >
        {open ? (
          <span className="flex size-14 items-center justify-center rounded-full bg-navy text-navy-foreground">
            <X className="size-6" />
          </span>
        ) : (
          <img src="/images/chat-icon.png" alt="" className="block size-14 rounded-full object-cover" />
        )}
      </button>
    </>
  )
}
