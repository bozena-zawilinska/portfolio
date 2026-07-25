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
            <img
              src="@/assets/contact-bz.jpg"
              alt="Bozena - Front-End Developer"
              width="400"
              height="400"
            />
          </div>

          <div class="hero-text">
            <TypingAnimation
              id="welcome-heading"
              class="header animated-heading"
              text="Hello, I'm Bozena!"
              :speed="80"
              wrapper-element="h1"
              custom-cursor-class="heading"
              @typing-finished="onFirstAnimationFinished"
            />
            <p class="hero-subtitle section-description">
              A results-driven <strong>Front-End Developer</strong> crafting
              exceptional digital experiences that
              <strong>captivate users</strong> and
              <strong>drive business growth</strong>. Blending creative design
              with technical excellence to build accessibility-first,
              high-performance websites. 🚀
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
                Showcase Portfolio
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
            Crafting Seamless & Scalable Web Experiences
          </h2>
          <div class="projects-tagline">
            <span class="tagline-emoji">🚀</span>
            <span class="tagline-text">
              <strong>Smart. Responsive. Effortless.</strong>
            </span>
          </div>
          <p class="projects-description section-description">
            I transform
            <strong>business visions into digital realities</strong> through
            pixel-perfect, high-performance websites that deliver results. My
            solutions empower your team to create stunning pages effortlessly
            and manage content without technical barriers. With a focus on
            <strong>conversion-optimized</strong> interfaces and
            <strong>future-proof architecture</strong>, I help brands stand out
            in a crowded digital landscape.
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
          <GutenbergVideo />
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
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3>Lightning Fast</h3>
            <p>Optimized for performance with 95+ PageSpeed scores</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3>Fully Responsive</h3>
            <p>Perfect experience across all devices and screen sizes</p>
          </div>

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
            <h3>Accessible</h3>
            <p>WCAG 2.2 compliant for inclusive user experiences</p>
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
