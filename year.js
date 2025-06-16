function updateYear() {
  if (typeof document !== 'undefined') {
    const el = document.getElementById('year');
    if (el) {
      el.textContent = new Date().getFullYear();
    }
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = updateYear;
} else {
  window.updateYear = updateYear;
}
