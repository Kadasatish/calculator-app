function calculate() {
  const a = document.getElementById('a').value;
  const b = document.getElementById('b').value;
  const op = document.getElementById('op').value;
  fetch(`/api/calc?op=${op}&a=${a}&b=${b}`)
    .then(res => res.json())
    .then(data => {
      document.getElementById('result').innerText = 'Result: ' + data.result;
    })
    .catch(() => {
      document.getElementById('result').innerText = 'Error computing';
    });
}
