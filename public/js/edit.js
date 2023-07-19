const delBtn = document.querySelectorAll(".imgDel");
const editBtn = document.querySelector(".editForm");

delBtn.forEach((el) => {
  el.addEventListener("click", async (e) => {
    e.preventDefault();
    e.target.closest(".imgBox").remove();
    console.log(e.target);
    const id = e.target.id;
    try {
      await fetch(`/edit/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.log("error", error);
    }
  });
});

const { editForm } = document.forms;
editForm.addEventListener("submit", async (e) => {
  console.log("dddddddddddddddddd");
  e.preventDefault();
  const formData = new FormData(editForm);
  console.log(formData);
  const data = Object.fromEntries(formData);
  console.log(data, e.target.dataset.entryid);
  try {
    const response = await fetch(`/edit/${e.target.dataset.entryid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    if (result.msg) {
      window.location.href = "/animals";
    }
  } catch (error) {
    console.log(error);
    alert(error);
  }
});
