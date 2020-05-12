const cardPrice = document.querySelectorAll(".card-price"),
      check = document.querySelector(".switch-check");

/* EvenListener */
check.addEventListener("click", toggleValues);

/* Function */
function toggleValues(){
   if (check.checked) {
      cardPrice[0].lastChild.nodeValue = "199.99";
      cardPrice[1].lastChild.nodeValue = "249.99";
      cardPrice[2].lastChild.nodeValue = "399.99";
   }
   else {
      cardPrice[0].lastChild.nodeValue = "19.99";
      cardPrice[1].lastChild.nodeValue = "24.99";
      cardPrice[2].lastChild.nodeValue = "39.99";
   }
}