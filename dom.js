// // Examine the document object
// // console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title="xyz"
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// // document.all[10].textContent = "hello";
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID
// console.log(document.getElementById("header-title"));
// var headerTitle = document.getElementById("header-title");
// var header = document.getElementById("main-header");

// headerTitle.textContent = "hello";
// headerTitle.innerHTML = "GoodBye";
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = "<h3>Hello</h3>";
// header.style.borderBottom = "solid 3px black";

// GETELEMENTSBYCLASSNAME
// var items = document.getElementsByClassName("list-group-item");
// console.log((items[1].textContent = "hello"));

//QUERYSELECTOR
// var submit = document.querySelector('input[type="submit"]');
// submit.value = "send";
// console.log(submit);
// var odd = document.querySelectorAll("li:nth-child(odd");
// var even = document.querySelectorAll("li:nth-child(even");

// odd.forEach((e) => {
//   e.style.color = "red";
// });
// even.forEach((e) => {
//   e.style.color = "orange";
// });

//TRAVERSINGADOM

// var itemList = document.querySelector("#items");
// console.log(itemList.parentNode);
// itemList.parentNode.style.background = "red";
// itemList.parentNode.parentNode.style.background = "orange";
// itemList.parentNode.parentNode.parentNode.style.background = "blue";

// var itemList = document.querySelector("#items");
// console.log(itemList.parentElement);
// itemList.parentElement.style.background = "red";
// itemList.parentElement.parentElement.style.background = "orange";
// itemList.parentElement.parentElement.parentElement.style.background = "blue";

// var itemList = document.querySelector("#items");
// console.log(itemList.childNodes);
// console.log(itemList.children);
// itemList.lastElementChild.style.color = "red";
// itemList.nextSibling.style.color = "blue";

// create a div
// var newDiv = document.createElement("div");
// newDiv.style.background = "red";
// // newDiv.style.height = "100px";
// // newDiv.textContent = "hello";

// var newDivText = document.createTextNode("Hello World");
// newDiv.appendChild(newDivText);
// var container = document.querySelector("header .container");
// var h1 = document.querySelector("header h1");
// container.insertBefore(newDiv, h1);

//EVENTS
// var button = document
//   .getElementById("button")
//   .addEventListener("click", buttonClick);

// function buttonClick(e) {
//   //   console.log("buttonClick");
//   // document.getElementById("header-title").textContent = "changed";
//   //   console.log(e);
//   console.log(e.target);
//   console.log(e.target.id);
//   console.log(e.target.className);
//   console.log(e.target.classList);
//   var output = document.getElementById("output");
//   output.innerHTML = "<h1>" + e.target.className + "</h1>";
//   console.log(e.type);
//   //   console.log(e.clientX);
//   //     console.log(e.clientY);
//   //   console.log(e.offsetX);
//   console.log(e.ctrlKey);
// }

// var button = document.getElementById("button");
// // .addEventListener("click", runEvents);
// //   .addEventListener("dblclick", runEvents);
// //   .addEventListener("mousedown", runEvents);
// var box = document.getElementById("box");
// box.addEventListener("mousemove", runEvents);
// var output = document.getElementById("output");
// var input = document.querySelector('input[type="text"]');
// var form = document.querySelector("form");
// // input.addEventListener("keydown", runEvents);
// // input.addEventListener("focus", runEvents);
// // input.addEventListener("blur", runEvents);
// // input.addEventListener("cut", runEvents);
// // input.addEventListener("paste", runEvents);
// var select = document.querySelector("select");
// input.addEventListener("input", runEvents);
// select.addEventListener("change", runEvents);
// form.addEventListener("submit", runEvents);

// function runEvents(e) {
//   console.log("EVENT Type:" + e.type);
//   //   console.log(e.target.value);
//   e.preventDefault();
//   //   document.getElementById("output").innerHTML =
//   //     "<h1>" + e.target.value + "</h1>";
//   //   document.body.style.display = "none";
//   //   output.innerHTML =
//   //     "<h3> MouseX :" + e.offsetX + "</h3><h3>MouseY:" + e.offsetY + "</h3>";
//   //   document.body.style.background =
//   //     "rgb(" + e.offsetX + "," + e.offsetY + ",40)";
// }

var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");
//FORM SUBMIT EVENT
form.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);
filter.addEventListener("keyup", filterItem);

function addItem(e) {
  e.preventDefault();

  //GET INPUT VALUE
  var newItem = document.getElementById("item").value;

  //Create element
  var li = document.createElement("li");
  li.className = "list-group-item";
  // ADD text node with input value
  li.appendChild(document.createTextNode(newItem));
  //Create delete
  var deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  deleteBtn.appendChild(document.createTextNode("X"));
  li.appendChild(deleteBtn);
  itemList.appendChild(li);
}

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Do you want to continue ?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

function filterItem(e) {
  var text = e.target.value.toLowerCase();
  var items = itemList.getElementsByTagName("li");
  Array.from(items).forEach((item) => {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
