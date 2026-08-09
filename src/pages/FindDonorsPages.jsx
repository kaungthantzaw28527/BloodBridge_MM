import { useState } from "react";
import Button from "../components/common/Button.jsx";

const BLOOD_TYPES = ["All", "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const DONORS = [
  { initials: "KK", name: "Ko Kyaw Zin Oo", area: "Sanchaung, Yangon", type: "O+", donations: 14, last: "3 months ago", available: true },
  { initials: "MT", name: "Ma Thida Myint", area: "Kamayut, Yangon", type: "A+", donations: 8, last: "4 months ago", available: true },
  { initials: "KZ", name: "Ko Zaw Myo Htut", area: "Mingaladon, Yangon", type: "B+", donations: 22, last: "6 weeks ago", available: false },
  { initials: "DS", name: "Daw Su Su Win", area: "Chan Aye Thar Zan, Mandalay", type: "AB-", donations: 5, last: "5 months ago", available: true },
  { initials: "KA", name: "Ko Aung Naing", area: "Bahan, Yangon", type: "O-", donations: 31, last: "4 months ago", available: true },
  { initials: "MH", name: "Ma Hsu Myat Noe", area: "Mayangon, Yangon", type: "A-", donations: 3, last: "6 months ago", available: true },
  { initials: "KM", name: "Ko Min Zaw", area: "Ahlone, Yangon", type: "B-", donations: 19, last: "5 weeks ago", available: false },
  { initials: "MP", name: "Mg Pyae Phyo", area: "Tharrawaddy, Bago", type: "AB+", donations: 7, last: "3 months ago", available: true },
  { initials: "MK", name: "Ma Khin Sandar", area: "Insein, Yangon", type: "O+", donations: 11, last: "2 months ago", available: true },
];

export default function FindDonorsPage() {
  const [activeType, setActiveType] = useState("All");
  const [location, setLocation] = useState("");
  const [availableOnly, setAvailableOnly] = useState(false);

  const filtered = DONORS.filter((d) => {
    if (activeType !== "All" && d.type !== activeType) return false;
    if (availableOnly && !d.available) return false;
    if (location && !d.area.toLowerCase().includes(location.toLowerCase())) return false;
    return true;
  });

  return (
    <section className="section">
      <div className="container">
        <h1 className="mb-2" style={{ fontSize: "2.2rem" }}>
          Find Blood Donors
        </h1>
        <p className="text-muted-soft mb-4">Browse verified donors across Myanmar — sorted by availability</p>

        <div className="bb-search-panel mb-4">
          <span
            className="d-block mb-3"
            style={{ color: "var(--red)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em" }}
          >
            BLOOD TYPE
          </span>
          <div className="d-flex flex-wrap gap-2 mb-4">
            {BLOOD_TYPES.map((bt) => (
              <button
                key={bt}
                onClick={() => setActiveType(bt)}
                className={activeType === bt ? "btn-bb-primary" : "btn-bb-outline"}
                style={{ padding: "8px 18px", fontSize: "0.85rem" }}
              >
                {bt}
              </button>
            ))}
          </div>

          <div className="row g-3 align-items-end">
            <div className="col-12 col-md-6">
              <span
                className="d-block mb-2"
                style={{ color: "var(--red)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em" }}
              >
                LOCATION
              </span>
              <input
                className="bb-form-control form-control w-100"
                placeholder="Township or City"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="col-12 col-md-6">
              <span
                className="d-block mb-2"
                style={{ color: "var(--red)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em" }}
              >
                AVAILABILITY
              </span>
              <button
                className={availableOnly ? "btn-bb-primary" : "btn-bb-outline"}
                onClick={() => setAvailableOnly((v) => !v)}
                style={{ padding: "10px 18px", fontSize: "0.85rem" }}
              >
                <i className="bi bi-circle-fill me-2" style={{ fontSize: "0.5rem" }} />
                Available Now
              </button>
            </div>
          </div>
        </div>

        <div className="bb-card d-flex flex-wrap justify-content-between align-items-center mb-4 py-3">
          <span className="text-muted-soft">
            <i className="bi bi-lock-fill me-2" style={{ color: "var(--red)" }} />
            Log in to view donor contact details and send connection requests directly.
          </span>
          <Button to="/login" variant="outline">
            Log In
          </Button>
        </div>

        <p className="text-muted-soft mb-3">{filtered.length} donors found</p>

        <div className="row g-3">
          {filtered.map((d) => (
            <div className="col-12 col-md-6 col-lg-4" key={d.name}>
              <div className="bb-card h-100">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div className="d-flex align-items-center gap-2">
                    <span
                      className="d-flex align-items-center justify-content-center rounded-circle"
                      style={{
                        width: 42,
                        height: 42,
                        background: "rgba(255,59,63,0.12)",
                        border: "1px solid var(--panel-border)",
                        fontWeight: 700,
                        fontSize: "0.85rem",
                      }}
                    >
                      {d.initials}
                    </span>
                    <div>
                      <div className="d-flex align-items-center gap-1">
                        <strong style={{ fontSize: "0.95rem" }}>{d.name}</strong>
                        <i className="bi bi-patch-check-fill" style={{ color: "var(--red)", fontSize: "0.8rem" }} />
                      </div>
                      <span className="text-muted-soft" style={{ fontSize: "0.78rem" }}>
                        <i className="bi bi-geo-alt me-1" />
                        {d.area}
                      </span>
                    </div>
                  </div>
                  <span className="bb-badge-type">{d.type}</span>
                </div>

                <p className="text-muted-soft mb-3" style={{ fontSize: "0.82rem" }}>
                  <i className="bi bi-droplet-fill me-1" style={{ color: "var(--red)" }} />
                  {d.donations} donations · Last {d.last}
                </p>

                <div className="d-flex justify-content-between align-items-center">
                  <span
                    className="d-flex align-items-center gap-2"
                    style={{ fontSize: "0.82rem", color: d.available ? "#35d07f" : "var(--text-muted)" }}
                  >
                    <span
                      className="rounded-circle"
                      style={{
                        width: 8,
                        height: 8,
                        background: d.available ? "#35d07f" : "var(--text-muted)",
                      }}
                    />
                    {d.available ? "Available" : "Unavailable"}
                  </span>
                  <button className="btn-bb-ghost" style={{ padding: "7px 16px", fontSize: "0.82rem" }}>
                    Request Contact →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
