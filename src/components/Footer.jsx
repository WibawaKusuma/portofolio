function Footer() {
  return (
    <footer className="section-shell pb-8 pt-2">
      <div className="flex flex-col gap-4 rounded-[28px] border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-5 shadow-[var(--shadow-soft)] backdrop-blur-xl md:flex-row md:items-center md:justify-between md:px-6">
        <p className="text-sm text-[var(--color-text-muted)]">
          © 2026 Wibawa. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
