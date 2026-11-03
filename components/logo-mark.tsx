export function LogoMark({ className = 'h-10 w-10' }: { variant?: 'light' | 'dark'; className?: string }) {
  return (
    <img
      src="/images/logo-mark-hd.png"
      alt="Algo Smile"
      className={`rounded-[22%] bg-white object-contain ${className}`}
    />
  )
}
