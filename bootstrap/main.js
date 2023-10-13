console.log('main.js är laddad');
/*
- Hämta en array med djurobjekt i JavaScript (bild, namn, ålder, etc) CHECK
- Loopa arrayen och skapa HTML-element för varje djur CHECK
- Lägg till elementen i DOM:en CHECK
- Lägg till en click-lyssnare på varje djur
- När ett djur klickas, visa dennes fakta i en sidebar

#### JavaScript:

- Array med djurobjekt CHECK
- for-loop för att skapa HTML-element CHECK
- appendChild för att lägga till i DOM CHECK
- addEventListener för klick
- innerHTML eller textContent för att uppdatera sidebar

*/

function createAnimalCard(animal, i){
    const animalName = animal.name;
    const animalDescription = animal.shortDescription;
    const animalImage = animal.imageName;
    // ${animalName}
    let htmlTemplate = `<div class="col">
        <div class="card" style="width: 18rem;">
            <img src="${animalImage}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${animalName}</h5>
                <p class="card-text">${animalDescription}</p>
                <a href="#" class="btn btn-primary animal-${i}" onclick="showSidebar(event)">Läs mer</a>
            </div>
        </div>
    </div>`;
    // animal-0 animal-1 animal-2
    return htmlTemplate;
}

function insertAnimalCard(htmlTemplate){
    // zoo-container
    const zooContainer = document.querySelector(".zoo-container");
    // Lägga in varje animal i vår zooContainer
    zooContainer.innerHTML += htmlTemplate;
}

function showSidebar(event){
    // Hämta klassen som knappen vi tryckte på har
    let animalNumber = event.target.className;
    // Splitta strängen på " " (mellanslag) för att få en array med alla klasser.
    // btn btn-primary animal-1
    const splitClass = animalNumber.split(" ");
    // ["btn", "btn-primary", "animal-1"]
    const animalClass = splitClass[2].split("-");
    // animal-1 => ["animal", "1"];
    const animalPosition = animalClass[1];

    const asideHeadline = document.querySelector("h2");
    const asideDescription = document.querySelector("aside > p");
    
    const currentAnimal = zoo[animalPosition];

    // Stoppa in species och longDesc i sidebaren
    asideHeadline.innerText = currentAnimal.species;
    asideDescription.innerText = currentAnimal.longDescription;
}

// Skapa en array med alla våra djur. Varje djur är ett object.
const bear = {
    name: "Bamse",
    age: 14,
    imageName: "images/bear.jpg",
    shortDescription: "Bamse har varit är ett tag",
    longDescription: "Bamse kom hit från skogarna utanför Järlåsa, han trivs väldigt bra i fångenskap",
    species: "Ursa ursa"
}

const kangaroo = {
    name: "Mohammed Ali",
    age: 23,
    imageName: "images/kangaroo.jpg",
    shortDescription: "Mohammed Ali är en riktig fighter",
    longDescription: "Vår känguru är även våran bästa säkerhetsvakt på Skansen",
    species: "Macropus rufus"
}

const monkey = {
    name: "Herr Nilsson",
    age: 8,
    imageName: "images/monkey.jpg",
    shortDescription: "Herr Nilsson var tidigare en skådespelare",
    longDescription: "Herr Nilsson deltog i inspelningen av Pippi Långstrump 1974",
    species: "Homo sapiens"
}

// Skapa upp en array och sen stoppar vi in våra djur i den med hjälp av metoden push()
const zoo = [];
zoo.push(bear);
zoo.push(kangaroo);
zoo.push(monkey);

// Loopa igenom zoo för att sen kunna stoppa in djuren, en efter en.
for(let i = 0; i < zoo.length; i++){
    const currentAnimal = zoo[i];
    // Skapa HTML elementet som behövs för att visa djuret
    const animalCard = createAnimalCard(currentAnimal, i);
    // Stoppa in vår HTML-string i vår befintliga HTML
    insertAnimalCard(animalCard);
}