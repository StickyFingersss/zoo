const adminButton = document.querySelector("#admin-button");
const inputBox = document.querySelector(".inputs-box");
const buttonBox = document.querySelector(".button-box");

console.log(inputBox);

adminButton.addEventListener("click", () => {
  buttonBox.style.display = "none";
  inputBox.style.display = "block";
  const { loginForm } = document.forms;
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(loginForm);
    console.log(formData);
    const data = Object.fromEntries(formData);
    console.log(data);
    if (!data.login || !data.password) {
      alert("Enter your data");
    } else {
      try {
        const response = await fetch("/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const result = await response.json();
        if (result.msg) {
          window.location.href = "/admin";
        } else {
          paragraph.innerText = result.err;
        }
      } catch (error) {
        console.log(error);
        alert(error);
      }
    }
  });
});
