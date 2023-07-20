const btn = document.querySelectorAll(".buttons-edit-animals");
console.log("aaaaaaaaaaaaaa");

btn.forEach((el) => {
  el.addEventListener("click", async (e) => {
    e.preventDefault();
    e.target.closest(".animal").remove();
    console.log(e.target);
    const id = e.target.id;
    try {
      const response = await fetch(`/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response;
      console.log(result);
    } catch (error) {
      console.log("error", error);
    }
  });
});
