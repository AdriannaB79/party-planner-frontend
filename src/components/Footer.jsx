import { Link } from "react-router-dom";

const Footer = ({ backgroundImage }) => {
  return (
    <footer
      className="flex justify-self-end mt-auto"
      style={{
        backgroundImage: `url(${backgroundImage} )`,
        backgroundSize: "cover",
      }}
    >
      <p className="flex-grow footer_text">
        Copyrights: &copy; Adrianna, WBS Coding School, WD#049
      </p>
      <div className="ml-auto">
        <Link to="about" className="btn-aboutapp">
          About App
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
