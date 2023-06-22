// getElementById

let titleElement = document.getElementById("title");
console.log(titleElement);

console.log(titleElement.innerText);
console.log(titleElement.tagName);

// getElementsByTagName

let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

console.log(paragraphs[0].innerText);
console.log(paragraphs[paragraphs.length - 1]);

// Node Relationships

let parent = titleElement.parentNode;
console.log(parent);

console.log(parent.children[0]);

console.log(parent.firstChild);
console.log(parent.firstChild.nextSibling);

// Changing Text and HTML Content
titleElement.innerText = "Learning DOM Manipulation";

let firstParagraph = paragraphs[0];
let secondParagraph = paragraphs[1];

firstParagraph.innerText = "This is some NEW text for Section 1\nNew line here";
secondParagraph.textContent = "This is some NEW text for Section 2\nNew line here";

let sections = document.getElementsByTagName("section");
sections[1].innerHTML = "<h2>Section 2</h2><p>New paragraph.</p><button>Change Section 2 Text</button>";

// Adding Elements
let newSection = document.createElement("section");
newSection.innerHTML = "<h2>Section 3</h2>";

let main = document.getElementsByTagName("main")[0];
main.appendChild(newSection);

let newButton = document.createElement("button");
newButton.innerText = "Change Section 1 Text";
sections[0].appendChild(newButton);

// Removing Elements
newSection.remove();

// Event Handling
let buttons = document.getElementsByTagName("button");

buttons[0].addEventListener("click", (event) => {
    console.log(event);
    firstParagraph.innerText = "Section 1 Text has been changed.";
})

buttons[1].addEventListener("click", () => {
    console.log(secondParagraph);
    secondParagraph = sections[1].children[1];
    secondParagraph.innerText = "Section 2 Text has been changed.";
})