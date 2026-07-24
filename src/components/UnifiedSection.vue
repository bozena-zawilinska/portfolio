<template>
  <section
    :id="id"
    class="unified-section"
    :class="[
      `unified-section--${variant}`,
      { 'unified-section--reversed': reverse },
      { 'unified-section--centered': centered },
    ]"
  >
    <div v-if="title" class="section-header">
      <h2 class="section-title">{{ title }}</h2>
      <p v-if="subtitle" class="section-subtitle">{{ subtitle }}</p>
    </div>

    <div class="section-content" :class="{ 'has-media': $slots.media }">
      <div class="section-body">
        <slot></slot>
      </div>

      <div
        v-if="$slots.media"
        class="section-media"
        :class="mediaAlignmentClass"
      >
        <slot name="media"></slot>
      </div>
    </div>

    <div v-if="$slots.actions" class="section-actions">
      <slot name="actions"></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'UnifiedSection',
  props: {
    id: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    variant: {
      type: String,
      default: 'default',
      validator: (value) =>
        ['default', 'highlight', 'card', 'split'].includes(value),
    },
    reverse: {
      type: Boolean,
      default: false,
    },
    centered: {
      type: Boolean,
      default: false,
    },
    mediaAlignment: {
      type: String,
      default: 'center',
      validator: (value) => ['center', 'top', 'bottom'].includes(value),
    },
  },
  computed: {
    mediaAlignmentClass() {
      return {
        'section-media--center': this.mediaAlignment === 'center',
        'section-media--top': this.mediaAlignment === 'top',
        'section-media--bottom': this.mediaAlignment === 'bottom',
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.unified-section {
  width: 100%;
  margin-bottom: 5rem;
  position: relative;

  @include breakpoint-down(md) {
    margin-bottom: 3rem;
  }

  // Section header with title and optional subtitle
  .section-header {
    margin-bottom: 2.5rem;
    text-align: left;

    .section-title {
      color: $text-primary;
      font-size: $font-size-h3;
      margin-bottom: 1rem;
      font-weight: 600;
      position: relative;
    }

    .section-subtitle {
      color: $text-secondary;
      font-size: 1.125rem;
      max-width: 800px;
      line-height: 1.6;
      margin-top: 1.5rem;
    }
  }

  // Section content layout
  .section-content {
    display: flex;
    flex-direction: column;
    gap: 3rem;

    @include breakpoint-up(md) {
      flex-direction: row;
      align-items: center;
      gap: 4rem;
    }

    &.has-media {
      .section-body {
        @include breakpoint-up(md) {
          flex: 1;
        }
      }
    }
  }

  // Section body content
  .section-body {
    color: $text-secondary;
    line-height: 1.7;
    opacity: 0;
    animation: fadeInUp 0.6s ease-out 0.8s forwards;
    width: 100%;

    ::v-deep(p) {
      margin-bottom: 1.25rem;

      &:last-child {
        margin-bottom: 0;
      }
    }

    ::v-deep(strong) {
      color: $text-primary;
      font-weight: 600;
    }

    ::v-deep(.highlight) {
      @include light-text-gradient;
      font-weight: 600;
    }
  }

  // Section media
  .section-media {
    display: flex;
    opacity: 0;
    animation: fadeInUp 0.6s ease-out 0.4s forwards;
    @include breakpoint-up(md) {
      flex: 1;
    }

    &--center {
      align-items: center;
      justify-content: center;
    }

    &--top {
      align-items: flex-start;
      justify-content: center;
    }

    &--bottom {
      align-items: flex-end;
      justify-content: center;
    }

    ::v-deep(img) {
      max-width: 100%;
      height: auto;
      border-radius: 12px;
    }
  }

  // Section action buttons
  .section-actions {
    margin-top: 2.5rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  // When reversed, swap the media and content
  &--reversed {
    .section-content {
      @include breakpoint-up(md) {
        flex-direction: row-reverse;
      }
    }
  }

  // Centered variant
  &--centered {
    .section-header {
      text-align: center;

      .section-subtitle {
        margin-left: auto;
        margin-right: auto;
      }
    }

    .section-content {
      text-align: center;
    }

    .section-actions {
      justify-content: center;
    }
  }

  // Variant styles
  &--highlight {
    padding: 3rem 2rem;
    background: linear-gradient(
      135deg,
      rgba($primary-purple, 0.08),
      rgba($primary-blue, 0.05)
    );
    border-radius: 16px;

    @include breakpoint-up(md) {
      padding: 4rem 3rem;
    }
  }

  &--card {
    @include light-card;
    margin: 2rem 0 3rem;
  }

  &--split {
    display: flex;
    flex-direction: column;

    @include breakpoint-up(md) {
      flex-direction: row;
    }

    .section-content {
      flex-direction: column;

      @include breakpoint-up(md) {
        flex: 1;
      }
    }
  }
}
</style>
