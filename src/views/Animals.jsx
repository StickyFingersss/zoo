const React = require("react");
const Layout = require("./Layout");

module.exports = function Animals({ login, mergedDataArray }) {
  return (
    <Layout>
      <script defer src="/js/delete.js" />
      <link rel="stylesheet" href="/css/animals.css" />
      <div className="animal-list-container">
        {login ? (
          <a href="/" className="aback">
            <button className="back">Назад</button>
          </a>
        ) : (
          <span></span>
        )}
        <ul className="animals-list">
          {login
            ? mergedDataArray.map((animal) => (
                <li className="animal" key={animal.id}>
                  <a href={`/animal/${animal.id}`}>
                    {animal.link.length ? (
                      <img src={animal.link[0]} alt="" className="animal-img" />
                    ) : (
                      <p>Фоток пока нет</p>
                    )}
                  </a>
                  <div className="animal-info">
                    <h3 className="animal-name">{animal.name}</h3>
                  </div>
                  <a href={`/edit/${animal.id}`}>
                    <button>Изменить</button>
                  </a>
                  <div className="buttons-edit-animals">
                    <button id={animal.id}>Удалить животное</button>
                  </div>
                </li>
              ))
            : mergedDataArray.map((animal) => (
                <li className="animal" key={animal.id}>
                  <a href={`/animal/${animal.id}`}>
                    {animal.link.length ? (
                      <img src={animal.link[0]} alt="" className="animal-img" />
                    ) : (
                      <p>Фоток пока нет</p>
                    )}
                  </a>
                  <div className="animal-info">
                    <h3 className="animal-name">{animal.name}</h3>
                  </div>
                </li>
              ))}
        </ul>
        {login ? (
          <div className="buttons-add-animals">
            <a href="/create">
              <button>Добавить новое животное</button>
            </a>
          </div>
        ) : (
          <div className="buttons-add-animals bback">
            <a href="/">
              <button className="bback">Назад</button>
            </a>
          </div>
        )}
      </div>
    </Layout>
  );
};
