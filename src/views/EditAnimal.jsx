const React = require("react");
const Layout = require("./Layout");

module.exports = function EditAnimal({ animalDataDb, imgDataDb }) {
  return (
    <Layout>
      <script defer src="/js/edit.js" />
      <div className="mainDiv">
        <div className="photoRow">
          {imgDataDb.map((image) => (
            <div className="imgBox">
              <img src={image.link} alt="" className="imgItem" />
              <button id={image.id} className="imgDel">
                Удалить фото
              </button>
            </div>
          ))}
        </div>

        {/* <div className="addPhoto">
          <div className="mb-3">
            <label for="formFile" className="form-label">
              Добавьте новое фото
            </label>
            <input className="form-control" type="file" id="formFile" />
          </div>
        </div> */}

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
