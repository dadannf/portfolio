// ==================== NAVIGASI MOBILE ====================
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    // Buka / tutup menu saat tombol hamburger diklik
    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("active");
        menuToggle.setAttribute("aria-expanded", isOpen);
    });

    // Otomatis tutup menu saat salah satu tautan diklik (khusus mobile)
    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            if (navLinks.classList.contains("active")) {
                navLinks.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
            }
        });
    });
}

// ==================== TAHUN FOOTER DINAMIS ====================
const currentYearElement = document.getElementById("currentYear");
if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}

// ==================== LOGIKA MODAL OVERVIEW ====================
const overviewButtons = document.querySelectorAll("[data-modal]");

overviewButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const modalId = btn.getAttribute("data-modal");
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.showModal();
        }
    });
});

// Tutup modal saat tombol close diklik atau klik area luar modal
document.querySelectorAll(".project-modal").forEach(modal => {
    const closeBtn = modal.querySelector(".modal-close");
    if (closeBtn) {
        closeBtn.addEventListener("click", () => modal.close());
    }

    modal.addEventListener("click", (e) => {
        const rect = modal.getBoundingClientRect();
        const isInDialog = (
            rect.top <= e.clientY &&
            e.clientY <= rect.top + rect.height &&
            rect.left <= e.clientX &&
            e.clientX <= rect.left + rect.width
        );
        if (!isInDialog) {
            modal.close();
        }
    });
});
