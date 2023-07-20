const React = require("react");
const Layout = require("./Layout");

module.exports = function CreateAnimal({}) {
  return (
    <Layout>
      <script defer src="/js/create.js" />
      <div className="mainDiv">

        <form action="/upload" method="post" enctype="multipart/form-data">
          <label>Файл</label>
          <br></br>
          <input type="file" name="filedata" />
          <br></br>
          <br></br>
          <input type="submit" value="Send" />
        </form>

        <div className="editData">
          <form name="createForm" action="/create" method="POST">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Добавить вид
              </label>
              <input
                name="species"
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Добавить кличку
              </label>
              <input
                name="name"
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Добавить описание
              </label>
              <input
                name="description"
                type="text"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Добавить
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};