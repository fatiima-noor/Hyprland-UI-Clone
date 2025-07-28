import HyprlandLogo from '../../assets/HyprlandLogo.png';

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between rounded-full px-6 pt-2 text-sm duration-1000 animate-in fade-in-0 slide-in-from-top-1">
      <a
        href="/"
        className="flex items-center gap-4 rounded-full bg-black/50 px-4 py-2 font-bold tracking-wider text-white backdrop-blur"
      >
        <img src={HyprlandLogo} alt="Hyprland Logo" className="h-8 w-6 object-contain" />
      </a>

      <button
        className="z-50 rounded-full bg-black/50 p-2 backdrop-blur lg:hidden"
        aria-label="Open Navigation"
      >
        <svg className="h-6 w-6 text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      <nav className="nav">
        <ul className="flex flex-col items-center gap-5 rounded-full lg:h-full lg:max-h-full lg:flex-row">
          <li>
            <a href="https://wiki.hypr.land/Getting-Started/Master-Tutorial/" rel="noopener" target="_blank">
              Get started
            </a>
          </li>
          <li>
            <a href="https://wiki.hypr.land">Wiki</a>
          </li>
          <li>
            <a href="https://forum.hypr.land">Forums</a>
          </li>
          <li>
            <a href="https://account.hypr.land">Account</a>
          </li>
          <li>
            <a href="/hall_of_fame">Hall of fame</a>
          </li>
          <li>
            <a href="/news">News</a>
          </li>
          <li>
            <a href="/plugins">Plugins</a>
          </li>
        </ul>
        <ul className="flex flex-row items-center gap-3 px-4">
          <li>
            <a
              href="https://discord.com/invite/hypeland"
              className="social-icon"
              aria-label="Join us on Discord"
              target="_blank"
            >
              <svg className="h-full w-full" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.078.037c-.211.375-.444.864-.608 1.249a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.078-.036 19.736 19.736 0 0 0-4.885 1.515.069.069 0 0 0-.032.027C.533 9.045-.319 13.579.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.017 0 0 0-.019-.007c.875-.65 1.619-1.348 2.224-2.042a.071.071 0 0 0 .01-.094 11.683 11.683 0 0 1-.937-.908.075.075 0 0 0-.078-.01c-.343.258-.69.508-1.046.753a.075.075 0 0 0-.029.069c-.085.672-.258 1.32-.486 1.937a.073.073 0 0 0 .013.08c.355.698.767 1.363 1.229 1.994a.076.076 0 0 0 .084.028 19.982 19.982 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.673-3.548-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.182 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.2 0 2.175 1.084 2.156 2.418 0 1.333-.956 2.419-2.156 2.419zm7.974 0c-1.182 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.2 0 2.175 1.084 2.156 2.418 0 1.333-.956 2.419-2.156 2.419z" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/hyprwm/Hyprland"
              className="social-icon"
              aria-label="Go to Hyprlands Github"
              target="_blank"
            >
              <svg className="h-full w-full" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://forgejo.org"
              className="social-icon"
              aria-label="Hyprland git instance"
              target="_blank"
            >
              <svg className="h-full w-full" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm3-9h-2v-2h-2v2H9v2h2v2h2v-2h2v-2z" />
              </svg>
            </a>
          </li>
        </ul>
        <ul className="flex gap-4">
          <li>
            <a
              className="rounded-full px-4 py-2 outline outline-cyan-500 hover:outline-cyan-200"
              href="/support"
            >
              Donate
            </a>
          </li>
          <li>
            <a
              className="rounded-full bg-cyan-300 px-4 py-2 uppercase tracking-wide text-black hover:bg-cyan-200"
              href="https://wiki.hypr.land/Getting-Started/Installation/"
              target="_blank"
              aria-label="Install Hyprland"
            >
              Install
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;