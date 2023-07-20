const React = require("react");
const Layout = require("./Layout");

module.exports = function Upload() {
  return (
    <Layout>
      <form action="/upload" method="post" encType="multipart/form-data">
        <label>Добавить фото</label>
        <br></br>
        <input type="file" name="filedata" />
        <br></br>
        <br></br>
        <input type="submit" value="Загрузить" />
      </form>
    </Layout>
  );
};
