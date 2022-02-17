let jug1max = 5;
let jug2max = 7;
let jug1 = 0;
let jug2 = 0;
let cache;

document.getElementById("jug1-fill").addEventListener("click", fillJug1);
document.getElementById("jug1-drain").addEventListener("click", drainJug1);
document.getElementById("jug2-fill").addEventListener("click", fillJug2);
document.getElementById("jug2-drain").addEventListener("click", drainJug2);

function fillJug1() {
  document.getElementById("jug1-contents").innerHTML = jug1max;
  jug1 = jug1max;
}
function drainJug1() {
  document.getElementById("jug1-contents").innerHTML = 0;
  jug1 = 0;
}

function fillJug2() {
  document.getElementById("jug2-contents").innerHTML = jug2max;
  jug2 = jug2max;
}
function drainJug2() {
  document.getElementById("jug2-contents").innerHTML = 0;
  jug2 = 0;
}
function jug1to2() {
  cache = jug1 + jug2;
  if (cache > jug2max) {
    cache -= jug2max;
    document.getElementById("jug2-contents").innerHTML = jug2max;
    document.getElementById("jug1-contents").innerHTML = cache;
  }
  if (cache < jug2max) {
    document.getElementById("jug2-contents").innerHTML = jug2 + cache;
    document.getElementById("jug1-contents").innerHTML = 0;
  }
}
function jug2to1() {
  cache = jug1 + jug2;
  if (cache > jug1max) {
    cache -= jug1max;
    document.getElementById("jug1-contents").innerHTML = jug1max;
    document.getElementById("jug2-contents").innerHTML = cache;
  }
  if (cache < jug1max) {
    document.getElementById("jug1-contents").innerHTML = jug1 + cache;
    document.getElementById("jug2-contents").innerHTML = 0;
  }
}
