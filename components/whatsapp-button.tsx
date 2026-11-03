'use client'

import { useLanguage } from '@/lib/language-context'
import { CLINIC } from '@/lib/translations'
import { WhatsAppIcon } from '@/components/whatsapp-icon'

export function WhatsAppButton() {
  const { t } = useLanguage()

  return (
    <a
      href={CLINIC.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 left-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3.5 text-white shadow-xl shadow-black/20 transition-transform hover:scale-105"
      aria-label={`${t.hero.whatsapp} — ${CLINIC.phoneDisplay}`}
    >
      <WhatsAppIcon className="size-6" />
      <span className="hidden text-sm font-semibold sm:inline">{t.hero.whatsapp}</span>
    </a>
  )
}
