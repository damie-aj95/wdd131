document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

const sneakers = [
  { name: "Air Max 90", category: "Sneakers", price: "₦85,000", image: "images/airmax90.webp" },
  { name: "Jordan 1 Retro", category: "Basketball Shoes", price: "₦120,000", image: "images/jordan1retro.webp" },
  { name: "Nike Slides", category: "Slides", price: "₦25,000", image: "images/nikeslides.webp" },
  { name: "Adidas Slides", category: "Slides", price: "₦25,000", image: "images/adidasslides.webp" },
  { name: "Crocs Classic", category: "Crocs", price: "₦35,000", image: "images/crocsclassic.webp" },
  { name: "Nike Socks", category: "Socks", price: "₦5,000", image: "images/nikesocks.webp" }
];

function renderSneakers(list, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  container.innerHTML = list.map(item => {
    const isSaved = favorites.includes(item.name);
    return `
      <div class="sneaker-card">
        <img src="${item.image}" alt="${item.name}" loading="lazy">
        <h3>${item.name}</h3>
        <p>${item.category}</p>
        <p>${item.price}</p>
        <button class="save-btn" data-name="${item.name}">
          ${isSaved ? "Saved ✓" : "Save"}
        </button>
      </div>
    `;
  }).join('');
}

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("save-btn")) {
    const name = e.target.dataset.name;
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (favorites.includes(name)) {
      favorites = favorites.filter(fav => fav !== name);
      e.target.textContent = "Save";
    } else {
      favorites.push(name);
      e.target.textContent = "Saved ✓";
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("filter-btn")) {
    const category = e.target.dataset.category;

    document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
    e.target.classList.add("active");

    const filtered = category === "All"
      ? sneakers
      : sneakers.filter(item => item.category === category);

    renderSneakers(filtered, "sneaker-list");
  }
});


renderSneakers(sneakers.slice(0, 3), "featured-list");
renderSneakers(sneakers, "sneaker-list");