<template>
  <div class="page" :class="[`page--${pageClass}`]">
    <ProgressBar v-if="showProgress" :progress="scrollProgress" />

    <div class="container">
      <!-- Page header with optional typing animation -->
      <header v-if="pageTitle" class="page-header">
        <TypingAnimation
          v-if="useTypingAnimation"
          :id="`${pageClass}-heading`"
          class="header animated-heading text--flex-center"
          :text="pageTitle"
          :speed="80"
          wrapper-element="h1"
          custom-cursor-class="heading"
          @typing-finished="onAnimationFinished"
        />
        <h1 v-else class="header text--flex-center">{{ pageTitle }}</h1>

        <p v-if="pageTagline" class="page-tagline">{{ pageTagline }}</p>
      </header>

      <!-- Main content -->
      <slot></slot>
    </div>

    <!-- Background shades -->
    <BackgroundShades
      v-if="showBackgroundShades"
      :primary-color="primaryShadeColor"
      :secondary-color="secondaryShadeColor"
      :tertiary-color="tertiaryShadeColor"
      :show-tertiary="true"
    />

    <!-- Scroll to top button -->
    <ScrollToTopButton v-if="showScrollButton" :visible="showScrollToTop" />
  </div>
</template>

<script>
import ProgressBar from '@/components/ProgressBar.vue'
import TypingAnimation from '@/components/TypingAnimation.vue'
import BackgroundShades from '@/components/BackgroundShades.vue'
import ScrollToTopButton from '@/components/ScrollToTopButton.vue'

export default {
  name: 'PageLayout',
  components: {
    ProgressBar,
    TypingAnimation,
    BackgroundShades,
    ScrollToTopButton,
  },
  props: {
    pageClass: {
      type: String,
      required: true,
      description:
        'The page-specific class name (e.g., "about", "work", "contact")',
    },
    pageTitle: {
      type: String,
      default: '',
      description: 'The main page title (h1)',
    },
    pageTagline: {
      type: String,
      default: '',
      description: 'Optional tagline below the page title',
    },
    useTypingAnimation: {
      type: Boolean,
      default: true,
      description: 'Whether to use the typing animation for the title',
    },
    showProgress: {
      type: Boolean,
      default: true,
      description: 'Whether to show the progress bar at the top of the page',
    },
    showScrollButton: {
      type: Boolean,
      default: true,
      description: 'Whether to show the scroll to top button',
    },
    showBackgroundShades: {
      type: Boolean,
      default: true,
      description: 'Whether to render the ambient background shades',
    },
    primaryShadeColor: {
      type: String,
      default: 'purple',
      description: 'Primary background shade color',
    },
    secondaryShadeColor: {
      type: String,
      default: 'aqua',
      description: 'Secondary background shade color',
    },
    tertiaryShadeColor: {
      type: String,
      default: 'blue-bell',
      description: 'Tertiary background shade color',
    },
  },
  emits: ['animationFinished'],
  data() {
    return {
      showScrollToTop: false,
      scrollProgress: 0,
    }
  },
  mounted() {
    this.setupScrollListeners()
  },
  beforeUnmount() {
    this.removeScrollListeners()
  },
  methods: {
    setupScrollListeners() {
      window.addEventListener('scroll', this.handleScroll)
    },

    removeScrollListeners() {
      window.removeEventListener('scroll', this.handleScroll)
    },

    handleScroll() {
      // Show scroll button when scrolled down
      this.showScrollToTop = window.pageYOffset > 300

      // Calculate scroll progress for progress bar
      if (this.showProgress) {
        const scrollTop = window.pageYOffset
        const documentHeight =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight
        this.scrollProgress = (scrollTop / documentHeight) * 100
      }
    },

    onAnimationFinished() {
      this.$emit('animationFinished')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.page-header {
  text-align: center;
  padding: 3rem 0 2rem;

  .page-tagline {
    font-size: clamp(1rem, 2.5vw, 1.25rem);
    color: $text-secondary;
    line-height: 1.6;
    max-width: 600px;
    margin: 0 auto;
    opacity: 0;
    animation: fadeInUp 0.6s ease-out 0.8s forwards;
  }
}
</style>
