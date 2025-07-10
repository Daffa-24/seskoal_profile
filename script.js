// Scroll animation effect
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll("[data-animate]");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  animatedElements.forEach((el) => observer.observe(el));
});

function toggleMenu() {
  const nav = document.getElementById("navMenu");
  nav.classList.toggle("show");
}

// Form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Pesan berhasil dikirim! Terima kasih.");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2,
  }
);

// Smooth scroll saat nav-link ditekan
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const target = document.querySelector(targetId);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    // Jika di mobile, tutup menu setelah klik
    const navMenu = document.querySelector(".nav-links");
    if (navMenu.classList.contains("show")) {
      navMenu.classList.remove("show");
    }
  });
});

document
  .querySelectorAll("[data-animate]")
  .forEach((el) => observer.observe(el));

window.addEventListener("beforeunload", () => window.scrollTo(0, 0));
window.addEventListener("load", () =>
  setTimeout(() => window.scrollTo(0, 0), 10)
);
