let box = document.getElementById("box");

box.style.backgroundColor = "blue";
box.style.width = "100px";
box.style.height = "100px";

document.getElementById("width").addEventListener("keyup", () => {
  box.style.width = document.getElementById("width").value + "px";
  box.style.backgroundColor = getRandomColor();
});
document.getElementById("height").addEventListener("keyup", () => {
  box.style.height = document.getElementById("height").value + "px";
  box.style.backgroundColor = getRandomColor();
});
document.getElementById("backgroundColor").addEventListener("input", () => {
  box.style.backgroundColor = document.getElementById("backgroundColor").value;
});

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function addParagraph(number) {
  let article = document.getElementById("article");
  console.log(article);
  for (let i = 0; i < number; i++) {
    let p = document.createElement("input");
    p.id = i;
    p.innerHTML = "This is paragraph number " + (i + 1);
    p.disabled = true;
    console.log(p);
    article.appendChild(p);
  }
}

addParagraph(3);

document.getElementById("2").remove();
