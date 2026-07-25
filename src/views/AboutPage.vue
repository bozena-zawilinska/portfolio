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
          I'm <strong>Bozena</strong>, a Front-End Developer who builds fast,
          accessible, and maintainable websites and web applications. I care
          about thoughtful user experiences, clear code, and making complex
          requirements feel simple.
        </p>

        <p>
          My journey into web development began with a simple question:
          <em>"How do these websites actually work?"</em> That curiosity grew
          into a career focused on turning ideas and designs into reliable
          digital products that work well for both users and the teams who
          maintain them.
        </p>

        <p>
          I enjoy working where
          <span class="highlight"
            >thoughtful design meets practical engineering</span
          >—building reusable components, improving accessibility, solving
          front-end problems, and refining the details that make a product
          easier to use.
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
              Over the past <strong>five years</strong>, I've built accessible,
              high-performance digital products for SaaS companies, marketing
              teams, charities, and businesses. My work spans customer-facing
              applications, marketing websites, design systems, and
              content-managed platforms.
            </p>

            <p>
              I specialise in modern front-end development using
              <span class="highlight">
                Vue.js, JavaScript, SCSS, and WordPress
              </span>
              . I've developed reusable component libraries, implemented complex
              product features, improved accessibility across existing
              applications, and built custom Gutenberg blocks that enable
              non-technical teams to create and manage content independently.
            </p>

            <p>
              I enjoy taking ideas from concept to release, working closely with
              designers, product managers, backend developers, and fellow
              front-end engineers throughout the development process. Whether
              I'm building new features, improving performance, fixing complex
              interface issues, or documenting systems for future developers, I
              focus on writing clean, maintainable code that solves real user
              problems.
            </p>

            <p>
              For me, accessibility, performance, and maintainability aren't
              separate tasks—they're part of every feature from the first line
              of code.
            </p>
          </div>

          <JourneyBadges />
        </div>

        <!-- <JourneyTimeline :items="careerJourney" horizontal /> -->
      </UnifiedSection>

      <!-- Skills and Expertise -->
      <UnifiedSection id="story-skills" title="Skills & Expertise">
        <p>
          My core strength is translating product and design requirements into
          responsive, accessible interfaces that are reliable in production and
          straightforward for other developers to understand and extend.
        </p>

        <SkillsGrid :categories="skillCategories" />
      </UnifiedSection>

      <!-- How I Work -->
      <UnifiedSection id="story-working-style" title="How I Work">
        <div class="working-style">
          <p>
            I enjoy collaborating early, asking clear questions, and breaking
            larger problems into manageable steps. I document important
            decisions, value constructive code reviews, and aim to leave the
            codebase easier to work with than I found it.
          </p>

          <p>
            I'm particularly attentive to accessibility, reusable architecture,
            edge cases, and the connection between front-end behaviour and
            backend workflows. I care about shipping useful work while keeping
            the implementation understandable for the next developer.
          </p>
        </div>
      </UnifiedSection>

      <!-- My Values section - removed -->

      <!-- Personal Interests -->
      <UnifiedSection id="story-personal" title="Beyond the Code">
        <p>
          Away from the screen, I enjoy the slower activities that help me
          recharge, stay curious, and return to work with a clearer perspective.
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
        heading="Let's Connect"
        text="If you're looking for a Front-End Developer who cares about accessible interfaces, maintainable code, and thoughtful collaboration, I'd be pleased to hear from you."
        support-text="Front-end development · Accessibility · Performance · Product collaboration"
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
          color: 'linear-gradient(135deg, #a0a7d8, #757fc6)',
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
          color: 'linear-gradient(135deg, #b5a0d8, #9375c6)',
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
          color: 'linear-gradient(135deg, #ffc39e, #ff9d61)',
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
          color: 'linear-gradient(135deg, #6b8fd8, #3b6acb)',
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
          color: 'linear-gradient(135deg, #ef8d9c, #e7576d)',
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
          color: 'linear-gradient(135deg, #7dd3c8, #4fc4b5)',
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
            'Growing plants from seed has taught me patience, consistency, and the satisfaction of seeing small daily efforts turn into something meaningful.',
        },
        {
          emoji: '💪',
          title: 'Fitness',
          description:
            "Whether it's a Les Mills workout or a cycle through the Scottish countryside, staying active helps me clear my mind and return to problems with fresh energy.",
        },
        {
          emoji: '🐕',
          title: 'Adventures with Summer',
          description:
            'My dog Summer is my favourite adventure companion. Exploring new trails together is the perfect way to switch off from the screen and recharge.',
        },
        {
          emoji: '🏞️',
          title: 'Nature Escapes',
          description:
            "Scotland's landscapes never get old. Spending time outdoors helps me slow down, think more clearly, and come back to my work with a fresh perspective.",
        },
        {
          emoji: '👨‍🍳',
          title: 'Home Cooking',
          description:
            "Cooking is something my husband and I genuinely enjoy doing together. It's one of the ways we slow down, spend quality time together, and end the day well.",
        },
        {
          emoji: '🧠',
          title: 'Psychology & Personal Growth',
          description:
            'Outside of tech, I enjoy reading about psychology, communication, mindfulness, health, and personal growth. Understanding how people think helps me design more thoughtful user experiences and collaborate better with teams.',
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
