function makeComment() {
  document.querySelector(".divider").style.visibility = "visible";

  let name = document.querySelector("#name").value;
  let comment = document.querySelector("#comment").value;

  let text = `<b>${name}: </b>${comment}
    <hr>`;

  console.log(name, comment, text);

  let newComment = document.createElement("p");
  newComment.innerHTML = text;
  document.querySelector("#comments").appendChild(newComment);
}
