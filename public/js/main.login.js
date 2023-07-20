const adminButton = document.querySelector("#admin-button");
const inputBox = document.querySelector(".inputs-box");
const buttonBox = document.querySelector(".button-box");
let loginFormVisible = false;

adminButton.addEventListener("click", () => {
  loginFormVisible = !loginFormVisible;
  if (loginFormVisible) {
    buttonBox.style.display = "none";
    inputBox.style.display = "block";
  } else {
    buttonBox.style.display = "flex";
    inputBox.style.display = "none";
  }
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
