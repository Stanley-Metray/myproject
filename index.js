const bs_head=document.querySelector("#basket-heading");

bs_head.style.color = "brown";

const even_childs = document.querySelectorAll("li:nth-child(2n)");

Array.from(even_childs).forEach((element)=>{
    element.style.backgroundColor="red";
    element.style.color="white";
});