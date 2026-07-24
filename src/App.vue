<template>
  <div class="app__container">
    <a href="#main-content" class="skip-link">Skip to content</a>
    <SideNav
      :is-collapsed="isCollapsed"
      @update:is-collapsed="isCollapsed = $event"
    />
    <main
      id="main-content"
      class="main__container"
      :class="{
        'main--collapsed': isCollapsed,
        'main--expanded': !isCollapsed,
      }"
    >
      <router-view />
    </main>
  </div>
</template>

<script>
import SideNav from './components/SideNav.vue'
import { useViewportHeight } from './composables/useViewport'

export default {
  components: { SideNav },
  setup() {
    // Use the composable to fix viewport height on mobile
    const { setViewportHeight } = useViewportHeight()

    return {
      setViewportHeight,
    }
  },
  data() {
    return {
      isCollapsed: true,
    }
  },
  mounted() {
    // Fix viewport height on load and resize
    this.setViewportHeight()

    // Listen for device orientation changes (important for mobile)
    window.addEventListener('orientationchange', this.setViewportHeight)
  },
  beforeUnmount() {
    window.removeEventListener('orientationchange', this.setViewportHeight)
  },
}
</script>

<style lang="scss">
.app__container {
  display: flex; // makes side nav and main sit next to each other
  min-height: 100vh;
  min-height: -webkit-fill-available; // iOS height fix
  width: 100%;
  position: relative;
  overflow-x: hidden; // Prevent horizontal scrolling
}

.main__container {
  flex: 1; // fill remaining space
  transition: margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  margin-left: 0; // default for mobile
  width: 100%;

  @include breakpoint-up(md) {
    margin-left: 80px; // default collapsed width for tablets/desktops
  }
}

.main--expanded {
  @include breakpoint-up(md) {
    margin-left: 200px; // expanded nav width for tablets/desktops
  }
}

// Focus styles for better accessibility
:focus {
  outline: 2px solid $color-selected;
  outline-offset: 2px;
}

:focus:not(:focus-visible) {
  outline: none;
}

:focus-visible {
  outline: 2px solid $color-selected;
  outline-offset: 2px;
}

/* Skip Link */
.skip-link {
  position: absolute;
  left: -9999px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;

  &:focus {
    width: auto;
    height: auto;
    position: fixed;
    top: 0;
    left: 0;
    padding: 1rem;
    background: $white;
    color: $text-primary;
    text-decoration: none;
    font-weight: 600;
    z-index: z(skip-link);
    border-radius: 0 0 4px 0;
    border: 1px solid $surface-border;
  }
}
</style>
