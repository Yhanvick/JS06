const IMAGE_URL = "https://placehold.co/200";
//lo pongo todo en imayusculas porque será una constante global
const CARD_CONTAINER = document.getElementById("container");
//son variables contexto¿?
const IMG_CONTAINER = document.getElementById("img-container");

const users = [
    {
        id: 1,
        user_name: 'User1',
        description: 'lorem ipsum',
        age: '46',
        fav_music: {
            bands: [
                'Band 1', 'Band 2', 'Band 3', 'Band 4'
            ]
        }
    },
    {
        id: 2,
        user_name: 'User LastName',
        description: 'Lorem lorem lorem',
        age: '23',
        fav_music: {
            bands: [
               'Band 1', 'Band 2', 'Band 3', 'Band 4'
            ]
        }
    },

    {
        id: 3,
        user_name: 'Selene',
        description: 'Lorem lorem lorem',
        age: '23',
        fav_music: {
            bands: [
               'Band 1', 'Band 2', 'Band 3', 'Band 4'
            ]
        }
    }
]

function createCard(user)
{
    const card = document.createElement("div");
    //const image = document.createElement("img");
    const userName = document.createElement("h3");
    const description = document.createElement("p");
    const age = document.createElement("p");
    const bands = document.createElement("ul");

    const bandList = user.fav_music.bands.map(e => {
        const item = document.createElement("li");
        item.textContent = e; 
        return item;
    });

    userName.textContent = user.user_name;
    description.textContent = user.description;
    age.textContent = user.age;

    bands.append(...bandList);
    card.append(userName, description, age, bands);
    
    CARD_CONTAINER.append(card);
}

users.forEach(user => createCard(user));

// Alternar visibilidad de la tarjeta al hacer clic en el botón
document.getElementById("btn-hide").addEventListener("click", () => {
    CARD_CONTAINER.style.visibility = 
        CARD_CONTAINER.style.visibility === "hidden" ? "visible" : "hidden";
});