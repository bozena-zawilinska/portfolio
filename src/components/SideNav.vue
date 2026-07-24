<template>
  <div class="side-nav__container">
    <button v-if="isCollapsed" class="hamburger-btn" @click="toggleNav">
      <Bars3Icon class="menu-icon" />
    </button>
    <nav
      v-show="!isCollapsed || !isMobile"
      class="side-nav"
      :class="{ collapsed: isCollapsed }"
    >
      <ul>
        <!-- Tracks hover/focus purely to show a tooltip on the collapsed
        nav; the actual navigation link is the focusable <a> inside. -->
        <!-- eslint-disable-next-line vuejs-accessibility/no-static-element-interactions -->
        <li
          v-for="(item, index) in menuItems"
          :key="index"
          v-float="isCollapsed && hoverItem === index ? item.title : ''"
          v-tooltip.auto="isCollapsed && hoverItem === index ? item.title : ''"
          class="nav-item"
          :title="isCollapsed && hoverItem === index ? item.title : ''"
          @mouseover="hoverItem = index"
          @mouseleave="hoverItem = null"
          @focusin="hoverItem = index"
          @focusout="hoverItem = null"
        >
          <router-link
            v-slot="{ href, navigate, isActive }"
            :to="item.link"
            custom
          >
            <a :href="href" :class="{ active: isActive }" @click="navigate">
              <span class="icon">
                <component :is="item.icon" class="hero-icon" />
                <span
                  v-if="isActive && isCollapsed && !isMobile"
                  class="active-border"
                ></span>
              </span>
              <span v-if="!isCollapsed" class="title">{{ item.title }}</span>
              <span class="is-selected"></span>
            </a>
          </router-link>
        </li>
      </ul>
      <button
        type="button"
        class="button button--toggle"
        :aria-label="isCollapsed ? 'Expand navigation' : 'Hide navigation'"
        @click="toggleNav"
      >
        <ChevronDoubleRightIcon
          v-if="isCollapsed"
          v-tooltip.auto="'Use [ to expand'"
          class="toggle-icon"
        />
        <div
          v-else-if="!isCollapsed && !isMobile"
          v-tooltip.auto="'Use [ to hide'"
          class="hide-button-content"
        >
          <span class="hide-text">Hide</span>
          <ChevronDoubleLeftIcon class="toggle-icon" />
        </div>
        <div v-else-if="isMobile" class="hide-button-content">
          <span class="hide-text">Close</span>
          <XMarkIcon class="toggle-icon" />
        </div>
      </button>
    </nav>
  </div>
</template>

<script>
import {
  HomeIcon,
  UserIcon,
  PaintBrushIcon,
  EnvelopeIcon,
  ChevronDoubleRightIcon,
  ChevronDoubleLeftIcon,
  XMarkIcon,
  Bars3Icon,
} from '@heroicons/vue/24/outline'

export default {
  components: {
    HomeIcon,
    UserIcon,
    PaintBrushIcon,
    EnvelopeIcon,
    ChevronDoubleRightIcon,
    ChevronDoubleLeftIcon,
    XMarkIcon,
    Bars3Icon,
  },
  props: {
    isCollapsed: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['update:isCollapsed'],
  data() {
    return {
      isMobile: false,
      hoverItem: null,
      menuItems: [
        { title: 'Welcome', link: '/welcome', icon: 'HomeIcon' },
        { title: 'About Me', link: '/about', icon: 'UserIcon' },
        { title: 'Portfolio', link: '/work', icon: 'PaintBrushIcon' },
        { title: 'Get in Touch', link: '/contact', icon: 'EnvelopeIcon' },
      ],
    }
  },
  mounted() {
    // Initial check for mobile devices
    this.updateIsMobile()
    // Listen for window resize to update the mobile state
    window.addEventListener('resize', this.updateIsMobile)
    // Listen for the '[' key to toggle the navigation
    window.addEventListener('keydown', this.handleKeyDown)
  },
  beforeUnmount() {
    // Clean up the event listener
    window.removeEventListener('resize', this.updateIsMobile)
    // Remove the event listener when the component is destroyed
    window.removeEventListener('keydown', this.handleKeyDown)
  },
  methods: {
    isActiveRoute(link) {
      // Check if the current route matches the menu item link
      return this.$route.path === link
    },
    handleKeyDown(event) {
      // Check if the key pressed is '['
      if (event.key === '[') {
        this.toggleNav()
      }
    },
    toggleNav() {
      this.$emit('update:isCollapsed', !this.isCollapsed)
    },
    updateIsMobile() {
      // Updates the isMobile property based on the screen width
      this.isMobile = window.innerWidth <= 768
    },
  },
}
</script>
<style lang="scss" scoped>
.side-nav__container {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: auto;
  z-index: z(side-nav);

  span {
    margin: 0;
  }

  // Ensure container doesn't interfere with content
  @include breakpoint-down(md) {
    height: 56px; // Mobile header height
  }
}

/* Hamburger Menu Button (Mobile Only) */
.hamburger-btn {
  display: none;
  position: fixed;
  top: $space-2;
  right: $space-2;
  z-index: z(side-nav) + 1;
  background: rgba($white, 0.9);
  backdrop-filter: blur(8px);
  border: 1px solid $surface-border;
  padding: $space-2;
  border-radius: 8px;
  cursor: pointer;
  color: $text-primary;
  transition: all 0.2s ease;

  &:hover,
  &:focus {
    color: $color-selected;
    transform: scale(1.05);
  }

  &:focus-visible {
    outline: 2px solid $color-selected;
    outline-offset: 2px;
  }

  @include breakpoint-down(md) {
    display: flex;
  }

  .menu-icon {
    width: 24px;
    height: 24px;
    stroke: currentColor;
  }
}

/* Side Navigation */
.side-nav {
  background: $white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 200px; // Default expanded width
  z-index: z(side-nav);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  // Mobile fullscreen menu
  @include breakpoint-down(md) {
    width: 100%;
    transform: translateX(-100%);
    padding-top: $space-7;
    justify-content: space-evenly;

    &:not(.collapsed) {
      transform: translateX(0);
    }
  }

  &.collapsed {
    @include breakpoint-up(md) {
      width: 80px; // Collapsed desktop width
    }

    // Active indicator for collapsed state
    .active-border {
      display: block;
      position: absolute;
      left: 50%;
      bottom: -8px;
      transform: translateX(-50%);
      width: 12px;
      height: 2px;
      background-color: $color-selected;
    }
  }

  // Toggle button styling
  .button--toggle {
    margin: $space-5 $space-2;
    padding: $space-2 $space-3;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background: rgba($text-tertiary, 0.05);
    color: $text-secondary;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background: rgba($text-tertiary, 0.1);
      color: $text-primary;
    }

    .toggle-icon {
      width: 20px;
      height: 20px;
      stroke: currentColor;
    }

    .hide-button-content {
      display: flex;
      align-items: center;
      gap: $space-1;

      .hide-text {
        font-weight: 500;
        font-size: 0.875rem;
      }

      @include breakpoint-down(md) {
        justify-content: center;
        width: 100%;
      }
    }
  }

  // Show text only when expanded
  &:not(.collapsed) {
    .icon {
      margin-right: $space-2;
    }

    @include breakpoint-up(md) {
      ul {
        .nav-item {
          text-align: left;
          a {
            justify-content: flex-start;
          }
        }
      }
    }
  }

  // Navigation items
  ul {
    list-style: none;
    padding: $space-5 0;
    margin: 0;

    @include breakpoint-down(md) {
      padding: 0;
      display: flex;
      flex-direction: column;
    }

    .nav-item {
      font-size: 0.875rem;
      font-weight: 600;
      text-align: center;

      @include breakpoint-down(md) {
        margin: $space-1 0;
      }

      a {
        display: flex;
        align-items: center;
        color: $text-tertiary;
        margin: $space-1;
        padding: $space-2 $space-3;
        border-radius: 8px;
        transition: all 0.2s ease;
        position: relative;

        @include breakpoint-up(md) {
          justify-content: center;
          margin: $space-1 $space-2;
        }

        @include breakpoint-down(md) {
          justify-content: center;
          padding: $space-3;
          font-size: 1rem;

          &.active {
            background: rgba($interactive-primary, 0.1);
          }
        }

        &:hover {
          background: rgba($text-tertiary, 0.05);
          color: $text-primary;
        }

        .icon {
          transition: transform 0.2s ease;
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;

          .hero-icon {
            width: 20px;
            height: 20px;
            stroke: currentColor;
            transition: all 0.2s ease;
          }
        }

        &.active {
          background: rgba($interactive-primary, 0.08);
          color: $interactive-primary;

          .icon .hero-icon {
            color: $interactive-primary;
            stroke: $interactive-primary;
          }
        }

        // When expanded, show text aligned properly
        .title {
          @include breakpoint-down(md) {
            margin-left: $space-2;
          }
        }
      }
    }
  }

  // Focus management
  a:focus-visible,
  button:focus-visible {
    outline: 2px solid $interactive-primary;
    outline-offset: 2px;
  }
}

// Reduced motion preference
@media (prefers-reduced-motion: reduce) {
  .side-nav,
  .side-nav *,
  .hamburger-btn {
    transition: none !important;
  }
}
</style>
