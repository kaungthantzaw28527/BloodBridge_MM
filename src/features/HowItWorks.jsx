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

export default function HowItWorks() {
  return (
    <section className="section">
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
  );
}
