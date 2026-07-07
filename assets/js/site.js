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
    title: "You want the clean legal shell first.",
    body: "Start with the Queensland association path, founding meeting, model rules, committee roles and site-permission boundary. The useful move is not a grand launch; it is a club that can hold money, records and responsibility without blurring into any one site project.",
    href: "governance.html"
  },
  load: {
    title: "You want the load off one person.",
    body: "Start with shared roles, backups, handover notes and a visible task spine. A club is healthier when knowledge sits in the system, not in one founder's head or inbox.",
    href: "pathway.html"
  },
  admin: {
    title: "You want the admin to feel lighter.",
    body: "Start with the AI-first operating system: forms, registers, reminders, draft minutes, grant evidence and privacy-aware review gates. AI drafts. Humans decide.",
    href: "operating-system.html"
  },
  ecosystem: {
    title: "You want the wider opportunity map.",
    body: "Start with the companion labs. Grants prepare funding stories, tenders prepare delivery capability, film builders prepare evidence and storytelling, and the club gives people a stable meeting place.",
    href: "ecosystem.html"
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
        <a class="button primary" href="${item.href}">Open this path</a>
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
