<template>
  <div class="interactive-cards-container">
    <div
      class="interactive-cards card-grid card-grid--trio card-grid--centered"
    >
      <div
        v-for="card in cards"
        :key="card.id"
        class="interactive-card card-item card-item--interactive card-item--centered is-visible"
        :class="[
          `interactive-card--${card.type}`,
          { 'is-hovered': card.isHovered },
        ]"
        role="button"
        tabindex="0"
        :aria-label="`Open details for ${card.title}`"
        @mouseenter="card.isHovered = true"
        @mouseleave="card.isHovered = false"
        @focus="card.isHovered = true"
        @blur="card.isHovered = false"
        @click="openCardModal(card, $event)"
        @keydown.enter="openCardModal(card, $event)"
        @keydown.space.prevent="openCardModal(card, $event)"
      >
        <div class="card__icon-container">
          <component :is="getIconComponent(card.icon)" class="card__icon" />
        </div>
        <h3 class="card__title">{{ card.title }}</h3>
      </div>
    </div>

    <CardModal :selected-card="selectedCard" @close="closeCardModal" />
  </div>
</template>

<script>
import CardModal from '@/components/CardModal.vue'
import {
  CodeBracketIcon,
  HeartIcon,
  PuzzlePieceIcon,
  SparklesIcon,
  BoltIcon,
  UsersIcon,
} from '@heroicons/vue/24/outline'

export default {
  name: 'InteractiveCards',
  components: {
    CardModal,
    CodeBracketIcon,
    HeartIcon,
    PuzzlePieceIcon,
    SparklesIcon,
    BoltIcon,
    UsersIcon,
  },
  props: {
    customCards: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      selectedCard: null,
      defaultCards: [
        {
          id: 1,
          type: 'code',
          title: 'Code Enthusiast',
          icon: 'CodeBracketIcon',
          description:
            'I live and breathe clean, accessible code. Every line I write is crafted with purpose and precision, focusing on maintainability and user experience.',
          funFact: 'I debug with curiosity, not frustration!',
          isHovered: false,
        },
        {
          id: 2,
          type: 'problem',
          title: 'Problem Solver',
          icon: 'PuzzlePieceIcon',
          description:
            'Complex challenges excite me. I love breaking down problems into elegant, simple solutions that users can understand and developers can maintain.',
          funFact:
            'I once spent 3 hours debugging only to find a missing semicolon - and loved every minute of it!',
          isHovered: false,
        },
        {
          id: 3,
          type: 'passion',
          title: 'Passionate Creator',
          icon: 'HeartIcon',
          description:
            'Building digital experiences that make a difference is what drives me every single day. I believe technology should serve people, not the other way around.',
          funFact: 'My best ideas come during my morning coffee ritual ☕',
          isHovered: false,
        },
        {
          id: 4,
          type: 'innovation',
          title: 'Innovation Seeker',
          icon: 'SparklesIcon',
          description:
            "I stay curious about emerging technologies and love experimenting with new tools and techniques to push the boundaries of what's possible.",
          funFact:
            'I have a "playground" folder with 50+ experimental projects!',
          isHovered: false,
        },
        {
          id: 5,
          type: 'performance',
          title: 'Performance Optimizer',
          icon: 'BoltIcon',
          description:
            'Speed matters. I optimize every aspect of the user experience, from bundle sizes to loading times, ensuring applications are lightning-fast and accessible to everyone, regardless of their device or connection.',
          funFact:
            'I got ProdPad website to 95+ PageSpeed scores on both desktop and mobile!',
          isHovered: false,
        },
        {
          id: 6,
          type: 'collaboration',
          title: 'Team Collaborator',
          icon: 'UsersIcon',
          description:
            'Great software is built by great teams. I thrive in collaborative environments, mentoring others, conducting thorough code reviews, and fostering a culture of shared knowledge and continuous learning.',
          funFact:
            'I believe the best PRs are the ones that teach something new!',
          isHovered: false,
        },
      ],
    }
  },
  computed: {
    cards() {
      return this.customCards || this.defaultCards
    },
  },
  methods: {
    openCardModal(card, event) {
      this.triggerElement = event?.currentTarget || null
      this.selectedCard = card
    },
    closeCardModal() {
      this.selectedCard = null
      this.triggerElement?.focus()
      this.triggerElement = null
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

.interactive-cards-container {
  width: 100%;
  max-width: 1200px;
  margin: 2rem auto;
  display: block;
}

.interactive-card {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  // Add explicit visibility and opacity
  visibility: visible;
  opacity: 1;
  transform: translateY(0);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(
      90deg,
      $interactive-primary,
      $interactive-hover
    );
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover,
  &:focus,
  &.is-hovered {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);

    &::before {
      transform: scaleX(1);
    }

    .card__icon-container {
      background: linear-gradient(
        135deg,
        $interactive-primary,
        $interactive-hover
      );

      .card__icon {
        color: white;
      }
    }
  }

  // Focus styles now handled by card-item--interactive class
}

// Override the is-visible class to ensure cards are always shown
.card-grid {
  .card-item {
    opacity: 1;
    transform: translateY(0);
    visibility: visible;
  }
}

.card__icon-container {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba($interactive-primary, 0.1);
  margin-bottom: 1.5rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card__icon {
  width: 2rem;
  height: 2rem;
  color: $interactive-primary;
  transition: color 0.3s ease;
}

.card__title {
  font-size: $font-size-h4;
  font-weight: 600;
  color: $text-primary;
  margin: 0;
}

// Type-specific styling
.interactive-card {
  &--code:before {
    background: $gradient-icon-blue;
  }

  &--problem:before {
    background: $gradient-icon-purple;
  }

  &--passion:before {
    background: $gradient-icon-navy;
  }

  &--innovation:before {
    background: $gradient-icon-sea;
  }

  &--performance:before {
    background: $gradient-icon-aqua;
  }

  &--collaboration:before {
    background: $gradient-icon-deep-blue;
  }
}
</style>
