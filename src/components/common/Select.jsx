import { useEffect, useRef, useState } from "react";

/**
 * Fully custom dropdown so the popup is styled by us (dark theme),
 * instead of relying on the browser/OS's native <select> menu.
 * options: array of strings, or { label, value }
 */
export default function Select({ value, onChange, options, placeholder = "Select", className = "" }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  const normalized = options.map((o) => (typeof o === "string" ? { label: o, value: o } : o));
  const current = normalized.find((o) => o.value === value);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div className={`bb-select ${open ? "is-open" : ""} ${className}`} ref={wrapRef}>
      <button
        type="button"
        className="bb-select-trigger bb-form-control"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className={current ? "" : "bb-select-placeholder"}>{current ? current.label : placeholder}</span>
        <i className={`bi bi-chevron-down bb-select-chevron ${open ? "is-flipped" : ""}`} />
      </button>

      {open && (
        <ul className="bb-select-menu" role="listbox">
          {normalized.map((opt) => (
            <li
              key={opt.value}
              role="option"
              aria-selected={opt.value === value}
              className={`bb-select-option ${opt.value === value ? "is-selected" : ""}`}
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
