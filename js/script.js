// =============================
// 🌟 SMOOTH SCROLL NAVIGATION
// =============================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60, // menyesuaikan tinggi navbar
        behavior: "smooth",
      });
    }
  });
});

// =============================
// ✨ FADE-IN ANIMATION SAAT SCROLL
// =============================
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// =============================
// 📬 FORM VALIDATION CONTACT
// =============================
const form = document.querySelector(".contact-form");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const message = form.querySelector("textarea").value.trim();

    if (!name || !email || !message) {
      alert("⚠️ Harap isi semua kolom sebelum mengirim pesan!");
      return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
      alert("📧 Format email tidak valid!");
      return;
    }

    alert(`🎉 Terima kasih ${name}, pesan kamu sudah terkirim!`);
    form.reset();
  });
}
