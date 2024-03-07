let price = 1.87;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
];

document.getElementById('purchase-btn').addEventListener('click', calculateChange);

function calculateChange() {
  let cash = parseFloat(document.getElementById('cash').value);
  let changeDue = document.getElementById('change-due');
  let change = checkChange(price, cash, cid);

  if (change.status === "INSUFFICIENT_FUNDS") {
    changeDue.textContent = "Status: INSUFFICIENT_FUNDS";
  } else if (change.status === "CLOSED") {
    changeDue.textContent = "Status: CLOSED";
    for (let i = 0; i < change.change.length; i++) {
      changeDue.textContent += ` ${change.change[i][0]}: $${change.change[i][1]}`;
    }
  } else {
    changeDue.textContent = `Status: OPEN`;
    for (let i = 0; i < change.change.length; i++) {
      changeDue.textContent += ` ${change.change[i][0]}: $${change.change[i][1]}`;
    }
  }
}

function checkChange(price, cash, cid) {
  let change = cash - price;
  let totalCID = 0;
  let changeArr = [];
  let currency = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  };

  for (let i = 0; i < cid.length; i++) {
    totalCID += cid[i][1];
  }

  totalCID = Math.round(totalCID * 100) / 100;

  if (change > totalCID) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (change.toFixed(2) === totalCID.toFixed(2)) {
    return { status: "CLOSED", change: cid };
  } else {
    cid = cid.reverse();
    for (let i = 0; i < cid.length; i++) {
      let coinValue = 0;
      while (change >= currency[cid[i][0]] && cid[i][1] > 0) {
        coinValue += currency[cid[i][0]];
        change -= currency[cid[i][0]];
        cid[i][1] -= currency[cid[i][0]];
        change = Math.round(change * 100) / 100;
      }
      if (coinValue > 0) {
        changeArr.push([cid[i][0], coinValue]);
      }
    }
    if (change > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
    return { status: "OPEN", change: changeArr };
  }
}
