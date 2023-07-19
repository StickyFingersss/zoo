const changeForm = document.querySelector("#ChangeForm");

changeForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = new FormData(changeForm);
  const dataInp = Object.fromEntries(data);
  console.log(dataInp);
  const response = await fetch("/admin/Change", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataInp),
  });
});
