gsap.registerPlugin(ScrollTrigger);

window.onload = function () {
  particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: ["#ffffff", "#ffd700", "#b8860b"] },
      shape: { type: "circle" },
      opacity: { value: 0.6, random: true },
      size: { value: 4, random: true },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffd700",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
      },
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
      },
      modes: { repulse: { distance: 100 }, push: { particles_nb: 4 } },
    },
    retina_detect: true,
  });
};

gsap.utils.toArray(".intro-block").forEach((block, i) => {
  gsap.from(block, {
    duration: 1.2,
    y: 80,
    opacity: 0,
    ease: "power3.out",
    scrollTrigger: { trigger: block, start: "top 85%" },
    delay: i * 0.15,
  });
});
