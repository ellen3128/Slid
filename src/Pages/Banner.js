import lidGif from "../Img/lid.gif";

export default function Banner() {
  return (
    <section id="Home" className="coverText">
      <div className="textContainer">
        <p data-text="Cover your drink,">Cover your drink,</p>
        <p data-text="Spill less,">Spill less,</p>
        <p data-text="Keep warm.">Keep warm.</p>
      </div>
      <img className="lid" src={lidGif} alt="Lid GIF"></img>
    </section>
  );
}
