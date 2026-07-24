<template>
  <!-- role/tabindex are set dynamically from the `clickable` prop (see
  handleClick below), so the linter can't see this is conditionally
  interactive; keyboard handlers are already paired with the click handler. -->
  <!-- eslint-disable-next-line vuejs-accessibility/no-static-element-interactions -->
  <div
    :class="[
      'base-card',
      `base-card--${variant}`,
      {
        'base-card--hoverable': hoverable,
        'base-card--clickable': clickable,
        'base-card--elevated': elevated,
        'base-card--bordered': bordered,
      },
    ]"
    :role="clickable ? 'button' : null"
    :tabindex="clickable ? 0 : null"
    @click="handleClick"
    @keydown.enter="handleClick"
    @keydown.space.prevent="handleClick"
    @mouseenter="$emit('mouseenter')"
    @mouseleave="$emit('mouseleave')"
    @focus="$emit('mouseenter')"
    @blur="$emit('mouseleave')"
  >
    <!-- Header slot -->
    <div v-if="$slots.header" class="base-card__header">
      <slot name="header" />
    </div>

    <!-- Main content -->
    <div class="base-card__body">
      <slot />
    </div>

    <!-- Footer slot -->
    <div v-if="$slots.footer" class="base-card__footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseCard',
  props: {
    /**
     * Card variant style
     */
    variant: {
      type: String,
      default: 'default',
      validator: (value) =>
        ['default', 'glass', 'gradient', 'minimal', 'feature'].includes(value),
    },

    /**
     * Whether card should have hover effects
     */
    hoverable: {
      type: Boolean,
      default: false,
    },

    /**
     * Whether card is clickable (cursor pointer)
     */
    clickable: {
      type: Boolean,
      default: false,
    },

    /**
     * Whether card should have elevated shadow
     */
    elevated: {
      type: Boolean,
      default: false,
    },

    /**
     * Whether card should have a border
     */
    bordered: {
      type: Boolean,
      default: false,
    },
  },

  emits: ['click', 'mouseenter', 'mouseleave'],

  methods: {
    handleClick(event) {
      if (this.clickable) {
        this.$emit('click', event)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.base-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;

  // Base structure
  &__header {
    padding: 1.5rem 1.5rem 0;
  }

  &__body {
    padding: 1.5rem;
  }

  &__footer {
    padding: 0 1.5rem 1.5rem;
  }

  // States
  &--hoverable {
    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    }
  }

  &--clickable {
    cursor: pointer;
  }

  &--elevated {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  &--bordered {
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  // Variants
  &--default {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
  }

  &--glass {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(30px);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  &--gradient {
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.15) 0%,
      rgba(255, 255, 255, 0.05) 100%
    );
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  &--minimal {
    background: transparent;
    backdrop-filter: none;
    border-radius: 12px;

    &:hover {
      background: rgba(255, 255, 255, 0.05);
    }
  }

  &--feature {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    position: relative;
    overflow: visible;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        45deg,
        rgba(255, 255, 255, 0.1) 0%,
        transparent 50%,
        rgba(255, 255, 255, 0.1) 100%
      );
      opacity: 0;
      transition: opacity 0.3s ease;
      pointer-events: none;
      border-radius: inherit;
    }

    &:hover::before {
      opacity: 1;
    }
  }

  // Responsive adjustments
  @include breakpoint-down(md) {
    border-radius: 16px;

    &__header {
      padding: 1rem 1rem 0;
    }

    &__body {
      padding: 1rem;
    }

    &__footer {
      padding: 0 1rem 1rem;
    }
  }
}
</style>
