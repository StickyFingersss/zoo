const React = require("react");
const Layout = require("./Layout");

module.exports = function Login() {
  return (
    <Layout>
      <div className="main">
        <div className="admin-button">
          <a href="/admin">Admin</a>
        </div>
        <div className="container">
          <div className="inherit-box"></div>
          <div className="button-box">
            <a href="/rates">Тарифы</a>
            <a href="/animals">Питомцы</a>
          </div>
          <div className="message-box">
            <h1>Вас приветствует Урюпинский зоопарк</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};
