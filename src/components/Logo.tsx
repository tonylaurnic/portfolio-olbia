export default function Logo({ className = "", size = 36 }: { className?: string; size?: number }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* SVG Q mark */}
      <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="logoGrad" x1="0" y1="0" x2="160" y2="160" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00e5ff" />
            <stop offset="40%" stopColor="#0072ff" />
            <stop offset="100%" stopColor="#003ab0" />
          </linearGradient>
        </defs>
        <circle cx="72" cy="72" r="52" stroke="url(#logoGrad)" strokeWidth="16" fill="none" strokeLinecap="round" />
        <path d="M50 90 Q65 76 80 86 Q93 95 108 82" stroke="url(#logoGrad)" strokeWidth="10" strokeLinecap="round" fill="none" />
        <line x1="108" y1="108" x2="148" y2="148" stroke="url(#logoGrad)" strokeWidth="16" strokeLinecap="round" />
      </svg>

      {/* Text */}
      <span className="font-extrabold tracking-tight leading-none" style={{ fontSize: size * 0.55 }}>
        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Qui.Site</span>
        <span className="text-white">App</span>
      </span>
    </div>
  );
}

export function LogoScrolled({ size = 36 }: { size?: number }) {
  return (
    <div className="flex items-center gap-2">
      <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="logoGrad2" x1="0" y1="0" x2="160" y2="160" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00c6ff" />
            <stop offset="40%" stopColor="#0072ff" />
            <stop offset="100%" stopColor="#003ab0" />
          </linearGradient>
        </defs>
        <circle cx="72" cy="72" r="52" stroke="url(#logoGrad2)" strokeWidth="16" fill="none" strokeLinecap="round" />
        <path d="M50 90 Q65 76 80 86 Q93 95 108 82" stroke="url(#logoGrad2)" strokeWidth="10" strokeLinecap="round" fill="none" />
        <line x1="108" y1="108" x2="148" y2="148" stroke="url(#logoGrad2)" strokeWidth="16" strokeLinecap="round" />
      </svg>
      <span className="font-extrabold tracking-tight leading-none" style={{ fontSize: size * 0.55 }}>
        <span className="text-blue-600">Qui.Site</span>
        <span className="text-gray-900">App</span>
      </span>
    </div>
  );
}
