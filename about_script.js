function imgSlider(anything){
    document.querySelector('.FireAlarm').src = anything;
}

function changeCircleColor(color){
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}
function updateHeaderText(newText) {
    const h3Element = document.getElementById("fireAlarmSystemText");
    if (h3Element) {
        h3Element.textContent = newText;
    }
}
function updateDescription(newDescription) {
    document.getElementById('fireAlarmDescription').textContent = newDescription;
}

const text = "Founding Fathers";

function typeText() {
  const description = document.getElementById('fireAlarmSystemText');
  description.textContent = '';
  
  let i = 0;

  function type() {
    if (i < text.length) {
      description.textContent += text.charAt(i);
      i++;
      setTimeout(type, 40); // Adjust the speed here
    }
  }

  type();
}

typeText();



// function changeHeaderPaddingColor(color) {
  //  const header = document.querySelector("header");
   // header.style.backgroundColor = color;
