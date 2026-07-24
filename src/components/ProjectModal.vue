<template>
  <!-- Backdrop click-to-close is a mouse convenience; the close button
  and Escape key already provide fully accessible alternatives. -->
  <!-- eslint-disable-next-line vuejs-accessibility/no-static-element-interactions -->
  <div
    class="modal-overlay"
    role="dialog"
    :aria-modal="true"
    :aria-labelledby="'modal-title-' + project.id"
    tabindex="-1"
    @keydown.esc="$emit('close')"
    @click.self="$emit('close')"
  >
    <div ref="modalContent" class="modal-content" tabindex="-1">
      <button
        class="modal-close"
        aria-label="Close project details"
        @click="$emit('close')"
      >
        &times;
      </button>
      <h2 :id="'modal-title-' + project.id" class="modal-title">
        {{ project.title }}
      </h2>
      <div class="modal-body">
        <div v-if="project.images && project.images[0]" class="modal-image">
          <img
            :src="getProjectPath(project.images[0].src)"
            :alt="project.images[0].alt"
            loading="lazy"
          />
        </div>
        <div class="modal-description">
          <p v-for="(line, idx) in project.description.split('\n')" :key="idx">
            {{ line }}
          </p>
        </div>
        <div v-if="project.skills" class="modal-skills">
          <span
            v-for="skill in project.skills"
            :key="skill"
            class="skill-badge"
            >{{ skill }}</span
          >
        </div>
        <div class="modal-actions">
          <a
            v-if="project.link"
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-primary"
            :aria-label="`Visit ${project.title} website (opens in new tab)`"
          >
            Visit Website
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectModal',
  props: {
    project: { type: Object, required: true },
    getProjectPath: { type: Function, required: true },
  },
  emits: ['close'],
  mounted() {
    this.$refs.modalContent.focus()
    document.body.style.overflow = 'hidden'
  },
  beforeUnmount() {
    document.body.style.overflow = ''
  },
}
</script>

<style lang="scss" scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba($text-primary, 0.8);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: z(modal);
  animation: fadeIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  padding: $space-3;
  overflow-y: auto;

  @include breakpoint-up(md) {
    padding: $space-5;
  }
}

.modal-content {
  background: $white;
  border-radius: 16px;
  max-width: 100%;
  width: 500px;
  max-height: 100%;
  overflow-y: auto;
  padding: $space-4 $space-3 $space-3;
  position: relative;
  outline: none;
  box-shadow: $box-shadow-floating;
  animation: slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  margin: auto;

  @include breakpoint-up(md) {
    padding: $space-5 $space-4 $space-4;
    border-radius: 24px;
  }
}

.modal-close {
  position: absolute;
  top: $space-3;
  right: $space-3;
  background: rgba($text-tertiary, 0.1);
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: $text-secondary;
  cursor: pointer;
  font-size: 1.5rem;
  transition: all 0.2s ease;

  &:hover,
  &:focus {
    background: rgba($text-tertiary, 0.2);
    color: $text-primary;
    transform: scale(1.05);
  }

  &:focus-visible {
    outline: 2px solid $interactive-primary;
    outline-offset: 2px;
  }
}

.modal-title {
  font-size: clamp(1.25rem, 5vw, 1.75rem);
  margin-bottom: $space-4;
  color: $text-primary;
  font-weight: 700;
  padding-right: $space-5;
}

.modal-body {
  display: flex;
  flex-direction: column;
  gap: $space-3;
}

.modal-image img {
  width: 100%;
  border-radius: 12px;
  display: block;
  box-shadow: $box-shadow-card;
}

.modal-description {
  color: $text-secondary;
  line-height: 1.6;

  p {
    margin-bottom: $space-2;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

.modal-skills {
  display: flex;
  flex-wrap: wrap;
  gap: $space-2;
  margin: $space-2 0;
}

.skill-badge {
  background: $gradient-hero;
  color: $white;
  padding: 0.3rem 0.8rem;
  border-radius: 12px;
  font-size: 0.875rem;
  font-weight: 500;
  display: inline-block;
  box-shadow: $box-shadow-light;
}

.modal-actions {
  margin-top: $space-3;
  display: flex;
  justify-content: center;

  @include breakpoint-up(md) {
    justify-content: flex-start;
  }
}

.btn-primary {
  @include light-button-primary;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: $space-2;

  &:focus-visible {
    outline: 2px solid $interactive-primary;
    outline-offset: 2px;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
