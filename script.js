/* =========================================================================
   white.arc.adventure — script.js
   All tour content lives in the TOURS / DESTINATIONS objects below.
   Edit those objects to change copy, itineraries, or add new packages —
   nothing else in this file needs to change for content updates.
   ========================================================================= */

/* -------------------------------------------------------------------------
   CONFIG — replace these before going live
   ------------------------------------------------------------------------- */
const CONFIG = {
  WHATSAPP_NUMBER: "919736990769", // +91 97369 90769 — do not change
  PHONE_DISPLAY: "+91 97369 90769",
  EMAIL: "negiarun631@gmail.com",
  // TODO: paste the exact Instagram URL supplied by the client — never invented
  INSTAGRAM_URL: "PASTE_INSTAGRAM_URL_HERE",

  // TODO: paste real EmailJS credentials before launch
  EMAILJS_PUBLIC_KEY: "YOUR_PUBLIC_KEY",
  EMAILJS_SERVICE_ID: "YOUR_SERVICE_ID",
  EMAILJS_TEMPLATE_ID: "YOUR_TEMPLATE_ID",
};

const WHATSAPP_ENQUIRY_TEXT =
  "Hi white.arc.adventure, I'm interested in planning a Himalayan trip. Please share the available packages and details.";

/* -------------------------------------------------------------------------
   TOUR DATA — source of truth is the supplied itinerary documents.
   Anything not confirmed in that source uses "Available on request".
   ------------------------------------------------------------------------- */
const TOURS = [
  {
    id: "spiti",
    destinationId: "spiti-valley",
    name: "Spiti Valley Adventure",
    duration: "7 Days / 6 Nights",
    route: "Chandigarh → Narkanda → Kalpa → Tabo → Kaza → Rampur → Chandigarh",
    price: null, // no confirmed price supplied
    image: "spiti", // maps to an illustrated placeholder — swap for a real photo URL
    short:
      "A high-altitude cold-desert journey through Himachal's most dramatic valley — monasteries, river gorges and some of the highest villages on earth.",
    about:
      "Discover the breathtaking beauty of Spiti Valley, a high-altitude cold desert located in the heart of Himachal Pradesh. Surrounded by dramatic mountain landscapes, ancient monasteries and crystal-clear rivers, Spiti offers an unforgettable journey for travelers seeking adventure, culture and serenity.",
    highlights: [
      "Private Innova Crysta for the full journey",
      "Premium hotels & best available stays in remote areas",
      "Daily breakfast & dinner included",
      "Experienced driver-cum-local guide",
      "Comfortable travel with high safety standards",
      "Perfect mix of adventure, culture & luxury",
    ],
    accommodation: "Premium hotels & best available stays in remote areas",
    meals: "Daily breakfast & dinner included",
    vehicle: "Private Innova Crysta for the full journey",
    inclusions: [
      "Private Innova Crysta for the full journey",
      "Daily breakfast & dinner",
      "Experienced driver-cum-local guide",
      "Hotel accommodation as listed in the itinerary",
    ],
    itinerary: [
      {
        day: 1,
        title: "Chandigarh → Narkanda",
        points: [
          "Pickup from Chandigarh in a private Innova Crysta",
          "Scenic drive through Shimla hills and pine forests",
          "Reach Narkanda and check in to a premium hotel",
          "Evening relaxation with mountain views, dinner",
          "Night stay in Narkanda",
        ],
      },
      {
        day: 2,
        title: "Narkanda → Kalpa",
        points: [
          "Breakfast, then drive towards Kinnaur Valley",
          "Views of the Sutlej River and apple orchards en route",
          "Reach Kalpa — views of the Kinner Kailash range",
          "Check in to a premium hotel, breakfast & dinner",
          "Night stay in Kalpa",
        ],
      },
      {
        day: 3,
        title: "Kalpa → Tabo",
        points: [
          "Drive into the dramatic landscapes of Spiti Valley",
          "Cross Khab, the confluence of the Spiti & Sutlej rivers",
          "Visit Tabo Monastery",
          "Experience the desert mountain terrain, breakfast & dinner",
          "Night stay in Tabo",
        ],
      },
      {
        day: 4,
        title: "Tabo → Kaza",
        points: [
          "Drive towards Kaza",
          "Visit Dhankar Monastery, with an optional hike to Dhankar Lake",
          "Reach Kaza, check in to a premium hotel",
          "Explore local cafés and the market, breakfast & dinner",
          "Night stay in Kaza",
        ],
      },
      {
        day: 5,
        title: "Kaza Sightseeing — Hikkim, Komic, Langza",
        points: [
          "Visit the world's highest post office at Hikkim",
          "Explore Komic, one of the highest motorable villages",
          "Explore Langza and experience authentic Spitian culture",
          "Interact with locals, breakfast & dinner",
          "Night stay in Kaza",
        ],
      },
      {
        day: 6,
        title: "Kaza → Rampur",
        points: [
          "Early departure from Kaza",
          "Drive back through Spiti & Sutlej river landscapes",
          "Reach Rampur, check in to a premium hotel",
          "Breakfast & dinner, night stay in Rampur",
        ],
      },
      {
        day: 7,
        title: "Rampur → Chandigarh",
        points: ["Breakfast", "Drive back to Chandigarh", "Drop-off — end of journey"],
      },
    ],
  },
  {
    id: "ladakh",
    destinationId: "ladakh",
    name: "Ladakh Expedition",
    duration: "6 Days / 5 Nights",
    route: "Leh → Nubra Valley → Pangong Lake → Korzok/Tso Moriri → Manali",
    price: null,
    image: "ladakh",
    short:
      "High passes, cobalt lakes and the trans-Himalayan desert — Leh, Nubra Valley, Pangong and Tso Moriri, with medical oxygen on standby.",
    about:
      "A trans-Himalayan expedition through Leh, Nubra Valley, Pangong Lake and the remote Tso Moriri basin, covering some of the highest motorable roads in the world before descending to Manali.",
    highlights: [
      "Premium hotel accommodation",
      "Breakfast & dinner included",
      "Experienced local driver-cum-guide",
      "All Inner Line Permits arranged",
      "Environmental fees included",
      "Backup medical oxygen carried throughout",
      "Toyota Innova Crysta for the full journey",
    ],
    accommodation: "Premium properties throughout the journey",
    meals: "Breakfast & dinner included",
    vehicle: "Toyota Innova Crysta",
    inclusions: [
      "Toyota Innova Crysta for the full journey",
      "Breakfast & dinner",
      "Experienced local driver-cum-guide",
      "All Inner Line Permits",
      "Environmental fees",
      "Backup medical oxygen",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Leh — 3,500m",
        points: [
          "Airport pickup and hotel check-in",
          "Rest day for acclimatization",
          "Evening exploration of Leh Market",
        ],
      },
      {
        day: 2,
        title: "Leh Local Sightseeing",
        points: [
          "Visit Magnetic Hill",
          "Visit the Hall of Fame",
          "Visit Shanti Stupa",
          "Local monastery / gompa experience",
        ],
      },
      {
        day: 3,
        title: "Leh → Nubra Valley",
        points: ["Drive via Khardung La", "Scenic drive to Nubra Valley", "Overnight stay in Nubra"],
      },
      {
        day: 4,
        title: "Nubra Valley → Pangong Lake",
        points: ["Drive through beautiful landscapes", "Reach Pangong Lake", "Overnight stay near Pangong"],
      },
      {
        day: 5,
        title: "Pangong → Korzok / Tso Moriri",
        points: ["Remote and scenic route", "Reach Korzok", "Overnight stay at Korzok village"],
      },
      {
        day: 6,
        title: "Korzok → Manali",
        points: [
          "Visit Puga Hot Spring",
          "Visit Tso Kar Lake",
          "Cross Baralacha La",
          "Night stay in Manali",
        ],
      },
    ],
  },
];

const DESTINATIONS = [
  {
    id: "spiti-valley",
    name: "Spiti Valley",
    tourId: "spiti",
    image: "spiti",
    desc: "A cold-desert valley of monasteries, river gorges and villages among the highest in the world.",
  },
  {
    id: "ladakh",
    name: "Ladakh",
    tourId: "ladakh",
    image: "ladakh",
    desc: "Trans-Himalayan passes, cobalt lakes and Buddhist culture at 3,500m and above.",
  },
  {
    id: "himachal",
    name: "Himachal Pradesh",
    tourId: null,
    image: "himachal",
    desc: "Pine-forested hill towns and orchard valleys across the western Himalaya.",
  },
  {
    id: "uttarakhand",
    name: "Uttarakhand",
    tourId: null,
    image: "uttarakhand",
    desc: "Sacred rivers, alpine meadows and the gateway peaks of the Garhwal Himalaya.",
  },
  {
    id: "kashmir",
    name: "Kashmir",
    tourId: null,
    image: "kashmir",
    desc: "Alpine lakes, houseboats and meadows framed by the Pir Panjal range.",
  },
];

// Maps the destination-search dropdown values to a tour or destination id
const SEARCH_MAP = {
  "spiti-valley": { type: "tour", id: "spiti" },
  ladakh: { type: "tour", id: "ladakh" },
  himachal: { type: "destination", id: "himachal" },
  uttarakhand: { type: "destination", id: "uttarakhand" },
  kashmir: { type: "destination", id: "kashmir" },
  custom: { type: "custom" },
};

/* -------------------------------------------------------------------------
   Utilities
   ------------------------------------------------------------------------- */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
const waLink = (text) =>
  `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

function priceLabel(tour) {
  return tour.price ? tour.price : "Price on Request";
}

/* -------------------------------------------------------------------------
   Boot
   ------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  applyContactLinks();
  renderTourCards();
  renderDestinationCards();
  initNav();
  initHeroSearch();
  initCarouselControls();
  initModal();
  initScrollAnimations();
  initBookingForms();
  initFAB();
  initFooterYear();
});

/* -------------------------------------------------------------------------
   Contact links (WhatsApp / phone / email / Instagram) — single source
   ------------------------------------------------------------------------- */
function applyContactLinks() {
  $$("[data-wa-link]").forEach((el) => {
    el.href = waLink(WHATSAPP_ENQUIRY_TEXT);
  });
  $$("[data-tel-link]").forEach((el) => {
    el.href = `tel:+${CONFIG.WHATSAPP_NUMBER}`;
  });
  $$("[data-mail-link]").forEach((el) => {
    el.href = `mailto:${CONFIG.EMAIL}`;
  });
  $$("[data-ig-link]").forEach((el) => {
    el.href = CONFIG.INSTAGRAM_URL;
  });
  $$("[data-phone-text]").forEach((el) => {
    el.textContent = CONFIG.PHONE_DISPLAY;
  });
  $$("[data-email-text]").forEach((el) => {
    el.textContent = CONFIG.EMAIL;
  });
}

/* -------------------------------------------------------------------------
   Navigation
   ------------------------------------------------------------------------- */
function initNav() {
  const header = $(".site-header");
  const toggle = $(".nav-toggle");
  const mobileMenu = $(".mobile-nav");
  const overlay = $(".mobile-nav-overlay");

  const onScroll = () => {
    header.classList.toggle("is-solid", window.scrollY > 40);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  function openMenu() {
    mobileMenu.classList.add("is-open");
    overlay.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("no-scroll");
  }
  function closeMenu() {
    mobileMenu.classList.remove("is-open");
    overlay.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("no-scroll");
  }
  toggle.addEventListener("click", () => {
    mobileMenu.classList.contains("is-open") ? closeMenu() : openMenu();
  });
  overlay.addEventListener("click", closeMenu);
  $$(".mobile-nav a, .mobile-nav button[data-scroll]").forEach((a) =>
    a.addEventListener("click", closeMenu)
  );

  // Smooth scroll for every in-page link / data-scroll trigger
  $$('a[href^="#"], [data-scroll]').forEach((el) => {
    el.addEventListener("click", (e) => {
      const targetId = el.getAttribute("href") || el.getAttribute("data-scroll");
      if (!targetId || !targetId.startsWith("#")) return;
      const target = $(targetId);
      if (!target) return;
      e.preventDefault();
      const offset = 84;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });
}

/* -------------------------------------------------------------------------
   Hero destination search
   ------------------------------------------------------------------------- */
function initHeroSearch() {
  const form = $("#destination-search");
  if (!form) return;
  const note = $("#search-note");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = $("#search-destination").value;
    const mapping = SEARCH_MAP[value];

    if (!mapping) {
      note.textContent = "Please choose a destination to continue.";
      note.hidden = false;
      return;
    }

    if (mapping.type === "tour") {
      note.hidden = true;
      const target = $(`#tour-${mapping.id}`);
      $(`#packages`).scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        if (target) target.classList.add("is-highlighted");
        setTimeout(() => target && target.classList.remove("is-highlighted"), 1600);
      }, 400);
    } else if (mapping.type === "destination") {
      note.textContent = "Customized trips available — contact us to plan your journey.";
      note.hidden = false;
      $("#destinations").scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      note.textContent = "Customized trips available — contact us to plan your journey.";
      note.hidden = false;
      $("#plan-your-trip").scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}

/* -------------------------------------------------------------------------
   Featured Packages — render cards + carousel
   ------------------------------------------------------------------------- */
function renderTourCards() {
  const track = $("#packages-track");
  if (!track) return;

  track.innerHTML = TOURS.map(
    (tour) => `
    <article class="tour-card" id="tour-${tour.id}" data-image="${tour.image}">
      <div class="tour-card__media" data-image="${tour.image}" role="img" aria-label="${tour.name} landscape illustration">
        ${mountainSVG(tour.image)}
        <span class="tour-card__duration">${tour.duration}</span>
      </div>
      <div class="tour-card__body">
        <h3 class="tour-card__name">${tour.name}</h3>
        <p class="tour-card__route">${tour.route}</p>
        <p class="tour-card__desc">${tour.short}</p>
        <ul class="tour-card__highlights">
          ${tour.highlights
            .slice(0, 4)
            .map((h) => `<li>${h}</li>`)
            .join("")}
        </ul>
        <div class="tour-card__price">${priceLabel(tour)}</div>
        <div class="tour-card__actions">
          <button class="btn btn--outline" data-open-modal="${tour.id}">Explore Itinerary</button>
          <button class="btn btn--primary" data-open-booking="${tour.id}">Book Now</button>
        </div>
      </div>
    </article>
  `
  ).join("");
}

function initCarouselControls() {
  const track = $("#packages-track");
  const prev = $("#packages-prev");
  const next = $("#packages-next");
  if (!track || !prev || !next) return;

  const scrollAmount = () => {
    const card = track.querySelector(".tour-card");
    return card ? card.getBoundingClientRect().width + 24 : 320;
  };

  prev.addEventListener("click", () => track.scrollBy({ left: -scrollAmount(), behavior: "smooth" }));
  next.addEventListener("click", () => track.scrollBy({ left: scrollAmount(), behavior: "smooth" }));

  // Delegated clicks for modal / booking buttons rendered dynamically
  document.addEventListener("click", (e) => {
    const modalBtn = e.target.closest("[data-open-modal]");
    if (modalBtn) openTourModal(modalBtn.getAttribute("data-open-modal"));

    const bookBtn = e.target.closest("[data-open-booking]");
    if (bookBtn) openBookingModal(bookBtn.getAttribute("data-open-booking"));
  });
}

/* -------------------------------------------------------------------------
   Destinations grid
   ------------------------------------------------------------------------- */
function renderDestinationCards() {
  const grid = $("#destinations-grid");
  if (!grid) return;

  grid.innerHTML = DESTINATIONS.map(
    (d) => `
    <article class="dest-card">
      <div class="dest-card__media" data-image="${d.image}">
        ${mountainSVG(d.image)}
      </div>
      <div class="dest-card__body">
        <h3>${d.name}</h3>
        <p>${d.desc}</p>
        ${
          d.tourId
            ? `<button class="link-cta" data-explore-dest="${d.tourId}">Explore packages <span aria-hidden="true">→</span></button>`
            : `<p class="dest-card__note">Customized trips available on request.</p>`
        }
      </div>
    </article>
  `
  ).join("");

  grid.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-explore-dest]");
    if (!btn) return;
    const tourId = btn.getAttribute("data-explore-dest");
    $("#packages").scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => {
      const el = $(`#tour-${tourId}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
        el.classList.add("is-highlighted");
        setTimeout(() => el.classList.remove("is-highlighted"), 1600);
      }
    }, 400);
  });
}

/* -------------------------------------------------------------------------
   Itinerary modal
   ------------------------------------------------------------------------- */
function initModal() {
  const modal = $("#tour-modal");
  const closeBtn = $("#tour-modal-close");
  const backdrop = $("#tour-modal-backdrop");

  function close() {
    modal.classList.remove("is-open");
    document.body.classList.remove("no-scroll");
  }
  closeBtn.addEventListener("click", close);
  backdrop.addEventListener("click", close);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) close();
  });

  $("#tour-modal-book").addEventListener("click", () => {
    const tourId = modal.getAttribute("data-tour-id");
    close();
    openBookingModal(tourId);
  });
}

function openTourModal(tourId) {
  const tour = TOURS.find((t) => t.id === tourId);
  if (!tour) return;
  const modal = $("#tour-modal");
  modal.setAttribute("data-tour-id", tourId);

  $("#tour-modal-media").innerHTML = mountainSVG(tour.image);
  $("#tour-modal-name").textContent = tour.name;
  $("#tour-modal-duration").textContent = tour.duration;
  $("#tour-modal-about").textContent = tour.about;

  $("#tour-modal-highlights").innerHTML = tour.highlights.map((h) => `<li>${h}</li>`).join("");

  $("#tour-modal-accommodation").textContent = tour.accommodation || "Available on request";
  $("#tour-modal-meals").textContent = tour.meals || "Available on request";
  $("#tour-modal-vehicle").textContent = tour.vehicle || "Available on request";
  $("#tour-modal-inclusions").innerHTML = (tour.inclusions || [])
    .map((i) => `<li>${i}</li>`)
    .join("");

  $("#tour-modal-itinerary").innerHTML = tour.itinerary
    .map(
      (day, idx) => `
      <div class="accordion-item">
        <button class="accordion-trigger" data-idx="${idx}" aria-expanded="false">
          <span class="accordion-day">Day ${day.day}</span>
          <span class="accordion-title">${day.title}</span>
          <span class="accordion-icon" aria-hidden="true">+</span>
        </button>
        <div class="accordion-panel" hidden>
          <ul>${day.points.map((p) => `<li>${p}</li>`).join("")}</ul>
        </div>
      </div>
    `
    )
    .join("");

  $$("#tour-modal-itinerary .accordion-trigger").forEach((btn) => {
    btn.addEventListener("click", () => {
      const panel = btn.nextElementSibling;
      const isOpen = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!isOpen));
      panel.hidden = isOpen;
      btn.querySelector(".accordion-icon").textContent = isOpen ? "+" : "–";
    });
  });

  modal.classList.add("is-open");
  document.body.classList.add("no-scroll");
}

/* -------------------------------------------------------------------------
   Booking enquiry modal + Plan Your Trip form (shared validation/EmailJS)
   ------------------------------------------------------------------------- */
function initBookingForms() {
  const modal = $("#booking-modal");
  const closeBtn = $("#booking-modal-close");
  const backdrop = $("#booking-modal-backdrop");

  function close() {
    modal.classList.remove("is-open");
    document.body.classList.remove("no-scroll");
  }
  closeBtn.addEventListener("click", close);
  backdrop.addEventListener("click", close);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) close();
  });

  bindFormValidationAndSubmit($("#booking-form"), { closeOnSuccess: close });
  bindFormValidationAndSubmit($("#plan-trip-form"), {});
}

function openBookingModal(tourId) {
  const modal = $("#booking-modal");
  const tour = TOURS.find((t) => t.id === tourId);
  const selectedField = $("#booking-selected-tour");
  const hiddenInput = $("#booking-form-tour-id");

  if (tour) {
    selectedField.hidden = false;
    $("#booking-selected-tour-name").textContent = `${tour.name} — ${tour.duration}`;
    hiddenInput.value = tour.id;
  } else {
    selectedField.hidden = true;
    hiddenInput.value = "";
  }

  modal.classList.add("is-open");
  document.body.classList.add("no-scroll");
  const nameField = $("#booking-name");
  if (nameField) setTimeout(() => nameField.focus(), 150);
}

function bindFormValidationAndSubmit(form, { closeOnSuccess } = {}) {
  if (!form) return;
  const statusEl = form.querySelector("[data-form-status]");
  const submitBtn = form.querySelector('button[type="submit"]');

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (submitBtn.disabled) return; // prevent duplicate submissions

    const errors = validateForm(form);
    if (errors.length) {
      showStatus(statusEl, errors[0], "error");
      return;
    }

    setLoading(submitBtn, true);
    hideStatus(statusEl);

    const templateParams = collectTemplateParams(form);

    sendEnquiry(templateParams)
      .then(() => {
        showStatus(
          statusEl,
          "Thank you! Your enquiry has been sent. Our team will contact you shortly.",
          "success"
        );
        form.reset();
        const selectedField = form.querySelector("#booking-selected-tour");
        if (selectedField) selectedField.hidden = true;
        if (closeOnSuccess) setTimeout(closeOnSuccess, 1800);
      })
      .catch(() => {
        showStatus(statusEl, "Something went wrong. Please try again or reach us on WhatsApp.", "error");
      })
      .finally(() => setLoading(submitBtn, false));
  });
}

function validateForm(form) {
  const errors = [];
  const required = $$("[required]", form);

  required.forEach((field) => {
    if (!field.value || !field.value.trim()) {
      errors.push(`Please fill in "${fieldLabel(field)}".`);
    }
  });

  const phone = form.querySelector('input[type="tel"]');
  if (phone && phone.value) {
    const digits = phone.value.replace(/\D/g, "");
    if (digits.length < 10) errors.push("Please enter a valid phone number.");
  }

  const email = form.querySelector('input[type="email"]');
  if (email && email.value) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern.test(email.value)) errors.push("Please enter a valid email address.");
  }

  return errors;
}

function fieldLabel(field) {
  const label = field.closest(".field")?.querySelector("label");
  return label ? label.textContent.replace("*", "").trim() : field.name || "this field";
}

function collectTemplateParams(form) {
  const data = new FormData(form);
  const obj = Object.fromEntries(data.entries());
  const tourId = obj.tour_id;
  const tour = TOURS.find((t) => t.id === tourId);

  return {
    subject: "New Tour Enquiry — white.arc.adventure",
    customer_name: obj.name || "",
    customer_phone: obj.phone || "",
    customer_email: obj.email || "",
    destination: obj.destination || "",
    package_name: tour ? tour.name : obj.destination || "Not specified",
    package_duration: tour ? tour.duration : "",
    travel_date: obj.travel_date || "Not specified",
    travelers: obj.travelers || "Not specified",
    message: obj.message || "",
    to_email: CONFIG.EMAIL,
  };
}

function sendEnquiry(params) {
  if (
    window.emailjs &&
    CONFIG.EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY" &&
    CONFIG.EMAILJS_SERVICE_ID !== "YOUR_SERVICE_ID" &&
    CONFIG.EMAILJS_TEMPLATE_ID !== "YOUR_TEMPLATE_ID"
  ) {
    return window.emailjs.send(CONFIG.EMAILJS_SERVICE_ID, CONFIG.EMAILJS_TEMPLATE_ID, params);
  }
  // EmailJS credentials not yet configured — log locally so the flow can
  // still be tested end-to-end during development.
  console.info("[white.arc.adventure] EmailJS not configured. Enquiry payload:", params);
  return Promise.resolve();
}

function setLoading(btn, isLoading) {
  btn.disabled = isLoading;
  btn.classList.toggle("is-loading", isLoading);
  if (!btn.dataset.originalText) btn.dataset.originalText = btn.textContent;
  btn.textContent = isLoading ? "Sending…" : btn.dataset.originalText;
}

function showStatus(el, message, type) {
  if (!el) return;
  el.textContent = message;
  el.hidden = false;
  el.className = `form-status form-status--${type}`;
}
function hideStatus(el) {
  if (!el) return;
  el.hidden = true;
}

/* -------------------------------------------------------------------------
   Scroll reveal animations (fade-up)
   ------------------------------------------------------------------------- */
function initScrollAnimations() {
  const targets = $$(".reveal");
  if (!("IntersectionObserver" in window) || !targets.length) {
    targets.forEach((t) => t.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );
  targets.forEach((t) => observer.observe(t));
}

/* -------------------------------------------------------------------------
   Floating WhatsApp button
   ------------------------------------------------------------------------- */
function initFAB() {
  const fab = $("#whatsapp-fab");
  if (!fab) return;
  fab.href = waLink(WHATSAPP_ENQUIRY_TEXT);
}

function initFooterYear() {
  const el = $("#footer-year");
  if (el) el.textContent = new Date().getFullYear();
}

/* -------------------------------------------------------------------------
   Illustrated mountain "photography" placeholders.
   No source imagery was supplied for this build, so each destination gets a
   signature line-art ridge illustration in the site palette instead of a
   generic stock photo. Swap any of these <div data-image="..."> blocks for
   a real <img src="..."> once photography is available.
   ------------------------------------------------------------------------- */
function mountainSVG(variant = "default") {
  const palettes = {
    spiti: ["#8fb7d6", "#5c8fb8", "#2d5a86"],
    ladakh: ["#9cc3dd", "#4f83ad", "#1f4266"],
    himachal: ["#a8cfe0", "#5f9bb0", "#2b5f6e"],
    uttarakhand: ["#a3cbb8", "#5a9a80", "#2c5c48"],
    kashmir: ["#b8cfe6", "#6d93bd", "#31547f"],
    default: ["#9cc3dd", "#4f83ad", "#1f4266"],
  };
  const [light, mid, dark] = palettes[variant] || palettes.default;
  return `
  <svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
    <rect width="400" height="260" fill="${light}" opacity="0.25"></rect>
    <path d="M0 190 L60 110 L110 160 L170 70 L230 150 L280 100 L340 170 L400 130 L400 260 L0 260 Z" fill="${mid}" opacity="0.55"></path>
    <path d="M0 220 L80 150 L140 195 L210 120 L260 185 L330 140 L400 200 L400 260 L0 260 Z" fill="${dark}"></path>
    <path d="M170 70 L182 95 L158 95 Z" fill="#ffffff" opacity="0.85"></path>
    <path d="M60 110 L70 128 L50 128 Z" fill="#ffffff" opacity="0.7"></path>
    <path d="M230 150 L238 165 L222 165 Z" fill="#ffffff" opacity="0.6"></path>
  </svg>`;
}
