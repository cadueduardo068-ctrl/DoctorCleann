import { useEffect } from 'react';

/** Progressive enhancement: content is visible even without an observer or animation. */
export function useEntranceMotion() {
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!('IntersectionObserver' in window)) return;
    const selector = '.section-heading, .service, .care-grid > *, #como-funciona > .eyebrow, #como-funciona > h2, .step, .region-grid > *, .faq > *, .final-cta';
    const elements = [...document.querySelectorAll<HTMLElement>(selector)];
    let observer: IntersectionObserver | undefined;
    const stop = () => {
      observer?.disconnect();
      elements.forEach(element => {
        element.classList.remove('motion-enter');
        element.style.removeProperty('--entrance-delay');
      });
    };
    const start = () => {
      stop();
      if (preference.matches) return;
      observer = new IntersectionObserver(entries => {
        const visible = entries.filter(entry => entry.isIntersecting);
        visible.forEach((entry, index) => {
          const element = entry.target as HTMLElement;
          // Stagger only items entering together; never delay offscreen content.
          const stagger = element.matches('.service, .step') ? Math.min(index, 3) * 45 : 0;
          element.style.setProperty('--entrance-delay', `${stagger}ms`);
          element.classList.add('motion-enter');
          observer?.unobserve(element);
        });
      }, { threshold: 0, rootMargin: '0px 0px 24px 0px' });
      elements.forEach(element => observer?.observe(element));
    };
    start();
    preference.addEventListener('change', start);
    return () => { stop(); preference.removeEventListener('change', start); };
  }, []);
}
