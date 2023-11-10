function component() {
  const comp = document.createElement("div");

  comp.innerHTML = "Test";

  return comp;
}

document.body.appendChild(component());
