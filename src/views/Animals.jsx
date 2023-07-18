const React = require("react");
const Layout = require("./Layout");

module.exports = function Login() {
  return (
    <Layout>
      <ul className="animals-list">
        <li className="animal">
          <a href={`/animal/1`}>
            <img src="/images/enot.png" alt="" className="animal-img" />
          </a>
          <div className="animal-info">
            <h3 className="animal-name">Animal Name</h3>
          </div>
          <div className="buttons-edit-animals">
            <button>Изменить</button>
            <button>Trash</button>
          </div>
        </li>
      </ul>
      <div className="buttons-add-animals">
        <button>Добавить новое животное</button>
      </div>
    </Layout>
  );
};
