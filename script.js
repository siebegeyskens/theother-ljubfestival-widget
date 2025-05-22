const qs = (sel, scope = document) => scope.querySelector(sel);
const showView = (id) => {
  const views = [
    "home-view",
    "cards-view",
    "popup",
    "match-page",
    "form-page",
    "success-screen",
    "error-screen",
  ];
  views.forEach((v) => qs(`#${v}`).classList.toggle("hidden", v !== id));
};

const state = {
  index: 0,
  concerts: [
    {
      image: "https://picsum.photos/id/1011/600/800",
      title: "Jazz Night",
      date: "June 5",
    },
    {
      image: "https://picsum.photos/id/1025/600/800",
      title: "Rock Blast",
      date: "June 12",
    },
    {
      image: "https://picsum.photos/id/1024/600/800",
      title: "Psych fest",
      date: "June 15",
    },
    // No match card here!
  ],
  matchIndex: null,
};

// Fisher-Yates shuffle for better readability
function shuffleArray(arr) {
  const array = arr.slice();
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function setupConcerts() {
  // Define the match card here
  const matchCard = {
    image: "https://picsum.photos/id/1035/600/800",
    title: "Mystery Show",
    date: "June 20",
    isMatch: true,
  };

  // Shuffle the concerts
  const shuffled = shuffleArray(state.concerts);

  // Insert match card at position 1, 2, or 3
  const insertAt = Math.floor(Math.random() * 3) + 1;
  shuffled.splice(insertAt, 0, matchCard);

  state.concerts = shuffled;
  state.matchIndex = insertAt;
}

// Call setupConcerts before starting
setupConcerts();

const cardsContainer = qs("#cards-container");

function createCard(concert, index) {
  const card = document.createElement("div");
  card.className = "card";
  card.style.backgroundImage = `url(${concert.image})`;
  card.innerHTML = `
    <div class="card-overlay">
      <h2>${concert.title}</h2>
      <p>${concert.date}</p>
      <button class="like-btn">Yes</button>
      <button class="no-btn">No</button>
    </div>
  `;
  card.dataset.index = index;
  return card;
}

function renderNextCard() {
  cardsContainer.innerHTML = "";
  const concert = state.concerts[state.index];
  if (!concert) return; // no more cards
  const card = createCard(concert, state.index);
  cardsContainer.appendChild(card);
}

function swipeYes() {
  if (state.index === state.matchIndex) {
    showView("match-page");
    // Remove match card so it can't be seen again
    state.concerts.splice(state.matchIndex, 1);
    // Adjust index if needed
    if (state.index >= state.concerts.length) state.index = 0;
    state.matchIndex = -1;
  } else {
    showView("popup");
  }
}

function swipeNo() {
  state.index++;
  if (state.index >= state.concerts.length) {
    // Loop forever
    state.index = 0;
  }
  renderNextCard();
}

function initEvents() {
  qs("#start-btn").addEventListener("click", () => {
    state.index = 0;
    renderNextCard();
    showView("cards-view");
  });

  qs("#cards-container").addEventListener("click", (e) => {
    if (e.target.matches(".like-btn")) {
      swipeYes();
    } else if (e.target.matches(".no-btn")) {
      swipeNo();
    }
  });

  qs("#popup-close").addEventListener("click", () => {
    if (state.index >= state.concerts.length) {
      state.index = 0;
    } else {
      state.index++;
      renderNextCard();
      showView("cards-view");
    }
  });

  qs("#go-to-form").addEventListener("click", () => {
    showView("form-page");
  });

  qs("#participation-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const form = e.target;

    const data = {
      name: form.name.value,
      email: form.email.value,
      number: form.number.value,
      solo: form.solo.checked,
      agreedTerms: form.agreedTerms.checked,
      agreedNewsLetter: form.agreedNewsLetter.checked,
    };

    try {
      const response = await fetch(
        "https://uijvxflzilnqnyuwdjeg.supabase.co/functions/v1/submit-form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVpanZ4Zmx6aWxucW55dXdkamVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc4NTU4MTIsImV4cCI6MjA2MzQzMTgxMn0.LzpDSv4uUs9hucCMh9RPnuRCSzx324K6KVcgfHwGhxY",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        showView("success-screen");
      } else {
        showView("error-screen");
      }
    } catch (err) {
      console.error("Form submission failed", err);
      showView("error-screen");
    }
  });
}

initEvents();
