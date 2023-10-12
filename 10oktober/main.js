/*
- Lägg till text och stilar baserat på vilken bild som visas
- Lägg till rubrik och brödtext till sidan
- Styla med CSS (färger, typsnitt, layout)
*/

// Skapa en variabel för varje button
const hideButton = document.getElementById("hideButton1");

const widthButton = document.getElementById("widthButton1");

// Skapa en variabel för "Byt bild"
const changeImageButton = document.getElementById("changeImage");

// DRY - Dont repeat yourself
const kitten = document.getElementById("image1");

// En funktion för att visa bilden
function showHideImage() {

    // Vi refaktoriserar funktionen pga ändrat uppdrag
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

// En funktion som byter ut bilden
function changeImageFunction(){
    // Skapa en array med object som innehåller information
    // om bildens src.

    const allImages = [
        {
            src: "Katt.jpg",
            alt: "Sex stycken söta katter",
            getSrc: function(){
                return this.src;
            },
            headlineText: "Collage av katter",
            descriptionText: "Här ser vi sex stycken katter"
        },
        {
            src: "Lion.jpg",
            alt: "Skräckinjagande lejon",
            getSrc: function(){
                return this.src;
            },
            headlineText: "Lejonet är kungen på savannen",
            descriptionText: "Vi har en stolt lejonhanne på savannen, akta er!"
        },
        {
            src: "Uggla.jpg",
            alt: "Uggla som sitter på en pinne",
            getSrc: function(){
                return this.src;
            },
            headlineText: "Ugglan vilar",
            descriptionText: "Ugglan vilar på en pinne denna vinterdag"
        },
    ];

    // Hämta en av dom på random.
    const getRandomInt = function(max) {
        // Tar ett slumpmässigt tal mellan 0 och 1, gångrar med max
        // Rundar siffran till ett heltal, nedåt.
        return Math.floor(Math.random() * max);
    }
    
    const choosenImage = allImages[getRandomInt(allImages.length)];
    // Sätt kitten.src till den valda objectets src
    kitten.src = choosenImage.getSrc();
    kitten.alt = choosenImage.alt;

    // Skapa en variabel för H1 och P
    const headline = document.getElementById("headline");
    const description = document.getElementById("description");
    // Sätta texten till den valda objectets headline och description
    headline.innerText = choosenImage.headlineText;
    description.innerText = choosenImage.descriptionText;
}
// Koppla en eventListener till varje button
hideButton.addEventListener("click", showHideImage);
widthButton.addEventListener("click", changeWidthImage);
changeImageButton.addEventListener("click", changeImageFunction);