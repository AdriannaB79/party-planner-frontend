/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function Navbar({ user, setUser, logo, backgroundImage }) {
  const handleClick = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <div
      className="p-4 flex items-center justify-between w-full"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      <Link to="/" className="logo-container">
        <img src={logo} alt="Logo" className="logo-image" />
      </Link>
      <div className="flex items-center space-x-4 cont">
        {user !== null ? (
          <div className="flex items-center space-x-4 cont">
            <div className="party-buttons">
              <Link to="/">Plan a Party</Link>
              <Link to="planned-parties">Planned parties</Link>
            </div>
            <span className="user_span_style">{user.email}</span>
            <button onClick={handleClick} className="btn-logout">
              Log out
            </button>
          </div>
        ) : (
          <div className="flex items-center space-x-4">
            <Link to="login" className="btn-login">
              Log in
            </Link>
            <Link to="signup" className="btn-signup">
              Sign up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
