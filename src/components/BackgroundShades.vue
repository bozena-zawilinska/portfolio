<template>
  <div class="background-shades" aria-hidden="true">
    <!-- Primary shade -->
    <div
      v-if="showPrimary"
      :class="[
        'shade',
        'shade--primary',
        `shade--${primaryColor}`,
        { 'shade--animated': animated },
      ]"
      :style="primaryStyles"
    ></div>

    <!-- Secondary shade -->
    <div
      v-if="showSecondary"
      :class="[
        'shade',
        'shade--secondary',
        `shade--${secondaryColor}`,
        { 'shade--animated': animated },
      ]"
      :style="secondaryStyles"
    ></div>

    <!-- Tertiary shade -->
    <div
      v-if="showTertiary"
      :class="[
        'shade',
        'shade--tertiary',
        `shade--${tertiaryColor}`,
        { 'shade--animated': animated },
      ]"
      :style="tertiaryStyles"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'BackgroundShades',
  props: {
    /**
     * Whether to show the primary shade
     */
    showPrimary: {
      type: Boolean,
      default: true,
    },

    /**
     * Whether to show the secondary shade
     */
    showSecondary: {
      type: Boolean,
      default: true,
    },

    /**
     * Whether to show the tertiary shade
     */
    showTertiary: {
      type: Boolean,
      default: false,
    },

    /**
     * Primary shade color
     */
    primaryColor: {
      type: String,
      default: 'purple',
      validator: (value) =>
        ['purple', 'coral', 'blue', 'green', 'orange', 'pink', 'aqua'].includes(
          value
        ),
    },

    /**
     * Secondary shade color
     */
    secondaryColor: {
      type: String,
      default: 'coral',
      validator: (value) =>
        ['purple', 'coral', 'blue', 'green', 'orange', 'pink', 'aqua'].includes(
          value
        ),
    },

    /**
     * Tertiary shade color
     */
    tertiaryColor: {
      type: String,
      default: 'blue-bell',
      validator: (value) =>
        [
          'purple',
          'coral',
          'blue',
          'green',
          'orange',
          'pink',
          'blue-bell',
          'aqua',
        ].includes(value),
    },

    /**
     * Whether shades should be animated
     */
    animated: {
      type: Boolean,
      default: true,
    },

    /**
     * Custom positioning for primary shade
     */
    primaryPosition: {
      type: Object,
      default: () => ({}),
    },

    /**
     * Custom positioning for secondary shade
     */
    secondaryPosition: {
      type: Object,
      default: () => ({}),
    },

    /**
     * Custom positioning for tertiary shade
     */
    tertiaryPosition: {
      type: Object,
      default: () => ({}),
    },

    /**
     * Opacity level (0-1)
     */
    opacity: {
      type: Number,
      default: 0.3,
      validator: (value) => value >= 0 && value <= 1,
    },
  },

  computed: {
    primaryStyles() {
      return {
        ...this.primaryPosition,
        opacity: this.opacity,
      }
    },

    secondaryStyles() {
      return {
        ...this.secondaryPosition,
        opacity: this.opacity,
      }
    },

    tertiaryStyles() {
      return {
        ...this.tertiaryPosition,
        opacity: this.opacity,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.background-shades {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: -1;
  overflow: hidden;
}

.shade {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  pointer-events: none;

  // Default positioning
  &--primary {
    top: -200px;
    left: -200px;
    width: 400px;
    height: 400px;
  }

  &--secondary {
    bottom: -150px;
    right: -150px;
    width: 300px;
    height: 300px;
    filter: blur(80px);
  }

  &--tertiary {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 250px;
    height: 250px;
    filter: blur(60px);
  }

  // Color variants
  &--purple {
    background: $gradient-purple;
  }

  &--coral {
    background: $gradient-coral;
  }

  &--blue {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }

  &--green {
    background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
  }

  &--orange {
    background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
  }

  &--pink {
    background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  }

  &--blue-bell {
    background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  }

  &--aqua {
    background: $gradient-water;
  }

  // Animation
  &--animated {
    animation: float 6s ease-in-out infinite;

    &--secondary {
      animation: float 8s ease-in-out infinite reverse;
    }

    &--tertiary {
      animation: float 10s ease-in-out infinite;
    }
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
}

// Responsive adjustments
@include breakpoint-down(md) {
  .shade {
    &--primary {
      width: 300px;
      height: 300px;
    }

    &--secondary {
      width: 200px;
      height: 200px;
    }

    &--tertiary {
      width: 150px;
      height: 150px;
    }
  }
}
</style>
