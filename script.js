var numbers = ['n1', 'n2', 'n3', 'n4', 'n5'];

megaNumber();

function megaNumber() {
  for (let i = 0; i < numbers.length; i++) {
    let random = Math.random();
    let floored = Math.floor(random * 100);
    if (floored > 70 || floored == 0) {
      while (floored > 70 || floored == 0) {
        random = Math.random();
        floored = Math.floor(random * 100);
      }
    }
    if (floored < 10) {
      document.getElementById(numbers[i]).innerHTML = "0" + floored;
    } else {
      document.getElementById(numbers[i]).innerHTML = floored;
    }
  }
  multi();

  function multi() {
    let random = Math.random();
    let floored = Math.floor(random * 100);
    if (floored > 25 || floored == 0) {
      while (floored > 25 || floored == 0) {
        random = Math.random();
        floored = Math.floor(random * 100);
      }
    }
    if (floored < 10) {
      document.getElementById("multi").innerHTML = "0" + floored;
    } else {
      document.getElementById("multi").innerHTML = floored;
    }
  }
}
