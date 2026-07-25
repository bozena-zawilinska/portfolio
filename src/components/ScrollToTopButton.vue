<template>
  <Transition name="scroll-button" appear>
    <button
      v-if="visible"
      class="scroll-to-top"
      aria-label="Scroll to top of page"
      title="Scroll to top"
      type="button"
      @click="scrollToTop"
    >
      <svg
        class="scroll-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 15l7-7 7 7"
        />
      </svg>
      <span class="scroll-text">Top</span>
    </button>
  </Transition>
</template>

<script>
export default {
  name: 'ScrollToTopButton',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    scrollToTop() {
      // Smooth scroll to top with fallback
      if ('scrollBehavior' in document.documentElement.style) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      } else {
        // Fallback for older browsers
        const scrollStep = -window.scrollY / (500 / 15)
        const scrollInterval = setInterval(() => {
          if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep)
          } else {
            clearInterval(scrollInterval)
          }
        }, 15)
      }

      // Announce to screen readers
      this.announceToScreenReader('Scrolled to top of page')
    },

    announceToScreenReader(message) {
      const announcement = document.createElement('div')
      announcement.setAttribute('aria-live', 'polite')
      announcement.setAttribute('aria-atomic', 'true')
      announcement.setAttribute('class', 'sr-only')
      announcement.textContent = message
      document.body.appendChild(announcement)

      setTimeout(() => {
        document.body.removeChild(announcement)
      }, 1000)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.scroll-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: auto;
  min-width: 50px;
  height: 50px;
  padding: 0 1rem;
  background: $gradient-hero;
  color: $text-inverse;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  z-index: z(scroll-to-top);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba($text-primary, 0.15);
  backdrop-filter: blur(20px);

  // Accessibility improvements
  &:focus {
    outline: 2px solid $text-inverse;
    outline-offset: 2px;
  }

  &:focus-visible {
    outline: 2px solid $text-inverse;
    outline-offset: 2px;
  }

  .scroll-icon {
    width: 20px;
    height: 20px;
    stroke-width: 2.5;
    flex-shrink: 0;
    color: $text-inverse;
  }

  .scroll-text {
    font-size: 14px;
    font-weight: 600;
    color: $text-inverse;
    white-space: nowrap;
    opacity: 0;
    width: 0;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  &:hover {
    transform: translateY(-4px) scale(1.05);
    box-shadow: 0 8px 20px rgba($text-primary, 0.25);
    filter: brightness(1.05);

    .scroll-text {
      opacity: 1;
      width: auto;
      margin-left: 0.25rem;
    }
  }

  &:active {
    transform: translateY(-2px) scale(1.02);
  }

  // Animation for appearance
  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  &.hidden {
    opacity: 0;
    transform: translateY(20px);
    pointer-events: none;
  }
}

// Responsive Design
@include breakpoint-down(md) {
  .scroll-to-top {
    bottom: 1.5rem;
    right: 1.5rem;
    width: 45px;
    height: 45px;
    min-width: 45px;
    padding: 0;
    border-radius: 50%;

    .scroll-icon {
      width: 18px;
      height: 18px;
      color: $text-inverse;
    }

    .scroll-text {
      display: none; // Hide text on mobile for space
    }

    &:hover .scroll-text {
      display: none; // Ensure text stays hidden on mobile
    }
  }
}

// Screen reader only text
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

// Transition animations
.scroll-button-enter-active,
.scroll-button-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.scroll-button-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.8);
}

.scroll-button-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.8);
}

// The main button styles are defined in _light-theme.scss
// This ensures consistency across the app while maintaining component isolation
.scroll-to-top {
  // Additional component-specific styles can go here if needed

  // Ensure proper stacking context
  isolation: isolate;

  // Improve button accessibility on touch devices
  @media (hover: none) and (pointer: coarse) {
    // Larger touch target on mobile
    &::before {
      content: '';
      position: absolute;
      top: -10px;
      left: -10px;
      right: -10px;
      bottom: -10px;
      z-index: -1;
    }
  }
}
</style>
