function calcularPena() {
  const checkboxes = document.querySelectorAll('input[name="crime"]:checked');
  let total = 0;
  checkboxes.forEach(c => {
    total += parseInt(c.value);
  });
  document.getElementById('resultado').innerText = `Pena Total: ${total} anos.`;
}