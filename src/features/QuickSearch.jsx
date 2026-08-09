import { useRef, useState } from "react";
import Button from "../components/common/Button.jsx";
import Select from "../components/common/Select.jsx";

// PNG Assets Import
import bloodA from "../assets/blood-a.png";
import bloodB from "../assets/blood-b.png";
import bloodAB from "../assets/blood-ab.png";

const BLOOD_GROUPS = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const STEPS = [
  {
    n: "01",
    icon: "bi-clipboard-check",
    title: "Submit Request",
    desc: "Fill in patient details, blood type needed, hospital name, and upload verification documents.",
  },
  {
    n: "02",
    icon: "bi-search",
    title: "Verification",
    desc: "Our team verifies hospital proof and medical documents within minutes for authenticity.",
  },
  {
    n: "03",
    icon: "bi-people-fill",
    title: "Connect Donors",
    desc: "Verified donors in matching townships receive instant alerts and can respond immediately.",
  },
];

const STATS = [
  { value: "12,400+", label: "Registered Donors" },
  { value: "3,200+", label: "Lives Saved" },
  { value: "330+", label: "Partner Hospitals" },
  { value: "< 4 min", label: "Avg. Match Time" },
];

/**
 * Image-based 3D Tilt Drop Component
 */
function Drop3D({ imgSrc, alt, size = "small" }) {
  const tiltRef = useRef(null);

  const handleMove = (e) => {
    const el = tiltRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    const rotateY = px * 30;
    const rotateX = py * -30;
    el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.06)`;
  };

  const handleLeave = () => {
    const el = tiltRef.current;
    if (!el) return;
    el.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  const containerWidth = size === "large" ? "250px" : "150px";

  return (
    <div
      style={{
        perspective: "1000px",
        display: "inline-block",
        width: containerWidth,
        cursor: "pointer",
        userSelect: "none"
      }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div
        ref={tiltRef}
        style={{
          transition: "transform 0.1s ease-out",
          transformStyle: "preserve-3d"
        }}
      >
        <img
          src={imgSrc}
          alt={alt}
          style={{
            width: "100%",
            height: "auto",
            objectFit: "contain",
            filter: "drop-shadow(0 10px 20px rgba(220, 38, 38, 0.45))"
          }}
        />
      </div>
    </div>
  );
}

export default function QuickSearch() {
  const [bloodGroup, setBloodGroup] = useState("");
  const [township, setTownship] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {/* ----------------- TOP SECTION: 3D HERO & SEARCH ----------------- */}
      <section className="section pt-0">
        <div className="container text-center">
          
          {/* Blood Drops Display Area */}
          <div className="d-flex align-items-center justify-content-center gap-3 gap-md-4 mb-4 mt-2">
            <Drop3D imgSrc={bloodA} alt="A- Blood" size="small" />
            <Drop3D imgSrc={bloodAB} alt="AB+ Blood" size="large" />
            <Drop3D imgSrc={bloodB} alt="B+ Blood" size="small" />
          </div>

          {/* Live Count Indicator */}
          <div className="bb-live-count mb-4 d-inline-flex align-items-center justify-content-center gap-2">
            <span className="dot-green" />
            <span>1,240 donors available now</span>
            <span className="dot-red" />
          </div>

          {/* Search Form */}
          <form
            className="bb-search-panel mx-auto mb-5"
            style={{ maxWidth: 760 }}
            onSubmit={handleSearch}
          >
            <div className="text-center mb-3">
              <span
                className="text-uppercase"
                style={{ color: "var(--red)", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.08em" }}
              >
                Quick Donor Search
              </span>
            </div>
            <div className="row g-2">
              <div className="col-12 col-md-4">
                <Select
                  value={bloodGroup}
                  onChange={setBloodGroup}
                  options={BLOOD_GROUPS}
                  placeholder="Blood Group"
                />
              </div>
              <div className="col-12 col-md-5">
                <input
                  type="text"
                  className="bb-form-control form-control w-100"
                  placeholder="Township / City"
                  value={township}
                  onChange={(e) => setTownship(e.target.value)}
                />
              </div>
              <div className="col-12 col-md-3">
                <Button type="submit" variant="primary" className="w-100 justify-content-center d-flex">
                  Search Donors
                </Button>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* ----------------- BOTTOM SECTION: HOW IT WORKS & STATS ----------------- */}
      <section className="section pt-0">
        <div className="container">
          <div className="text-center mb-5">
            <h2 style={{ fontSize: "1.9rem" }}>How BloodBridge Works</h2>
            <p className="text-muted-soft mb-0">Three steps from request to life-saving connection</p>
          </div>

          <div className="row g-3 mb-4">
            {STEPS.map((s) => (
              <div className="col-12 col-md-4" key={s.n}>
                <div className="bb-card h-100 position-relative overflow-hidden">
                  <span
                    className="position-absolute"
                    style={{ top: 4, right: 16, fontSize: "3.4rem", fontWeight: 700, color: "rgba(255,255,255,0.04)" }}
                  >
                    {s.n}
                  </span>
                  <div className="fs-3 mb-3">
                    <i className={`bi ${s.icon}`} style={{ color: "var(--red)" }} />
                  </div>
                  <span
                    className="d-block mb-2"
                    style={{ color: "var(--red)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em" }}
                  >
                    STEP {s.n}
                  </span>
                  <h5 className="mb-2">{s.title}</h5>
                  <p className="text-muted-soft mb-0" style={{ fontSize: "0.92rem" }}>
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bb-card">
            <div className="row text-center g-4">
              {STATS.map((s) => (
                <div className="col-6 col-md-3" key={s.label}>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.9rem", color: "var(--red)" }}>
                    {s.value}
                  </div>
                  <div className="text-muted-soft" style={{ fontSize: "0.85rem" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}