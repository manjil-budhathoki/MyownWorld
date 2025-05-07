import CV from "../assets/ManjilBudhathoki.pdf";

export default function LinksSection() {
  const links = [
    { label: "X", value: "Manjil697127", href: "https://x.com/Manjil697127" },
    { label: "GitHub", value: "manjil-budhathoki", href: "https://github.com/manjil-budhathoki" },
    { label: "LinkedIn", value: "manjil-budhathoki", href: "https://www.linkedin.com/in/manjil-budhathoki/" },
    { label: "Layers.to", value: "cretu", href: "#" },
    { label: "Email", value: "buildwithmanjil", href: "mailto:buildwithmanjil@gmail.com" },
    { label: "CV", value: "manjil", href: CV },
  ];

  return (
    <div className="mb-12">
      <h3 className="text-sm text-zinc-400 mb-2">Links</h3>
      <div className="grid grid-cols-3 gap-6 text-[16px]">
        {links.map((link, idx) => (
          <div key={idx} className="space-y-0.5">
            <p className="text-zinc-400 text-[13px]">{link.label}</p>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-white hover:underline"
            >
              {link.value}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 13V6a1 1 0 0 0-1-1h-7" />
                <polyline points="15 6 18 6 18 9" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
