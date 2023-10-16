import lidGif from '../Img/lid.gif';

export default function Banner() {
  return (
    <section id="Home" className="coverText">
      <div className="textContainer">
        <span data-text="Cover,">Cover,</span>
        <span data-text="your">your</span>
        <span data-text="drink,">drink,</span>
        <span data-text="Spill">Spill</span>
        <span data-text="less,">less,</span>
        <span data-text="Keep">Keep</span>
        <span data-text="Warm.">Warm.</span>
      </div>
      <img className="lid" src={lidGif} alt="Lid GIF"></img>
    </section>
  );
}

