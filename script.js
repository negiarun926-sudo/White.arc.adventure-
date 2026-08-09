/* =========================================================
   WHITE.ARC.ADVENTURE
   WEBSITE INTERACTIONS
========================================================= */


/* =========================================================
   TOUR DATA
========================================================= */

const images = {

  spiti:
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Spiti%20Valley.jpg",

  ladakh:
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Landscape.ladakh.jpg",

  keyMonastery:
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Key%2C%20Spiti%20Valley.jpg",

  pangong:
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Pangong%20lake%20at%20leh%20ladakh%20%282%29.jpg",

  tsoMoriri:
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Tso%20Moriri%2C%20Ladakh.jpg"
};


const tours = {

  spiti: {

    name: "Spiti Valley Adventure",

    duration: "7 Days / 6 Nights",

    location: "Himachal Pradesh",

    route:
      "Chandigarh → Narkanda → Kalpa → Tabo → Kaza → Rampur → Chandigarh",

    image: images.spiti,

    description:
      "A high-altitude cold-desert journey through Himachal's most dramatic valley — monasteries, river gorges and some of the highest villages on earth.",

    highlights: [
      "Private Innova Crysta",
      "Premium Stays",
      "Breakfast & Dinner",
      "Experienced Driver-Guide",
      "High Safety Standards",
      "Adventure + Culture"
    ],

    itinerary: [

      {
        day: "DAY 01",
        title: "Chandigarh → Narkanda",

        points: [
          "Pickup from Chandigarh in a private Innova Crysta",
          "Scenic drive through Shimla hills and pine forests",
          "Reach Narkanda",
          "Check-in to premium hotel",
          "Evening relaxation with mountain views",
          "Dinner",
          "Night stay in Narkanda"
        ]
      },

      {
        day: "DAY 02",
        title: "Narkanda → Kalpa",

        points: [
          "Breakfast",
          "Drive towards Kinnaur Valley",
          "Sutlej River and apple orchard views",
          "Reach Kalpa",
          "Kinner Kailash views",
          "Premium hotel",
          "Breakfast & Dinner"
        ]
      },

      {
        day: "DAY 03",
        title: "Kalpa → Tabo",

        points: [
          "Drive into Spiti Valley",
          "Cross Khab",
          "Visit Tabo Monastery",
          "Experience high-altitude desert landscape",
          "Breakfast & Dinner"
        ]
      },

      {
        day: "DAY 04",
        title: "Tabo → Kaza",

        points: [
          "Visit Dhankar Monastery",
          "Dhankar Lake optional hike",
          "Reach Kaza",
          "Explore local cafés and market",
          "Breakfast & Dinner"
        ]
      },

      {
        day: "DAY 05",
        title: "Kaza Sightseeing",

        points: [
          "Hikkim",
          "Komic",
          "Langza",
          "World's highest post office",
          "High-altitude village",
          "Fossils and Buddha statue",
          "Local Spitian culture",
          "Local interaction"
        ]
      },

      {
        day: "DAY 06",
        title: "Kaza → Rampur",

        points: [
          "Early departure",
          "Scenic return route",
          "Reach Rampur",
          "Hotel check-in",
          "Breakfast & Dinner"
        ]
      },

      {
        day: "DAY 07",
        title: "Rampur → Chandigarh",

        points: [
          "Breakfast",
          "Drive back to Chandigarh",
          "Drop-off"
        ]
      }

    ]

  },


  ladakh: {

    name: "Ladakh Expedition",

    duration: "6 Days / 5 Nights",

    location: "Ladakh",

    route:
      "Leh → Nubra → Pangong → Tso Moriri → Manali",

    image: images.ladakh,

    description:
      "A high-altitude Himalayan expedition through Leh, Nubra, Pangong and Tso Moriri, combining dramatic landscapes, culture and premium stays.",

    highlights: [
      "Premium Hotels",
      "Breakfast & Dinner",
      "Local Driver-Guide",
      "Inner Line Permits",
      "Environmental Fees",
      "Medical Oxygen Backup",
      "Toyota Innova Crysta",
      "Premium Properties"
    ],

    itinerary: [

      {
        day: "DAY 01",
        title: "Arrival in Leh — 3,500m",

        points: [
          "Airport pickup",
          "Hotel check-in",
          "Rest for acclimatization",
          "Evening Leh Market"
        ]
      },

      {
        day: "DAY 02",
        title: "Leh Local Sightseeing",

        points: [
          "Magnetic Hill",
          "Hall of Fame",
          "Shanti Stupa",
          "Local monastery / gompa experience"
        ]
      },

      {
        day: "DAY 03",
        title: "Leh → Nubra Valley via Khardung La",

        points: [
          "Scenic drive",
          "Cross Khardung La",
          "Explore Nubra Valley",
          "Overnight stay"
        ]
      },

      {
        day: "DAY 04",
        title: "Nubra → Pangong Lake",

        points: [
          "Beautiful mountain landscapes",
          "Drive towards Pangong",
          "Pangong Lake",
          "Overnight stay near Pangong"
        ]
      },

      {
        day: "DAY 05",
        title: "Pangong → Korzok / Tso Moriri",

        points: [
          "Remote scenic route",
          "Reach Tso Moriri",
          "Korzok village",
          "Overnight stay"
        ]
      },

      {
        day: "DAY 06",
        title: "Korzok → Manali",

        points: [
          "Puga Hot Spring",
          "Tso Kar Lake",
          "Baralacha La",
          "Night stay in Manali"
        ]
      }

    ]

  }

};


/* =========================================================
   HEADER
========================================================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

});


/* =========================================================
   MOBILE MENU
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const menuClose = document.getElementById("menuClose");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  document.body.classList.add("modal-open");
});

menuClose.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  document.body.classList.remove("modal-open");
});


document.querySelectorAll(".mobile-menu nav a").forEach(link => {

  link.addEventListener("click", () => {

    mobileMenu.classList.remove("active");
    document.body.classList.remove("modal-open");

  });

});


/* =========================================================
   IMAGE FALLBACK
========================================================= */

const fallbackImages = [
  images.ladakh,
  images.spiti,
  images.pangong,
  images.tsoMoriri,
  images.keyMonastery
];

let fallbackIndex = 0;


document.querySelectorAll("img").forEach(img => {

  img.addEventListener("error", function() {

    const currentSrc = this.src;

    let nextImage = fallbackImages.find(
      image => image !== currentSrc
    );

    if (nextImage) {
      this.src = nextImage;
    }

  });

});


/* =========================================================
   TOUR MODAL
========================================================= */

const tourModal = document.getElementById("tourModal");
const modalOverlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");

const modalImage = document.getElementById("modalImage");
const modalDuration = document.getElementById("modalDuration");
const modalLocation = document.getElementById("modalLocation");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalHighlights = document.getElementById("modalHighlights");
const accordion = document.getElementById("accordion");
const modalBookButton = document.getElementById("modalBookButton");


let selectedTour = null;


function openTour(tourId) {

  const tour = tours[tourId];

  if (!tour) return;

  selectedTour = tourId;

  modalImage.src = tour.image;
  modalImage.alt = tour.name;

  modalDuration.textContent = tour.duration;
  modalLocation.textContent = tour.location;

  modalTitle.textContent = tour.name;
  modalDescription.textContent = tour.description;

  modalHighlights.innerHTML = "";

  tour.highlights.forEach(highlight => {

    const span = document.createElement("span");

    span.textContent = highlight;

    modalHighlights.appendChild(span);

  });


  accordion.innerHTML = "";

  tour.itinerary.forEach((item, index) => {

    const accordionItem = document.createElement("div");

    accordionItem.className = "accordion-item";

    accordionItem.innerHTML = `

      <button class="accordion-head">

        <span>
          ${item.day} — ${item.title}
        </span>

        <span>
          +
        </span>

      </button>

      <div class="accordion-body">

        <div class="accordion-body-inner">

          <ul>
            ${item.points.map(point => `<li>${point}</li>`).join("")}
          </ul>

        </div>

      </div>

    `;

    accordion.appendChild(accordionItem);

  });


  document.querySelectorAll(".accordion-head").forEach(button => {

    button.addEventListener("click", () => {

      const body = button.nextElementSibling;
      const icon = button.querySelector("span:last-child");

      document.querySelectorAll(".accordion-body").forEach(other => {

        if (other !== body) {
          other.style.maxHeight = null;
        }

      });

      document.querySelectorAll(".accordion-head span:last-child").forEach(otherIcon => {

        if (otherIcon !== icon) {
          otherIcon.textContent = "+";
        }

      });


      if (body.style.maxHeight) {

        body.style.maxHeight = null;
        icon.textContent = "+";

      } else {

        body.style.maxHeight = body.scrollHeight + "px";
        icon.textContent = "−";

      }

    });

  });


  tourModal.classList.add("active");
  document.body.classList.add("modal-open");

}


document.querySelectorAll(".itinerary-btn").forEach(button => {

  button.addEventListener("click", () => {

    openTour(button.dataset.tour);

  });

});


function closeTourModal() {

  tourModal.classList.remove("active");
  document.body.classList.remove("modal-open");

}


modalClose.addEventListener("click", closeTourModal);
modalOverlay.addEventListener("click", closeTourModal);


/* =========================================================
   BOOKING MODAL
========================================================= */

const bookingModal = document.getElementById("bookingModal");
const bookingClose = document.getElementById("bookingClose");

const bookingTour = document.getElementById("bookingTour");

const modalBookButtonElement =
  document.getElementById("modalBookButton");


function openBooking(tourName = "") {

  bookingModal.classList.add("active");

  document.body.classList.add("modal-open");

  if (tourName) {
    bookingTour.value = tourName;
  }

}


function closeBooking() {

  bookingModal.classList.remove("active");

  document.body.classList.remove("modal-open");

}


bookingClose.addEventListener("click", closeBooking);


document.querySelector(".booking-overlay")
  .addEventListener("click", closeBooking);


modalBookButtonElement.addEventListener("click", () => {

  let tourName = "Customized Himalayan Trip";

  if (selectedTour === "spiti") {
    tourName = "Spiti Valley Adventure";
  }

  if (selectedTour === "ladakh") {
    tourName = "Ladakh Expedition";
  }

  closeTourModal();

  setTimeout(() => {

    openBooking(tourName);

  }, 200);

});


/* =========================================================
   WHATSAPP
========================================================= */

const WHATSAPP_NUMBER = "919736990769";


function openWhatsApp(message) {

  const encodedMessage =
    encodeURIComponent(message);

  const url =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

  window.open(
    url,
    "_blank",
    "noopener,noreferrer"
  );

}


/* =========================================================
   BOOKING FORM
========================================================= */

const bookingForm =
  document.getElementById("bookingForm");


bookingForm.addEventListener("submit", function(event) {

  event.preventDefault();


  const name =
    document.getElementById("bookingName").value.trim();

  const phone =
    document.getElementById("bookingPhone").value.trim();

  const email =
    document.getElementById("bookingEmail").value.trim();

  const tour =
    document.getElementById("bookingTour").value;

  const date =
    document.getElementById("bookingDate").value;

  const travelers =
    document.getElementById("bookingTravelers").value;

  const requirements =
    document.getElementById("bookingRequirements").value.trim();


  if (!name || !phone || !tour || !date || !travelers) {

    alert("Please fill all required fields.");

    return;

  }


  const message = `Hello white.arc.adventure,

I would like to enquire about a tour.

CUSTOMER DETAILS

Name: ${name}
Phone: ${phone}
Email: ${email || "Not provided"}

TRIP DETAILS

Tour: ${tour}
Travel Date: ${date}
Number of Travelers: ${travelers}

Special Requirements:
${requirements || "None"}

Please share availability, final pricing and booking details.

Thank you.

white.arc.adventure`;


  openWhatsApp(message);

});


/* =========================================================
   PLAN YOUR TRIP FORM
========================================================= */

const planForm =
  document.getElementById("planForm");


planForm.addEventListener("submit", function(event) {

  event.preventDefault();


  const name =
    document.getElementById("planName").value.trim();

  const email =
    document.getElementById("planEmail").value.trim();

  const phone =
    document.getElementById("planPhone").value.trim();

  const destination =
    document.getElementById("planDestination").value;

  const date =
    document.getElementById("planDate").value;

  const travelers =
    document.getElementById("planTravelers").value;

  const messageText =
    document.getElementById("planMessage").value.trim();


  if (!name || !phone || !destination || !travelers) {

    alert("Please fill all required fields.");

    return;

  }


  const message = `Hello white.arc.adventure,

I would like to plan a Himalayan trip.

CUSTOMER DETAILS

Name: ${name}
Phone: ${phone}
Email: ${email || "Not provided"}

TRIP DETAILS

Destination: ${destination}
Travel Date: ${date || "Flexible"}
Number of Travelers: ${travelers}

Message:
${messageText || "No special requirements mentioned."}

Please share availability, final pricing and itinerary details.

Thank you.

white.arc.adventure`;


  openWhatsApp(message);

});


/* =========================================================
   KEYBOARD ESCAPE
========================================================= */

document.addEventListener("keydown", event => {

  if (event.key === "Escape") {

    closeTourModal();
    closeBooking();

    mobileMenu.classList.remove("active");

    document.body.classList.remove("modal-open");

  }

});


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements = document.querySelectorAll(
  ".journey-feature, .destination-card, .why-item, .process-item, .stat, .instagram-images div"
);


revealElements.forEach(element => {

  element.classList.add("reveal");

});


const revealObserver =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          revealObserver.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12
    }
  );


revealElements.forEach(element => {

  revealObserver.observe(element);

});


/* =========================================================
   DATE RESTRICTION
========================================================= */

const today =
  new Date().toISOString().split("T")[0];


const bookingDate =
  document.getElementById("bookingDate");

const planDate =
  document.getElementById("planDate");


if (bookingDate) {
  bookingDate.min = today;
}

if (planDate) {
  planDate.min = today;
}


/* =========================================================
   SMOOTH ANCHOR OFFSET
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", function(event) {

    const targetId =
      this.getAttribute("href");

    if (
      targetId === "#" ||
      !document.querySelector(targetId)
    ) {
      return;
    }

    event.preventDefault();

    const target =
      document.querySelector(targetId);

    const headerHeight =
      document.getElementById("header").offsetHeight;

    const position =
      target.getBoundingClientRect().top +
      window.scrollY -
      headerHeight;

    window.scrollTo({
      top: position,
      behavior: "smooth"
    });

  });

});


/* =========================================================
   CONSOLE BRAND CHECK
========================================================= */

console.log(
  "white.arc.adventure — Adventure. Culture. Serenity."
);
