<script lang="ts">
  /**
   * ThemeToggle — Svelte 5 island component.
   *
   * Toggles `data-theme="dark" | "light"` on <html>, prefers 'dark'/'light'
   * from localStorage on subsequent visits and falls back to the OS
   * `prefers-color-scheme` on first visit. Designed to be hydrated with
   * `client:visible` in Astro.
   */

  type Theme = 'dark' | 'light';

  const STORAGE_KEY = 'theme';

  function initialTheme(): Theme {
    if (typeof window === 'undefined') return 'dark';
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia('(prefers-color-scheme: light)').matches
      ? 'light'
      : 'dark';
  }

  /** Current theme; derived from media query before the first user interaction. */
  let prefersLight = $state(
    typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: light)').matches,
  );
  let userChoice = $state<Theme | null>(null);

  let theme: Theme = $derived(userChoice ?? (prefersLight ? 'light' : 'dark'));

  // Keep the media-query fallback alive while no explicit choice is stored.
  $effect(() => {
    if (userChoice !== null) return;
    const mq = window.matchMedia('(prefers-color-scheme: light)');
    const onChange = (e: MediaQueryListEvent) => (prefersLight = e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  });

  // Single source of truth sync: <html data-theme> + localStorage.
  $effect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    if (userChoice !== null) {
      window.localStorage.setItem(STORAGE_KEY, userChoice);
    }
  });

  function toggle(): void {
    userChoice = theme === 'dark' ? 'light' : 'dark';
  }

  // Apply the computed theme on the server-rendered document too, so a static
  // first paint is not stuck on the default.
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-theme', initialTheme());
  }

  const nextLabel = $derived(theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
</script>

<button
  type="button"
  class="theme-toggle"
  aria-label={nextLabel}
  title={nextLabel}
  onclick={toggle}
>
  {#if theme === 'dark'}
    <!-- Sun: "go light" -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4.5" />
      <path
        d="M12 1.5v3M12 19.5v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M1.5 12h3M19.5 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"
      />
    </svg>
  {:else}
    <!-- Moon: "go dark" -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z" />
    </svg>
  {/if}
</button>

<style>
  .theme-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    padding: 0;
    background: var(--bg-elevated);
    color: var(--fg);
    border: 1px solid var(--border-strong);
    border-radius: var(--radius-sm);
    transition:
      border-color var(--transition-fast, 150ms ease),
      color var(--transition-fast, 150ms ease),
      background-color var(--transition-fast, 150ms ease);
  }

  .theme-toggle:hover {
    border-color: var(--accent);
    color: var(--accent);
  }

  .theme-toggle:active {
    background: var(--bg);
  }

  .theme-toggle:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    .theme-toggle,
    .theme-toggle svg {
      transition: none;
      animation: none;
    }
  }
</style>
