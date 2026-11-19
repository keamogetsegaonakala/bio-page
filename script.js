const projects = [
  {
    title: "Bio Page",
    description: "My first HTML and CSS page.",
    category: "HTML"
  },
  {
    title: "Responsive Nav",
    description: "A flexbox nav bar that adapts.",
    category: "CSS"
  },
  {
    title: "Grid Gallery",
    description: "Cards laid out with CSS Grid.",
    category: "CSS"
  },
  {
    title: "Contact Form",
    description: "A form with validation.",
    category: "HTML"
  }
];

console.log(projects[0].title);

const projectsGrid = document.querySelector("#projectsGrid");
const filterButtons = document.querySelectorAll(".filter-btn");

function renderProjects(selectedCategory = "All") {
  if (!projectsGrid) return;

  projectsGrid.innerHTML = "";

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  filteredProjects.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card";

    const titleEl = document.createElement("h3");
    titleEl.textContent = project.title;

    const descEl = document.createElement("p");
    descEl.textContent = project.description;

    const badgeEl = document.createElement("span");
    badgeEl.className = "project-category";
    badgeEl.textContent = project.category;

    card.append(titleEl, descEl, badgeEl);
    projectsGrid.appendChild(card);
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.filter;

    filterButtons.forEach((btn) => {
      const isSelected = btn === button;
      btn.classList.toggle("active", isSelected);
      btn.setAttribute("aria-pressed", String(isSelected));
    });

    renderProjects(category);
  });
});

renderProjects("All");

const form = document.querySelector("#contactForm");
const message = document.querySelector("#formMessage");

if (form && message) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const text = document.querySelector("#message").value.trim();

    if (name === "" || text.length < 10) {
      message.textContent = "Please enter your name and a message of at least 10 characters.";
      return;
    }

    message.textContent = "Thanks, " + name + "! Your message was received.";
    form.reset();
  });
}

const messageInput = document.querySelector("#message");
const charCount = document.querySelector("#charCount");

function updateCharCount() {
  if (!messageInput || !charCount) return;

  const length = messageInput.value.length;
  charCount.textContent = `${length} / 10 characters minimum`;
}

if (messageInput && charCount) {
  messageInput.addEventListener("input", updateCharCount);
  updateCharCount();
}

const themeToggle = document.querySelector("#themeToggle");

if (themeToggle) {
  themeToggle.addEventListener("click", function () {
    const isDark = document.body.classList.toggle("dark");
    themeToggle.textContent = isDark ? "Light Mode" : "Dark Mode";
    themeToggle.setAttribute("aria-pressed", String(isDark));
  });
}