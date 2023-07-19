const React = require("react");
const Layout = require("./Layout");

module.exports = function EditAnimal({ animalDataDb, imgDataDb }) {
  return (
    <Layout>
      <div className="mainDiv">
        <div className="photoRow">
          {imgDataDb.map((image) => (
            <div className="imgBox">
              <img src={image.link} alt="" className="imgItem" />
              <button id={image.id} className="imgDel"></button>
            </div>
          ))}
        </div>

        <div className="addPhoto"></div>
        <div className="editData">
          <form action="" className="editForm"></form>
        </div>
      </div>
    </Layout>
  );
};
