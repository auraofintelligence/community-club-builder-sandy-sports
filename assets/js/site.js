const body = document.body;
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const open = body.classList.toggle("menu-open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
}

const backToTop = document.querySelector(".back-to-top");
if (backToTop) {
  const syncBackToTop = () => {
    backToTop.classList.toggle("visible", window.scrollY > 640);
  };
  syncBackToTop();
  window.addEventListener("scroll", syncBackToTop, { passive: true });
}

const choiceData = {
  lawful: {
    title: "Legitimacy",
    body: "Early on, this lane suits people who stay calm around rules, money, insurance, permissions and clean records. Before the club exists formally, they help keep the proposal honest; once the club is real, they protect trust when grants, partners and site conversations get serious.",
    href: "governance.html"
  },
  load: {
    title: "Continuity",
    body: "Early excitement is easy. Continuity is the quieter work of remembering the next step, making sure someone else can cover a role, and turning loose conversations into decisions people can find later. It lets a future committee inherit movement instead of a mystery.",
    href: "pathway.html"
  },
  admin: {
    title: "Systems",
    body: "This lane is for people who can make the work lighter before it becomes heavy. A shared drive, forms, registers, reminders and AI-assisted drafts let the first committee inherit an operating rhythm instead of building admin from scratch.",
    href: "operating-system.html"
  },
  ecosystem: {
    title: "Relationships",
    body: "Some people can have careful conversations across school, sport, Council, local business, ferry context, makers, media, funders and site ideas. Early on, that is listening and mapping; later, it becomes partnership discipline: open doors, clear boundaries, no promises before permission.",
    href: "ecosystem.html"
  },
  opportunity: {
    title: "Care and proof",
    body: "Before any big facility claim, the club can earn evidence through small, visible activity: people turning up, returning, bringing family, learning, competing, helping and feeling less alone. This lane keeps care, records and opportunity in the same conversation.",
    href: "opportunity-stack.html"
  },
  team: {
    title: "Culture",
    body: "Culture starts before minutes exist. This lane recognises the people whose presence makes others more likely to play, listen, compete fairly, recover from a loss, celebrate a win and bring someone new next time. Later, those people help hold authority without turning the club into a status game.",
    href: "human-team.html"
  }
};

const choiceButtons = document.querySelectorAll("[data-choice]");
const choicePanel = document.querySelector(".choice-panel");

if (choiceButtons.length && choicePanel) {
  const renderChoice = (key) => {
    const item = choiceData[key];
    choicePanel.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.body}</p>
      <div class="button-row">
        <a class="button primary" href="${item.href}">Explore this lane</a>
      </div>
    `;
    choiceButtons.forEach((button) => {
      button.setAttribute("aria-selected", String(button.dataset.choice === key));
    });
  };

  choiceButtons.forEach((button) => {
    button.addEventListener("click", () => renderChoice(button.dataset.choice));
  });

  renderChoice("lawful");
}
