<template>
  <div>
    <PageLayout
      page-class="about"
      page-title="My Story"
      page-tagline="A journey of curiosity, creativity, and code"
      @animation-finished="onFirstAnimationFinished"
    >
      <!-- Hero Introduction -->
      <UnifiedSection id="story-intro" media-alignment="center">
        <template #media>
          <img
            src="@/assets/avatar-bz-2.png"
            alt="Bozena's profile photo"
            width="200"
            height="200"
            class="profile-image"
          />
        </template>

        <h2 class="visually-hidden">Introduction</h2>
        <p>
          Welcome to my digital corner! I'm <strong>Bozena</strong>, a
          passionate Front-End Developer with a mission to make the web more
          beautiful, accessible, and performant one project at a time.
        </p>

        <p>
          My journey into web development began with a simple question:
          <em>"How do these websites actually work?"</em> That curiosity sparked
          a deep passion that has evolved into a career creating impactful
          digital experiences that solve real problems for businesses and users
          alike.
        </p>

        <p>
          I believe the best digital products emerge when
          <span class="highlight"
            >technical excellence meets thoughtful design</span
          >. I specialize in crafting websites and web applications that not
          only look stunning but also deliver exceptional performance,
          accessibility, and user experience.
        </p>
      </UnifiedSection>

      <!-- Professional Journey -->
      <UnifiedSection
        id="story-journey"
        title="My Professional Journey"
        variant="default"
      >
        <div class="journey-intro">
          <div class="journey-text">
            <p>
              With over <strong>5 years of professional experience</strong>,
              I've had the opportunity to work with diverse companies ranging
              from startups to established businesses, helping them transform
              their digital presence and create exceptional experiences for
              their users.
            </p>

            <p>
              Throughout my career, I've specialized in
              <span class="highlight">front-end development</span>, particularly
              in Vue.js, and WordPress. I've built everything from
              high-converting landing pages to complex web applications and
              custom Gutenberg blocks that empower marketing teams to manage
              content effortlessly.
            </p>

            <p>
              What sets me apart is my commitment to delivering solutions that
              not only look great but also achieve tangible business outcomes.
              Whether it's improving conversion rates, enhancing user
              engagement, or optimizing performance scores, I focus on results
              that matter.
            </p>
          </div>

          <JourneyBadges />
        </div>

        <!-- <JourneyTimeline :items="careerJourney" horizontal /> -->
      </UnifiedSection>

      <!-- Skills and Expertise -->
      <UnifiedSection id="story-skills" title="Skills & Expertise">
        <p>
          My approach combines technical expertise with a deep understanding of
          user experience principles. I specialize in creating websites that are
          not only visually appealing but also fast, accessible, and easy to
          maintain.
        </p>

        <SkillsGrid :categories="skillCategories" />
      </UnifiedSection>

      <!-- My Values section - removed -->

      <!-- Personal Interests -->
      <UnifiedSection id="story-personal" title="Beyond the Code">
        <p>
          When I'm not crafting beautiful websites, you'll find me exploring
          other passions that fuel my creativity and keep me balanced.
        </p>

        <div class="personal-grid-container">
          <div class="personal-grid card-grid card-grid--trio">
            <div
              v-for="(item, index) in personalItems"
              :key="index"
              class="personal-item card-item card-item--left-aligned is-visible"
              :style="{ '--delay': `${index * 0.1}s` }"
            >
              <div class="personal-emoji">{{ item.emoji }}</div>
              <div class="personal-content">
                <h4>{{ item.title }}</h4>
                <p>{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </UnifiedSection>

      <!-- Working Philosophy section - removed -->

      <!-- Call to Action -->
      <CallToAction
        heading="Let's Build Something Amazing Together"
        text="I'm always excited to take on new challenges and collaborate on projects that make a difference. Whether you need a complete website overhaul, performance optimization, or custom development, I'd love to help bring your vision to life."
        support-text="I offer expertise in front-end development, accessibility, and performance optimization"
      >
        <template #actions>
          <BaseButton
            variant="primary"
            size="large"
            to="/work"
            :icon-right="ArrowRightIcon"
            aria-label="View my portfolio work"
            class="cta-button"
          >
            See My Work
          </BaseButton>
          <BaseButton
            variant="secondary"
            size="large"
            to="/contact"
            :icon-right="EnvelopeIcon"
            aria-label="Get in touch with me"
            class="cta-button"
          >
            Start a Conversation
          </BaseButton>
        </template>
      </CallToAction>
    </PageLayout>
  </div>
</template>

<script>
import {
  ArrowRightIcon,
  EnvelopeIcon,
  CodeBracketIcon,
  WrenchIcon,
  ServerIcon,
  BoltIcon,
  PuzzlePieceIcon,
  ChartBarIcon,
} from '@heroicons/vue/24/outline'
import PageLayout from '@/components/PageLayout.vue'
import BaseButton from '@/components/Button.vue'
import CallToAction from '@/components/CallToAction.vue'
import UnifiedSection from '@/components/UnifiedSection.vue'
// import JourneyTimeline from '@/components/JourneyTimeline.vue'
import SkillsGrid from '@/components/SkillsGrid.vue'
import JourneyBadges from '@/components/JourneyBadges.vue'

export default {
  name: 'AboutPage',
  components: {
    // Custom components
    PageLayout,
    UnifiedSection,
    BaseButton,
    CallToAction,
    // JourneyTimeline,
    SkillsGrid,
    JourneyBadges,
  },
  data() {
    return {
      // Make icons available for template binding
      ArrowRightIcon,
      EnvelopeIcon,

      // Career journey for timeline component
      // careerJourney: [
      //   {
      //     period: '2022 - Present',
      //     title: 'Senior Front-End Developer at ProdPad',
      //     description:
      //       'Leading the front-end development of a SaaS product management platform, focusing on performance optimization and accessible user interfaces.',
      //     achievements: [
      //       'Improved PageSpeed scores from 70 to 95+ on both mobile and desktop',
      //       'Developed custom Gutenberg blocks that increased content creation efficiency by 40%',
      //       'Led the initiative to make the entire platform WCAG 2.2 AA compliant',
      //     ],
      //     skills: [
      //       'Vue.js',
      //       'WordPress',
      //       'Gutenberg',
      //       'Accessibility',
      //       'Performance',
      //     ],
      //   },
      //   {
      //     period: '2020 - 2022',
      //     title: 'Front-End Developer at NHS',
      //     description:
      //       'Created responsive, accessible websites for multiple NHS services, ensuring all digital products met stringent accessibility standards.',
      //     achievements: [
      //       'Built a React-based patient portal that improved appointment scheduling efficiency by 35%',
      //       'Developed mobile-first interfaces that increased mobile engagement by 60%',
      //     ],
      //     skills: ['React', 'SCSS', 'Accessibility', 'Performance'],
      //   },
      //   {
      //     period: '2018 - 2020',
      //     title: 'Web Developer at Agency',
      //     description:
      //       'Worked on a diverse range of client projects, from e-commerce websites to marketing landing pages.',
      //     achievements: [
      //       'Designed and built 20+ custom WordPress themes for various clients',
      //       'Mentored junior developers on best practices in front-end development',
      //     ],
      //     skills: ['WordPress', 'JavaScript', 'PHP', 'SCSS'],
      //   },
      // ],

      // Skill categories for the SkillsGrid component
      skillCategories: [
        {
          name: 'Front-End Development',
          icon: CodeBracketIcon,
          color: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
          skills: [
            { name: 'Vue.js', main: true },
            { name: 'JavaScript', main: true },
            { name: 'HTML5', main: true },
            { name: 'CSS3/SCSS', main: true },
            'Responsive Design',
            'Web Components',
            'Semantic HTML',
          ],
        },
        {
          name: 'WordPress Expertise',
          icon: PuzzlePieceIcon,
          color: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
          skills: [
            { name: 'WordPress', main: true },
            { name: 'Gutenberg Blocks', main: true },
            { name: 'PHP', main: true },
            { name: 'WPEngine', main: true },
            'Custom Theme Development',
            'Plugin Development',
            'ACF PRO',
          ],
        },
        {
          name: 'Performance & Quality',
          icon: BoltIcon,
          color: 'linear-gradient(135deg, #f59e0b, #d97706)',
          skills: [
            { name: 'Performance Optimization', main: true },
            { name: 'Core Web Vitals', main: true },
            { name: 'Lighthouse', main: true },
            { name: 'WCAG 2.2', main: true },
            'Image Optimization',
            'BugSnag',
            'Cypress',
          ],
        },
        {
          name: 'Development Workflow',
          icon: WrenchIcon,
          color: 'linear-gradient(135deg, #6366f1, #4f46e5)',
          skills: [
            { name: 'Git', main: true },
            { name: 'Vite', main: true },
            { name: 'Webpack', main: true },
            'CodeShip',
            'CodeScene',
            'npm/yarn',
            'GitHub Actions',
            'VS Code',
            'SFTP',
          ],
        },
        {
          name: 'API Integration',
          icon: ServerIcon,
          color: 'linear-gradient(135deg, #ec4899, #be185d)',
          skills: [
            { name: 'RESTful APIs', main: true },
            { name: 'DevTools Network Tab', main: true },
            { name: 'JSON Data Handling', main: true },
            'API Troubleshooting',
            'Headless CMS',
            'Segment.io',
            'Node.js',
          ],
        },
        {
          name: 'Design & Analytics',
          icon: ChartBarIcon,
          color: 'linear-gradient(135deg, #06b6d4, #0284c7)',
          skills: [
            { name: 'Google Analytics', main: true },
            { name: 'HubSpot', main: true },
            { name: 'Figma', main: true },
            'UX Principles',
            'Accessibility',
            'A/B Testing',
            'Event Tracking',
          ],
        },
      ],

      // Core values section removed

      // Personal items (preserved and enhanced from original)
      personalItems: [
        {
          emoji: '🌱',
          title: 'Gardening',
          description:
            'Nothing beats the satisfaction of growing something from seed to harvest. My garden is my zen space where I cultivate both plants and patience.',
        },
        {
          emoji: '💪',
          title: 'Fitness',
          description:
            "Exercise is my daily energy boost! Whether it's a Les Mills class at home or cycling through the Scottish countryside, staying active keeps my mind sharp and ready for coding challenges.",
        },
        {
          emoji: '🐕',
          title: 'Adventures with Summer',
          description:
            'My dog Summer is my adventure companion. We love exploring new trails and discovering hidden corners of Scotland together, which often leads to my best creative thinking.',
        },
        {
          emoji: '🏞️',
          title: 'Nature Escapes',
          description:
            'Living in Scotland means having endless breathtaking landscapes at our doorstep. Exploring the Highlands helps me disconnect from technology and return with fresh perspectives.',
        },
        {
          emoji: '👨‍🍳',
          title: 'Home Cooking',
          description:
            "My husband and I love creating delicious meals together. There's something about the creativity of cooking that parallels good coding—combining ingredients in just the right way to create something wonderful!",
        },
        {
          emoji: '📚',
          title: 'Continuous Learning',
          description:
            "I'm always reading something—from tech blogs to novels. I believe that learning across diverse fields makes me a better developer by expanding my thinking beyond code.",
        },
      ],
    }
  },

  mounted() {
    this.observeElements()
  },

  methods: {
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
        // Observe various elements that should animate in
        const elementsToObserve = ['.value-card', '.personal-item']

        elementsToObserve.forEach((selector) => {
          const elements = this.$el.querySelectorAll(selector)
          elements.forEach((element, index) => {
            element.style.setProperty('--delay', `${index * 0.1}s`)
            observer.observe(element)
          })
        })
      })
    },

    onFirstAnimationFinished() {
      // Animation completion handler for the typing animation
      console.log('First animation finished')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

// Visually hidden elements (for accessibility)
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

// Profile image
.profile-image {
  height: auto;
  transform: rotate(-2deg);
  transition: all 0.3s ease;

  &:hover {
    transform: rotate(0) scale(1.02);
  }
}

// Philosophy section
.philosophy-image {
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
}

.philosophy-quote {
  margin: 2rem 0 1rem;
  padding: 2rem;
  border-radius: 12px;
  background: linear-gradient(
    135deg,
    rgba($interactive-primary, 0.05) 0%,
    rgba($interactive-primary, 0.02) 100%
  );
  border-left: 4px solid $interactive-primary;
  position: relative;

  .quote-icon {
    position: absolute;
    top: 1.5rem;
    left: 1.5rem;
    width: 2rem;
    height: 2rem;
    color: rgba($interactive-primary, 0.3);
  }

  .quote-text {
    padding-left: 2.5rem;
    font-style: italic;
    color: $text-primary;
    font-size: 1.1rem;
    line-height: 1.6;
    font-weight: 500;
  }
}

// Journey section
.journey-intro {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 4rem;

  @include breakpoint-up(lg) {
    flex-direction: row;
    align-items: center;
  }
}

.journey-text {
  flex: 1;
  color: $text-secondary;
  line-height: 1.7;

  p {
    margin-bottom: 1.25rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  strong {
    color: $text-primary;
    font-weight: 600;
  }

  .highlight {
    @include light-text-gradient;
    font-weight: 600;
  }
}

// Values section
.values-visual {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.values-circle {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: linear-gradient(135deg, $interactive-primary, $interactive-hover);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 20px 40px rgba($interactive-primary, 0.25);

  .values-icon {
    width: 4rem;
    height: 4rem;
    color: white;
  }
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.value-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  transform: translateY(30px);
  animation-delay: var(--delay);

  &.is-visible {
    opacity: 1;
    transform: translateY(0);
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }

  .value-icon {
    width: 3rem;
    height: 3rem;
    color: $interactive-primary;
    margin: 0 auto 1.5rem;
  }

  .value-title {
    color: $text-primary;
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .value-description {
    color: $text-secondary;
    font-size: 0.95rem;
    line-height: 1.6;
  }
}

// Personal interests section
.personal-item {
  // Card styles now come from card-item class
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid transparent;

  &:hover {
    transform: translateY(
      -8px
    ) !important; // Override the unified-card transform value
    border-color: rgba($interactive-primary, 0.2);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);

    .personal-emoji {
      transform: scale(1.1) rotate(5deg);
    }
  }

  .personal-emoji {
    font-size: 3rem;
    flex-shrink: 0;
    line-height: 1;
    transition: transform 0.3s ease;
  }

  .personal-content {
    h4 {
      color: $text-primary;
      font-size: $font-size-h5;
      margin-bottom: 0.5rem;
      font-weight: 600;
      text-align: left;
    }

    p {
      color: $text-secondary;
      line-height: 1.6;
      margin: 0;
      font-size: $font-size-base;
      text-align: left;
    }
  }
}

.highlight {
  @include light-text-gradient;
  font-weight: 600;
}

.personal-grid-container {
  width: 100%;
  max-width: 1200px;
  margin: 2rem auto;
}

.card-section {
  margin: 4rem auto 2rem;
  text-align: left;

  h3 {
    margin-bottom: 2rem;
    color: $text-primary;
    font-size: $font-size-h3;
    font-weight: 600;
  }
}

// Accessibility improvements
@media (prefers-reduced-motion: reduce) {
  .profile-image,
  .philosophy-image {
    transition: none !important;
    animation: none !important;
    transform: none !important;
  }
}
</style>
