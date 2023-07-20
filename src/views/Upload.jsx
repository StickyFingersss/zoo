const React = require("react");
const Layout = require("./Layout");

module.exports = function Upload() {
  return (
    <Layout>
      {/* <form action="/upload" method="POST" encType="multipart/form-data">
        <label>Добавить фото</label>
        <br></br>
        <input type="file" name="filedata" />
        <br></br>
        <br></br>
        <input type="submit" value="Загрузить" />
      </form> */}
      <form
        method="POST"
        action="/imgupload"
        encType="multipart/form-data"
        name="newPhoto"
      >
        {" "}
        <img src="" alt="Фотография пользователя" className="card-img-top" />
        <label htmlFor="pic_input">*Фото:</label>
        <input id="pic_input" type="file" name="photo" />
        <button type="submit" className="btn btn-primary">
          Отправить
        </button>{" "}
      </form>
    </Layout>
  );
};
