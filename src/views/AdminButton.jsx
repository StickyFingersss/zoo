const React = require("react");
const Layout = require("./Layout");

module.exports = function Buttons() {
  return (
    <Layout>
      <a href="/admin">
        <button>Назад в главное меню</button>
      </a>
      <div class="d-grid gap-2 col-6 mx-auto" style={{ marginTop: "300px" }}>
        <a class="btn btn-primary" href="/admin/Change">
          Изменить тарифы
        </a>
        <a class="btn btn-primary" type="button">
          Изменить животных / Добавить животных
        </a>
      </div>
    </Layout>
  );
};
