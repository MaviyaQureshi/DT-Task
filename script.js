const mainTitle = document.getElementById("body-2-title");
const mainDescription = document.getElementById("body-2-content");
const title1 = document.getElementById("1-title");
const description1 = document.getElementById("description-1");
const title2 = document.getElementById("2-title");
const description2 = document.getElementById("description-2");
const title3 = document.getElementById("3-title");
const description3 = document.getElementById("description-3");
const title4 = document.getElementById("4-title");
const description4 = document.getElementById("description-4");
const content4 = document.getElementById("card-4-content");

const iframe = document.getElementById("Frame");

const list = [
  { title1, description1 },
  { title2, description2 },
  { title3, description3 },
  { title4, description4 },
];

console.log(list);

fetch("./data.json")
  .then((response) => response.json())
  .then((jsonData) => {
    createTaskCards(jsonData);
  })
  .catch((error) => console.error("Error fetching JSON data:", error));

const createTaskCards = (jsonData) => {
  const dummy = jsonData["tasks"][0]["assets"];
  console.log(dummy);
  mainTitle.innerHTML = jsonData["tasks"][0]["task_title"];
  mainDescription.innerHTML = jsonData["tasks"][0]["task_description"];

  for (let i = 0; i < dummy.length; i++) {
    for (let j = 0; j < 1; j++) {
      if (i == 0) {
        iframe.src = dummy[i]["asset_content"].trim();
      }
      list[i][Object.keys(list[i])[j]].innerHTML = dummy[i]["asset_title"];
      list[i][Object.keys(list[i])[j + 1]].innerHTML =
        "<b>Description: </b>" + dummy[i]["asset_description"];

      if (i == dummy.length - 1) {
        content4.src = dummy[i]["asset_content"].trim();
        console.log(content4);
      }
    }
  }
};
