(function () {
  const swipeTimeout = 300;
  let state = {
    nextCard: null,
    renderedNext: false,
    currentCard: null,
    isAnimating: false,
    showingDetails: false,
    index: 0,
    concerts: [
      {
        image: "./assets/images/la-fura.jpg",
        image1x: "./assets/images/la-fura-600.jpg",
        image2x: "./assets/images/la-fura-1200.jpg",
        title: "Joseph Haydn: STVARJENJE",
        date: "30. junij 2025 ob 20.00",
        url: "https://www.eventim.si/event/j-haydn-stvarjenje-cankarjev-dom-20152650/?affiliate=S1J",
      },
      {
        image: "./assets/images/adda-flamenco.jpeg",
        image1x: "./assets/images/adda-flamenco-600.jpeg",
        image2x: "./assets/images/adda-flamenco-1200.jpeg",
        title: "El Amor Brujo",
        date: "2. julij 2025 ob 20.00",
        url: "https://www.eventim.si/event/el-amor-brujo-cankarjev-dom-20152582/?affiliate=S1J",
      },
      {
        image: "./assets/images/duke_ellington.jpg",
        image1x: "./assets/images/duke_ellington-600.jpg",
        image2x: "./assets/images/duke_ellington-1200.jpg",
        title: "The Duke Ellington Orchestra",
        date: "3. julij 2025 ob 21.00",
        url: "https://www.eventim.si/event/the-duke-ellington-orchestra-krizanke-20152564/?affiliate=S1J",
      },
      {
        image: "./assets/images/POTO_1300X800.jpg",
        image1x: "./assets/images/POTO_1300X800-600.jpg",
        image2x: "./assets/images/POTO_1300X800-1200.jpg",
        title: "Fantom iz opere",
        date: "9. julij 2025 ob 20.00",
        url: "https://www.eventim.si/artist/phantom-of-the-opera/",
      },
      {
        image: "./assets/images/EuroCubanAllstars-4.jpg",
        image1x: "./assets/images/EuroCubanAllstars-4-600.jpg",
        image2x: "./assets/images/EuroCubanAllstars-4-1200.jpg",
        title: "Večer z legendami kubanske glasbe",
        date: "13. julij 2025 ob 21.00",
        url: "https://www.eventim.si/event/ljubljana-festival-vecer-z-legendami-kubanske-glasbe-krizanke-20253116/?affiliate=S1J",
      },
      {
        image: "./assets/images/WEBSITE-BANNER-VICENTE-1300x800-1.jpg",
        image1x: "./assets/images/WEBSITE-BANNER-VICENTE-1300x800-1-600.jpg",
        image2x: "./assets/images/WEBSITE-BANNER-VICENTE-1300x800-1-1200.jpg",
        title: "Vicente Amigo, flamenko kitara",
        date: "14. julij 2025 ob 21.00",
        url: "https://www.eventim.si/event/ljubljana-festival-vicente-amigo-spanski-kitarist-flamenka-krizanke-20189482/?affiliate=S1J",
      },
      {
        image: "./assets/images/ROBBEN-FORD-NET-BOOKLET-EVENTIM-PHOTO.jpg",
        image1x:
          "./assets/images/ROBBEN-FORD-NET-BOOKLET-EVENTIM-PHOTO-600.jpg",
        image2x:
          "./assets/images/ROBBEN-FORD-NET-BOOKLET-EVENTIM-PHOTO-1200.jpg",
        title: "Robben Ford, Chris Minh Doky",
        date: "16. julij 2025 ob 21.30",
        url: "https://www.eventim.si/event/robben-ford-chris-minh-doky-krizanke-20190126/?affiliate=S1J",
        backgroundPosition: "100% 50%",
      },
      {
        image: "./assets/images/Goran-Bojcevski-foto-Kristjan-Smigoc.jpg",
        image1x: "./assets/images/Goran-Bojcevski-foto-Kristjan-Smigoc-600.jpg",
        image2x:
          "./assets/images/Goran-Bojcevski-foto-Kristjan-Smigoc-1200.jpg",
        title: "Goran Bojčevski & balkan nuevo",
        date: "18. avgust 2025 ob 20.30",
        url: "https://www.eventim.si/event/goran-bojcevski-krizanke-20145391/?affiliate=S1J",
      },
      {
        image: "./assets/images/Rade-3-za-Krizanke.jpeg",
        image1x: "./assets/images/Rade-3-za-Krizanke-600.jpeg",
        image2x: "./assets/images/Rade-3-za-Krizanke-1200.jpeg",
        title: "Rade Šerbedžija",
        date: "20. avgust 2025 ob 20.30",
        url: "https://www.eventim.si/event/moj-klobuk-ima-tri-luknje-krizanke-20145382/?affiliate=S1J",
      },
      {
        image: "./assets/images/BIGBAND-HAMOTRIBUTE2LOVE-1300x800px.jpg",
        image1x: "./assets/images/BIGBAND-HAMOTRIBUTE2LOVE-1300x800px-600.jpg",
        image2x: "./assets/images/BIGBAND-HAMOTRIBUTE2LOVE-1300x800px-1200.jpg",
        title: "Hamo & Tribute 2 Love",
        date: "28. avgust 2025 ob 20.30",
        url: "https://www.eventim.si/event/hamo-tribute-2-love-krizanke-20145309/?affiliate=S1J",
      },
      {
        image: "./assets/images/kreslin.jpg",
        image1x: "./assets/images/kreslin-600.jpg",
        image2x: "./assets/images/kreslin-1200.jpg",
        title: "Vlado Kreslin",
        date: "30. avgust 2025 ob 20.30",
        url: "https://www.eventim.si/event/vlado-kreslin-ljubljana-krizanke-20145307/?affiliate=S1J",
        backgroundPosition: "22% 50%",
      },
      {
        image:
          "./assets/images/73LF_bannerji_900x528px_Les_Miserables_naslov.jpg",
        image1x:
          "./assets/images/73LF_bannerji_900x528px_Les_Miserables_naslov-600.jpg",
        image2x:
          "./assets/images/73LF_bannerji_900x528px_Les_Miserables_naslov-1200.jpg",
        title: "Nesrečniki",
        date: "4. september 2025 ob 20.00",
        url: "https://www.eventim.si/artist/ljubljana-festival/les-miserables-muzikal-3877424/?affiliate=S1J",
      },
      {
        image: "./assets/images/ottelo.jpg",
        image1x: "./assets/images/ottelo-600.jpg",
        image2x: "./assets/images/ottelo-1200.jpg",
        title: "Giuseppe Verdi: OTELLO",
        date: "8. september 2025 ob 20.00",
        url: "https://www.eventim.si/event/g-verdi-ottelo-opera-cankarjev-dom-20145224/?affiliate=S1J",
        backgroundPosition: "49% 50%",
      },
      {
        image: "./assets/images/dunajski-filharmoniki.jpg",
        image1x: "./assets/images/dunajski-filharmoniki-600.jpg",
        image2x: "./assets/images/dunajski-filharmoniki-1200.jpg",
        title: "Dunajski filharmoniki",
        date: "12. september 2025 ob 20.00",
        url: "https://www.eventim.si/event/dunajski-filharmoniki-cankarjev-dom-20142387/?affiliate=S1J",
      },
      {
        image: "./assets/images/Netrebko-Ejvazov.jpg",
        image1x: "./assets/images/Netrebko-Ejvazov-600.jpg",
        image2x: "./assets/images/Netrebko-Ejvazov-1200.jpg",
        title: "Anna Netrebko & Yusif Eyvazov",
        date: "26. avgust 2025 ob 20.00",
        url: "https://www.eventim.si/event/a-netrebko-sopran-y-eyvazov-tenor-cankarjev-dom-20145314/?affiliate=S1J",
        backgroundPosition: "47% 50%",
      },
    ],
  };

  // ========= HELPERS ========= //

  const qs = (sel, scope = document) => scope.querySelector(sel);

  const showView = (id, winningSwipe = false) => {
    const views = [
      "home-view",
      "cards-view",
      "match-page",
      "form-page",
      "success-screen",
      "error-screen",
    ];
    views.forEach((v) => qs(`#${v}`).classList.toggle("hidden", v !== id));

    if (!winningSwipe) {
      return;
    }
    // Fade in video if present in this view
    const view = qs(`#${id}`);
    const video = view ? view.querySelector("video") : null;
    if (video) {
      video.classList.add("video-bg-hidden");
      qs("#cards-view").classList.remove("hidden");
      video.classList.remove("visible"); // Reset in case
      setTimeout(() => {
        video.classList.add("visible");
      }, 10);
    }
  };

  const shuffleArray = (arr) => {
    const array = arr.slice();
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  function preloadImages() {
    const isRetina = window.devicePixelRatio > 1.5;
    const key = isRetina ? "image2x" : "image1x";
    const urls = state.concerts.map((c) => c[key]);
    urls.push(
      isRetina
        ? "./assets/images/concert-match-1200.jpg"
        : "./assets/images/concert-match-600.jpg"
    );
    urls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  }

  // ========= LOGIC ========= //

  // randomize the concert order and make sure the winning card is shown often.
  function setupConcerts() {
    state.concerts = state.concerts.filter((concert) => !concert.isMatch);
    const shuffled = shuffleArray(state.concerts);

    const matchCard = {
      image1x: "./assets/images/concert-match-600.jpg",
      image2x: "./assets/images/concert-match-1200.jpg",
      title: "Španska romanca",
      date: "30. julij 2025 ob 20.00",
      url: "https://www.eventim.si/event/ensemble-dissonance-mak-grgic-krizanke-20150267/?affiliate=S1J",
      isMatch: true,
      backgroundPosition: "40% 50%",
    };

    const firstInsertAt = Math.floor(Math.random() * 2) + 1;
    shuffled.splice(firstInsertAt, 0, { ...matchCard });

    const secondInsertAt = Math.floor(Math.random() * 4) + 5;
    shuffled.splice(secondInsertAt, 0, { ...matchCard });

    const thirdInsertAt = Math.floor(Math.random() * 4) + 11;
    shuffled.splice(thirdInsertAt, 0, { ...matchCard });

    state.concerts = shuffled;
    state.index = 0;
  }

  function createCard(concert, index) {
    const card = document.createElement("div");
    if (concert.isMatch) {
      card.dataset.isMatch = true;
    }
    card.className = "card";
    const imgUrl =
      window.devicePixelRatio > 1.5 ? concert.image2x : concert.image1x;
    card.style.backgroundImage = `url(${imgUrl})`;
    if (concert.backgroundPosition) {
      card.style.backgroundPosition = concert.backgroundPosition;
    }
    card.innerHTML = `
    <div id="card-overlay" class="card-overlay">
      <h2 class="card-title">${concert.title}</h2>
      <p class="card-date">${concert.date}</p>
      <div class="card-button-container">
          <img src="./assets/images/no.png" alt="no button" width="70" draggable="false" class="no-btn card-button"/>
          <img src="./assets/images/yes.png" alt="yes button" width="70" draggable="false" class="yes-btn card-button"/>
      </div>
    </div>
  `;
    card.dataset.index = index;

    return card;
  }

  async function renderNextCard() {
    const concert = state.concerts[state.index];
    const card = createCard(concert, state.index);
    qs("#cards-container").appendChild(card);
    state.nextCard = card;
    await new Promise((resolve) => setTimeout(resolve, 10));
    return card;
  }

  function renderDetailCard() {
    state.index = Number(state.currentCard.dataset.index);
    const concert = state.concerts[state.index];
    if (!concert) return; // no more cards
    const card = document.createElement("div");
    card.className = "card details-card";
    const imgUrl =
      window.devicePixelRatio > 1.5 ? concert.image2x : concert.image1x;
    card.style.backgroundImage = `url(${imgUrl})`;
    card.style.backgroundPosition = concert.backgroundPosition;
    card.innerHTML = `
      <div class="view cards-popup">
        <div class="popup-inner-wrapper">
          <button id="popup-close" class="popup-close-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              fill="white"
            >
              <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
              <path
                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
              />
            </svg>
          </button>
          <div class="popup-content">
            <p>
              <strong><span>${concert.title}</span></strong> <br />
              vas pričakuje. <br />
              Zagotovite si vstopnico že <strong>zdaj</strong>.
            </p>
            <a
              href="${concert.url}"
              target="_blank"
              class="tinder-button tinder-button--icon"
            >
              <img
                src="./assets/images/ticket-solid.png"
                alt="ticket icon"
                width="20"
              />
              <span>VSTOPNICE</span>
            </a>
            <p>
              Ali pa nadaljujete z raziskovanjem - morda vam naslednji
              koncert prinese <strong>posebno nagrado</strong>.
            </p>
          </div>
        </div>
      </div>
    `;
    console.log("render!");
    qs("#cards-container").appendChild(card);
    qs("#popup-close").addEventListener("click", () => {
      state.showingDetails = false;
      next();
      swipeCard(true);
    });
    state.nextCard = card;
  }

  // Move to next card in state and render it beneath the one that is showing.
  function next() {
    if (state.renderedNext) {
      return;
    }
    state.currentCard.style.zIndex = "1";
    state.index++;
    // Don't render the next card in state if it's the same that is showing already.
    if (state.index === Number(state.currentCard.dataset.index)) {
      state.index++;
    }
    if (state.index >= state.concerts.length) {
      setupConcerts();
    }
    renderNextCard();
    state.renderedNext = true;
  }

  function swipeCard(right = false) {
    state.isAnimating = true;
    state.currentCard.style.zIndex = "2";
    state.currentCard.style.transition = `transform 0.${
      swipeTimeout / 100
    }s cubic-bezier(0.42,0,0.58,1), box-shadow 0.${
      swipeTimeout / 100
    }s cubic-bezier(0.42,0,0.58,1)`;

    // Detect mobile (simple check)
    const isMobile = window.innerWidth <= 600;

    // Use a larger translateX for mobile
    const x = isMobile
      ? right
        ? "200vw"
        : "-200vw"
      : right
      ? "100vw"
      : "-100vw";
    const y = "-200px";
    const rotate = right ? "20deg" : "-20deg";
    const scale = "1.5";

    state.currentCard.style.transform = `translate(${x}, ${y}) rotate(${rotate}) scale(${scale})`;
    state.currentCard.style.boxShadow = "0 8px 20px 20px rgba(0, 0, 0, 0.31)";
    setTimeout(() => {
      state.currentCard.remove();
      state.currentCard = state.nextCard;
      addSwipeListeners(state.currentCard);
      state.isAnimating = false;
      state.renderedNext = false;
    }, swipeTimeout);
  }

  function getInitialDirection(offsetX, initialDirection) {
    if (!initialDirection && Math.abs(offsetX) > 10) {
      return offsetX > 0 ? "right" : "left";
    }
    return initialDirection;
  }

  function isDirectionReversed(initialDirection, offsetX) {
    return (
      initialDirection &&
      ((initialDirection === "right" && offsetX < 0) ||
        (initialDirection === "left" && offsetX > 0))
    );
  }

  function preventScroll(e) {
    e.preventDefault();
  }

  // ========= EVENT HANDLERS ========= //

  function addSwipeListeners() {
    let startX = 0;
    let offsetX = 0;
    let isDragging = false;
    let initialDirection = null;

    function onStart(e) {
      isDragging = true;
      startX = e.type.startsWith("touch") ? e.touches[0].clientX : e.clientX;
      state.currentCard.style.transition = "none";
      state.currentCard.style.boxShadow = "";
    }

    function onMove(e) {
      if (!isDragging) return;
      const x = e.type.startsWith("touch") ? e.touches[0].clientX : e.clientX;
      offsetX = x - startX;
      if (offsetX < -5 || state.showingDetails) {
        if (
          state.nextCard &&
          state.nextCard.classList.contains("details-card") &&
          !state.showingDetails
        ) {
          state.nextCard.remove();
          state.nextCard = null;
          state.renderedNext = false;
        }
        next();
      } else if (offsetX > 5) {
        if (
          state.renderedNext &&
          state.nextCard.classList.contains("details-card")
        ) {
        } else {
          if (state.renderedNext) {
            state.nextCard.remove();
          }
          state.currentCard.style.zIndex = "2";
          renderDetailCard();
          state.renderedNext = true;
        }
      }

      initialDirection = getInitialDirection(offsetX, initialDirection);

      if (isDirectionReversed(initialDirection, offsetX)) {
        isDragging = false;
        state.currentCard.style.transition = "transform 0.2s";
        state.currentCard.style.transform = "";
        state.currentCard.style.boxShadox = "";
        return;
      }

      if (Math.abs(offsetX) > 10) {
        const maxScale = 1.15;
        const minScale = 1;
        const maxShadow = 20;
        const minShadow = 10;
        const maxOffset = 750;

        const absOffset = Math.min(Math.abs(offsetX), maxOffset);
        const scale =
          minScale + (maxScale - minScale) * (absOffset / maxOffset);
        const shadow =
          minShadow + (maxShadow - minShadow) * (absOffset / maxOffset);
        const translateY = -Math.abs(offsetX) / 6;

        state.currentCard.style.transform = `translateX(${offsetX}px) translateY(${translateY}px) rotate(${
          offsetX / 20
        }deg) scale(${scale})`;
        state.currentCard.style.boxShadow = `0 5px ${shadow}px rgba(0,0,0,0.31)`;
      }
      const widget = document.getElementById("tinder-widget");
      widget.addEventListener("touchmove", preventScroll, { passive: false });
    }

    function onEnd() {
      isDragging = false;
      if (state.currentCard) {
        state.currentCard.style.transition = `transform 0.${
          swipeTimeout / 100
        }s`;
      }
      if (offsetX < -100) {
        swipeCard();
        state.showingDetails = false;
      } else if (offsetX > 100) {
        if (state.currentCard.dataset.isMatch) {
          showView("match-page", true);
        }
        state.showingDetails = !state.showingDetails;
        swipeCard(true);
      } else {
        if (state.currentCard) {
          state.currentCard.style.transform = "";
          state.currentCard.style.boxShadox = "";
        }
      }
      offsetX = 0;
      initialDirection = null;
      widget.removeEventListener("touchmove", preventScroll);
    }

    state._onmove = onMove;
    state._onEnd = onEnd;
    state.onStart = onStart;

    state.currentCard.addEventListener("mousedown", onStart);
    state.currentCard.addEventListener("touchstart", onStart);

    const widget = document.getElementById("tinder-widget");
    widget.addEventListener("mousemove", onMove);
    widget.addEventListener("touchmove", onMove);
    widget.addEventListener("mouseup", onEnd);
    widget.addEventListener("touchend", onEnd);
  }

  function initEvents() {
    qs("#start-btn").addEventListener("click", async () => {
      state.index = 0;
      const card = await renderNextCard();
      state.currentCard = card;
      addSwipeListeners();
      showView("cards-view");

      if (card) {
        card.classList.add("swipe-hint");
        setTimeout(() => card.classList.remove("swipe-hint"), 1500);
      }
    });

    qs("#cards-container").addEventListener("click", (e) => {
      if (state.isAnimating) {
        return;
      }
      if (e.target.matches(".yes-btn")) {
        if (state.currentCard.dataset.isMatch) {
          qs("#match-page").classList.remove("hidden");
        }
        if (state.renderedNext) {
          state.index--;
          state.nextCard.remove();
        }
        state.currentCard.style.zIndex = "2";
        renderDetailCard();
        state.renderedNext = true;
        state.showingDetails = true;
        swipeCard(true);
      } else if (e.target.matches(".no-btn")) {
        next();
        swipeCard();
      }
    });

    qs("#go-to-form").addEventListener("click", () => {
      showView("form-page");
    });

    qs("#participation-form").addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());

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
      e.target.reset();
    });

    qs("#error-to-start").addEventListener("click", () => {
      qs("#cards-container").innerHTML = "";
      state = {
        ...state,
        nextCard: null,
        renderedNext: false,
        currentCard: null,
        isAnimating: false,
        showingDetails: false,
        index: 0,
      };
      setupConcerts();
      showView("home-view");
    });

    qs("#form-close").addEventListener("click", () => {
      qs("#participation-form").reset();
      showView("cards-view");
    });
  }

  // ========= INITIALIZATION ========= //

  preloadImages();
  setupConcerts();
  initEvents();
})();
