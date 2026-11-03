import type { ReactNode } from 'react'

// Consistent custom inline-SVG service icons: one shared molar outline,
// 2px stroke on a 24 viewBox, rounded caps and joins, single ink color
// (currentColor, so the tile's navy text color applies).

const toothPath =
  'M7 3.5 C5 3.5 3.2 4.6 3.2 7 C3.2 9.5 4 12 4.6 15.2 C5.1 18 5.8 20.5 7.4 20.5 C9 20.5 9.4 17.8 10.4 16.4 C11 15.5 13 15.5 13.6 16.4 C14.6 17.8 15 20.5 16.6 20.5 C18.2 20.5 18.9 18 19.4 15.2 C20 12 20.8 9.5 20.8 7 C20.8 4.6 19 3.5 17 3.5 C15.4 3.5 14.3 4.6 12 4.6 C9.7 4.6 8.6 3.5 7 3.5 Z'

type IconProps = {
  className?: string
}

function IconShell({ className, children }: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

// Implants dentaires: a tooth crown sitting on a threaded screw post.
export function ImplantIcon({ className }: IconProps) {
  return (
    <IconShell className={className}>
      <path d="M5.5 4 C5.5 3 7 2.5 8.5 2.5 C10 2.5 10.8 3.5 12 3.5 C13.2 3.5 14 2.5 15.5 2.5 C17 2.5 18.5 3 18.5 4 L18.5 6.5 C18.5 8.5 17 10 15 10.8 C13.5 11.4 10.5 11.4 9 10.8 C7 10 5.5 8.5 5.5 6.5 Z" />
      <path d="M9.5 12.5 H14.5 L13.2 20.5 Q12 21.5 10.8 20.5 Z" />
      <path d="M10.2 15.5 H13.8" />
      <path d="M10.6 18 H13.4" />
    </IconShell>
  )
}

// Orthodontie: a tooth with a braces wire and three bracket squares.
export function BracesIcon({ className }: IconProps) {
  return (
    <IconShell className={className}>
      <path d={toothPath} />
      <path d="M2.5 10 H21.5" />
      <rect x="6" y="8.5" width="2.5" height="3" rx="0.5" fill="currentColor" stroke="none" />
      <rect x="10.75" y="8.5" width="2.5" height="3" rx="0.5" fill="currentColor" stroke="none" />
      <rect x="15.5" y="8.5" width="2.5" height="3" rx="0.5" fill="currentColor" stroke="none" />
    </IconShell>
  )
}

// Blanchiment dentaire: a tooth with two sparkle stars at its upper corner.
export function WhiteningIcon({ className }: IconProps) {
  return (
    <IconShell className={className}>
      <path d={toothPath} />
      <path d="M18.5 2 L19 3.8 L20.8 4.3 L19 4.8 L18.5 6.6 L18 4.8 L16.2 4.3 L18 3.8 Z" fill="currentColor" stroke="none" />
      <path d="M15 1.5 L15.4 2.6 L16.5 3 L15.4 3.4 L15 4.5 L14.6 3.4 L13.5 3 L14.6 2.6 Z" fill="currentColor" stroke="none" />
    </IconShell>
  )
}

// Prothèses et couronnes: a molar topped with a crown cap band.
export function CrownIcon({ className }: IconProps) {
  return (
    <IconShell className={className}>
      <path d={toothPath} />
      <path d="M4.5 8.5 C4.5 5 6.5 3 8.5 3 C10 3 10.8 3.8 12 3.8 C13.2 3.8 14 3 15.5 3 C17.5 3 19.5 5 19.5 8.5 C19.5 9.8 18.8 10.4 17.5 10.6 C15.5 11 8.5 11 6.5 10.6 C5.2 10.4 4.5 9.8 4.5 8.5 Z" />
    </IconShell>
  )
}

// Soins conservateurs: a tooth centered inside a shield outline.
export function ShieldIcon({ className }: IconProps) {
  return (
    <IconShell className={className}>
      <path d="M12 2.5 L20 5.5 V11 C20 16.5 16.5 20 12 21.5 C7.5 20 4 16.5 4 11 V5.5 Z" />
      <path d={toothPath} transform="translate(12 12) scale(0.55) translate(-12 -12)" strokeWidth={3.6} />
    </IconShell>
  )
}

// Chirurgie et urgences: a tooth with a medical cross badge at its lower corner.
export function EmergencyIcon({ className }: IconProps) {
  return (
    <IconShell className={className}>
      <path d={toothPath} />
      <circle cx="17.5" cy="17.5" r="4.5" fill="currentColor" stroke="none" />
      <path d="M17.5 15.2 V19.8 M15.2 17.5 H19.8" stroke="white" />
    </IconShell>
  )
}
