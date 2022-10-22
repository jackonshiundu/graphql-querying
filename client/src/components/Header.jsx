import logo from './assets/logo.png';
export default function Header() {
  return (
    <nav className="navbar bg-light mb-4 p-0">
      <div>
        <a href="/" className="navbar-brand">
          <div className="d-flex">
            <img src={logo} alt="Logo" />
            <div>Project Management</div>
          </div>
        </a>
      </div>
    </nav>
  );
}
