const React = require("react");
const Layout = require("./Layout");

module.exports = function Upload({ id }) {
  return (
    <Layout>
      <form
        method="POST"
        action={`/imgupload/${id}`}
        encType="multipart/form-data"
        name="newPhoto"
      >
        <label htmlFor="pic_input">*Фото:</label>
        <input id="pic_input" type="file" name="photo" />
        <button type="submit" className="btn btn-primary">
          Отправить
        </button>{" "}
      </form>
    </Layout>
  );
};
