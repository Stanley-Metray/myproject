const header = document.getElementById("header");

// sub-heading code
const h3 = document.createElement("h3");
h3.innerText="Buy high quality organic fruits online";
h3.style.fontStyle="italic";
header.appendChild(h3);

// paragraph code inside 2nd div

const p = document.createElement("p");
p.setAttribute("id", "fruits-total");
p.innerText="Total fruits: 4";

const second_div = document.getElementsByTagName("div")[1];
second_div.appendChild(p);