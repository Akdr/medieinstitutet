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
            descriptionText: "Här ser vi sex stycken katter",
            button: {
                backgroundColor: "orange"
            },
            container: {
                border: "3px solid grey"
            },
            getSrcAsBackground: function() {
                // url("Katt.jpg")
                return "url(" + this.src + ")";
            }
        },
        {
            src: "Lion.jpg",
            alt: "Skräckinjagande lejon",
            getSrc: function(){
                return this.src;
            },
            headlineText: "Lejonet är kungen på savannen",
            descriptionText: "Vi har en stolt lejonhanne på savannen, akta er!",
            button: {
                backgroundColor: "orange"
            },
            container: {
                border: "5px solid orange"
            },
            getSrcAsBackground: function() {
                // url("Katt.jpg")
                return "url(" + this.src + ")";
            }
        },
        {
            src: "Uggla.jpg",
            alt: "Uggla som sitter på en pinne",
            getSrc: function(){
                return this.src;
            },
            headlineText: "Ugglan vilar",
            descriptionText: "Ugglan vilar på en pinne denna vinterdag",
            button: {
                backgroundColor: "white"
            },
            container: {
                border: "3px dotted black"
            },
            getSrcAsBackground: function() {
                // url("Katt.jpg")
                return "url(" + this.src + ")";
            }
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

    const allButtons = document.querySelectorAll("button");
    
    // Loopa igenom alla buttons och sätt bakgrundsfärgen 
    // till choosenImage.button.backgroundColor
    allButtons.forEach(function(button){
        button.style.backgroundColor = choosenImage.button.backgroundColor;
    });

    // const container = document.querySelector("div");
    // container.style.border = choosenImage.container.border;
    document.querySelector("div").style.border = choosenImage.container.border;

    // Ändra bakgrunden i body-taggen till den bild vi har valt
    const bodyElement = document.querySelector("body");
    bodyElement.style.backgroundImage = choosenImage.getSrcAsBackground();
    //background-repeat: no-repeat
    //background-cover: cover | contain;
    bodyElement.style.backgroundSize = "100%";
    //bodyElement.style.backgroundRepeat = "no-repeat";
}

const timer = setInterval(showHideImage, 1000);
function stopTimer(){
    clearInterval(timer);
}

document.querySelector("#headline").addEventListener("click", stopTimer);
// Koppla en eventListener till varje button
hideButton.addEventListener("click", showHideImage);
widthButton.addEventListener("click", changeWidthImage);
changeImageButton.addEventListener("click", changeImageFunction);