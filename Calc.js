function appendNumber(num) {
  document.getElementById('result').value += num;
}

function appendOperator(op) {
  let result = document.getElementById('result').value;
  if (result !== '' && !'+-*/'.includes(result.slice(-1))) {
    document.getElementById('result').value += op;
  }
}

function clearResult() {
  document.getElementById('result').value = '';
}

function calculateResult() {
  let expression = document.getElementById('result').value;
  try {
    let answer = eval(expression);
    document.getElementById('result').value = answer;
  } catch (e) {
    document.getElementById('result').value = "Error";
  }
}
document.getElementById('result').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    calculateResult();
  }
}); 