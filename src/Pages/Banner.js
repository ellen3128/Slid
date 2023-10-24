import lidGif from "../Img/lid.gif";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div className="banner">
      <section id="Home" className="coverText">
        <div className="textContainer">
          <p data-text="Cover your drink,">Cover your drink,</p>
          <p data-text="Spill less,">Spill less,</p>
          <p data-text="Keep warm.">Keep warm.</p>
          <Link to="/customize">
          <button
            type="button"
            class="buttons-container text-lg font-semibold leading-8 text-gray-900 cursor-pointer px-4 py-3 mt-6 text-white align-middle font-sans ui-sans-serif"
          >
            View Products
            </button>
          </Link>
        </div>
        <img className="lid" src={lidGif} alt="Lid GIF"></img>
      </section>
   </div>
  );
}
