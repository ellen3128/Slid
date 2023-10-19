import Piece from "../Img/piece.png";
import { Link } from "react-router-dom";

export default function Products() {
  const colorData = [
    { color: "#00704A", label: "Starbucks" },
    { color: "#FF7900", label: "Dunkin' Donuts" },
    { color: "#FFC300", label: "McDonald's" },
    { color: "#522D1B", label: "Peet's Coffee" },
    { color: "#D1232A", label: "Tim Hortons" },
    {
      style:
        "linear-gradient(45deg, #FF7900, #00704A, #FFC300, #522D1B, #D1232A)",
      label: "Custom",
    },
  ];

  return (
    <div className="banner--products">
      <section id="Products" className="coverText--products">
        <div className="textContainer--products">
          <p data-text="Choose your">Choose your</p>
          <p data-text="Brand's iconic">Brand's iconic</p>
          <p data-text="Color and logo">Color & logo</p>
          <br></br>
          <p className="text-center mx-auto w-1/2 text-2xl">
            We care about the quality of experience for both users and brands.
            Each Slid's piece is fully customizable with the brand's logo and
            iconic colors. Slid will continue to carry out your brand's
            marketing!
          </p>
        </div>
        <div className="color-options-wrapper">
          <h3 className="color-options-title">Customizable Colors</h3>
          <div className="color-options">
            {colorData.map((item, index) => (
              <div
                key={index}
                className="color-circle"
                style={
                  item.color
                    ? { backgroundColor: item.color }
                    : { background: item.style }
                }
                data-label={item.label}
              ></div>
            ))}
            <img src={Piece} alt=""></img>
          </div>
          <Link to="/customize">
            <button
              type="button"
              class="text-blue-900 bg-slate-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-6 transform hover:scale-110"
            >
              Build Your Slid
              <svg
                class="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
