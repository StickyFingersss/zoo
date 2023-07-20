const { newPhoto } = document.forms;

newPhoto.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = new FormData(newPhoto);
  const dataInp = Object.fromEntries(data);
  console.log(dataInp);
  try {
    const response = await fetch("/admin/Change", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataInp),
    });
    const result = await response;
    console.log(result);
    window.location.href = "/admin";
  } catch (error) {
    console.log(error);
    alert(error);
  }
});
