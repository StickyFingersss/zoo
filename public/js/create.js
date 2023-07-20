const { createForm } = document.forms;

createForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(createForm);
  const res = Object.fromEntries(data);
    try {
      const response = await fetch('/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(res),
      });
      const result = await response.json();
      window.location.href = '/animals';
    } catch (error) {
      alert(error);
    }
})