const action = prompt("Choose action: add, sub, mult, div.", "");
const stringFirst = prompt("Enter the first number!", "");
const stringSecond = prompt("Enter the second number!", "");

if (stringFirst && stringSecond) {
  const numberFirst = +stringFirst;
  const numberSecond = +stringSecond;

  if (!isNaN(numberFirst) || !isNaN(numberSecond)) {
    let sum = numberFirst + numberSecond;
    let sub = numberFirst - numberSecond;
    let mult = numberFirst * numberSecond;
    let div = numberFirst / numberSecond;

    if (action == "+") {
      alert(`${numberFirst} ${action} ${numberSecond} = ${sum}`);
    } else if (action == "-") {
      alert(`${numberFirst} ${action} ${numberSecond} = ${sub}`);
    } else if (action == "*") {
      alert(`${numberFirst} ${action} ${numberSecond} = ${mult}`);
    } else if (action == "/") {
      alert(`${numberFirst} ${action} ${numberSecond} = ${Number.isFinite(div) ? div : "not correct value"}`);
    } else {
      alert("Not correct action!");
    }

  } else {
    alert("Not two numbers!");
  }

} else {
  alert("Not enough data! Please, try else!");
}
