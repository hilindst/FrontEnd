DOM document object model, an api, "putting things in an object logical format"



const javascriptSingleButton = document.querySelector('.btn_onclick')
const javascriptMultipleButtons = document.querySelectorAll('btn_onclick')

javascriptSingleButton.onclick = function() {
  document.body.style.backgroundColor = "#a7f3d0";
}

changeBackground() { //void
  document.body.style.backgroundColor = "#bae6fd";
}

or in button class html

javascriptMultipleButtons.forEach((button) => {
  button.onclick = function () {
    document.body.style.backgroundColor = "#a7f3d0";
  }
})

const eventListenerButton = document.querySelector('.btn_event_listener');

eventListenerButton.addEventListener('click', changeBgToRandom); //no paranthesis around interior function

function changeBgToRandom () {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  document.body.style.backgroundColor = `#${randomColor}`;
}

3 Ways to manipulate DOM
1) html tags
2) calling attributes
3) eventListener


Basically going over homework videos
