<template>
  <section class="cta-section" :aria-labelledby="headingId">
    <!-- Minimal Floating Elements (matching homepage style) -->
    <div class="floating-elements" aria-hidden="true">
      <div class="floating-shape floating-shape--1"></div>
      <div class="floating-shape floating-shape--2"></div>
      <div class="floating-shape floating-shape--3"></div>
    </div>

    <div class="cta-content">
      <h2 :id="headingId" class="cta-heading">
        <slot name="heading">{{ heading }}</slot>
      </h2>

      <p class="cta-text">
        <slot name="text">{{ text }}</slot>
      </p>

      <div v-if="$slots.actions || actions.length > 0" class="cta-actions">
        <slot name="actions">
          <BaseButton
            v-for="(action, index) in actions"
            :key="action.text"
            :to="action.to"
            :href="action.href"
            :variant="action.variant || (index === 0 ? 'primary' : 'secondary')"
            :size="action.size || 'large'"
            :icon-right="action.iconRight"
            :aria-label="action.ariaLabel"
            :target="action.target"
            :rel="action.rel"
            class="cta-button"
          >
            {{ action.text }}
          </BaseButton>
        </slot>
      </div>

      <!-- Optional supporting text -->
      <p v-if="supportText || $slots.support" class="cta-support">
        <slot name="support">{{ supportText }}</slot>
      </p>
    </div>
  </section>
</template>

<script>
import BaseButton from '@/components/Button.vue'

export default {
  name: 'CallToAction',
  components: {
    BaseButton,
  },
  props: {
    heading: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    actions: {
      type: Array,
      default: () => [],
    },
    supportText: {
      type: String,
      default: '',
      description: 'Optional supporting text below the actions',
    },
  },
  computed: {
    headingId() {
      return `cta-heading-${
        this._uid || Math.random().toString(36).substr(2, 9)
      }`
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.cta-section {
  @include light-card;
  text-align: center;
  position: relative;
  overflow: hidden;
  margin: 2rem 0;

  @include breakpoint-down(md) {
    margin: 1.5rem 0;
  }

  // Minimal Floating Elements (matching homepage style)
  .floating-elements {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    pointer-events: none;

    .floating-shape {
      position: absolute;

      border-radius: 60% 40% 55% 45% / 50% 60% 40% 50%;
      background: $gradient-purple;
      border: 1px solid $glass-border;
      backdrop-filter: blur(10px);

      &--1 {
        width: clamp(80px, 10vw, 150px);
        height: clamp(80px, 10vw, 150px);
        top: 15%;
        left: 5%;
        animation: float 6s ease-in-out infinite;
        background: $gradient-droplet-purple;
      }

      &--2 {
        width: clamp(60px, 8vw, 80px);
        height: clamp(60px, 8vw, 80px);
        top: 60%;
        right: 15%;
        border-radius: 45% 55% 40% 60% / 55% 45% 60% 40%;
        animation: float 8s ease-in-out infinite reverse;
        background: $gradient-droplet-coral;
      }

      &--3 {
        width: clamp(40px, 6vw, 60px);
        height: clamp(40px, 6vw, 60px);
        bottom: 20%;
        left: 20%;
        border-radius: 55% 45% 50% 50% / 45% 55% 45% 55%;
        animation: float 10s ease-in-out infinite;
        background: $gradient-droplet;
      }
    }
  }

  .cta-content {
    position: relative;
    z-index: 2;
    max-width: 600px;
    margin: 0 auto;

    .cta-heading {
      @include light-text-gradient;
      font-size: clamp(1.5rem, 4vw, 2rem);
      margin-bottom: 1rem;
      font-weight: 700;
      line-height: 1.3;
      letter-spacing: -0.01em;
    }

    .cta-text {
      color: $text-secondary;
      line-height: 1.6;
      margin-bottom: 2rem;
      font-size: clamp(0.9rem, 2.5vw, 1rem);
      max-width: 500px;
      margin-left: auto;
      margin-right: auto;

      @include breakpoint-down(md) {
        margin-bottom: 1.5rem;
      }

      // Clean text links matching portfolio style
      :deep(.text-link) {
        color: $interactive-primary;
        text-decoration: none;
        font-weight: 500;
        transition: color 0.3s ease;

        &:hover,
        &:focus {
          color: $interactive-hover;
          text-decoration: underline;
        }

        &:focus {
          outline: 2px solid $interactive-primary;
          outline-offset: 2px;
          border-radius: 2px;
        }
      }
    }

    .cta-actions {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
      margin-bottom: 1.5rem;

      @include breakpoint-down(sm) {
        flex-direction: column;
        align-items: center;
        gap: 0.75rem;
      }

      .cta-button {
        transition: transform 0.2s ease;

        &:hover {
          transform: translateY(-1px);
        }
      }
    }

    .cta-support {
      color: $text-tertiary;
      font-size: 0.875rem;
      line-height: 1.5;
      font-style: italic;
    }
  }
}

// Simple float animation matching homepage
@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
}

// Reduced motion support
@media (prefers-reduced-motion: reduce) {
  .cta-section {
    .floating-shape {
      animation: none !important;
    }

    .cta-button:hover {
      transform: none;
    }
  }
}
</style>
