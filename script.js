/**
 * Harsh Raj — Graphic Design Portfolio
 * Main Interactive Application Script
 * 
 * Features:
 * - Dynamic project rendering from projects-data.js & project-visuals.js
 * - Real-time category filtering (All, Branding, Social Media, Advertising, Print, Digital)
 * - Deep case-study dialog with multi-view visual gallery, color palette, typography breakdown, and rationale
 * - Next / Previous project browsing & keyboard shortcuts (ArrowLeft, ArrowRight, Escape)
 * - Deep-linking via URL hash (#project=id)
 * - Accessible mobile navigation drawer
 * - Contact form with client-side validation and clear submission state
 * - CV handler with request dialog when pending update
 * - Central configuration synchronization from config.js
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Site Configuration
  initSiteConfig();

  // 2. Render Portfolio Projects Grid
  renderProjectsGrid();

  // 3. Initialize Category Filters
  initCategoryFilters();

  // 4. Initialize Case Study Dialog & Deep Linking
  initCaseStudyDialog();

  // 5. Initialize Contact Form & Validation
  initContactForm();

  // 6. Initialize CV / Resume Action
  initResumeAction();

  // 7. Initialize Mobile Navigation & Scroll Spy
  initNavigation();

  // 8. Footer Year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

/* ==========================================================================
   1. Site Configuration Synchronization
   ========================================================================== */
function initSiteConfig() {
  if (typeof window.SITE_CONFIG === "undefined") return;
  const config = window.SITE_CONFIG;

  // Personal Info
  const nameEls = document.querySelectorAll(".cfg-name");
  nameEls.forEach(el => el.textContent = config.name);

  const roleEls = document.querySelectorAll(".cfg-role");
  roleEls.forEach(el => el.textContent = config.role);

  const headlineEl = document.getElementById("hero-headline");
  if (headlineEl && config.headline) {
    headlineEl.innerHTML = `Turning Ideas Into<br><em>Visual Experiences.</em>`;
  }

  const subheadEl = document.getElementById("hero-subhead");
  if (subheadEl && config.subheadline) {
    subheadEl.textContent = config.subheadline;
  }

  // Social Links
  const linkedinLinks = document.querySelectorAll(".cfg-link-linkedin");
  linkedinLinks.forEach(link => {
    link.href = config.socials.linkedin;
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noreferrer");
  });

  const githubLinks = document.querySelectorAll(".cfg-link-github");
  githubLinks.forEach(link => {
    link.href = config.socials.github;
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noreferrer");
  });

  // Email setup
  const emailLinks = document.querySelectorAll(".cfg-link-email");
  const emailNotice = document.getElementById("email-config-notice");
  if (config.socials.email && config.socials.email.trim() !== "") {
    emailLinks.forEach(link => {
      link.href = `mailto:${config.socials.email}?subject=Design%20Opportunity%20for%20Harsh%20Raj`;
    });
    if (emailNotice) emailNotice.hidden = true;
  } else {
    emailLinks.forEach(link => {
      link.href = "#contact";
      link.addEventListener("click", (e) => {
        // Smooth scroll to contact form if email is not directly configured
        e.preventDefault();
        const contactSec = document.getElementById("contact");
        if (contactSec) contactSec.scrollIntoView({ behavior: "smooth" });
      });
    });
    if (emailNotice) emailNotice.hidden = false;
  }

  // Render Skills
  renderSkillsSection(config.skills);
}

/* ==========================================================================
   Skills Rendering
   ========================================================================== */
function renderSkillsSection(skills) {
  if (!skills) return;

  const designContainer = document.getElementById("skills-design-grid");
  if (designContainer && skills.design && !designContainer.children.length) {
    designContainer.innerHTML = skills.design.map(item => `
      <div class="skill-card">
        <div class="skill-head">
          <span class="skill-dot"></span>
          <h4>${item.name}</h4>
        </div>
        <p>${item.description}</p>
      </div>
    `).join("");
  }

  const techContainer = document.getElementById("skills-tech-grid");
  if (techContainer && skills.technical && !techContainer.children.length) {
    techContainer.innerHTML = skills.technical.map(item => `
      <div class="skill-card">
        <div class="skill-head">
          <span class="skill-dot tech"></span>
          <h4>${item.name}</h4>
        </div>
        <p>${item.description}</p>
      </div>
    `).join("");
  }
}

/* ==========================================================================
   2. Render Projects Grid
   ========================================================================== */
function renderProjectsGrid() {
  const grid = document.getElementById("projects-grid");
  if (!grid || typeof window.PORTFOLIO_PROJECTS === "undefined") return;
  if (grid.children.length > 0) return; // Already pre-rendered in static HTML

  grid.innerHTML = window.PORTFOLIO_PROJECTS.map(project => {
    const isWide = project.gridSpan === "wide" ? "wide" : "";
    const visualModule = window.PROJECT_VISUALS && window.PROJECT_VISUALS[project.id];
    const visualContent = visualModule ? visualModule.renderCard() : `<div class="pv-fallback">${project.title}</div>`;

    return `
      <article class="project-card ${isWide}" 
               data-id="${project.id}" 
               data-categories="${project.tags.join(" ")}"
               id="card-${project.id}">
        <button class="project-open-btn" aria-label="Open case study for ${project.title}">
          <div class="project-card-visual-wrap">
            ${visualContent}
            <div class="project-overlay-pill">
              <span>EXPLORE CASE STUDY</span>
              <span class="pill-arrow">↗</span>
            </div>
          </div>
          
          <div class="project-card-meta">
            <div class="meta-left">
              <span class="project-card-number">${project.number} / ${project.categoryLabel.toUpperCase()}</span>
              <h3 class="project-card-title">${project.title}</h3>
              <p class="project-card-summary">${project.summary}</p>
            </div>
            <div class="meta-right">
              <span class="meta-badge-concept">${project.statusBadge}</span>
              <span class="project-card-arrow-circle">↗</span>
            </div>
          </div>
        </button>
      </article>
    `;
  }).join("");
}

/* ==========================================================================
   3. Category Filters
   ========================================================================== */
function initCategoryFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".project-card");
  const countBadge = document.getElementById("filtered-count");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      filterButtons.forEach(b => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      button.classList.add("active");
      button.setAttribute("aria-selected", "true");

      const selectedFilter = button.dataset.filter;
      let visibleCount = 0;

      cards.forEach(card => {
        const categories = (card.dataset.categories || "").split(" ");
        const match = selectedFilter === "all" || categories.includes(selectedFilter);
        
        if (match) {
          card.hidden = false;
          card.classList.remove("is-hidden");
          visibleCount++;
        } else {
          card.hidden = true;
          card.classList.add("is-hidden");
        }
      });

      if (countBadge) {
        countBadge.textContent = visibleCount < 10 ? `0${visibleCount}` : `${visibleCount}`;
      }
    });
  });
}

/* ==========================================================================
   4. Case Study Dialog & Deep-Linking
   ========================================================================== */
let currentActiveProjectId = null;

function initCaseStudyDialog() {
  const dialog = document.getElementById("case-study-dialog");
  const closeBtn = document.querySelector(".dialog-close-btn");
  const prevBtn = document.getElementById("dialog-prev-btn");
  const nextBtn = document.getElementById("dialog-next-btn");

  if (!dialog) return;

  // Delegate project open clicks
  document.addEventListener("click", (e) => {
    const openBtn = e.target.closest(".project-open-btn");
    if (openBtn) {
      const card = openBtn.closest(".project-card");
      if (card && card.dataset.id) {
        openProjectCaseStudy(card.dataset.id);
      }
    }
  });

  // Close handlers
  if (closeBtn) {
    closeBtn.addEventListener("click", () => closeCaseStudyDialog());
  }

  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) {
      closeCaseStudyDialog();
    }
  });

  // Next / Prev Navigation
  if (prevBtn) {
    prevBtn.addEventListener("click", () => navigateProject(-1));
  }
  if (nextBtn) {
    nextBtn.addEventListener("click", () => navigateProject(1));
  }

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (!dialog.open) return;
    if (e.key === "Escape") {
      closeCaseStudyDialog();
    } else if (e.key === "ArrowLeft") {
      navigateProject(-1);
    } else if (e.key === "ArrowRight") {
      navigateProject(1);
    }
  });

  // Hash deep-linking on initial load
  handleHashNavigation();
  window.addEventListener("hashchange", handleHashNavigation);
}

function openProjectCaseStudy(projectId) {
  if (typeof window.getProjectById !== "function") return;
  const project = window.getProjectById(projectId);
  if (!project) return;

  currentActiveProjectId = projectId;
  const dialog = document.getElementById("case-study-dialog");
  const visualModule = window.PROJECT_VISUALS && window.PROJECT_VISUALS[projectId];

  // Update Dialog Headers & Tags
  document.getElementById("cs-number").textContent = `${project.number} / 12`;
  document.getElementById("cs-category-badge").textContent = project.categoryLabel.toUpperCase();
  document.getElementById("cs-title").textContent = project.title;
  document.getElementById("cs-client-type").textContent = project.clientType;
  document.getElementById("cs-status-tag").textContent = project.statusBadge;

  // Insert Rich Visual Gallery
  const galleryContainer = document.getElementById("cs-gallery-container");
  if (galleryContainer) {
    galleryContainer.innerHTML = visualModule ? visualModule.renderGallery() : visualModule.renderCard();
  }

  // Overview & Narrative
  document.getElementById("cs-brief").textContent = project.brief;
  document.getElementById("cs-problem").textContent = project.problemStatement;
  document.getElementById("cs-audience").textContent = project.targetAudience;
  document.getElementById("cs-direction").textContent = project.creativeDirection;

  // Color Palette Swatches
  const paletteContainer = document.getElementById("cs-palette-container");
  if (paletteContainer) {
    paletteContainer.innerHTML = project.palette.map(swatch => `
      <div class="swatch-card" data-hex="${swatch.hex}" title="Click to copy ${swatch.hex}">
        <div class="swatch-color" style="background-color: ${swatch.hex};"></div>
        <div class="swatch-info">
          <b>${swatch.name}</b>
          <code>${swatch.hex}</code>
          <small>${swatch.role}</small>
        </div>
      </div>
    `).join("");

    // Click to copy hex code
    paletteContainer.querySelectorAll(".swatch-card").forEach(swatch => {
      swatch.addEventListener("click", () => {
        const hex = swatch.dataset.hex;
        navigator.clipboard.writeText(hex).then(() => {
          const originalCode = swatch.querySelector("code").textContent;
          swatch.querySelector("code").textContent = "COPIED! ✓";
          setTimeout(() => {
            swatch.querySelector("code").textContent = originalCode;
          }, 1500);
        }).catch(() => {});
      });
    });
  }

  // Typography Breakdown
  const typoContainer = document.getElementById("cs-typo-container");
  if (typoContainer) {
    typoContainer.innerHTML = project.typography.map(t => `
      <div class="typo-row">
        <div class="typo-role-badge">${t.role}</div>
        <div class="typo-specimen">
          <h4>${t.font} · <em>${t.style}</em></h4>
          <p>${t.notes}</p>
        </div>
      </div>
    `).join("");
  }

  // Deliverables
  const deliverablesContainer = document.getElementById("cs-deliverables-list");
  if (deliverablesContainer) {
    deliverablesContainer.innerHTML = project.deliverables.map(item => `
      <li><span class="check-mark">✦</span> ${item}</li>
    `).join("");
  }

  // Design Decisions
  const decisionsContainer = document.getElementById("cs-decisions-list");
  if (decisionsContainer) {
    decisionsContainer.innerHTML = project.designDecisions.map((dec, idx) => `
      <div class="decision-card">
        <span class="decision-num">0${idx + 1}</span>
        <p>${dec}</p>
      </div>
    `).join("");
  }

  // Update hash without triggering a jump
  history.replaceState(null, "", `#project=${projectId}`);

  // Show dialog
  if (!dialog.open) {
    dialog.showModal();
    document.body.classList.add("dialog-locked");
  }

  // Scroll dialog back to top
  dialog.scrollTop = 0;
}

function closeCaseStudyDialog() {
  const dialog = document.getElementById("case-study-dialog");
  if (dialog && dialog.open) {
    dialog.close();
    document.body.classList.remove("dialog-locked");
    // Remove project hash
    if (window.location.hash.startsWith("#project=")) {
      history.replaceState(null, "", window.location.pathname);
    }
  }
}

function navigateProject(direction) {
  if (!currentActiveProjectId || typeof window.PORTFOLIO_PROJECTS === "undefined") return;
  const list = window.PORTFOLIO_PROJECTS;
  const currentIndex = list.findIndex(p => p.id === currentActiveProjectId);
  if (currentIndex === -1) return;

  let newIndex = currentIndex + direction;
  if (newIndex < 0) newIndex = list.length - 1;
  if (newIndex >= list.length) newIndex = 0;

  openProjectCaseStudy(list[newIndex].id);
}

function handleHashNavigation() {
  const hash = window.location.hash;
  if (hash.startsWith("#project=")) {
    const projectId = hash.replace("#project=", "");
    openProjectCaseStudy(projectId);
  }
}

/* ==========================================================================
   5. Contact Form Validation & Submission State
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById("contact-form");
  const successCard = document.getElementById("contact-success-card");
  const resetBtn = document.getElementById("contact-reset-btn");

  if (!form) return;

  const nameInput = document.getElementById("contact-name");
  const emailInput = document.getElementById("contact-email");
  const typeSelect = document.getElementById("contact-type");
  const msgInput = document.getElementById("contact-message");
  const submitBtn = form.querySelector(".form-submit-btn");

  // Real-time error clearing
  [nameInput, emailInput, msgInput].forEach(input => {
    if (!input) return;
    input.addEventListener("input", () => {
      clearFieldError(input);
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let isValid = true;

    // Validate Name
    if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
      setFieldError(nameInput, "Please enter your name (minimum 2 characters).");
      isValid = false;
    } else {
      clearFieldError(nameInput);
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
      setFieldError(emailInput, "Please enter a valid email address.");
      isValid = false;
    } else {
      clearFieldError(emailInput);
    }

    // Validate Message
    if (!msgInput.value.trim() || msgInput.value.trim().length < 10) {
      setFieldError(msgInput, "Please include a message (minimum 10 characters).");
      isValid = false;
    } else {
      clearFieldError(msgInput);
    }

    if (!isValid) return;

    // Simulate submission state
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>Sending Message...</span> <span class="spinner-dot"></span>`;
    }

    setTimeout(() => {
      // Show Success State
      form.hidden = true;
      if (successCard) {
        successCard.hidden = false;
        const successName = document.getElementById("success-sender-name");
        if (successName) successName.textContent = nameInput.value.trim();
      }
      form.reset();
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<span>Send Message</span> <i>↗</i>`;
      }
    }, 900);
  });

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (successCard) successCard.hidden = true;
      form.hidden = false;
    });
  }
}

function setFieldError(input, message) {
  input.classList.add("input-error");
  const errorEl = document.getElementById(`${input.id}-error`);
  if (errorEl) {
    errorEl.textContent = message;
    errorEl.hidden = false;
  }
}

function clearFieldError(input) {
  input.classList.remove("input-error");
  const errorEl = document.getElementById(`${input.id}-error`);
  if (errorEl) {
    errorEl.textContent = "";
    errorEl.hidden = true;
  }
}

/* ==========================================================================
   6. Resume / CV Action
   ========================================================================== */
function initResumeAction() {
  const resumeButtons = document.querySelectorAll(".action-download-cv");
  const cvModal = document.getElementById("cv-request-dialog");
  const closeCvBtn = document.querySelector(".cv-close-btn");
  const requestFormBtn = document.getElementById("cv-request-form-btn");

  if (!resumeButtons.length) return;

  resumeButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const config = window.SITE_CONFIG;
      if (config && config.resume && config.resume.cvAvailable) {
        // Direct download
        const downloadLink = document.createElement("a");
        downloadLink.href = config.resume.cvPath;
        downloadLink.download = config.resume.cvFilename || "Harsh_Raj_Resume.pdf";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      } else {
        // Show polite request dialog
        if (cvModal) cvModal.showModal();
      }
    });
  });

  if (closeCvBtn && cvModal) {
    closeCvBtn.addEventListener("click", () => cvModal.close());
  }

  if (requestFormBtn && cvModal) {
    requestFormBtn.addEventListener("click", () => {
      cvModal.close();
      const contactSection = document.getElementById("contact");
      const contactType = document.getElementById("contact-type");
      const contactMsg = document.getElementById("contact-message");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
      if (contactType) contactType.value = "cv-request";
      if (contactMsg) {
        contactMsg.value = "Hi Harsh, I would love to request a copy of your updated CV / Resume.";
        contactMsg.focus();
      }
    });
  }
}

/* ==========================================================================
   7. Mobile Navigation & Scroll Spy
   ========================================================================== */
function initNavigation() {
  const menuToggle = document.querySelector(".menu-toggle-btn");
  const navDrawer = document.querySelector(".nav-drawer");
  const navLinks = document.querySelectorAll(".nav-link");

  if (menuToggle && navDrawer) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navDrawer.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.innerHTML = isOpen ? "<span>✕</span>" : "<span>☰</span>";
    });

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navDrawer.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.innerHTML = "<span>☰</span>";
      });
    });
  }

  // Active link scroll spy
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelectorAll(`.nav-link[href="#${sectionId}"]`).forEach(link => {
          link.classList.add("active");
        });
      } else {
        document.querySelectorAll(`.nav-link[href="#${sectionId}"]`).forEach(link => {
          link.classList.remove("active");
        });
      }
    });
  });
}
