<template>
  <div class="page page--work">
    <!-- Progress bar -->
    <ProgressBar :progress="scrollProgress" />

    <div class="container">
      <p class="eyebrow text--flex-center">Selected Work</p>
      <TypingAnimation
        id="my-work-heading"
        class="header animated-heading text--flex-center"
        text="My Work"
        :speed="80"
        wrapper-element="h1"
        custom-cursor-class="heading"
        @typing-finished="onFirstAnimationFinished"
      />

      <!-- Developer Introduction -->
      <UnifiedSection id="work-intro" media-alignment="center">
        <template #media>
          <img
            src="@/assets/avatar-bz-3.png"
            alt="Bozena's profile picture"
            width="200"
            height="200"
            class="profile-image"
          />
        </template>

        <h2 class="visually-hidden">What I Bring to the Table</h2>
        <p>
          My work spans SaaS product development, WordPress platforms, reusable
          component systems and accessible responsive websites. Each project
          below explains the problem, my role, the implementation and the value
          created for users or the team maintaining it.
        </p>

        <p>
          I'm a <strong>Front-End Engineer</strong> with professional WordPress
          experience dating back to 2015 and commercial Vue.js experience since
          joining ProdPad in 2022. I began developing my React skills in 2026
          through independent learning and building The Areté Club.
        </p>

        <p>
          At ProdPad, I have contributed to both the core product and the
          marketing website, working closely with product, design, backend and
          marketing colleagues. I focus on
          <span class="highlight"
            >accessible interfaces, maintainable code and dependable
            implementation</span
          >, considering performance, usability and the needs of the teams
          maintaining what I build.
        </p>
      </UnifiedSection>

      <!-- Interactive Cards Section -->
      <section class="work__value-props" aria-labelledby="value-props-heading">
        <h2 id="value-props-heading" class="section-title">
          What I Bring to a Team
        </h2>
        <InteractiveCards :custom-cards="workValueCards" />
      </section>

      <!-- Featured Projects -->
      <section class="work__featured" aria-labelledby="featured-projects">
        <h2 id="featured-projects" class="section-title">Featured Projects</h2>
        <div class="featured-projects-grid">
          <article
            v-for="project in projects.slice(0, 5)"
            :key="project.id"
            :data-project-id="project.id"
            class="card featured-card"
            :class="{ 'is-expanded': project.showDetails }"
            :aria-expanded="project.showDetails"
          >
            <header class="card__header">
              <h3 class="card__title">{{ project.title }}</h3>
              <img
                class="card__logo"
                :src="getProjectPath(project.logo)"
                :alt="`${project.title} logo`"
                loading="lazy"
                width="60"
                height="60"
              />
            </header>

            <div class="card__content">
              <h4 class="card__subtitle">{{ project.role }}</h4>
              <p class="card__description">
                {{ project.summary }}
              </p>
              <p v-if="project.skills" class="card__technologies">
                <span class="card__technologies-label">Core technologies:</span>
                {{ project.skills.join(' · ') }}
              </p>
            </div>
            <div
              v-if="project.showDetails"
              class="card__divider"
              aria-hidden="true"
            />
            <!-- Expandable details with smooth transitions -->
            <div
              :id="'project-details-' + project.id"
              class="card__details"
              :class="{ show: project.showDetails }"
            >
              <div class="details__content">
                <div class="details__text-content">
                  <template v-if="project.caseStudy">
                    <div
                      v-for="section in project.caseStudy"
                      :key="section.heading"
                      class="case-study__section"
                    >
                      <h5 class="case-study__heading">
                        {{ section.heading }}
                      </h5>
                      <p class="details__text">{{ section.text }}</p>
                    </div>
                  </template>
                  <template v-else>
                    <p
                      v-for="(line, index) in project.description
                        .trim()
                        .split('\n')"
                      :key="index"
                      class="details__text"
                    >
                      {{ line }}
                    </p>
                  </template>
                </div>

                <div
                  v-if="project.images && project.images[0]"
                  class="image-showcase"
                >
                  <img
                    :src="getProjectPath(project.images[0].src)"
                    :alt="project.images[0].alt"
                    loading="lazy"
                    width="400"
                    height="300"
                  />
                </div>

                <!-- Skills badges -->
                <div
                  v-if="project.skills"
                  class="skill-badges"
                  role="list"
                  aria-label="Technologies used"
                >
                  <!-- Purely a cosmetic hover flourish; the skill name is
                  always visible in the text, not gated behind interaction. -->
                  <!-- eslint-disable-next-line vuejs-accessibility/no-static-element-interactions, vuejs-accessibility/mouse-events-have-key-events -->
                  <span
                    v-for="skill in project.skills"
                    :key="skill"
                    class="skill-badge"
                    role="listitem"
                    @mouseenter="animateSkill"
                  >
                    {{ skill }}
                  </span>
                </div>
              </div>
            </div>

            <div class="card__actions">
              <BaseButton
                variant="secondary"
                :aria-expanded="project.showDetails"
                :aria-controls="'project-details-' + project.id"
                :aria-label="`${
                  project.showDetails ? 'Hide' : 'Show'
                } details for ${project.title}`"
                @click="toggleDetails(project)"
              >
                <span class="button-text">{{
                  project.showDetails ? 'Show less' : 'Show more'
                }}</span>
                <span
                  class="button-icon"
                  :class="{ rotated: project.showDetails }"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <polyline points="6,9 12,15 18,9"></polyline>
                  </svg>
                </span>
              </BaseButton>

              <BaseButton
                variant="primary"
                :href="project.link"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="`Visit ${project.title} website (opens in new tab)`"
              >
                View Live
                <span class="external-link-icon" aria-hidden="true">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="m7 17 10-10"></path>
                    <path d="M17 7v10"></path>
                    <path d="M7 7h10"></path>
                  </svg>
                </span>
              </BaseButton>
            </div>
          </article>
        </div>
      </section>

      <!-- Interactive Cards Section -->
      <section class="project__cards" aria-labelledby="skills-heading">
        <h2 id="skills-heading" class="section-title">Other Projects</h2>
        <div class="cards-grid">
          <div
            v-for="card in projects.filter((p) => p.id >= 5 && p.id <= 10)"
            :key="card.id"
            :data-project-id="card.id"
            class="card project-card"
            :class="{ 'is-visible': card.isVisible }"
            tabindex="0"
            role="button"
            :aria-label="`${card.title} - Click to view details`"
            @click="openCardModal(card, $event)"
            @mouseenter="card.isHovered = true"
            @mouseleave="card.isHovered = false"
            @focus="card.isHovered = true"
            @blur="card.isHovered = false"
            @keydown.enter="openCardModal(card, $event)"
            @keydown.space.prevent="openCardModal(card, $event)"
          >
            <div class="card__header">
              <h3 class="card__title">{{ card.title }}</h3>
            </div>

            <div class="card__preview">
              <p class="card__preview-text">
                {{ card.description.substring(0, 60) }}...
              </p>
              <div class="card__expand-hint">
                <span>Click to explore</span>
                <svg
                  class="expand-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <!-- Card Modal Overlay -->
        <!-- Backdrop click-to-close is a mouse convenience; the close
        button and Escape key already provide fully accessible alternatives. -->
        <!-- eslint-disable-next-line vuejs-accessibility/no-static-element-interactions -->
        <div
          v-if="selectedCard"
          ref="cardModalOverlay"
          class="card-modal-overlay"
          tabindex="0"
          role="dialog"
          aria-modal="true"
          :aria-labelledby="`modal-title-${selectedCard.id}`"
          @click="closeCardModal"
          @keydown.escape="closeCardModal"
          @keydown.tab="onCardModalTabKeydown"
        >
          <div class="card-modal" @click.stop>
            <button
              class="modal__close"
              aria-label="Close modal"
              @click="closeCardModal"
            >
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
                <img
                  v-if="selectedCard.images && selectedCard.images[0]"
                  :src="getProjectPath(selectedCard.images[0].src)"
                  :alt="selectedCard.images[0].alt"
                  class="modal__project-image"
                  style="
                    max-width: 100%;
                    height: auto;
                    margin-bottom: 2rem;
                    border-radius: 12px;
                  "
                />
                <h3 :id="`modal-title-${selectedCard.id}`" class="modal__title">
                  {{ selectedCard.title }}
                </h3>
              </div>

              <div class="modal__body">
                <p class="modal__description">
                  {{ selectedCard.description }}
                </p>
                <BaseButton
                  v-if="selectedCard.link"
                  variant="primary"
                  :href="selectedCard.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  :aria-label="`Visit ${selectedCard.title} website (opens in new tab)`"
                  style="margin-top: 1.5rem"
                >
                  Visit Website
                  <span
                    class="external-link-icon"
                    aria-hidden="true"
                    style="margin-left: 0.5rem"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path d="m7 17 10-10"></path>
                      <path d="M17 7v10"></path>
                      <path d="M7 7h10"></path>
                    </svg>
                  </span>
                </BaseButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Call to Action -->
      <CallToAction
        support-text="Front-end development · Accessibility · Maintainable implementation"
      >
        <template #heading>Interested in working together?</template>
        <template #text>
          If you're looking for a Front-End Developer with experience across
          Vue.js, WordPress, accessible interfaces, and production websites,
          <router-link to="/contact" class="text-link"
            >I'd be pleased to hear from you.</router-link
          >
        </template>
      </CallToAction>
    </div>

    <!-- Scroll to top button -->
    <ScrollToTopButton :visible="showScrollButton" />
  </div>
</template>

<script>
import ScrollToTopButton from '@/components/ScrollToTopButton.vue'
import BaseButton from '@/components/Button.vue'
import CallToAction from '@/components/CallToAction.vue'
import TypingAnimation from '@/components/TypingAnimation.vue'
import ProgressBar from '@/components/ProgressBar.vue'
import InteractiveCards from '@/components/InteractiveCards.vue'
import UnifiedSection from '@/components/UnifiedSection.vue'
import { useFocusTrap } from '@/composables/useFocusTrap'

const { trapFocus } = useFocusTrap()

export default {
  name: 'WorkPage',
  components: {
    ScrollToTopButton,
    BaseButton,
    CallToAction,
    TypingAnimation,
    ProgressBar,
    InteractiveCards,
    UnifiedSection,
  },
  data() {
    return {
      imageLoaded: false,
      showScrollButton: false,
      scrollProgress: 0,
      isToggling: false, // Prevent double-clicks
      selectedCard: null, // For modal system
      workValueCards: [
        {
          id: 1,
          type: 'performance',
          title: 'Performance Focused',
          icon: 'BoltIcon',
          description:
            'I use Lighthouse, Core Web Vitals, browser tooling, and practical front-end improvements to identify performance issues and make websites faster and more reliable across devices.',
          funFact:
            'On the ProdPad marketing website, my optimisation work helped maintain PageSpeed scores of 95 or above on key pages.',
          isHovered: false,
        },
        {
          id: 2,
          type: 'code',
          title: 'Reusable Components',
          icon: 'CodeBracketIcon',
          description:
            'I build reusable Vue components and custom Gutenberg blocks that improve consistency, reduce repeated implementation work, and make future changes easier to manage.',
          funFact:
            'At ProdPad, I contributed to reusable product components and built more than 20 custom Gutenberg blocks for the marketing team.',
          isHovered: false,
        },
        {
          id: 3,
          type: 'passion',
          title: 'Design Implementation',
          icon: 'HeartIcon',
          description:
            'I translate Figma files, supplied designs, and product requirements into responsive interfaces while preserving the intent of the design and handling real content, states, and screen sizes.',
          funFact:
            'My early WordPress work involved turning supplied PDF designs into responsive, production-ready websites.',
          isHovered: false,
        },
        {
          id: 4,
          type: 'innovation',
          title: 'Accessibility Mindset',
          icon: 'SparklesIcon',
          description:
            'I consider semantic HTML, keyboard access, focus behaviour, labels, responsive zoom, motion preferences, and WCAG guidance throughout implementation rather than treating accessibility as a final check.',
          funFact:
            'Accessibility has been a consistent requirement across my SaaS, healthcare, charity, and independent website work.',
          isHovered: false,
        },
        {
          id: 5,
          type: 'problem',
          title: 'Technical Problem Solving',
          icon: 'PuzzlePieceIcon',
          description:
            'I investigate front-end issues methodically using browser developer tools, application context, API responses, logs, and focused testing before choosing an implementation.',
          funFact:
            'My current product work regularly involves tracing behaviour across Vue components, shared composables, APIs, and backend workflows.',
          isHovered: false,
        },
        {
          id: 6,
          type: 'collaboration',
          title: 'Clear Collaboration',
          icon: 'UsersIcon',
          description:
            'I work independently when needed while keeping product, design, backend, marketing, and other developers informed through clear updates, documentation, code reviews, and early questions.',
          funFact:
            'I have worked as a sole website developer and as part of a cross-functional SaaS product team.',
          isHovered: false,
        },
      ],
      projects: [
        {
          id: 1,
          title: 'ProdPad - SaaS Platform',
          logo: 'prodpad/logo.png',
          role: 'Front-End Developer',
          summary:
            'Built and refined Vue.js product features for an established product-management platform, with a focus on reusable components, accessible interaction, dependable workflow behaviour and maintainable implementation.',
          showDetails: false,
          caseStudy: [
            {
              heading: 'Overview',
              text: 'ProdPad is a product-management SaaS platform used by product teams to collect feedback, develop ideas and plan roadmaps. I work within the front-end team on established and evolving Vue.js architecture, collaborating with product, design, backend and other front-end engineers.',
            },
            {
              heading: 'The challenge',
              text: 'Product features often connect multiple components, APIs, states and backend workflows. The interface needs to remain understandable for users while handling edge cases, asynchronous behaviour and existing product conventions.',
            },
            {
              heading: 'What I built',
              text: 'I develop reusable Vue.js components and product features, improve existing interactions, connect front-end interfaces to backend APIs and workflow systems, and support complex form, onboarding and navigation behaviour.',
            },
            {
              heading: 'Accessibility and quality',
              text: 'I consider semantic structure, labels, keyboard interaction, focus behaviour, responsive layouts and maintainable state handling throughout implementation. I also write technical documentation and clarify connected workflows for future developers.',
            },
            {
              heading: 'Outcome',
              text: 'The work improves consistency across the product, makes complex workflows easier to use and gives the team clearer foundations for future changes.',
            },
          ],
          link: 'https://www.prodpad.com/sandbox/',
          skills: ['Vue 3', 'HTML5', 'SCSS', 'JavaScript', 'RESTful APIs'],
          tools: ['Git', 'npm', 'Vite', 'ESLint', 'Figma'],
          images: [
            {
              src: 'prodpad/prodpad-app-dashboard.png',
              alt: 'ProdPad Dashboard',
            },
            {
              src: 'prodpad/prodpad-app-product-portfolio.png',
              alt: 'ProdPad Product Portfolio',
            },
          ],
        },
        {
          id: 2,
          title: 'ProdPad - Marketing Website',
          logo: 'prodpad/logo.png',
          role: 'WordPress Developer',
          summary:
            'Built and maintained more than 20 custom Gutenberg blocks, giving the marketing team flexible content tools while preserving accessibility, performance and visual consistency.',
          showDetails: false,
          caseStudy: [
            {
              heading: 'Overview',
              text: 'I was the developer responsible for the ProdPad marketing website, supporting new pages, reusable WordPress blocks, integrations, maintenance and releases.',
            },
            {
              heading: 'The challenge',
              text: 'The marketing team needed freedom to build and update pages without creating inconsistent layouts or requiring a developer for routine content changes.',
            },
            {
              heading: 'What I built',
              text: 'I created a library of more than 20 custom Gutenberg blocks and supported HubSpot forms, lead capture, analytics and advertising scripts, responsive layouts, WordPress maintenance and technical releases.',
            },
            {
              heading: 'Performance and quality',
              text: 'I balanced content flexibility with semantic markup, accessibility, consistent design and performance. My optimisation work helped key pages maintain PageSpeed scores of 95 or above across desktop and mobile.',
            },
            {
              heading: 'Outcome',
              text: 'The block system reduced dependency on development for everyday page creation while keeping the site easier to maintain and visually consistent.',
            },
          ],
          link: 'https://www.prodpad.com/',
          skills: ['PHP', 'HTML & SCSS', 'JavaScript', 'Webpack', 'WordPress'],
          tools: ['ACF PRO', 'BrowserStack', 'GitHub', 'Figma'],
          images: [
            {
              src: 'prodpad/prodpad-homepage.png',
              alt: 'ProdPad Homepage',
            },
            {
              src: 'prodpad/prodpad-glossary-page.png',
              alt: 'ProdPad Glossary',
            },
          ],
        },
        {
          id: 3,
          title: 'Passion4Social',
          logo: 'p4s/logo.png',
          role: 'Website Developer',
          summary:
            'Turned supplied designs into responsive WordPress websites for charities, public-sector organisations and businesses, covering implementation, accessibility, testing, content setup and deployment.',
          showDetails: false,
          caseStudy: [
            {
              heading: 'Overview',
              text: 'At Passion4Social, I worked with my manager and the design team to deliver websites for organisations with different audiences, content needs and accessibility requirements.',
            },
            {
              heading: 'What I built',
              text: 'Using WordPress, the Genesis Framework, PHP, HTML, CSS and jQuery, I implemented themes, responsive behaviour, local development environments, browser testing, content setup and deployment.',
            },
            {
              heading: 'Outcome',
              text: 'The role strengthened my ability to interpret static designs, work independently and adapt a shared technical foundation to different organisations and users.',
            },
          ],
          link: 'https://passion4social.com/',
          skills: [
            'PHP',
            'HTML & CSS',
            'jQuery',
            'Responsive Design',
            'Website deployment',
          ],
          tools: [
            'WordPress',
            'Genesis Framework',
            'Local by Flywheel',
            'Beanstalk',
            'FileZilla',
          ],
          images: [
            {
              src: 'p4s/p4s-homepage.png',
              alt: 'P4S Homepage',
            },
            {
              src: 'p4s/p4s-website-portfolio.png',
              alt: 'P4S Portfolio',
            },
          ],
        },
        {
          id: 4,
          title: 'Royal Hospital for Children and Young People',
          logo: 'nhs/logo.svg',
          role: 'Website Developer',
          summary:
            'Built an accessible WordPress website for NHS Lothian, translating supplied designs into responsive pages and resources for children, families, and healthcare professionals.',
          showDetails: false,
          description:
            'I developed this website while working at Passion4Social, translating supplied designs into a responsive WordPress implementation for NHS Lothian.\n\nThe site supports children, families, and healthcare professionals, so clear structure, readable content, responsive behaviour, and accessibility were central requirements. I implemented the front-end templates and content presentation using WordPress, the Genesis Framework, PHP, HTML, CSS, and jQuery.\n\nThe project was a meaningful example of how careful front-end implementation can make important healthcare information easier to access and understand.',
          link: 'https://children.nhslothian.scot/',
          skills: [
            'PHP',
            'HTML & CSS',
            'jQuery',
            'Responsive Design',
            'WCAG Compliance',
          ],
          tools: [
            'WordPress',
            'Genesis Framework',
            'Local by Flywheel',
            'Beanstalk',
            'FileZilla',
          ],
          images: [
            {
              src: 'nhs/nhs-landing-page.png',
              alt: 'NHS Landing Page',
            },
            {
              src: 'nhs/nhs-website-children.png',
              alt: 'Royal Hospital for Children and Young People',
            },
          ],
        },
        {
          id: 11,
          title: 'The Areté Club',
          logo: 'arete/arete-logo.png',
          role: 'Founder & Front-End Developer',
          summary:
            'Designed and built an independent React product that combines accessible UI, reusable components, editorial content architecture, SEO, performance and structured AI-assisted workflows.',
          showDetails: false,
          caseStudy: [
            {
              heading: 'Overview',
              text: 'The Areté Club is an independent product for ambitious women who want more clarity and structure without adding more noise. I am responsible for the product concept, website, content system, implementation and ongoing iteration.',
            },
            {
              heading: 'The challenge',
              text: 'The product needs to feel calm and editorial while remaining accessible, responsive, maintainable and clear enough for users who may already feel mentally overloaded.',
            },
            {
              heading: 'What I built',
              text: 'I designed and developed the website in React, created reusable interface components, established a content and brand system, implemented accessible interactions, and developed structured documentation for content creation and AI-assisted development.',
            },
            {
              heading: 'What this demonstrates',
              text: 'The project shows product thinking, independent decision-making, React learning in a real codebase, accessible front-end implementation, design-system thinking, SEO and documentation-led workflows.',
            },
          ],
          link: 'https://www.theareteclub.com/',
          skills: [
            'React',
            'JavaScript',
            'HTML5',
            'SCSS',
            'Responsive Design',
            'Accessibility (WCAG)',
            'SEO',
            'Performance Optimisation',
          ],
          images: [
            {
              src: 'arete/arete-website.png',
              alt: 'The Areté Club website',
            },
          ],
        },
        {
          id: 5,
          title: 'Just Enterprise',
          logo: 'just-enterprise/logo.png',
          role: 'Website Developer',
          showDetails: false,
          isHovered: false,
          isVisible: false,
          description:
            "Provided ongoing website maintenance and performance optimisation for Scotland's leading social enterprise support organisation.",
          link: 'https://justenterprise.org/',
          skills: [
            'WordPress',
            'PHP',
            'HTML & CSS',
            'Performance Optimisation',
          ],
          images: [
            {
              src: 'just-enterprise/just-enterprise-website.png',
              alt: 'Just Enterprise Website',
            },
          ],
        },
        {
          id: 6,
          title: 'Cerebral Palsy Scotland',
          logo: 'cps/logo.svg',
          role: 'Website Developer',
          showDetails: false,
          isHovered: false,
          isVisible: false,
          description:
            'Maintained accessibility-compliant website for vital charity supporting individuals with cerebral palsy and their families.',
          link: 'https://cerebralpalsyscotland.org.uk/',
          skills: ['WordPress', 'PHP', 'HTML & CSS', 'WCAG Compliance'],
          images: [
            {
              src: 'cps/cps-website.png',
              alt: 'Cerebral Palsy Scotland Website',
            },
          ],
        },
        {
          id: 7,
          title: 'Bytzari',
          logo: 'tzari/logo.svg',
          role: 'Website Developer',
          showDetails: false,
          isHovered: false,
          isVisible: false,
          description:
            'Built showcase website for sustainable clothing designer celebrating cultural diversity and challenging fashion industry norms.',
          link: 'https://bytzari.com/',
          skills: ['WordPress', 'Responsive Design', 'PHP', 'Custom Styling'],
          images: [
            {
              src: 'tzari/tzari-website.png',
              alt: 'Bytzari Website',
            },
          ],
        },
        {
          id: 8,
          title: 'ABZ Works',
          logo: 'abz-works/logo.svg',
          role: 'Website Developer',
          showDetails: false,
          isHovered: false,
          isVisible: false,
          description:
            'Developed comprehensive website with integrated ABotZ chatbot for intelligent user guidance and content discovery.',
          link: 'https://abzworks.co.uk/',
          skills: [
            'WordPress',
            'PHP',
            'Chatbot Integration',
            'WCAG Compliance',
          ],
          images: [
            {
              src: 'abz-works/abz-works-website.png',
              alt: 'ABZ Works Website',
            },
          ],
        },
        {
          id: 9,
          title: 'Environmental Key Fund',
          logo: 'ekf/logo.svg',
          role: 'Website Developer',
          showDetails: false,
          isHovered: false,
          isVisible: false,
          description:
            'Created streamlined grant application platform for North Lanarkshire Council supporting local environmental projects.',
          link: 'https://environmentalkeyfund.com/',
          skills: ['WordPress', 'Form Integration', 'Performance Optimisation'],
          images: [
            {
              src: 'ekf/ekf-website.png',
              alt: 'Environmental Key Fund Website',
            },
          ],
        },
        {
          id: 10,
          title: 'Scottish Communities Finance',
          logo: 'scf/logo.svg',
          role: 'Website Developer',
          showDetails: false,
          isHovered: false,
          isVisible: false,
          description:
            'Built community finance platform promoting accessible financial services and reinvestment in local Scottish communities.',
          link: 'https://scotcomfinance.scot/',
          skills: ['WordPress', 'Financial Integration', 'Community Features'],
          images: [
            {
              src: 'scf/scf-website.png',
              alt: 'Scottish Communities Finance Website',
            },
          ],
        },
      ],
    }
  },

  mounted() {
    this.observeElements()
    this.setupScrollListener()
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    setupScrollListener() {
      window.addEventListener('scroll', this.handleScroll)
    },

    handleScroll() {
      this.showScrollButton = window.pageYOffset > 300

      // Calculate scroll progress
      const scrollTop = window.pageYOffset
      const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight
      this.scrollProgress = (scrollTop / documentHeight) * 100
    },

    getProjectPath(project) {
      return require(`@/assets/projects/${project}`)
    },

    toggleDetails(project) {
      if (this.isToggling) {
        return
      }

      this.isToggling = true

      // Store scroll position to minimize jumping
      const currentScrollY = window.scrollY
      const projectElement = this.$el.querySelector(
        `[data-project-id="${project.id}"]`
      )
      const projectTop = projectElement?.offsetTop || 0

      // Find the project in the array and update it properly for Vue reactivity
      const projectIndex = this.projects.findIndex((p) => p.id === project.id)
      if (projectIndex !== -1) {
        const newState = !this.projects[projectIndex].showDetails

        // Use Vue.set equivalent for Vue 3 - direct assignment with reactive array
        this.projects[projectIndex] = {
          ...this.projects[projectIndex],
          showDetails: newState,
        }

        // Handle smooth expansion/collapse
        this.$nextTick(() => {
          if (projectElement) {
            // If expanding and card is below viewport, scroll to keep it in view
            if (newState && projectTop < currentScrollY) {
              const offset = 100 // Add some breathing room
              window.scrollTo({
                top: Math.max(0, projectTop - offset),
                behavior: 'smooth',
              })
            }

            // Manage focus for accessibility
            this.manageFocus(project.id, newState)
          }

          // Reset toggle lock after animation completes
          setTimeout(() => {
            this.isToggling = false
          }, 500) // Match animation duration
        })
      } else {
        this.isToggling = false
      }
    },

    showDetails(id) {
      if (this.isToggling) {
        return
      }

      this.isToggling = true

      // Find the project and toggle only its showDetails state
      const projectIndex = this.projects.findIndex((p) => p.id === id)
      if (projectIndex !== -1) {
        const newState = !this.projects[projectIndex].showDetails

        // Update only the specific project with proper reactivity
        this.projects[projectIndex] = {
          ...this.projects[projectIndex],
          showDetails: newState,
        }

        this.$nextTick(() => {
          // Reset toggle lock after animation completes
          setTimeout(() => {
            this.isToggling = false
          }, 400) // Match overlay animation duration
        })
      } else {
        this.isToggling = false
      }
    },

    observeElements() {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }

      // const observer = new IntersectionObserver((entries) => {
      //   entries.forEach((entry) => {
      //     if (entry.isIntersecting) {
      //       entry.target.classList.add('is-visible')
      //     }
      //   })
      // }, options)
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.dataset.projectId)
            const idx = this.projects.findIndex((p) => p.id === id)
            if (idx !== -1 && !this.projects[idx].isVisible) {
              // Vue 3: direct assignment is reactive
              this.projects[idx].isVisible = true
              // or if you prefer Vue.set in Vue2:
              // this.$set(this.projects[idx], 'isVisible', true)
              observer.unobserve(entry.target)
            }
          }
        })
      }, options)

      this.$nextTick(() => {
        const featuredCards = this.$el.querySelectorAll('.featured-card')
        featuredCards.forEach((card, index) => {
          card.style.setProperty('--delay', `${index * 0.1}s`)
          observer.observe(card)
        })

        const portfolioCards = this.$el.querySelectorAll('.portfolio-card')
        portfolioCards.forEach((card, index) => {
          card.style.setProperty('--delay', `${index * 0.1}s`)
          observer.observe(card)
        })

        const projectCards = this.$el.querySelectorAll('.project-card')
        projectCards.forEach((card, index) => {
          card.style.setProperty('--delay', `${index * 0.1}s`)
          observer.observe(card)
        })
      })
    },

    animateSkill(event) {
      const badge = event.target
      if (!badge) return

      // Store original transform to avoid conflicts
      const originalTransform = badge.style.transform

      // Apply animation
      badge.style.transform = 'scale(1.05) rotate(2deg)'

      // Reset after animation
      setTimeout(() => {
        badge.style.transform = originalTransform || 'scale(1) rotate(0deg)'
      }, 200)
    },

    // Improve accessibility with focus management
    manageFocus(projectId, expanding) {
      this.$nextTick(() => {
        if (expanding) {
          // Focus on the first interactive element in the expanded content
          const projectElement = this.$el.querySelector(
            `[data-project-id="${projectId}"]`
          )
          const firstSkillBadge = projectElement?.querySelector('.skill-badge')
          if (firstSkillBadge) {
            firstSkillBadge.focus()
          }
        }
      })
    },

    openCardModal(card, event) {
      this.cardModalTrigger = event?.currentTarget || null
      this.selectedCard = card
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'

      // Focus management for accessibility
      this.$nextTick(() => {
        const modal = this.$el.querySelector('.card-modal-overlay')
        if (modal) modal.focus()
      })
    },

    closeCardModal() {
      this.selectedCard = null
      // Restore body scroll
      document.body.style.overflow = ''
      this.cardModalTrigger?.focus()
      this.cardModalTrigger = null
    },

    onCardModalTabKeydown(event) {
      trapFocus(this.$refs.cardModalOverlay, event)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

// Light theme specific styles for work page
.page--work {
  // Add highlight style for gradient text
  .highlight {
    @include light-text-gradient;
    font-weight: 600;
  }

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

  // Work value props section
  .work__value-props {
    margin: 4rem 0;

    .section-title {
      text-align: center;
      margin-bottom: 2rem;
      color: $text-primary;
      font-size: $font-size-subheading;
      font-weight: 700;

      @include breakpoint-down(md) {
        font-size: $font-size-h3;
      }
    }
  }
  // Global section spacing
  section {
    margin-bottom: 3rem;

    @include breakpoint-down(md) {
      margin-bottom: 2rem;
    }
  }

  // Intro section now uses UnifiedSection component
  // No additional custom styling needed

  // Featured projects - enhanced UX improvements
  .featured-card {
    position: relative;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transform-origin: top center;

    // Prevent layout jumping during expansion
    .card__details {
      overflow: hidden;
      transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      max-height: 0;
      opacity: 0;

      &.show {
        max-height: fit-content; // Large enough for content
        opacity: 1;
      }

      .details__content {
        padding-bottom: 1rem;
      }

      .details__text-content {
        margin-bottom: 1.5rem;
      }

      .case-study__section {
        margin-bottom: 1.25rem;

        &:last-child {
          margin-bottom: 0;
        }
      }

      .case-study__heading {
        color: $text-muted-label;
        font-family: 'Lato', sans-serif;
        font-size: 0.8rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        margin-bottom: 0.4rem;
      }
    }

    // Enhanced button styling
    .card__actions {
      display: flex;
      gap: 0.75rem;
      align-items: center;
      margin-top: 1.5rem;

      @include breakpoint-down(sm) {
        flex-direction: column;
        gap: 0.5rem;

        .btn {
          width: 100%;
        }
      }
    }

    .button-icon {
      transition: transform 0.3s ease;
      display: inline-flex;
      align-items: center;
      margin-left: 0.5rem;

      &.rotated {
        transform: rotate(180deg);
      }
    }

    .external-link-icon {
      margin-left: 0.5rem;
      display: inline-flex;
      align-items: center;
      opacity: 0.8;
      transition: opacity 0.3s ease;
    }

    // Hover effects
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);

      .external-link-icon {
        opacity: 1;
      }
    }
  }

  // Portfolio grid improvements
  .portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 2rem;
    margin-top: 2rem;

    @include breakpoint-down(md) {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    @include breakpoint-down(sm) {
      gap: 1rem;
    }
  }

  .portfolio-card {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    animation-delay: var(--delay);
    position: relative;

    &.is-visible {
      opacity: 1;
      transform: translateY(0);
    }

    &.has-overlay {
      .image-showcase img {
        transform: scale(1.05);
      }
    }

    // Enhanced image showcase
    .image-showcase {
      position: relative;
      overflow: hidden;
      border-radius: 12px;
      margin-bottom: 1rem;

      img {
        width: 100%;
        height: auto;
        transition: transform 0.4s ease;
        display: block;
      }
    }

    // Title styling
    .card__title {
      color: $text-primary;
      font-size: $font-size-h4;
      font-weight: 600;
      margin: 0 0 1rem 0;
      line-height: 1.3;
    }

    // Always-visible core technologies line (not gated behind expand)
    .card__technologies {
      font-size: 0.875rem;
      color: $text-tertiary;
      margin-top: 0.75rem;
    }

    .card__technologies-label {
      font-weight: 600;
      color: $text-secondary;
    }

    // Enhanced overlay
    .card__overlay {
      position: absolute;
      inset: 0;
      background: rgba($text-primary, 0.95);
      backdrop-filter: blur(10px);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      padding: 1.5rem;
      border-radius: 12px;

      &.show {
        opacity: 1;
      }

      .overlay__content {
        text-align: center;
        max-width: 100%;
      }

      .overlay__text {
        color: $text-inverse;
        text-align: center;
        line-height: 1.6;
        font-size: $font-size-small;
        margin-bottom: 0.75rem;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }

    // Actions styling
    .card__actions {
      display: flex;
      gap: 0.75rem;
      margin-top: auto;

      @include breakpoint-down(sm) {
        flex-direction: column;
        gap: 0.5rem;

        .btn {
          width: 100%;
        }
      }
    }

    // Hover effects
    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
    }
  }

  // Skill badges improvements
  .skill-badges {
    .skill-badge {
      background: linear-gradient(
        135deg,
        $interactive-primary,
        $interactive-hover
      );
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: $font-size-small;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      user-select: none;
      white-space: nowrap;
      flex-shrink: 0;
      display: inline-flex;
      align-items: center;
      height: 2.125rem; // fixed height so oversized emoji glyphs can't inflate the badge
      overflow: hidden; // clip oversized line-box some emoji glyphs force, keeping badge heights uniform
      line-height: 1.2;

      &:hover,
      &:focus {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba($interactive-primary, 0.3);
        outline: none;
      }

      &:focus-visible {
        outline: 2px solid $interactive-primary;
        outline-offset: 2px;
      }
    }
  }

  // Enhanced responsive design
  @include breakpoint-down(lg) {
    .featured-projects-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }

  @include breakpoint-down(md) {
    section {
      margin-bottom: 2rem;
    }

    .section-title {
      font-size: $font-size-subheading-mobile;
      margin-bottom: 1.5rem;
    }
  }

  @include breakpoint-down(sm) {
    .container {
      padding: 0 1rem;
    }

    .featured-projects-grid,
    .portfolio-grid {
      gap: 1rem;
    }
  }

  // Focus management for accessibility
  .btn:focus-visible,
  .skill-badge:focus-visible {
    outline: 2px solid $interactive-primary;
    outline-offset: 2px;
  }

  // Reduced motion support
  @media (prefers-reduced-motion: reduce) {
    .featured-card,
    .portfolio-card,
    .button-icon,
    .card__overlay,
    .card__details {
      transition: none;
    }

    .featured-card:hover,
    .portfolio-card:hover {
      transform: none;
    }
  }
}

// Animations
@keyframes blink {
  0%,
  50% {
    opacity: 1;
  }
  51%,
  100% {
    opacity: 0;
  }
}

// Responsive adjustments
@include breakpoint-down(md) {
  .page--work {
    .portfolio-grid {
      grid-template-columns: 1fr;
    }

    // No custom work__intro styling needed - UnifiedSection handles this
  }
}

// Cards section
.project__cards {
  .cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;

    // Better spacing for 6 cards
    @include breakpoint-up(md) {
      grid-template-columns: repeat(2, 1fr);
    }

    @include breakpoint-up(lg) {
      grid-template-columns: repeat(3, 1fr);
    }

    @include breakpoint-up(xl) {
      grid-template-columns: repeat(3, 1fr);
      max-width: 1200px;
      margin: 2rem auto 0;
    }
  }
}

.project-card {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  animation-delay: var(--delay);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  &.is-visible {
    opacity: 1;
    transform: translateY(0);
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }

  // Focus styles for accessibility
  &:focus {
    outline: 2px solid $interactive-primary;
    outline-offset: 2px;
  }

  &:focus-visible {
    outline: 2px solid $interactive-primary;
    outline-offset: 2px;
  }

  .card__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 1.5rem;

    .card__title {
      color: $text-primary;
      font-size: $font-size-h4;
      font-weight: 600;
      margin: 0;
      line-height: 1.3;
      height: 60px; // Fixed height for 2 lines of text
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
  }

  .card__preview {
    min-height: 90px; // Fixed height to align "Click to explore"
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .card__preview-text {
      color: $text-secondary;
      line-height: 1.6;
      margin-bottom: 1rem;
      font-size: $font-size-base;
      flex-grow: 1;
    }

    .card__expand-hint {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      color: $interactive-primary;
      font-size: $font-size-small;
      font-weight: 500;
      opacity: 0.8;
      transition: opacity 0.3s ease;
      margin-top: auto; // Push to bottom

      span {
        margin-bottom: 0;
      }

      .expand-icon {
        width: 1rem;
        height: 1rem;
        transition: transform 0.3s ease;
      }
    }
  }

  // Hover effects for icons and hints
  &:hover {
    .card__icon .hero-icon--large {
      transform: scale(1.1) rotate(5deg);
    }

    .card__expand-hint {
      opacity: 1;

      .expand-icon {
        transform: translateX(4px);
      }
    }
  }
}

// Modal Overlay System
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
  display: flex;
  flex-direction: column;
  align-items: center;
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

  .btn {
    margin: 0 auto;
  }

  .btn.btn--primary span {
    display: inline-flex;
    gap: 0.5rem;
  }
}
</style>
