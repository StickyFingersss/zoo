const React = require("react");
const Layout = require("./Layout");

module.exports = function EditAnimal({ animalDataDb, imgDataDb }) {
  return (
    <Layout>
      <script defer src="/js/edit.js" />
      <a href="/animals">
        <button>Назад</button>
      </a>
      <div className="mainDiv">
        <div className="photoRow">
          {imgDataDb.map((image) => (
            <div key={image.id} className="imgBox">
              <img src={image.link} alt="" className="imgItem" />
              <button id={image.id} className="imgDel">
                Удалить фото
              </button>
            </div>
          ))}
        </div>
        <a href="/upload">Добавить фото</a>

        {/* <br />
        <form action="/single" method="post" encType="multipart/form-data">
          <label>Добавить фото</label>
          <br></br>
          <input type="file" name="image" />
          <br></br>
          <br></br>
          <input type="submit" value="Загрузить" />
        </form>
        <br /> */}
        <div className="editData">
          <form name="editForm" data-entryid={animalDataDb.id}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Изменить имя
              </label>
              <input
                name="name"
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                defaultValue={animalDataDb.name}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Изменить описание
              </label>
              <input
                name="description"
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                defaultValue={animalDataDb.description}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Изменить
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};
