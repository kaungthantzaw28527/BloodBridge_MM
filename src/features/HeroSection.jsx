import Button from "../components/common/Button.jsx";

export default function HeroSection() {
  return (
    <section className="bb-hero">
      <div className="container">
        <div className="bb-live-badge mb-4">
          <span className="bb-live-dot" />
          Live Emergency Feed Active
        </div>

        <h1 className="mb-4">
          Connecting
          <br />
          <span className="accent">Life-Saving Donors</span>
          <br />
          with Emergency Need in Seconds
        </h1>

        <p
          className="text-muted-soft mx-auto mb-5"
          style={{ maxWidth: 640, fontSize: "1.05rem", lineHeight: 1.7 }}
        >
          BloodBridge_MM is Myanmar's fastest blood donor matching platform — verified
          donors, real-time emergencies, instant connections.
        </p>

        <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
          <Button to="/requests" variant="primary" icon="bi-droplet-fill">
            Urgent Blood Request
          </Button>
          <Button to="/signup" variant="ghost">
            Become a Donor →
          </Button>
        </div>
      </div>
    </section>
  );
}
