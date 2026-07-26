<template>
  <div class="video-showcase">
    <div class="video-card">
      <!-- Reveals the Play/Pause button on hover/focus; the button itself
      is the actual interactive control (mouse and keyboard already paired). -->
      <!-- eslint-disable-next-line vuejs-accessibility/no-static-element-interactions -->
      <div
        class="video-container"
        @mouseenter="showButton = true"
        @mouseleave="hideButton"
        @focusin="showButton = true"
        @focusout="hideButton"
      >
        <!-- Video Element -->
        <!-- Click-to-toggle on the video area is a mouse convenience;
        the Play/Pause button below is the fully keyboard-accessible control. -->
        <!-- TODO: add a <track kind="captions"> if this clip has spoken audio -->
        <!-- eslint-disable-next-line vuejs-accessibility/no-static-element-interactions, vuejs-accessibility/click-events-have-key-events, vuejs-accessibility/media-has-caption -->
        <video
          ref="gutenbergVideo"
          loading="lazy"
          preload="none"
          :poster="
            require('@/assets/projects/prodpad/gutenberg-blocks-video-poster.png')
          "
          @click="toggleVideoPlayback"
          @play="isPlaying = true"
          @pause="isPlaying = false"
        >
          <source
            src="@/assets/projects/prodpad/gutenberg-blocks-video.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <!-- Play/Pause Button -->
        <button
          v-show="showButton"
          :aria-label="isPlaying ? 'Pause video' : 'Play video'"
          :class="{ 'is-playing': isPlaying }"
          class="play-button"
          @click="toggleVideoPlayback"
        >
          <svg
            v-if="!isPlaying"
            class="play-icon"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A1 1 0 0 0 8 6.82z"
            />
          </svg>
          <svg
            v-else
            class="pause-icon"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M8 19c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2v10c0 1.1.9 2 2 2zm6-12v10c0 1.1.9 2 2 2s2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2z"
            />
          </svg>
        </button>

        <!-- Video Overlay with Project Info -->
        <div class="video-overlay">
          <div class="project-info">
            <div class="project-badge">
              <img
                src="@/assets/projects/prodpad/logo.png"
                alt="ProdPad Logo"
                class="project-logo"
              />
              <span class="project-name">ProdPad</span>
            </div>
            <h3 class="project-title">Custom Gutenberg Blocks</h3>
            <p class="project-description">
              Interactive WordPress blocks for enhanced content management
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Screen Reader Description -->
    <p class="sr-only">
      This video demonstrates two of my custom Gutenberg blocks. The Hero
      Section Block allows users to change the background, set a supportive
      title, adjust letter case, and customize a headline, tagline, and CTA
      button. The Auto Image Swiper lets users add four images with
      descriptions, displaying one image at a time with an automatic loading
      bar.
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPlaying: false,
      showButton: true,
    }
  },
  methods: {
    toggleVideoPlayback() {
      const video = this.$refs.gutenbergVideo
      if (video.paused) {
        video.play()
        this.isPlaying = true
        this.hideButton()
      } else {
        video.pause()
        this.isPlaying = false
        this.showButton = true
      }
    },
    hideButton() {
      if (this.isPlaying) {
        setTimeout(() => {
          this.showButton = false
        }, 1000) // Delay hiding to prevent flickering
      }
    },
  },
}
</script>

<style scoped lang="scss">
@import '../styles/_variables.scss';

/* Modern Video Showcase Design */
.video-showcase {
  max-width: 900px;
  margin: 0 auto;
  padding: 1rem;
}

.video-card {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.95),
    rgba(255, 255, 255, 0.8)
  );
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 24px;
  padding: 1.5rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(
      90deg,
      $interactive-primary,
      $interactive-hover,
      $primary-purple
    );
    opacity: 0.8;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 32px 64px rgba(0, 0, 0, 0.15), 0 16px 32px rgba(0, 0, 0, 0.08),
      inset 0 1px 0 rgba(255, 255, 255, 0.9);

    .video-overlay {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

.video-container {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  background: #000;
  aspect-ratio: 16/9;
  cursor: pointer;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px;
    transition: all 0.3s ease;
  }

  &:hover video {
    transform: scale(1.02);
  }
}

/* Modern Play Button */
.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.95);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), 0 4px 16px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  .play-icon,
  .pause-icon {
    width: 24px;
    height: 24px;
    color: $interactive-primary;
    transition: all 0.3s ease;
  }

  .play-icon {
    margin-left: 2px; /* Visual adjustment for play icon */
  }

  &:hover {
    transform: translate(-50%, -50%) scale(1.1);
    background: rgba(255, 255, 255, 0.98);
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.4), 0 8px 24px rgba(0, 0, 0, 0.3);

    .play-icon,
    .pause-icon {
      color: $interactive-hover;
      transform: scale(1.1);
    }
  }

  &:active {
    transform: translate(-50%, -50%) scale(0.95);
  }

  &.is-playing {
    background: rgba(255, 255, 255, 0.9);
  }

  /* Ripple effect */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba($interactive-primary, 0.3);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.6s ease;
  }

  &:active::before {
    width: 120px;
    height: 120px;
  }
}

/* Video Overlay with Project Information */
.video-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.4) 50%,
    transparent 100%
  );
  padding: 2rem;
  color: white;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 0 0 16px 16px;
}

.project-info {
  .project-badge {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1rem;

    .project-logo {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      background: white;
      padding: 4px;
    }

    .project-name {
      font-size: 0.875rem;
      font-weight: 600;
      color: rgba(255, 255, 255, 0.9);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
  }

  .project-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: white;
    line-height: 1.2;
  }

  .project-description {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.85);
    line-height: 1.5;
    margin: 0;
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .video-showcase {
    padding: 0.5rem;
  }

  .video-card {
    padding: 1rem;
    border-radius: 20px;
  }

  .video-container {
    border-radius: 12px;
  }

  .play-button {
    width: 64px;
    height: 64px;

    .play-icon,
    .pause-icon {
      width: 20px;
      height: 20px;
    }
  }

  .video-overlay {
    padding: 1.5rem;
  }

  .project-info {
    .project-title {
      font-size: 1.25rem;
    }

    .project-description {
      font-size: 0.9rem;
    }

    .project-badge .project-logo {
      width: 28px;
      height: 28px;
    }
  }
}

@media (max-width: 480px) {
  .video-card {
    padding: 0.75rem;
    border-radius: 16px;
  }

  .play-button {
    width: 56px;
    height: 56px;

    .play-icon,
    .pause-icon {
      width: 18px;
      height: 18px;
    }
  }

  .video-overlay {
    padding: 1rem;
  }

  .project-info {
    .project-badge {
      gap: 0.5rem;
      margin-bottom: 0.75rem;

      .project-name {
        font-size: 0.75rem;
      }
    }

    .project-title {
      font-size: 1.1rem;
    }

    .project-description {
      font-size: 0.85rem;
    }
  }
}

/* Focus States for Accessibility */
.play-button:focus-visible {
  outline: 3px solid $interactive-primary;
  outline-offset: 4px;
}

.video-container:focus-within {
  outline: 2px solid $interactive-primary;
  outline-offset: 2px;
}

/* Screen Reader Only Content */
.sr-only {
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

/* Reduced Motion Support */
@media (prefers-reduced-motion: reduce) {
  .video-card,
  .play-button,
  .video-overlay,
  video {
    transition: none !important;
    transform: none !important;
  }

  .play-button::before {
    transition: none !important;
  }
}

/* Loading State */
.video-container::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    45deg,
    rgba($primary-aqua, 0.1) 25%,
    transparent 25%,
    transparent 75%,
    rgba($primary-aqua, 0.1) 75%
  );
  background-size: 20px 20px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

video[loading] + .video-container::after {
  opacity: 1;
  animation: loading-shimmer 1.5s ease-in-out infinite;
}

@keyframes loading-shimmer {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 20px 20px;
  }
}
</style>
