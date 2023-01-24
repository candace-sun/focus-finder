returnStoreData();

 function returnStoreData(){
    let array = JSON.parse(localStorage.getItem("table"));

    if (array != null){
      for (let i = 0; i < array.length; i++){
        let tbody = document.getElementById('saveTable').getElementsByTagName('tbody')[0];
        let newRow = tbody.insertRow();
        let point = newRow.insertCell();
        let task = newRow.insertCell();
        let assign = newRow.insertCell();
        let due = newRow.insertCell();
        point.appendChild(document.createTextNode(array[i].point));
        task.appendChild(document.createTextNode(array[i].taskName));
        assign.appendChild(document.createTextNode(array[i].assignClass));
        due.appendChild(document.createTextNode(array[i].dueDate));
      }
    }
 }
 
 function storeData(){
    let taskName=document.getElementById("taskName").value;
    let assignClass=document.getElementById("assignClass").value;
    let dueDate=document.getElementById("dueDate").value;
    let tbody = document.getElementById('saveTable').getElementsByTagName('tbody')[0];
    let newRow = tbody.insertRow();
    let point = newRow.insertCell();
    let task = newRow.insertCell();
    let assign = newRow.insertCell();
    let due = newRow.insertCell();
    let array = new Array();
    array = JSON.parse(localStorage.getItem("table"));
    if (array == null){
      array = new Array();
    }
    array.push({"taskName":taskName, "assignClass":assignClass, "dueDate":dueDate, "point":addAssignment()})
    localStorage.setItem("table",JSON.stringify(array));

    point.appendChild(document.createTextNode(addAssignment()));
    task.appendChild(document.createTextNode(taskName));
    assign.appendChild(document.createTextNode(assignClass));
    due.appendChild(document.createTextNode(dueDate));
  }

function clearData(){
  localStorage.clear();
  let tbody = document.getElementById('saveTable').getElementsByTagName('tbody')[0];
  tbody.innerHTML = "";
  var header = table.createTHead();
  let newRow = header.insertRow(0);
  let point = newRow.insertCell(0);
  let task = newRow.insertCell(0);
  let assign = newRow.insertCell(0);
  let due = newRow.insertCell(0);

  point.innerHTML = "<b>Point</b>";
  task.innerHTML = "<b>Name</b>";
  assign.innerHTML = "<b>Class</b>";
  due.innerHTML = "<b>Due Date</b>";
}