import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles.css";

function Welcome() {
  return (
    <div className="screen">
      <div className="top-area">
        <div className="dots">
          <span className="d6">6</span>
          <span className="d1">1</span>
          <span className="d2">2</span>
          <span className="d3">3</span>
          <span className="d4">4</span>
          <span className="d5">5</span>
        </div>
      </div>

      <div className="bottom-area">
        <h1>Welcome to PopX</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

        <Link className="btn primary" to="/signup">Create Account</Link>
        <Link className="btn secondary" to="/login">Already Registered? Login</Link>
      </div>
    </div>
  );
}

function Login() {
  return (
    <div className="screen">
      <h1>Signin to your PopX account</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

      <label>Email Address</label>
      <input placeholder="Enter email address" />

      <label>Password</label>
      <input type="password" placeholder="Enter password" />

      <Link className="btn primary" to="/account">Login</Link>
    </div>
  );
}

function Signup() {
  return (
    <div className="screen">
      <h1>Create your PopX account</h1>

      <label>Full Name*</label>
      <input placeholder="Marry Doe" />

      <label>Phone number*</label>
      <input placeholder="Marry Doe" />

      <label>Email address*</label>
      <input placeholder="Marry Doe" />

      <label>Password*</label>
      <input placeholder="Marry Doe" />

      <label>Company name</label>
      <input placeholder="Marry Doe" />

      <p className="agency">Are you an Agency?*</p>
      <div className="radio">
        <label><input type="radio" defaultChecked /> Yes</label>
        <label><input type="radio" /> No</label>
      </div>

      <Link className="btn primary bottom-btn" to="/account">Create Account</Link>
    </div>
  );
}

function Account() {
  return (
    <div className="screen">
      <h2>Account Settings</h2>

      <div className="profile">
        <img src="https://i.pravatar.cc/100" />
        <div>
          <strong>Marry Doe</strong>
          <p>Marry@Gmail.Com</p>
        </div>
      </div>

      <p className="desc">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>
    </div>
  );
}

export default function App() {
  return (
    <div className="app-frame">
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </Router>
    </div>
  );
}
// --- IGNORE ---
