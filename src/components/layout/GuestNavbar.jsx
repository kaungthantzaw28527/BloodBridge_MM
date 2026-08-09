import { useEffect, useRef, useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../common/Button.jsx";

import logoIcon from "../../assets/blood-donation.png";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Find Donors", to: "/donors" },
  { label: "Request Blood", to: "/requests" },
  { label: "About Us", to: "/about" },
];

export default function GuestNavbar() {
  const location = useLocation();
  const linksWrapRef = useRef(null);
  const linkRefs = useRef({});

  const [scrolled, setScrolled] = useState(false);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, visible: false });
  const [hoveredTo, setHoveredTo] = useState(null);

  // dragging state for the mobile swipeable tab strip
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: false });
  const [isDragging, setIsDragging] = useState(false);

  const activeTo = hoveredTo ?? location.pathname;

  /* ---- glass pill position, follows active/hovered tab ---- */
  const movePill = useCallback(() => {
    const el = linkRefs.current[activeTo];
    const wrap = linksWrapRef.current;
    if (!el || !wrap) return;
    const elRect = el.getBoundingClientRect();
    const wrapRect = wrap.getBoundingClientRect();
    setPillStyle({
      left: elRect.left - wrapRect.left + wrap.scrollLeft,
      width: elRect.width,
      visible: true,
    });
  }, [activeTo]);

  useEffect(() => {
    movePill();
    window.addEventListener("resize", movePill);
    return () => window.removeEventListener("resize", movePill);
  }, [movePill]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---- drag-to-scroll for the compact mobile tab strip ---- */
  const onPointerDown = (e) => {
    const wrap = linksWrapRef.current;
    if (!wrap) return;
    drag.current = {
      active: true,
      startX: e.clientX,
      startScroll: wrap.scrollLeft,
      moved: false,
    };
    setIsDragging(true);
  };

  const onPointerMove = (e) => {
    if (!drag.current.active) return;
    const wrap = linksWrapRef.current;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 4) drag.current.moved = true;
    wrap.scrollLeft = drag.current.startScroll - dx;
  };

  const endDrag = () => {
    drag.current.active = false;
    setIsDragging(false);
  };

  // suppress the click that follows a real drag, so it doesn't navigate accidentally
  const onLinkClickCapture = (e) => {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <nav className={`bb-navbar ${scrolled ? "is-scrolled" : ""}`}>
      <div className="bb-navbar-inner">
        <Link to="/" className="bb-brand">
          <img 
            src={logoIcon} 
            alt="BloodBridge Logo" 
            style={{ 
              width: "28px", 
              height: "28px", 
              objectFit: "contain" 
            }} 
          />
          <span>
            BloodBridge<span className="suffix">_MM</span>
          </span>
        </Link>

        <div
          className={`bb-nav-links ${isDragging ? "is-dragging" : ""}`}
          ref={linksWrapRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          onMouseLeave={() => setHoveredTo(null)}
        >
          <span
            className={`bb-glass-pill ${pillStyle.visible ? "is-visible" : ""}`}
            style={{ left: pillStyle.left, width: pillStyle.width }}
          />
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              ref={(node) => (linkRefs.current[link.to] = node)}
              className={`bb-nav-link ${location.pathname === link.to ? "active" : ""}`}
              onMouseEnter={() => setHoveredTo(link.to)}
              onClickCapture={onLinkClickCapture}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="bb-auth-actions">
          <Button to="/login" variant="outline">
            <span>Log In</span>
          </Button>
          <Button to="/signup" variant="primary">
            Become a Donor
          </Button>
        </div>
      </div>
    </nav>
  );
}