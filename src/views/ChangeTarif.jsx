const React = require("react");
const Layout = require("./Layout");

module.exports = function ChangeTarif({ rate }) {
  return (
    <Layout>
      <script defer src="/js/change.js"></script>
      <a href="/admin">
        <button>Назад</button>
      </a>
      <div className="container" style={{ marginTop: "200px" }}>
        <form id="ChangeForm" action="/admin/Change" method="PUT">
          <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">
              Взрослые/Будние
            </span>
            <input
              type="text"
              name="oldBud"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              defaultValue={rate[0].price}
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">
              Взрослые/Выходные
            </span>
            <input
              type="text"
              name="oldWeek"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              defaultValue={rate[1].price}
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">
              Дети/Будние
            </span>
            <input
              type="text"
              name="youngBud"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              defaultValue={rate[2].price}
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">
              Дети/Выходные
            </span>
            <input
              type="text"
              class="form-control"
              name="youngWeek"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              defaultValue={rate[3].price}
            />
          </div>
          <input type="submit" class="btn" defaultValue="Изменить" />
        </form>
      </div>
    </Layout>
  );
};
