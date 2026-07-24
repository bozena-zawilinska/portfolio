<template>
  <!-- Backdrop click-to-close is a mouse convenience; the close button
  and Escape key already provide fully accessible alternatives. -->
  <!-- eslint-disable-next-line vuejs-accessibility/no-static-element-interactions -->
  <div
    v-if="selectedCard"
    ref="overlay"
    class="card-modal-overlay"
    role="dialog"
    aria-modal="true"
    :aria-labelledby="`modal-title-${selectedCard.id}`"
    tabindex="0"
    @click="closeModal"
    @keydown.escape="closeModal"
  >
    <div class="card-modal" @click.stop>
      <button class="modal__close" aria-label="Close modal" @click="closeModal">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div class="modal__content">
        <div class="modal__header">
          <div class="modal__icon">
            <component
              :is="getIconComponent(selectedCard.icon)"
              class="hero-icon hero-icon--xl"
            />
          </div>
          <h3 :id="`modal-title-${selectedCard.id}`" class="modal__title">
            {{ selectedCard.title }}
          </h3>
        </div>

        <div class="modal__body">
          <p class="modal__description">
            {{ selectedCard.description }}
          </p>

          <div class="modal__fun-fact">
            <div class="fun-fact__icon">✨</div>
            <div class="fun-fact__content">
              <span class="fun-fact__label">Fun fact:</span>
              <span class="fun-fact__text">{{ selectedCard.funFact }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  CodeBracketIcon,
  HeartIcon,
  PuzzlePieceIcon,
  SparklesIcon,
  BoltIcon,
  UsersIcon,
} from '@heroicons/vue/24/outline'

export default {
  name: 'CardModal',
  components: {
    CodeBracketIcon,
    HeartIcon,
    PuzzlePieceIcon,
    SparklesIcon,
    BoltIcon,
    UsersIcon,
  },
  props: {
    selectedCard: {
      type: Object,
      default: null,
    },
  },
  emits: ['close'],
  watch: {
    selectedCard(card) {
      document.body.style.overflow = card ? 'hidden' : ''
      if (card) {
        this.$nextTick(() => this.$refs.overlay?.focus())
      }
    },
  },
  mounted() {
    // Add global keyboard listener for modal
    document.addEventListener('keydown', this.handleGlobalKeydown)
  },
  beforeUnmount() {
    document.removeEventListener('keydown', this.handleGlobalKeydown)
    // Cleanup body overflow in case modal was open
    document.body.style.overflow = ''
  },
  methods: {
    closeModal() {
      // Restore body scroll
      document.body.style.overflow = ''
      this.$emit('close')
    },
    handleGlobalKeydown(event) {
      // Close modal on Escape key
      if (event.key === 'Escape' && this.selectedCard) {
        this.closeModal()
      }
    },
    getIconComponent(iconName) {
      // Convert string icon name to component reference
      const iconMap = {
        CodeBracketIcon: CodeBracketIcon,
        HeartIcon: HeartIcon,
        PuzzlePieceIcon: PuzzlePieceIcon,
        SparklesIcon: SparklesIcon,
        BoltIcon: BoltIcon,
        UsersIcon: UsersIcon,
      }
      return iconMap[iconName] || CodeBracketIcon // Default to CodeBracketIcon if not found
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

// Modal System
.card-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: z(modal);
  padding: 2rem;
  animation: modalFadeIn 0.3s ease-out;

  @include breakpoint-down(md) {
    padding: 1rem;
  }
}

.card-modal {
  background: white;
  border-radius: 24px;
  max-width: 600px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  animation: modalSlideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);

  @include breakpoint-down(md) {
    max-height: 90vh;
    border-radius: 16px;
  }
}

.modal__close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 2.5rem;
  height: 2.5rem;
  border: none;
  background: rgba($text-tertiary, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: z(content);

  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: $text-secondary;
  }

  &:hover {
    background: rgba($text-tertiary, 0.2);
    transform: scale(1.1);
  }

  &:focus {
    outline: 2px solid $interactive-primary;
    outline-offset: 2px;
  }
}

.modal__content {
  padding: 3rem;

  @include breakpoint-down(md) {
    padding: 2rem;
  }
}

.modal__header {
  text-align: center;
  margin-bottom: 2rem;

  .modal__icon {
    margin-bottom: 1.5rem;

    .hero-icon--xl {
      width: 4rem;
      height: 4rem;
      color: $interactive-primary;
      margin: 0 auto;
    }
  }

  .modal__title {
    color: $text-primary;
    font-size: $font-size-subheading;
    font-weight: 700;
    margin: 0;
    line-height: 1.2;

    @include breakpoint-down(md) {
      font-size: $font-size-h3;
    }
  }
}

.modal__body {
  .modal__description {
    color: $text-secondary;
    font-size: $font-size-h5;
    line-height: 1.7;
    margin-bottom: 2rem;
    text-align: center;

    @include breakpoint-down(md) {
      font-size: $font-size-base;
    }
  }

  .modal__fun-fact {
    background: linear-gradient(
      135deg,
      rgba($interactive-primary, 0.08) 0%,
      rgba($interactive-primary, 0.03) 100%
    );
    border: 1px solid rgba($interactive-primary, 0.15);
    border-radius: 20px;
    padding: 2rem;
    display: flex;
    align-items: flex-start;
    gap: 1rem;

    @include breakpoint-down(md) {
      padding: 1.5rem;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .fun-fact__icon {
      font-size: 2rem;
      flex-shrink: 0;
      line-height: 1;
    }

    .fun-fact__content {
      flex: 1;

      .fun-fact__label {
        color: $text-tertiary;
        font-size: $font-size-small;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        display: block;
        margin-bottom: 0.75rem;
      }

      .fun-fact__text {
        color: $text-primary;
        font-size: $font-size-h5;
        font-weight: 500;
        line-height: 1.5;
        font-style: italic;

        @include breakpoint-down(md) {
          font-size: $font-size-base;
        }
      }
    }
  }
}

// Animation keyframes
@keyframes modalFadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes modalSlideUp {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
