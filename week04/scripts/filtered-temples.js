document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

const menuToggle = document.getElementById("menu-toggle");
const navList = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
    navList.classList.toggle("show");
    if (navList.classList.contains("show")) {
        menuToggle.innerHTML = "X";
    } else {
        menuToggle.innerHTML = "☰";
    }
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41000,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/400x250/rome-italy-temple-lds-215651-wallpaper.jpg"
},
{
    templeName: "Salt Lake Utah",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253000,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake/400x250/salt_lake_temple_exterior.jpg"
},
{
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x250/accra-ghana-temple-lds-102857-wallpaper.jpg"
}
];

const templeContainer = document.querySelector("#templeCards");

function displayTemples(temples) {
    templeContainer.innerHTML = "";

    temples.forEach((temple) => {
        const card = document.createElement("section");

        const name = document.createElement("h2");

        const location = document.createElement("p");

        const dedicated = document.createElement("p");

        const area = document.createElement("p");

        const image = document.createElement("img");  


        name.textContent = temple.templeName;
        location.textContent = `Location: ${temple.location}`;
        dedicated.textContent = `Dedicated: ${temple.dedicated}`;
        area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;

        image.src = temple.imageUrl;
        image.alt = temple.templeName;
        image.loading = "lazy";
        image.width = 400;
        image.height = 250;

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(image);

        templeContainer.appendChild(card);

    });
}

displayTemples(temples);

function filterTemples(category) {
    let filteredTemples;

    if (category === "old") {
        filteredTemples = temples.filter((temple) =>{
            return parseInt(temple.dedicated) < 1900;
        });
    }

    else if (category === "new") {
        filteredTemples = temples.filter((temple) =>{
            return parseInt(temple.dedicated) > 2000;
        });
    }

    else if (category === "large") {
        filteredTemples = temples.filter((temple) =>{
            return temple.area > 90000;
        });
    }

    else if (category === "small") {
        filteredTemples = temples.filter((temple) =>{
            return temple.area < 10000;
        });
    }

    else {
        filteredTemples = temples;
}

displayTemples(filteredTemples);
}

document.querySelector("#home").addEventListener("click", () => {
    filterTemples("home");
});

document.querySelector("#old").addEventListener("click", () => {
    filterTemples("old");
});

document.querySelector("#new").addEventListener("click", () => {
    filterTemples("new");
});

document.querySelector("#large").addEventListener("click", () => {
    filterTemples("large");
});

document.querySelector("#small").addEventListener("click", () => {
    filterTemples("small");
});
