const entry = document.querySelector(".dataEntry");
const colorSelect = document.querySelector(".colorSelect");
const ASegment = document.querySelector(".A");
const BSegment = document.querySelector(".B");
const CSegment = document.querySelector(".C");
const DSegment = document.querySelector(".D");
const ESegment = document.querySelector(".E");
const FSegment = document.querySelector(".F");
const GSegment = document.querySelector(".G");
const root = document.querySelector(":root");
const buttonStartAnimation = document.querySelector(".animate");
const buttonCountDown = document.querySelector(".countDown");
const displayColor = document.querySelector(".display");
const colorButtons = document.querySelector(".color");
let actualColor = "Ambar";

const arrSeg = [
  ASegment,
  BSegment,
  CSegment,
  DSegment,
  ESegment,
  FSegment,
  GSegment,
];

const colorTriangles = [
  "--colorA",
  "--colorB",
  "--colorC",
  "--colorD",
  "--colorE",
  "--colorF",
  "--colorG",
];

const arrNum0 = [0, 1, 2, 3, 4, 5];
const arrNum1 = [1, 2];
const arrNum2 = [0, 1, 6, 3, 4];
const arrNum3 = [0, 1, 2, 3, 6];
const arrNum4 = [1, 2, 5, 6];
const arrNum5 = [0, 2, 3, 5, 6];
const arrNum6 = [0, 2, 3, 4, 5, 6];
const arrNum7 = [0, 1, 2];
const arrNum8 = [0, 1, 2, 3, 4, 5, 6];
const arrNum9 = [0, 1, 2, 5, 6];

const arrays = [
  arrNum0,
  arrNum1,
  arrNum2,
  arrNum3,
  arrNum4,
  arrNum5,
  arrNum6,
  arrNum7,
  arrNum8,
  arrNum9,
];

entry.addEventListener("change", handleEvent);

colorSelect.addEventListener("change", () => {
  if (colorSelect.value == "Ambar") {
    entry.value = "-";
    clearDisplay();
    actualColor = "Ambar";
    displayColor.style.backgroundColor = "rgba(68, 35, 15, 0.322)";
    colorButtons.style.color = "goldenrod";
  } else if (colorSelect.value == "Green") {
    entry.value = "-";
    clearDisplay();
    actualColor = "Green";
    displayColor.style.backgroundColor = "#002000";
    colorButtons.style.color = "rgb(81, 188, 5)";
  } else if (colorSelect.value == "Blue") {
    entry.value = "-";
    clearDisplay();
    actualColor = "Blue";
    displayColor.style.backgroundColor = "#00FFFF";
    colorButtons.style.color = "#00FFFF";
  } else {
    entry.value = "-";
    clearDisplay();
    actualColor = "Red";
    displayColor.style.backgroundColor = "#200000";
    colorButtons.style.color = "red";
  }
});
document.addEventListener("keydown", handleEvent);
buttonStartAnimation.addEventListener("click", animate);
buttonCountDown.addEventListener("click", countDown);

function handleEvent() {
  clearDisplay();
  setDisplay();
}

function clearDisplay() {
  for (let i = 0; i < colorTriangles.length; i++) {
    root.style.setProperty(`${colorTriangles[i]}`, "rgba(218, 165, 32, 0.13)");
  }

  for (let j = 0; j < arrSeg.length; j++) {
    arrSeg[j].style.backgroundColor = "initial";
    arrSeg[j].style.boxShadow = "initial";
  }
}

function setDisplay() {
  for (let i = 0; i <= 9; i++) {
    if (entry.value == i) {
      setEntry(arrays[i]);
    }
  }
}

function setEntry(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (actualColor == "Ambar") {
      root.style.setProperty(`${colorTriangles[arr[i]]}`, "goldenrod");
      arrSeg[arr[i]].style.backgroundColor = "goldenrod";
      arrSeg[arr[i]].style.boxShadow = "0px 0px 50px #ffe60085";
    } else if (actualColor == "Green") {
      root.style.setProperty(`${colorTriangles[arr[i]]}`, "#00FF00");
      arrSeg[arr[i]].style.backgroundColor = "#00FF00";
      arrSeg[arr[i]].style.boxShadow = "0px 0px 50px #73ff0085";
    } else if (actualColor == "Blue") {
      root.style.setProperty(`${colorTriangles[arr[i]]}`, "#0000FF");
      arrSeg[arr[i]].style.backgroundColor = "#0000FF";
      arrSeg[arr[i]].style.boxShadow = "0px 0px 50px #4c00ff85";
    } else {
      root.style.setProperty(`${colorTriangles[arr[i]]}`, "#FF0000");
      arrSeg[arr[i]].style.backgroundColor = "#FF0000";
      arrSeg[arr[i]].style.boxShadow = "0px 0px 50px #ff330085";
    }
  }
}

function animate() {
  clearDisplay();
  entry.value = "-";
  let interval = 400;

  setTimeout(() => {
    buttonStartAnimation.disabled = true;
    buttonCountDown.disabled = true;
    entry.disabled = true;
    colorSelect.disabled = true;
    buttonStartAnimation.style.backgroundColor = "rgba(255, 0, 0, 0.555)";
    root.style.setProperty("--colorA", "green");
    ASegment.style.backgroundColor = "green";
  }, interval);

  setTimeout(() => clearDisplay(), (interval += 100));

  setTimeout(() => {
    root.style.setProperty("--colorB", "purple");
    BSegment.style.backgroundColor = "purple";
  }, (interval += 50));

  setTimeout(() => clearDisplay(), (interval += 100));

  setTimeout(() => {
    root.style.setProperty("--colorC", "blue");
    CSegment.style.backgroundColor = "blue";
  }, (interval += 50));

  setTimeout(() => clearDisplay(), (interval += 100));

  setTimeout(() => {
    root.style.setProperty("--colorD", "salmon");
    DSegment.style.backgroundColor = "salmon";
  }, (interval += 50));

  setTimeout(() => clearDisplay(), (interval += 100));

  setTimeout(() => {
    root.style.setProperty("--colorE", "pink");
    ESegment.style.backgroundColor = "pink";
  }, (interval += 50));

  setTimeout(() => clearDisplay(), (interval += 100));

  setTimeout(() => {
    root.style.setProperty("--colorF", "red");
    FSegment.style.backgroundColor = "red";
  }, (interval += 50));

  setTimeout(() => clearDisplay(), (interval += 100));

  setTimeout(() => {
    root.style.setProperty("--colorA", "green");
    ASegment.style.backgroundColor = "green";
  }, interval);

  setTimeout(() => clearDisplay(), (interval += 100));

  setTimeout(() => {
    root.style.setProperty("--colorB", "purple");
    BSegment.style.backgroundColor = "purple";
  }, (interval += 50));

  setTimeout(() => clearDisplay(), (interval += 100));

  setTimeout(() => {
    root.style.setProperty("--colorG", "white");
    GSegment.style.backgroundColor = "white";
  }, (interval += 50));

  setTimeout(() => clearDisplay(), (interval += 100));

  setTimeout(() => {
    root.style.setProperty("--colorE", "pink");
    ESegment.style.backgroundColor = "pink";
  }, (interval += 50));

  setTimeout(() => clearDisplay(), (interval += 100));

  setTimeout(() => {
    root.style.setProperty("--colorD", "salmon");
    DSegment.style.backgroundColor = "salmon";
  }, (interval += 50));

  setTimeout(() => clearDisplay(), (interval += 100));

  setTimeout(() => {
    root.style.setProperty("--colorC", "blue");
    CSegment.style.backgroundColor = "blue";
  }, (interval += 50));

  setTimeout(() => clearDisplay(), (interval += 100));

  setTimeout(() => {
    root.style.setProperty("--colorG", "white");
    GSegment.style.backgroundColor = "white";
  }, (interval += 50));

  setTimeout(() => clearDisplay(), (interval += 100));

  setTimeout(() => {
    root.style.setProperty("--colorF", "red");
    FSegment.style.backgroundColor = "red";
  }, (interval += 50));

  setTimeout(() => clearDisplay(), (interval += 100));

  setTimeout(() => {
    buttonStartAnimation.disabled = false;
    buttonCountDown.disabled = false;
    entry.disabled = false;
    colorSelect.disabled = false;
    buttonStartAnimation.style.backgroundColor = "initial";
    root.style.setProperty("--colorA", "green");
    ASegment.style.backgroundColor = "green";
  }, interval);

  setTimeout(() => clearDisplay(), (interval += 100));
}

function countDown() {
  clearDisplay();
  entry.value = "-";
  let interval = 1000;
  setTimeout(() => {
    buttonCountDown.disabled = true;
    buttonStartAnimation.disabled = true;
    entry.disabled = true;
    colorSelect.disabled = true;
    buttonCountDown.style.backgroundColor = "rgba(255, 0, 0, 0.555)";
    setEntry(arrNum9);
  }, 100);

  setTimeout(() => clearDisplay(), (interval += 100));

  setTimeout(() => {
    setEntry(arrNum8);
  }, (interval += 50));

  setTimeout(() => clearDisplay(), (interval += 1000));

  setTimeout(() => {
    setEntry(arrNum7);
  }, (interval += 50));

  setTimeout(() => clearDisplay(), (interval += 1000));

  setTimeout(() => {
    setEntry(arrNum6);
  }, (interval += 50));

  setTimeout(() => clearDisplay(), (interval += 1000));

  setTimeout(() => {
    setEntry(arrNum5);
  }, (interval += 50));

  setTimeout(() => clearDisplay(), (interval += 1000));

  setTimeout(() => {
    setEntry(arrNum4);
  }, (interval += 50));

  setTimeout(() => clearDisplay(), (interval += 1000));

  setTimeout(() => {
    setEntry(arrNum3);
  }, (interval += 50));

  setTimeout(() => clearDisplay(), (interval += 1000));

  setTimeout(() => {
    setEntry(arrNum2);
  }, (interval += 50));

  setTimeout(() => clearDisplay(), (interval += 1000));

  setTimeout(() => {
    setEntry(arrNum1);
  }, (interval += 50));

  setTimeout(() => clearDisplay(), (interval += 1000));

  setTimeout(() => {
    buttonCountDown.disabled = false;
    buttonStartAnimation.disabled = false;
    entry.disabled = false;
    colorSelect.disabled = false;
    buttonCountDown.style.backgroundColor = "initial";
    setEntry(arrNum0);
  }, (interval += 50));

  setTimeout(() => clearDisplay(), (interval += 1000));
}
