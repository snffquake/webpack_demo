function component() {
  const element = document.createElement("div");

  element.innerHTML = "";
  element.innerHTML += "click on me";
  element.addEventListener('click', () => {
    import('file-saver').then((fileSaver) =>{
      console.log(fileSaver.saveAs);
    });
    import('./my_module').then((module) => {
      console.log(module.a);
    });

  });

  return element;
}

document.body.appendChild(component());
