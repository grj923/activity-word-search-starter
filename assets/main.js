let searchButton = document.querySelector("#search-button");
let textBox = document.querySelector("#textbox");
let sentence = document.querySelector("#sentence");
let searchResult = document.querySelector("#search-results");
let words = sentence.innerText.split(/\s/);
let counter = 0;

searchButton.addEventListener("click", function () {
  console.log(textBox.value);
  console.log(sentence.innerText);
});
for (let i = 0; i < words.length; i++) {
  if (words[i].includes("of")) {
    counter++;
    console.log(counter);
    searchResult.innerText = "Match!";
  }
}
