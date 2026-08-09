import { useState } from "react";
import Button from "../components/common/Button.jsx";

const FILTERS = ["All (7)", "Critical", "High", "Moderate"];

const REQUESTS = [
  { type: "O-", name: "Mg Aung Ko", verified: "verified", severity: "Critical", hospital: "Yangon General Hospital", area: "Dagon Myothit", note: "Emergency surgery — traumatic injury", units: 3, time: "12 min ago" },
  { type: "AB+", name: "Ma Hnin Wai", verified: "verified", severity: "High", hospital: "Mandalay Children Hospital", area: "Chan Aye Thar Zan", note: "Pediatric thalassemia transfusion", units: 2, time: "34 min ago" },
  { type: "B+", name: "Ko Zaw Lin", verified: "verified", severity: "Moderate", hospital: "North Okkalapa Hospital", area: "North Okkalapa", note: "Post-operative blood replenishment", units: 1, time: "1 hr ago" },
  { type: "A-", name: "Daw Khin May", verified: "verified", severity: "Critical", hospital: "Thingangyun Sat Thit Hospital", area: "Thingangyun", note: "Obstetric hemorrhage — C-section", units: 4, time: "2 min ago" },
  { type: "O+", name: "Mg Pyae Sone", verified: "verified", severity: "High", hospital: "Insein General Hospital", area: "Insein", note: "Dengue fever — platelet drop", units: 2, time: "48 min ago" },
  { type: "B-", name: "Ma Su Su Myat", verified: "pending", severity: "High", hospital: "Bago District Hospital", area: "Bago", note: "Awaiting verification", units: 1, time: "1.5 hrs ago" },
  { type: "A+", name: "Ko Htet Aung", verified: "verified", severity: "Moderate", hospital: "Mawlamyine General Hospital", area: "Mawlamyine", note: "Chronic anemia — planned infusion", units: 2, time: "3 hrs ago" },
];

const severityClass = { Critical: "bb-badge-urgent", High: "bb-badge-urgent", Moderate: "bb-badge-needed" };

export default function RequestBloodPage() {
  const [filter, setFilter] = useState("All (7)");

  const filtered = filter === "All (7)" ? REQUESTS : REQUESTS.filter((r) => r.severity === filter);

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 900 }}>
        <div className="d-flex flex-wrap justify-content-between align-items-start gap-3 mb-2">
          <div>
            <h1 className="mb-2" style={{ fontSize: "2.2rem" }}>
              Blood Requests
            </h1>
            <p className="text-muted-soft mb-0">Active, verified blood requests across Myanmar — updated in real time</p>
          </div>
          <span className="bb-badge-urgent" style={{ color: "#ff8b8e" }}>
            <span className="bb-live-dot" /> Live updates
          </span>
        </div>

        <div className="d-flex flex-wrap gap-2 my-4">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={filter === f ? "btn-bb-primary" : "btn-bb-outline"}
              style={{ padding: "8px 18px", fontSize: "0.85rem" }}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="d-flex flex-column gap-3">
          {filtered.map((r) => (
            <div className="bb-card" key={r.name}>
              <div className="d-flex flex-wrap justify-content-between gap-3">
                <div className="d-flex gap-3">
                  <span className="bb-badge-type align-self-start">{r.type}</span>
                  <div>
                    <div className="d-flex flex-wrap align-items-center gap-2 mb-1">
                      <strong>{r.name}</strong>
                      {r.verified === "verified" ? (
                        <span style={{ color: "#35d07f", fontSize: "0.78rem" }}>
                          <i className="bi bi-patch-check-fill me-1" />
                          Verified
                        </span>
                      ) : (
                        <span className="bb-badge-needed">Pending Verification</span>
                      )}
                      <span className={severityClass[r.severity]}>{r.severity}</span>
                    </div>
                    <p className="text-muted-soft mb-1" style={{ fontSize: "0.85rem" }}>
                      <i className="bi bi-hospital me-1" />
                      {r.hospital} · <i className="bi bi-geo-alt me-1" />
                      {r.area}
                    </p>
                    <p className="fst-italic text-muted-soft mb-0" style={{ fontSize: "0.82rem" }}>
                      {r.note}
                    </p>
                  </div>
                </div>

                <div className="text-md-end">
                  <div className="text-muted-soft mb-2" style={{ fontSize: "0.78rem" }}>
                    {r.time}
                  </div>
                  <div style={{ color: "var(--red)", fontSize: "0.85rem", fontWeight: 600 }} className="mb-3">
                    <i className="bi bi-droplet-fill me-1" />
                    {r.units} units
                  </div>
                  <button className="btn-bb-ghost" style={{ padding: "8px 18px", fontSize: "0.85rem" }}>
                    Respond →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bb-card text-center mt-4">
          <p className="mb-3">
            <i className="bi bi-droplet-fill me-2" style={{ color: "var(--red)" }} />
            Need to post a blood request? Log in or register to upload hospital proof documents and create a
            verified request.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Button to="/login" variant="outline">
              Log In
            </Button>
            <Button to="/signup" variant="primary">
              Register Free
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
