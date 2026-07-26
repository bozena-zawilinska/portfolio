<template>
  <div class="journey-visual">
    <div class="journey-badges">
      <div
        v-for="(badge, index) in badges"
        :key="index"
        class="journey-badge journey-badge--tech"
        :class="'journey-badge--' + badge.type"
      >
        <component :is="getIconComponent(badge.icon)" class="journey-icon" />
        <span>{{ badge.text }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import {
  CodeBracketIcon,
  EyeIcon,
  ChartBarIcon,
  UserIcon,
} from '@heroicons/vue/24/outline'

export default {
  name: 'JourneyBadges',
  components: {
    CodeBracketIcon,
    EyeIcon,
    ChartBarIcon,
    UserIcon,
  },
  props: {
    badges: {
      type: Array,
      default: () => [
        {
          type: 'results',
          icon: 'ChartBarIcon',
          text: 'Business Results',
        },
        {
          type: 'implementation',
          icon: 'EyeIcon',
          text: 'Design Implementation',
        },
        {
          type: 'tech',
          icon: 'CodeBracketIcon',
          text: 'Technical Excellence',
        },
        {
          type: 'ux',
          icon: 'UserIcon',
          text: 'User Experience',
        },
      ],
    },
  },
  mounted() {
    this.observeElements()
  },
  methods: {
    getIconComponent(iconName) {
      // Convert string icon name to component reference
      const iconMap = {
        CodeBracketIcon: CodeBracketIcon,
        EyeIcon: EyeIcon,
        ChartBarIcon: ChartBarIcon,
        UserIcon: UserIcon,
      }
      return iconMap[iconName] || CodeBracketIcon // Default to CodeBracketIcon if not found
    },
    observeElements() {
      const options = {
        root: null,
        rootMargin: '-10% 0px -10% 0px',
        threshold: 0.1,
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      }, options)

      this.$nextTick(() => {
        const elements = this.$el.querySelectorAll('.journey-badge')
        elements.forEach((element, index) => {
          element.style.setProperty('--delay', `${index * 0.1}s`)
          observer.observe(element)
        })
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.journey-visual {
  flex: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}

.journey-badges {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
  width: 100%;
  max-width: 400px;

  @include breakpoint-up(sm) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.journey-badge {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.5rem;
  border-radius: 16px;
  background: white;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  height: 160px;
  width: 100%;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  animation-delay: var(--delay);
  justify-content: center;

  &.is-visible {
    opacity: 1;
    transform: translateY(0);
  }

  .journey-icon {
    width: 2.5rem;
    height: 2.5rem;
    margin-bottom: 1rem;
  }

  span {
    font-weight: 600;
    color: $text-primary;
    font-size: 0.95rem;
  }

  &--tech {
    border-top: 4px solid $primary-blue;

    .journey-icon {
      color: $primary-blue;
    }
  }

  &--implementation {
    border-top: 4px solid $primary-deep-blue;

    .journey-icon {
      color: $primary-deep-blue;
    }
  }

  &--results {
    border-top: 4px solid $primary-aqua;

    .journey-icon {
      color: $primary-aqua;
    }
  }

  &--ux {
    border-top: 4px solid $primary-purple;

    .journey-icon {
      color: $primary-purple;
    }
  }
}

// Accessibility improvements
@media (prefers-reduced-motion: reduce) {
  .journey-badge {
    transition: none !important;
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}
</style>
