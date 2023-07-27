const squares = document.querySelectorAll('.listitem');

const observer = new IntersectionObserver(
  squares => {
    squares.forEach(square => {
      square.isIntersecting
        ? square.target.classList.add('visible')
        : square.target.classList.remove('visible');
    });
  },
  { threshold: 0.5 }
);

squares.forEach(square => observer.observe(square));
