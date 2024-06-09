
function generateName(){
    const names = ["Enzo santos", "Jobers poggers", "Suzy", "Pompers", "Roberto", "Nojento", "Sapato", "Kuririn", "Kuon", "Jamal", "januario", "Jubileu", "Froggers"];
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
}


function generateDescription(){
    const descriptions = ["Gato Top", "Dorme o dia todo", "Rasgou o meu sofá", "Mia muito", "Dá mortal"];
    const randomIndex = Math.floor(Math.random() * descriptions.length);
    return descriptions[randomIndex];
}

function generatePrice(){
    return (Math.random() * 10 + 10).toFixed(2);
}

async function generateImage(){
    return fetch("https://api.thecatapi.com/v1/images/search").then(
        response => response.json()
    ).then(
        data => data[0].url
    );
}

async function generateCat() {

    const name = generateName();
    const image = await generateImage();
    const description = generateDescription();
    const price = generatePrice();
    
    return { "name": name, "image": image, "description": description, "price": price };

}

function placeCatsCard(cat) {

    const cardGrid = document.querySelector("#cards-grid");
    
    cardGrid.innerHTML +=`
    <div class="card">
        <img src="${cat.image}" />
        <h4>${cat.name}</h4>
        <p class="description">${cat.description}</p>
        <div>
            <P class="price">Price: ${cat.price}$</P>        
        </div>
    </div>
    `
}

document.addEventListener("DOMContentLoaded", async function () {

    for (let i = 0; i < 12; i++) {
        const cat = await generateCat();
        placeCatsCard(cat);
    }

});