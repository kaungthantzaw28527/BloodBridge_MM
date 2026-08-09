import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bb-footer">
      <div className="container">
        <div className="row gy-4">
          <div className="col-12 col-md-5">
            <Link to="/" className="bb-brand mb-3 d-inline-flex">
              <span className="drop" />
              <span>
                BloodBridge<span className="suffix">_MM</span>
              </span>
            </Link>
            <p className="text-muted-soft mb-0" style={{ maxWidth: 360 }}>
              Connecting blood donors with people who need life-saving help.
            </p>
          </div>

          <div className="col-6 col-md-3">
            <h6 className="mb-3">Platform</h6>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li>
                <Link to="/" className="text-muted-soft">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/donors" className="text-muted-soft">
                  Find Donors
                </Link>
              </li>
              <li>
                <Link to="/requests" className="text-muted-soft">
                  Request Blood
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-4">
            <h6 className="mb-3">Company</h6>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li>
                <Link to="/about" className="text-muted-soft">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-soft">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-4" style={{ borderColor: "rgba(255,255,255,0.06)" }} />

        <div className="d-flex flex-column flex-sm-row justify-content-between gap-2">
          <span className="text-muted-soft" style={{ fontSize: "0.85rem" }}>
            © {new Date().getFullYear()} BloodBridge_MM
          </span>
          <span className="text-muted-soft" style={{ fontSize: "0.85rem" }}>
            Built to save lives.
          </span>
        </div>
      </div>
    </footer>
  );
}
