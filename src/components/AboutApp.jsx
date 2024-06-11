import "../App.css";
import aboutAppImage from "../img/AboutApp.png";

export default function AboutApp() {
  return (
    <div className="aboutApp background_aboutApp">
      <h2 className="aboutApp-title">About App </h2>
      <table className="aboutApp-table">
        <tr>
          <td className="aboutApp-image-column">
            <img
              src={aboutAppImage}
              alt="About App"
              className="aboutApp-image"
            />
          </td>
          <td className="aboutApp-content-column">
            <p className="aboutApp-content">
              The application was created as part of my final project for the
              15-week Full Stack Webdeveloper boot camp. The inspiration came
              from my friends, who often mentioned how much time they spend
              looking for decorations, venues or just ideas for organizing an
              unusual and special surprise party or an ordinary gathering of
              friends after years. Using the skills gained during the camp, I
              decided to create an application that will make it easier for my
              friends and, I believe, many others to simplify and diversify
              their plans. In the application I used React features and Vite
              configuration, css styles and Tailwind configuration, Html
              elements, MangoDB databases....{" "}
            </p>
          </td>
        </tr>
      </table>
    </div>
  );
}
