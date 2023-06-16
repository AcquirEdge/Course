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