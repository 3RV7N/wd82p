// DOM Manipulation & Events

//Select nodes in the DOM

//example
//const container = document.querySelector("#container");

//const content = document.createElement("div");
//content.classList.add("content");
//content.textContent = "This is a content text";

//container.appendChild(content);

//const display = document.querySelector(".display");

//cREATE NODES IN THE DOM
//const div = document.createElement("div");
//div.classList.add("stop");

//Append elements in the DOM or another node
//container.appendChild(div);

//Remove elements from the DOM or another node
//container.removeChild(div);

//const div2 = document.createElement("div");

//div2.style.height = "100px";
//div2.style.width = "100px";
//div2.style.backgroundColor = "red";

//

//div2.setAttribute(
//  "style",
//  "height: 100px background-color: red; width: 100px;"
//);

//container.appendChild(div2);

//div2.classList.add("red-box");
//div2.classList.remove("red-box");
//div2.classList.toggle("red-box");

//div.textContent = "Hello World!";

const btn = document.querySelector("#btn");
btn.addEventListener("click", changeText);

function changeText() {
  if (btn.textContent === "Clicked!") {
    btn.textContent = "Click Me";
  } else {
    btn.textContent = "Clicked";
  }
}

const body = document.body;
const div = document.createElement("div");
const p = document.createElement("p");
p.innerText = "Hey I'm Red";
p.style.color = "red";
div.append(p);

const h3Element = document.getElementById("h3Paragraph");
h3Element.textContent = "Hey I'm Blue";
h3Element.style.color = "blue";

body.append(div);
