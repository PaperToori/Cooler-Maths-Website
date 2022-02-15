let jug1 = 0;
let jug2 = 0;
document.getElementById("jug1-contents").innerHTML = jug1;

document.getElementById("jug1-fill").addEventListener("click", fillJug1);
document.getElementById("jug1-drain").addEventListener("click", drainJug1);
document.getElementById("jug2-fill").addEventListener("click", fillJug2);
document.getElementById("jug2-drain").addEventListener("click", drainJug2);

function fillJug1() {
  document.getElementById("jug1-contents").innerHTML = 5;
}
function drainJug1() {
  document.getElementById("jug1-contents").innerHTML = 0;
}

function fillJug2() {
  document.getElementById("jug2-contents").innerHTML = 7;
}
function drainJug2() {
  document.getElementById("jug2-contents").innerHTML = 0;
}
