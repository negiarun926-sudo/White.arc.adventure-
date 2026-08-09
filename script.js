const images = {
  spiti: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Spiti%20Valley.jpg",
  ladakh: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Landscape.ladakh.jpg",
  keyMonastery: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Key%2C%20Spiti%20Valley.jpg",
  pangong: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Pangong%20lake%20at%20leh%20ladakh%20%282%29.jpg",
  tsoMoriri: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Tso%20Moriri%2C%20Ladakh.jpg"
};

const tours = [
  {
    name: "Spiti Valley Adventure",
    duration: "7 Days / 6 Nights",
    description: "A high-altitude cold-desert journey through Himachal's most dramatic valley.",
    image: images.spiti
  },
  {
    name: "Ladakh Expedition",
    duration: "6 Days / 5 Nights",
    description: "A Himalayan expedition through Leh, Nubra, Pangong and Tso Moriri.",
    image: images.ladakh
  }
];

// Render packages
const carousel = document.getElementById("packageCarousel");
tours.forEach(tour => {
  const card = document.createElement("div");
  card.className = "tour-card";
  card.innerHTML = `
    <img src="${tour.image}" alt="${tour.name}" onerror="this.src='${images.keyMonastery}'">
    <h3>${tour.name}</h3>
    <p>${tour.duration}</p>
    <p>${tour
