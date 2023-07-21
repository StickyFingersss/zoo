const React = require("react");
const Layout = require("./Layout");

module.exports = function Login({ rates }) {
  return (
    <Layout>
      <link rel="stylesheet" href="/css/rates.css" />

      <a href="/">
        <button className="back">Назад</button>
      </a>
      <div className="titleBox">
        <div className="header-box">
          <h1>Наши тарифы</h1>
        </div>
      </div>
      <div className="rates">
        {rates ? (
          rates.map((el) => (
            <div className="rates-box">
              <div className="rates-item">
                <h3>{el.age}</h3>
                <div className="weekdays">
                  <h5>{el.day}</h5>
                  <span>{el.price}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="rates-box">
            <div className="rates-item">
              <h3>Взрослые</h3>
              <div className="weekdays">
                <h5>Будние</h5>
                <span>Price</span>
              </div>
              <div className="weekends">
                <h5>Выходные</h5>
                <span>Price</span>
              </div>
            </div>
            <div className="rates-item">
              <h3>Дети</h3>
              <div className="weekdays">
                <h5>Будние</h5>
                <span>Price</span>
              </div>
              <div className="weekends">
                <h5>Выходные</h5>
                <span>Price</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};
