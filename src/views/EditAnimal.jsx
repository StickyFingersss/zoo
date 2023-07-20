const React = require("react");
const Layout = require("./Layout");

module.exports = function EditAnimal({ animalDataDb, imgDataDb }) {
  return (
    <Layout>
      <script defer src="/js/edit.js" />
      <script defer src="/js/multer.js" />
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
        {/* <a href={`/imgupload/${animalDataDb.id}`}>Добавить фото</a> */}
        <form
          method="POST"
          action={`/edit/${animalDataDb.id}`}
          encType="multipart/form-data"
          name="newPhoto"
        >
          <br />
          <label htmlFor="pic_input">*Фото:</label>
          <input id="pic_input" type="file" name="photo" />
          <button type="submit" className="btn btn-primary">
            Отправить
          </button>{" "}
        </form>
        <br />

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
