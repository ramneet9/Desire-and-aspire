export function setupScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          el.classList.add("reveal-visible");
          observer.unobserve(el);
        }
      });
    },
    { root: null, rootMargin: "0px", threshold: 0.2 }
  );

  const elements = document.querySelectorAll<HTMLElement>(".reveal");
  elements.forEach((el) => observer.observe(el));
}


