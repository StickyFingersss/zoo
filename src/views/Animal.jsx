const React = require("react");
const Layout = require("./Layout");

module.exports = function Login({ animal, images }) {
  return (
    <Layout>
      <div className="slider">
        {images ? (
          images.map((el) => (
            <img src={el.link} alt="" />
          ))
        ) : (
          <h3>Фотографии пока не загружены</h3>
        )}
      </div>
      <h1>{animal.species} {animal.name}</h1>
      <div className="desc">
        <p>{animal.description}</p>
      </div>
    </Layout>
  );
};
