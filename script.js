function F(x) {
  return Math.exp(-x) - x;
}

function g(x) {
  return Math.exp(-x);
}

function performIteration() {
  const x0 = parseFloat(document.getElementById('x0').value);
  const epsilon = parseFloat(document.getElementById('epsilon').value);
  const maxIter = parseInt(document.getElementById('maxIter').value);

  let x1;
  let outputBody = document.getElementById('outputBody');
  outputBody.innerHTML = ''; // Clear previous results
  let x0_current = x0;

  for (let i = 0; i < maxIter; ++i) {
      x1 = g(x0_current);
      let row = outputBody.insertRow();
      row.insertCell(0).textContent = i + 1;
      row.insertCell(1).textContent = x0_current.toFixed(6);
      row.insertCell(2).textContent = g(x0_current).toFixed(6);
      row.insertCell(3).textContent = x1.toFixed(6);
      row.insertCell(4).textContent = F(x1).toFixed(6);

      if (Math.abs(F(x1)) < epsilon) {
          break;
      }

      x0_current = x1;
  }

  let finalRow = outputBody.insertRow();
  finalRow.insertCell(0).textContent = 'Hasil akar persamaan';
  finalRow.insertCell(1).textContent = x1.toFixed(6);
  finalRow.insertCell(2).textContent = '';
  finalRow.insertCell(3).textContent = '';
  finalRow.insertCell(4).textContent = '';
}
