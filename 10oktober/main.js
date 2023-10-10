// Skapa en variabel för varje button
const hideButton = document.getElementById("hideButton1");
const hideButton2 = document.getElementById("hideButton2");
const hideButton3 = document.getElementById("hideButton3");

const widthButton = document.getElementById("widthButton1");
// En funktion för att visa bilden
function showHideImage() {
    // this.id = hidebutton1

    // Alternativ 1:
    // Vi hämtar ID från image genom att gå från knappen till 
    // föräldern ner till image igen

    // Alternativ 2:
    // Vi hämtar ID från image genom att gå från knappen till dess syskon image
    // I css så betyder + syskon "#hideButton1 + img"
    const buttonId = this.id;
    // "#hideButton1 + button + img"
    const kitten = document.querySelector("#" + buttonId + " + button + img");
    // const kitten = document.getElementById(imageId);
    // Skapa en variabel som berättar om bilden syns eller ej
    const kittenIsVisible = kitten.style.display === "block";

    /* if(kitten.style.display === "block"){
        kittenIsVisible = true;
    } else {
        kittenIsVisible = false;
    } */

    // Skapa en if-sats som gör motsatsen till syns eller dold.
    if(kittenIsVisible){
        // Dölj katten
        kitten.style.display = "none";
    } else {
        // Visa katten
        kitten.style.display = "block";
    }
}

// En funktion för att ändra bildens bredd
function changeWidthImage() {
    const kitten = document.querySelector("img");
    // Ändra bredden på bilden
    kitten.width = 350;
}
// Koppla en eventListener till varje button
hideButton.addEventListener("click", showHideImage);
hideButton2.addEventListener("click", showHideImage);
hideButton3.addEventListener("click", showHideImage);

widthButton.addEventListener("click", changeWidthImage);