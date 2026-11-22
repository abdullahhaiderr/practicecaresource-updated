import { Facebook, Instagram, Linkedin } from "lucide-react";

const socialPlatforms = [
  { name: "LinkedIn", Icon: Linkedin },
  { name: "Instagram", Icon: Instagram },
  { name: "Facebook", Icon: Facebook },
];

type SocialIconsProps = {
  compact?: boolean;
};

export function SocialIcons({ compact = false }: SocialIconsProps) {
  return (
    <div className="flex items-center gap-2.5" role="group" aria-label="Social media profiles">
      {socialPlatforms.map(({ name, Icon }) => (
        <span
          key={name}
          role="img"
          aria-label={name}
          title={name}
          className={`social-icon grid ${compact ? "size-9" : "size-10"} place-items-center rounded-full border border-brand-border bg-brand-background text-brand-accent-ink shadow-sm`}
        >
          <Icon size={compact ? 17 : 18} strokeWidth={1.8} aria-hidden="true" />
        </span>
      ))}
    </div>
  );
}
