import { FacebookIcon, InstagramIcon } from '@/components/brand-icons'
const links = [
  { label: 'Facebook', url: 'https://facebook.com/AlgoSmileDr.HazemTahoun', Icon: FacebookIcon },
  { label: 'Instagram', url: 'https://www.instagram.com/drhazemtahoun_algosmileclinic', Icon: InstagramIcon },
]
export function SocialIcons({ className = '', tone = 'light' }: { className?: string; tone?: 'light' | 'dark' }) {
  const linkClass = tone === 'dark' ? 'text-navy-foreground/70 transition-colors hover:bg-navy-foreground/10 hover:text-primary' : 'text-muted-foreground transition-colors hover:bg-primary/10 hover:text-navy'
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {links.map(({ label, url, Icon }) => (
        <a key={label} href={url} target="_blank" rel="noopener noreferrer" aria-label={label} className={`flex size-9 items-center justify-center rounded-full ${linkClass}`}>
          <Icon className="size-4" />
        </a>
      ))}
    </div>
  )
}
