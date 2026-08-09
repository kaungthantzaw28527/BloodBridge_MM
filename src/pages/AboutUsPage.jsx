import Button from "../components/common/Button.jsx";

const RULES = [
  { icon: "bi-file-earmark-medical", title: "Medical Verification", desc: "Every blood request must include a valid hospital document or doctor's prescription before going live." },
  { icon: "bi-shield-lock-fill", title: "Privacy Protection", desc: "Donor contact details are never shared publicly. Connections happen only through our secure verified channel." },
  { icon: "bi-clock-history", title: "Eligibility Standards", desc: "Donors must be 18–65 years old, weigh at least 50 kg, and have a minimum 3-month gap between donations." },
  { icon: "bi-patch-check-fill", title: "Zero Tolerance for Fraud", desc: "Fake requests are immediately removed. Repeated violations result in permanent account suspension." },
];

const HOSPITALS = [
  { name: "Yangon General Hospital", city: "Yangon", tag: "Government" },
  { name: "North Okkalapa General Hospital", city: "Yangon", tag: "Government" },
  { name: "Mandalay General Hospital", city: "Mandalay", tag: "Government" },
  { name: "Asia Royal Hospital", city: "Yangon", tag: "Private" },
  { name: "Parami General Hospital", city: "Yangon", tag: "Private" },
  { name: "Bago District Hospital", city: "Bago", tag: "Government" },
];

const TEAM = [
  { initials: "MT", name: "Dr. Myo Thant", role: "Medical Director" },
  { initials: "TK", name: "Ma Thida Kyaw", role: "Operations Lead" },
  { initials: "ZM", name: "Ko Zin Min", role: "Technology Lead" },
  { initials: "SW", name: "Ma Su Wai", role: "Community Manager" },
];

export default function AboutUsPage() {
  return (
    <section className="section">
      <div className="container">
        {/* Mission */}
        <div className="bb-card p-4 p-md-5 mb-5">
          <span style={{ color: "var(--red)", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.08em" }}>
            <i className="bi bi-droplet-fill me-2" />
            OUR MISSION
          </span>
          <h1 className="my-3" style={{ fontSize: "2.4rem" }}>
            Every second counts.
            <br />
            <span className="accent" style={{ color: "var(--red)" }}>
              Every drop matters.
            </span>
          </h1>
          <p className="text-muted-soft mb-3" style={{ maxWidth: 640, lineHeight: 1.8 }}>
            BloodBridge_MM was founded with a single purpose: to eliminate the tragic gap between
            patients who need blood urgently and willing donors who are ready to give. In Myanmar,
            thousands of lives are lost each year because the right blood type cannot be found in time.
          </p>
          <p className="text-muted-soft mb-0" style={{ maxWidth: 640, lineHeight: 1.8 }}>
            We built a platform that is fast, trustworthy, and accessible — one that respects both the
            dignity of patients and the generosity of donors, making life-saving connections possible in
            minutes, not hours.
          </p>
        </div>

        {/* Safety rules */}
        <h2 className="mb-1" style={{ fontSize: "1.7rem" }}>
          Safety &amp; Platform Rules
        </h2>
        <p className="text-muted-soft mb-4">Trust and safety are the foundation of everything we do</p>
        <div className="row g-3 mb-5">
          {RULES.map((r) => (
            <div className="col-12 col-md-6" key={r.title}>
              <div className="bb-card h-100 d-flex gap-3">
                <i className={`bi ${r.icon} fs-4`} style={{ color: "var(--red)" }} />
                <div>
                  <h6 className="mb-1">{r.title}</h6>
                  <p className="text-muted-soft mb-0" style={{ fontSize: "0.88rem" }}>
                    {r.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partner hospitals */}
        <h2 className="mb-4" style={{ fontSize: "1.7rem", color: "var(--red)" }}>
          Partner Hospitals
        </h2>
        <p className="text-muted-soft mb-4" style={{ marginTop: -24 }}>
          Verified healthcare institutions that trust BloodBridge_MM
        </p>
        <div className="row g-3 mb-5">
          {HOSPITALS.map((h) => (
            <div className="col-12 col-md-4" key={h.name}>
              <div className="bb-card h-100 d-flex align-items-center gap-3">
                <i className="bi bi-building fs-4" style={{ color: "var(--red)" }} />
                <div>
                  <div style={{ fontSize: "0.9rem", fontWeight: 600 }}>{h.name}</div>
                  <div className="d-flex align-items-center gap-2 text-muted-soft" style={{ fontSize: "0.78rem" }}>
                    {h.city}
                    <span className="bb-badge-needed" style={{ fontSize: "0.65rem", padding: "2px 8px" }}>
                      {h.tag}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team */}
        <h2 className="mb-4" style={{ fontSize: "1.7rem" }}>
          The Team
        </h2>
        <div className="row g-3 mb-5">
          {TEAM.map((t) => (
            <div className="col-6 col-md-3" key={t.name}>
              <div className="bb-card h-100 text-center">
                <span
                  className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                  style={{ width: 54, height: 54, background: "var(--red)", fontWeight: 700 }}
                >
                  {t.initials}
                </span>
                <div style={{ fontWeight: 600, fontSize: "0.92rem" }}>{t.name}</div>
                <div className="text-muted-soft" style={{ fontSize: "0.8rem" }}>
                  {t.role}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bb-card text-center p-4 p-md-5">
          <h4 className="mb-2">Ready to save a life today?</h4>
          <p className="text-muted-soft mb-4">
            Becoming a verified donor takes under 5 minutes. Your one donation can save up to three lives.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Button to="/signup" variant="primary">
              Register as Donor
            </Button>
            <Button to="/requests" variant="ghost">
              Submit a Request
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
