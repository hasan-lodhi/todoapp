var inp = document.getElementById("inp");
var ul = document.getElementById("ul");

function deleteTask(btn) {
  btn.parentNode.remove(btn);
}

function editTask(btn) {
  btn.parentNode.firstChild.nodeValue = prompt("Edit your Task");
}

function delAll() {
  ul.innerHTML = "";
}

function addTask() {
  var li = document.createElement("li");
  var liVal = document.createTextNode(inp.value);
  li.appendChild(liVal);

  ul.appendChild(li);

  var del = document.createElement("button");
  var delVal = document.createTextNode("Delete");
  del.className = "btn btn-outline-danger mx-2";
  del.appendChild(delVal);
  del.setAttribute("onclick", "deleteTask(this)");


  li.appendChild(del);

  var edit = document.createElement("button");
  var editVal = document.createTextNode("Edit");
  edit.className = "btn btn-outline-warning mx-2";
  edit.appendChild(editVal);
  edit.setAttribute("onclick", "editTask(this)");

  li.appendChild(edit);

  inp.value = "";
}