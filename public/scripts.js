const cards = document.querySelectorAll('.card');
const modalOverlay = document.querySelector('.modal-overlay');

cards.forEach(card => {
  card.onclick = () => {
    window.location.href = `/video?id=${card.getAttribute('id')}`;
  };
})
