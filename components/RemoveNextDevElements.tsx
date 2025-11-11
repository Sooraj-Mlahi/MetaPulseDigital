'use client';

import { useEffect } from 'react';

export default function RemoveNextDevElements() {
  useEffect(() => {
    // Function to remove Next.js development elements
    const removeDevElements = () => {
      // List of selectors for Next.js development elements
      const selectors = [
        '#__next-build-watcher',
        '[data-nextjs-scroll-focus-boundary]',
        '.__next-dev-overlay',
        '.__next-dev-overlay-backdrop',
        '[id^="__next"]',
        '[class*="next-dev"]',
        '[class*="nextjs"]',
        '[class*="__next"]',
        '[data-nextjs]',
        '[data-next]',
        'div[style*="position: fixed"][style*="bottom: 16px"][style*="left: 16px"]',
        'div[style*="position:fixed"][style*="bottom:16px"][style*="left:16px"]',
        'div[style*="z-index: 9000"]',
        'div[style*="z-index: 999999"]'
      ];

      selectors.forEach(selector => {
        try {
          const elements = document.querySelectorAll(selector);
          elements.forEach(element => {
            if (element && element.parentNode) {
              element.remove();
            }
          });
        } catch (e) {
          // Ignore selector errors
        }
      });

      // Also remove any fixed positioned elements in bottom-left that might be Next.js related
      const fixedElements = document.querySelectorAll('div[style*="position: fixed"]');
      fixedElements.forEach(element => {
        const style = element.getAttribute('style') || '';
        if (
          style.includes('bottom') && 
          style.includes('left') && 
          (
            element.innerHTML.includes('Next') || 
            element.innerHTML.includes('next') ||
            element.querySelector('svg') ||
            element.children.length === 1
          )
        ) {
          element.remove();
        }
      });
    };

    // Remove immediately
    removeDevElements();

    // Also remove on DOM mutations (when new elements are added)
    const observer = new MutationObserver(() => {
      removeDevElements();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Remove every 100ms for the first 5 seconds to catch any delayed elements
    const intervals = [];
    for (let i = 0; i < 50; i++) {
      intervals.push(setTimeout(removeDevElements, i * 100));
    }

    return () => {
      observer.disconnect();
      intervals.forEach(clearTimeout);
    };
  }, []);

  return null; // This component doesn't render anything
}