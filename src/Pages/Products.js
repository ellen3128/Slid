import Piece from '../Img/piece.png';

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
              We care about the quality of experience for both users and brands. Each Slid's piece is fully customizable with the brand's logo and iconic colors. Slid will continue to carry out your brand's marketing!</p>

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
        </div>
      </section>
    </div>
  );
}
