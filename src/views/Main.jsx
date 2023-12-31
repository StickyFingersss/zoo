const React = require("react");
const Layout = require("./Layout");

module.exports = function Login() {
  return (
    <Layout>
      <script defer src="/js/main.login.js" />
      <link rel="stylesheet" href="/css/main.css" />
      <div className="main">
        <div className="admin-button">
          <button id="admin-button">Admin</button>
        </div>
        <div className="container">
          <div className="inherit-box"></div>
          <div className="inputs-box">
            <p className="alert" />
            <form name="loginForm">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Login
                </label>
                <input
                  name="login"
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" classNamee="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
          <div className="button-box">
            <a href="/rates">Тарифы</a>
            <a href="/animals">Питомцы</a>
          </div>
          <div className="message-box">
            <h2>Добро пожаловать в Урюпинский зоопарк!</h2>
            <h4>
              У нас ждут вас захватывающие встречи с разнообразными животными,
              красивая природа и волшебная атмосфера. Погрузитесь в уникальный
              мир дикой природы и создайте незабываемые моменты среди наших
              пушистых и пернатых обитателей!
            </h4>
          </div>
        </div>
      </div>
    </Layout>
  );
};
