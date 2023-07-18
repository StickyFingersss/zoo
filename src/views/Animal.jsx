const React = require("react");
const Layout = require("./Layout");

module.exports = function Login() {
  return (
    <Layout>
      <div className="slider">
        <img src="/images/enot.png" alt="" />
      </div>
      <h1>Енот Серега</h1>
      <div className="desc">
        <p>Я родился...</p>
      </div>
    </Layout>
  );
};
