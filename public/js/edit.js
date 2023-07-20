const delBtn = document.querySelectorAll(".imgDel");
const editBtn = document.querySelector(".editForm");

delBtn.forEach((el) => {
  el.addEventListener("click", async (e) => {
    e.preventDefault();
    e.target.closest(".imgBox").remove();
    console.log(e.target);
    const id = e.target.id;
    try {
      const response = await fetch(`/edit/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log("error", error);
    }
  });
});

const editForm = document.forms.editForm;
editForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(editForm);
  const data = Object.fromEntries(formData);
  try {
    const response = await fetch(`/edit/${e.target.dataset.entryid}`, {
      method: "PUT",
      body: formData,
    });
    const result = await response.json();
    if (result.msg === "Успешное обновление данных") {
      window.location.href = "/animals";
    }
  } catch (error) {
    console.log(error);
    alert(error);
  }
});
