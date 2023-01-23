// some data structure to store assignment info / point urgency

// triggers when "add assignment" button is clicked
function addAssignment() {
  var gradeVar = document.getElementById("grade").value;
  var pointVar = document.getElementById("pointValue").value;
  var e = document.getElementById("dueDate");
  var dueDateVar = e.value;

  var priority = getPriority(parseInt(gradeVar), parseInt(pointVar), dueDateVar);
  return priority;
}

// when "add assignment" is clicked, the assignment gets added to the "To Do" list
function getPriority(grade, points, dueDate) {
  var pointUrgency = 0;

  if (grade >= 90)
    pointUrgency += 1;
  else if (grade >= 80)
    pointUrgency += 2;
  else if (grade >= 70)
    pointUrgency += 5;
  else
    pointUrgency += 8;

  if (points <= 10)
    pointUrgency += 1;
  else if (points <= 30)
    pointUrgency += 2;
  else if (points <= 50)
    pointUrgency += 3;
  else if (points <= 100)
    pointUrgency += 4;
  else
    pointUrgency += 5;

  // due date variable: value of select box
  if (dueDate == "Later than 2 weeks")
    pointUrgency += 1;
  else if (dueDate == "1-2 weeks")
    pointUrgency += 2;
  else if (dueDate == "3 days-a week")
    pointUrgency += 3;
  else if (dueDate == "2-3 days")
    pointUrgency += 4;
  else if (dueDate == "Tomorrow")
    pointUrgency += 5;
  else if (dueDate == "Today")
    pointUrgency += 8;

  return pointUrgency;
}

function addClass() {
  var classVar = document.getElementById("classToAdd").value;
  var x = document.getElementById("assignClass");
  var option = document.createElement("option");
  option.text = classVar;
  option.value = classVar;
  x.add(option, 0);
  document.getElementById("assignClass").selectedIndex = 0;
}