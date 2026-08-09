import { Link } from "react-router-dom";

/**
 * Shared button used across guest pages.
 * variant: "primary" | "ghost" | "outline"
 * If `to` is provided it renders as a router Link, otherwise a <button>.
 */
export default function Button({
  children,
  variant = "primary",
  to,
  href,
  onClick,
  type = "button",
  icon,
  className = "",
  ...rest
}) {
  const variantClass =
    variant === "ghost" ? "btn-bb-ghost" : variant === "outline" ? "btn-bb-outline" : "btn-bb-primary";

  const content = (
    <>
      {icon && <i className={`bi ${icon} me-2`} />}
      {children}
    </>
  );

  const classes = `${variantClass} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...rest}>
      {content}
    </button>
  );
}
