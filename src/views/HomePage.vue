<template>
  <div class="home">
    <ProgressBar :progress="scrollProgress" />
    <!-- Full-screen Hero Section -->
    <section
      id="hello"
      class="section section--welcome"
      aria-labelledby="welcome-heading"
    >
      <div class="hero-container">
        <!-- Main Hero Content -->
        <div class="hero-content">
          <div class="hero-image">
            <div class="portrait">
              <div class="portrait__backdrop" aria-hidden="true"></div>
              <img
                src="@/assets/contact-bz.jpg"
                alt="Bozena Zawilinska, Front-End Engineer"
                width="400"
                height="400"
              />
              <div class="portrait__outline" aria-hidden="true"></div>
            </div>
          </div>

          <div class="hero-text">
            <p class="eyebrow">Front-End Engineer</p>
            <TypingAnimation
              id="welcome-heading"
              class="header animated-heading"
              text="Hello, I'm Bozena!"
              :speed="80"
              wrapper-element="h1"
              custom-cursor-class="heading"
              @typing-finished="onFirstAnimationFinished"
            />
            <p class="hero-subtitle section-description hero-statement">
              I build software that is easier to use, easier to maintain and
              easier to evolve.
            </p>
            <p class="hero-subtitle section-description">
              I'm a Front-End Engineer with over five years of professional
              experience across SaaS products, marketing websites and
              content-managed platforms. I turn complex requirements into
              accessible, reliable interfaces and reusable systems that work
              well for users and the teams maintaining them.
            </p>

            <!-- CTA Buttons -->
            <div class="hero-actions">
              <BaseButton
                variant="primary"
                size="large"
                to="/work"
                :icon-right="ArrowRightIcon"
                aria-label="Explore my portfolio work"
                class="pulse-animation"
              >
                View My Work
              </BaseButton>
              <CvDownloadButton variant="secondary" size="large" />
            </div>
          </div>
        </div>

        <!-- Scroll Indicator -->
        <div class="scroll-indicator">
          <a
            href="#portfolio"
            class="scroll-arrow"
            aria-label="Scroll to Portfolio section"
            @click.prevent="scrollToSection('portfolio')"
          >
            <span class="scroll-text">Scroll to explore</span>
            <svg
              class="scroll-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </div>

      <!-- Floating Elements for Visual Interest -->
      <div class="floating-elements" aria-hidden="true">
        <div class="floating-shape floating-shape--1"></div>
        <div class="floating-shape floating-shape--1b"></div>
        <div class="floating-shape floating-shape--2"></div>
        <div class="floating-shape floating-shape--3"></div>
      </div>

      <!-- Background Gradients -->
      <BackgroundShades
        primary-color="purple"
        secondary-color="coral"
        tertiary-color="aqua"
        :show-tertiary="true"
        :animated="true"
      />
    </section>

    <!-- Portfolio Projects -->
    <section id="portfolio" class="section--projects">
      <div class="container">
        <div class="projects-header">
          <h2 class="section-title">
            Front-end work built for real products and real teams
          </h2>
          <p class="projects-description section-description">
            My work spans Vue.js product features, WordPress platforms, reusable
            component systems, custom Gutenberg blocks and accessible responsive
            interfaces. I focus on the details that help a product work reliably
            in production: clear states, keyboard behaviour, maintainable code,
            performance and communication across the team.
          </p>
          <!-- CTA Actions -->
          <div class="projects-actions">
            <BaseButton
              variant="primary"
              size="large"
              to="/contact"
              :icon-right="EnvelopeIcon"
              aria-label="Start a conversation about your project"
              full-width
            >
              Let's Create Something Amazing Together
            </BaseButton>
          </div>
        </div>

        <!-- Featured Work Preview -->
        <div class="featured-work">
          <p class="eyebrow">Selected work</p>
          <h3 class="featured-work__title">
            Reusable Gutenberg blocks for the ProdPad marketing team
          </h3>
          <p class="featured-work__description section-description">
            I built and maintained more than 20 custom Gutenberg blocks, giving
            the marketing team flexible page-building tools while preserving
            accessibility, performance and visual consistency.
          </p>
          <GutenbergVideo />
          <router-link to="/work" class="link-underline featured-work__link">
            View this project on the Work page
          </router-link>
        </div>

        <!-- Key Features Grid -->
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3>Accessible Interfaces</h3>
            <p>
              Semantic structure, keyboard behaviour, focus management and WCAG
              guidance are considered throughout implementation, not added as a
              final check.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3>Reusable Systems</h3>
            <p>
              Reusable Vue components and custom Gutenberg blocks reduce
              repeated work, improve consistency and make future changes easier.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-4.13a4 4 0 100-8 4 4 0 000 8zm-6 8v-2a4 4 0 014-4h0a4 4 0 014 4v2"
                />
              </svg>
            </div>
            <h3>Product Collaboration</h3>
            <p>
              I work across design, product, front-end and backend concerns to
              turn requirements into dependable production behaviour.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3>Clear Documentation</h3>
            <p>
              I document connected workflows and important decisions so the next
              developer can understand and extend the work with confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TypingAnimation from '@/components/TypingAnimation.vue'
import GutenbergVideo from '@/components/GutenbergVideo.vue'
import BaseButton from '@/components/Button.vue'
import CvDownloadButton from '@/components/CvDownloadButton.vue'
import BackgroundShades from '@/components/BackgroundShades.vue'
import ProgressBar from '@/components/ProgressBar.vue'
import { ArrowRightIcon, EnvelopeIcon } from '@heroicons/vue/24/outline'

export default {
  name: 'HomePage',
  components: {
    TypingAnimation,
    GutenbergVideo,
    BaseButton,
    CvDownloadButton,
    BackgroundShades,
    ProgressBar,
  },
  data() {
    return {
      secondAnimationDelay: 0,
      isScrolled: false,
      scrollProgress: 0,
      ArrowRightIcon, // Make icons available in template
      EnvelopeIcon,
    }
  },
  mounted() {
    document.documentElement.style.scrollBehavior = 'smooth'
    this.initScrollListener()
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    scrollToSection(id) {
      const section = document.getElementById(id)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    },

    initScrollListener() {
      window.addEventListener('scroll', this.handleScroll)
    },

    handleScroll() {
      const scrollTop = window.pageYOffset
      const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight
      this.scrollProgress = (scrollTop / documentHeight) * 100

      this.isScrolled = window.scrollY > 50
    },

    onFirstAnimationFinished() {
      // Trigger any additional animations after typing completes
      const heroActions = document.querySelector('.hero-actions')
      if (heroActions) {
        heroActions.classList.add('is-visible')
      }
    },
  },
}
</script>
<style lang="scss" scoped>
@import '@/styles/index.scss';
@import '@/styles/components/section-welcome.scss';

// Hero statement — the strongest supporting line, set apart from the
// paragraph beneath it
.hero-statement {
  color: $text-primary;
  font-weight: 600;
  font-size: clamp(1.125rem, 2.75vw, 1.375rem);
}

// Home page container - remove all inherited styles
.home {
  margin: 0;
  padding: 0 !important; // Override any inherited padding
  width: 100%;
  min-height: 100vh;
  background: transparent;

  // Override any global page styles that add padding/margin
  &.page {
    padding: 0 !important;
    margin: 0 !important;
  }
}

// Projects Section - Professional styling matching other pages
.section--projects {
  padding: 6rem 0;
  background: linear-gradient(
    135deg,
    $background-primary 0%,
    $background-secondary 100%
  );
  position: relative;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;

    @include breakpoint-up(lg) {
      padding: 0 3rem;
    }
  }

  // Projects Header
  .projects-header {
    text-align: center;
    margin-bottom: 4rem;

    .section-title {
      color: $text-primary;
      font-size: clamp(2rem, 5vw, 3rem);
      margin-bottom: 1.5rem;
      font-weight: 700;
      line-height: 1.2;
      position: relative;
    }

    .projects-tagline {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 2rem;

      .tagline-emoji {
        font-size: 2rem;
        animation: bounce 2s infinite;
      }

      .tagline-text {
        font-size: clamp(1.1rem, 2.5vw, 1.3rem);
        color: $interactive-primary;
        font-weight: 600;

        strong {
          @include light-text-gradient;
        }
      }
    }

    .projects-description {
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
    }
  }

  // CTA Actions
  .projects-actions {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    max-width: 550px;
    margin-left: auto;
    margin-right: auto;

    @include breakpoint-up(sm) {
      flex-direction: row;
      justify-content: center;
      gap: 1.5rem;
    }

    .btn {
      overflow-wrap: break-word;
      word-break: break-word;
      text-wrap: wrap;

      @include breakpoint-down(sm) {
        width: 100%;
        flex-direction: column-reverse;
      }
    }
  }

  // Featured Work
  .featured-work {
    margin-bottom: 4rem;
    text-align: center;

    .eyebrow {
      text-align: center;
      max-width: 640px;
      margin-left: auto;
      margin-right: auto;
    }

    &__title {
      font-size: clamp(1.25rem, 3vw, 1.5rem);
      max-width: 640px;
      margin-left: auto;
      margin-right: auto;
    }

    &__description {
      max-width: 640px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 2rem;
    }

    &__link {
      display: inline-flex;
      margin-top: 1.5rem;
    }
  }

  // Features Grid
  .features-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-top: 3rem;

    @include breakpoint-up(md) {
      grid-template-columns: repeat(3, 1fr);
      gap: 2.5rem;
    }

    .feature-card {
      @include light-card;
      text-align: center;
      padding: 2.5rem 2rem;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      border: 1px solid transparent;

      &:hover {
        transform: translateY(-8px);
        border-color: rgba($interactive-primary, 0.2);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
      }

      .feature-icon {
        width: 64px;
        height: 64px;
        margin: 0 auto 1.5rem;
        background: linear-gradient(
          135deg,
          $interactive-primary,
          $interactive-hover
        );
        border-radius: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.3s ease;

        svg {
          width: 2rem;
          height: 2rem;
          color: white;
        }
      }

      &:hover .feature-icon {
        transform: scale(1.1) rotate(5deg);
      }

      h3 {
        color: $text-primary;
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: 1rem;
        line-height: 1.3;
      }

      p {
        color: $text-secondary;
        line-height: 1.6;
        margin: 0;
        font-size: 0.95rem;
      }
    }
  }

  // Background decoration
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 400px;
    height: 400px;
    background: $gradient-purple;
    border-radius: 50%;
    filter: blur(100px);
    opacity: 0.1;
    z-index: 0;
    pointer-events: none;
  }
}

// Focus states for better accessibility
.btn:focus-visible,
.scroll-arrow:focus-visible {
  outline: 2px solid $interactive-primary;
  outline-offset: 2px;
}
</style>
