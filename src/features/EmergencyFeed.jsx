const REQUESTS = [
  { type: "O-", status: "urgent", name: "Mg Aung Ko", hospital: "Yangon General Hospital", area: "Dagon Myothit", units: 3, time: "12 min ago" },
  { type: "AB+", status: "urgent", name: "Ma Hnin Wai", hospital: "Mandalay Children Hospital", area: "Chan Aye Thar Zan", units: 2, time: "34 min ago" },
  { type: "B+", status: "needed", name: "Ko Zaw Lin", hospital: "North Okkalapa Hospital", area: "North Okkalapa", units: 1, time: "1 hr ago" },
  { type: "A-", status: "urgent", name: "Daw Khin May", hospital: "Thingangyun Sat Thit Hospital", area: "Thingangyun", units: 4, time: "2 min ago" },
  { type: "O+", status: "needed", name: "Mg Pyae Sone", hospital: "Insein General Hospital", area: "Insein", units: 2, time: "48 min ago" },
  { type: "B-", status: "urgent", name: "Ma Su Su Myat", hospital: "Bago District Hospital", area: "Bago", units: 1, time: "1.5 hrs ago" },
];

export default function EmergencyFeed() {
  return (
    <section className="section">
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between align-items-end gap-3 mb-4">
          <div>
            <h2 className="mb-2" style={{ fontSize: "1.9rem" }}>
              Emergency Requests
            </h2>
            <p className="text-muted-soft mb-0">Real-time verified blood needs across Myanmar</p>
          </div>
          <span className="bb-badge-urgent" style={{ color: "#ff8b8e" }}>
            <span className="bb-live-dot" /> {REQUESTS.length} Active
          </span>
        </div>

        <div className="row g-3">
          {REQUESTS.map((r) => (
            <div className="col-12 col-md-6 col-lg-4" key={r.name}>
              <div className="bb-card h-100 d-flex flex-column">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="bb-badge-type">{r.type}</span>
                  {r.status === "urgent" ? (
                    <span className="bb-badge-urgent">
                      <span className="bb-live-dot" /> URGENT
                    </span>
                  ) : (
                    <span className="bb-badge-needed">NEEDED</span>
                  )}
                </div>

                <h5 className="mb-1">{r.name}</h5>
                <p className="text-muted-soft mb-0" style={{ fontSize: "0.9rem" }}>
                  {r.hospital}
                </p>
                <p className="text-muted-soft mb-3" style={{ fontSize: "0.85rem" }}>
                  <i className="bi bi-geo-alt me-1" />
                  {r.area}
                </p>

                <div className="d-flex justify-content-between align-items-center mb-3 mt-auto">
                  <span style={{ color: "var(--red)", fontSize: "0.85rem" }}>
                    <i className="bi bi-droplet-fill me-1" />
                    {r.units} units needed
                  </span>
                  <span className="text-muted-soft" style={{ fontSize: "0.8rem" }}>
                    {r.time}
                  </span>
                </div>

                <button className="btn-bb-ghost w-100 py-2">View Details →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
