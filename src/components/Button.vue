<template>
  <component
    :is="tag"
    :class="buttonClasses"
    :disabled="disabled || loading"
    :to="to"
    :href="href"
    :target="target"
    :rel="rel"
    :type="type"
    v-bind="$attrs"
    @click="handleClick"
  >
    <!-- Loading state -->
    <span v-if="loading" class="btn__loading">
      <svg class="btn__spinner" viewBox="0 0 24 24">
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-dasharray="64"
          stroke-dashoffset="64"
        />
      </svg>
    </span>

    <!-- Icon left -->
    <span v-if="iconLeft && !loading" class="btn__icon btn__icon--left">
      <component :is="iconLeft" />
    </span>

    <!-- Button content -->
    <span class="btn__content">
      <slot />
    </span>

    <!-- Icon right -->
    <span v-if="iconRight && !loading" class="btn__icon btn__icon--right">
      <component :is="iconRight" />
    </span>
  </component>
</template>

<script>
export default {
  name: 'BaseButton',
  inheritAttrs: false,
  props: {
    /**
     * Button variant
     */
    variant: {
      type: String,
      default: 'primary',
      validator: (value) =>
        ['primary', 'secondary', 'ghost', 'danger', 'success'].includes(value),
    },

    /**
     * Button size
     */
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium', 'large'].includes(value),
    },

    /**
     * Whether button is disabled
     */
    disabled: {
      type: Boolean,
      default: false,
    },

    /**
     * Whether button is in loading state
     */
    loading: {
      type: Boolean,
      default: false,
    },

    /**
     * Whether button should take full width
     */
    fullWidth: {
      type: Boolean,
      default: false,
    },

    /**
     * Icon component to show on the left
     */
    iconLeft: {
      type: [String, Object],
      default: null,
    },

    /**
     * Icon component to show on the right
     */
    iconRight: {
      type: [String, Object],
      default: null,
    },

    /**
     * Router link destination (makes it a router-link)
     */
    to: {
      type: [String, Object],
      default: null,
    },

    /**
     * External link href (makes it an anchor)
     */
    href: {
      type: String,
      default: null,
    },

    /**
     * Link target
     */
    target: {
      type: String,
      default: null,
    },

    /**
     * Link rel attribute
     */
    rel: {
      type: String,
      default: null,
    },

    /**
     * Button type (when used as button)
     */
    type: {
      type: String,
      default: 'button',
    },
  },

  emits: ['click'],

  computed: {
    tag() {
      if (this.to) return 'router-link'
      if (this.href) return 'a'
      return 'button'
    },

    buttonClasses() {
      return [
        'btn',
        `btn--${this.variant}`,
        `btn--${this.size}`,
        {
          'btn--disabled': this.disabled,
          'btn--loading': this.loading,
          'btn--full-width': this.fullWidth,
          'btn--with-icon-left': this.iconLeft,
          'btn--with-icon-right': this.iconRight,
        },
      ]
    },
  },

  methods: {
    handleClick(event) {
      if (this.disabled || this.loading) {
        event.preventDefault()
        return
      }
      this.$emit('click', event)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.btn {
  // Base button styles from your existing design system
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: 2px solid transparent;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;

  // Ensure proper text alignment
  text-align: center;

  // Focus styles
  &:focus {
    outline: 2px solid $interactive-primary;
    outline-offset: 2px;
  }

  &:focus-visible {
    outline: 2px solid $interactive-primary;
    outline-offset: 2px;
  }

  // Ensure button remains focusable
  &:focus:not(:focus-visible) {
    outline: none;
  }

  // Disabled state
  &--disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }

  // Loading state
  &--loading {
    cursor: not-allowed;

    .btn__content {
      opacity: 0.7;
    }
  }

  // Full width
  &--full-width {
    width: 100%;
  }

  // Size variants
  &--small {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    border-radius: 12px;
  }

  &--medium {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    border-radius: 12px;
  }

  &--large {
    padding: 1rem 2rem;
    font-size: 1.125rem;
    border-radius: 12px;
  }

  // Variant styles using your existing design system
  &--primary {
    @include light-button-primary;
    * {
      color: $text-inverse;
    }
  }

  &--secondary {
    @include light-button-secondary;
  }

  &--ghost {
    background: transparent;
    color: $text-primary;
    border-color: rgba($text-primary, 0.2);

    &:hover {
      background: rgba($text-primary, 0.05);
      border-color: rgba($text-primary, 0.3);
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(0);
    }
  }

  &--danger {
    background: linear-gradient(135deg, #ff6b6b, #ee5a52);
    color: white;
    border-color: transparent;

    &:hover {
      background: linear-gradient(135deg, #ff5252, #d32f2f);
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(255, 107, 107, 0.3);
    }
  }

  &--success {
    background: linear-gradient(135deg, #51cf66, #40c057);
    color: white;
    border-color: transparent;

    &:hover {
      background: linear-gradient(135deg, #40c057, #37b24d);
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(81, 207, 102, 0.3);
    }
  }

  // Icon styles
  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    > * {
      width: 1.25em;
      height: 1.25em;
    }

    &--left {
      margin-right: -0.25rem;
    }

    &--right {
      margin-left: -0.25rem;
    }
  }

  // Content wrapper
  &__content {
    margin: 0;
    transition: opacity 0.2s ease;
  }

  // Loading spinner
  &__loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &__spinner {
    width: 1.25em;
    height: 1.25em;
    animation: spin 1s linear infinite;

    circle {
      animation: dash 1.5s ease-in-out infinite;
    }
  }

  // Icon only buttons
  &--with-icon-left:not(&--with-icon-right) {
    .btn__content:empty + .btn__icon--left {
      margin-right: 0;
    }
  }

  &--with-icon-right:not(&--with-icon-left) {
    .btn__content:empty ~ .btn__icon--right {
      margin-left: 0;
    }
  }
}

// Animations
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}

// Responsive adjustments
@include breakpoint-down(md) {
  .btn {
    &--large {
      padding: 0.875rem 1.75rem;
      font-size: 1rem;
    }
  }
}
</style>
