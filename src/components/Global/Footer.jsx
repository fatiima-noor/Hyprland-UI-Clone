import { MessageCircle, Github, Rss, GitBranch } from 'lucide-react';

function Footer() {
  const team = [
    ['Fufexan', 'Supporting Developer', 'cyan', 'https://github.com/fufexan'],
    ['NotAShelf', 'Community Manager', 'teal', 'https://github.com/NotAShelf'],
    ['VDawg', 'Webdesign and dev', 'emerald', 'https://github.com/vdawg-git'],
  ];

  const createRole = (role, color) => (
    <span className={`text-${color}-500`}>
      <span className={`text-${color}-600`}>[ </span>
      {role}
      <span className={`text-${color}-600`}> ]</span>
    </span>
  );

  const discordLink = 'https://discord.com/invite/hypeland'; // Placeholder
  const forgejoLink = 'https://forgejo.org'; // Placeholder

  return (
    <>
      <footer className="footer-container max-w-screen relative mt-16 flex items-center justify-center border-t border-blue-400/50 bg-black/50 md:mt-24 lg:mt-32">
        <div className="footer-inner flex max-w-screen-xl flex-wrap items-start justify-between gap-12 px-8 py-14 text-slate-300">
          <div className="flex grow flex-col gap-4">
            <div className="footer-pretitle text-sm font-bold uppercase text-slate-400">Humans</div>
            <ul className="flex flex-col gap-3 font-medium">
              <li>
                <a href="https://github.com/vaxerski" target="_blank" rel="noopener">
                  Vaxry{' '}
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                    [ Lead Developer ]
                  </span>
                </a>
              </li>
              {team.map(([name, role, color, href]) => (
                <li key={name}>
                  <a href={href} target="_blank" rel="noopener">
                    {name} {createRole(role, color)}
                  </a>
                </li>
              ))}
              <li>
                <a href="https://github.com/hyprwm/Hyprland/graphs/contributors" target="_blank" rel="noopener">
                  and our <span className="text-indigo-500">fellow contributors</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <div className="footer-pretitle text-sm font-bold uppercase text-slate-400">Links</div>
            <ul className="flex flex-col gap-3 font-medium">
              <li>
                <a href="https://wiki.hypr.land/" target="_blank" rel="noopener">
                  Wiki
                </a>
              </li>
              <li>
                <a href="https://wiki.hypr.land/Getting-Started/Master-Tutorial/" target="_blank" rel="noopener">
                  Get started
                </a>
              </li>
              <li>
                <a href="/hall_of_fame">Hall of fame</a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <div className="footer-pretitle text-sm font-bold uppercase text-slate-400">Socials</div>
            <ul className="flex grid-cols-2 gap-6 gap-y-3 md:grid">
              <li>
                <a
                  href={discordLink}
                  className="footer-social-icon text-slate-400 hover:text-slate-200"
                  aria-label="Join us on Discord"
                  target="_blank"
                  rel="noopener"
                >
                  <MessageCircle className="h-12 w-12" fill="currentColor" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/hyprwm/Hyprland"
                  className="footer-social-icon text-slate-400 hover:text-slate-200"
                  aria-label="Go to our Github"
                  target="_blank"
                  rel="noopener"
                >
                  <Github className="h-12 w-12" fill="currentColor" />
                </a>
              </li>
              <li>
                <a
                  href="/rss.xml"
                  className="footer-social-icon text-slate-400 hover:text-slate-200"
                  aria-label="RSS Feed"
                  target="_blank"
                  rel="noopener"
                >
                  <Rss className="h-12 w-12" fill="currentColor" />
                </a>
              </li>
              <li>
                <a
                  href={forgejoLink}
                  className="footer-social-icon text-slate-400 hover:text-slate-200"
                  aria-label="Hyprland git instance"
                  target="_blank"
                  rel="noopener"
                >
                  <GitBranch className="h-12 w-12" fill="currentColor" />
                </a>
              </li>
            </ul>
          </div>

          <div className="flex w-full flex-wrap gap-4 text-sm font-medium text-slate-400">
            <p>Hyprland is licensed under the BSD 3-Clause "New" or "Revised" License.</p>
            <p>© Hyprland Development {new Date().getFullYear()}.</p>
            <p>Stay hydrated</p>
          </div>
        </div>

        <div className="footer-gradient" aria-hidden="true" />
      </footer>

      <style>{`
        .footer-container {
          /* Tailwind classes handle base styling */
        }

        .footer-inner {
          /* Matches @apply flex max-w-screen-xl flex-wrap items-start justify-between gap-12 px-8 py-14 text-slate-300 */
          display: flex;
          max-width: 1280px;
          flex-wrap: wrap;
          align-items: flex-start;
          justify-content: space-between;
          gap: 3rem;
          padding: 3.5rem 2rem;
          color: #cbd5e1; /* slate-300 */
        }

        .footer-pretitle {
          /* Matches @apply text-sm font-bold uppercase text-slate-400 */
          font-size: 0.875rem;
          line-height: 1.25rem;
          font-weight: 700;
          text-transform: uppercase;
          color: #94a3b8; /* slate-400 */
        }

        .footer-inner a:hover {
          filter: brightness(1.5);
        }

        .footer-social-icon {
          display: inline-block;
        }

        .footer-gradient {
          position: absolute;
          bottom: 50px;
          left: 0;
          width: 100%;
          height: 900px;
          z-index: -10;
          mask-image: radial-gradient(105vw 450px at 50% 50%, rgba(0, 0, 0, 1) 80%, transparent);
          background: url('/assets/grain.webp'),
                      radial-gradient(105vw 450px at 50% 50%, rgba(37, 99, 235, 0.8), transparent); /* blue-600/80 */
        }
      `}</style>
    </>
  );
}

export default Footer;