"use client";

export default function PrintButton() {
  return (
    <button
      className="print-button"
      type="button"
      onClick={() => window.print()}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M7 8V3h10v5M7 17H4V9h16v8h-3M7 14h10v7H7z" /><path d="M16 11h1" /></svg>
      Print / Save PDF
    </button>
  );
}
