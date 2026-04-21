export function FloatingCall() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href="tel:0913742110"
        aria-label="Gọi ngay"
        className="group flex items-center gap-2 rounded-full bg-[color:var(--brand-orange)] px-4 py-3 font-bold text-white shadow-lg shadow-orange-500/30 hover:bg-[color:var(--brand-orange-dark)]"
      >
        <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
          <span className="absolute inset-0 animate-ping rounded-full bg-white/30" />
          <svg className="relative h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.24 1.02l-2.2 2.2z" />
          </svg>
        </span>
        <span className="hidden sm:inline">0913 742 110</span>
      </a>
      <a
        href="https://zalo.me/0913742110"
        aria-label="Chat Zalo"
        target="_blank"
        rel="noreferrer"
        className="grid h-12 w-12 place-items-center rounded-full bg-[color:var(--brand-green)] text-white shadow-lg hover:bg-[color:var(--brand-green-dark)]"
      >
        <span className="text-sm font-extrabold">Zalo</span>
      </a>
    </div>
  );
}
