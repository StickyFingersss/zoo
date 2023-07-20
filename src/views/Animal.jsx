const React = require("react");
const Layout = require("./Layout");

module.exports = function Login({ animal, images }) {
  return (
    <Layout>
      <link rel="stylesheet" href="/css/slider.css" />
      <script defer src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
      <script defer src="/js/slider.js" />
      <h1>Incredibly Basic Slider</h1>
      <div id="slider">
        <a href="#" className="control_next">{`>>`}</a>
        <a href="#" className="control_prev">{`<`}</a>
        <ul>
          {images ? (
            images.map((el, index) => (
              <li
                key={index}
                style={{ background: index % 2 === 0 ? "#aaa" : "" }}
              >
                <img src={el.link} alt="" className="animal-photo" />
              </li>
            ))
          ) : (
            <li style={{ background: "#aaa" }}>Фотографии пока не загружены</li>
          )}
        </ul>
      </div>
      <div className="slider_option">
        <input type="checkbox" id="checkbox" checked />
        <label htmlFor="checkbox">Autoplay Slider</label>
      </div>
      <h1 className="animal-name">{animal.name}</h1>
      <h1 className="animal-breed">{animal.species}</h1>
      <div className="desc">
        <p>{animal.description}</p>
      </div>
    </Layout>
  );
};
