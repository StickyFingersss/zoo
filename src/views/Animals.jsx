const React = require("react");
const Layout = require("./Layout");

module.exports = function Animals({ login, animalDataDb, imagelDataDb }) {
  return (
    <Layout>
      <ul className="animals-list">
        {login
          ? animalDataDb.map((animal) => {
              imagelDataDb.find((element) => element.animal_id === animal.id)
                .link;

              return (
                <li className="animal" key={animal.id}>
                  <a href={`/animal/${animal.id}`}>
                    <img
                      src={`${
                        imagelDataDb.find(
                          (element) => element.animal_id === animal.id
                        ).link
                      }`}
                      alt=""
                      className="animal-img"
                    />
                  </a>
                  <div className="animal-info">
                    <h3 className="animal-name">{animal.name}</h3>
                  </div>
                  <div className="buttons-edit-animals">
                    <a href={`/edit/${animal.id}`}>
                      <button>Изменить</button>
                    </a>
                    <button id={animal.id}>Удалить животное</button>
                  </div>
                </li>
              );
            })
          : animalDataDb.map((animal) => {
              const imageLink = imagelDataDb.find(
                (element) => element.animal_id === animal.id
              ).link;

              return (
                <li className="animal" key={animal.id}>
                  <a href={`/animal/${animal.id}`}>
                    <img
                      src={`${
                        imagelDataDb.find(
                          (element) => element.animal_id === animal.id
                        ).link
                      }`}
                      alt=""
                      className="animal-img"
                    />
                  </a>
                  <div className="animal-info">
                    <h3 className="animal-name">{animal.name}</h3>
                  </div>
                </li>
              );
            })}
      </ul>

      {login ? (
        <div className="buttons-add-animals">
          <button>Добавить новое животное</button>
        </div>
      ) : (
        <span></span>
      )}
    </Layout>
  );
};
