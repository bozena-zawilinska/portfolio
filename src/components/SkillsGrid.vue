<template>
  <div class="skills-grid">
    <h3 v-if="title" class="skills-title">{{ title }}</h3>
    <div class="skills-container card-grid card-grid--trio">
      <div
        v-for="(category, index) in categories"
        :key="index"
        class="skill-category card-item card-item--interactive is-visible"
        :style="{ '--delay': `${index * 0.15}s` }"
      >
        <div class="category-header">
          <div
            class="category-icon"
            :style="{
              background: category.color || 'var(--interactive-primary)',
            }"
          >
            <component :is="category.icon" class="icon" />
          </div>
          <h4 class="category-name">{{ category.name }}</h4>
        </div>
        <div class="skills-list">
          <span
            v-for="(skill, i) in category.skills"
            :key="i"
            class="skill-badge"
            :class="{ 'is-main': skill.main }"
            :style="{ '--badge-delay': `${i * 0.06}s` }"
          >
            {{ skill.name || skill }}
            <span v-if="skill.level" class="skill-level">{{
              skill.level
            }}</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillsGrid',
  props: {
    title: {
      type: String,
      default: null,
    },
    categories: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.skills-grid {
  margin: 2rem 0 4rem;
  width: 100%;
  max-width: 1200px;
  margin: 2rem auto 4rem;

  .skills-title {
    font-size: $font-size-h4;
    color: $text-primary;
    margin-bottom: 2rem;
    text-align: center;
    font-weight: 600;
  }

  .skill-category {
    // Card styling now comes from card-item class

    &:hover {
      .category-icon {
        transform: scale(1.1) rotate(5deg);
      }
    }
  }

  .category-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;

    .category-icon {
      width: 48px;
      height: 48px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.3s ease;

      .icon {
        width: 1.5rem;
        height: 1.5rem;
        color: white;
      }
    }

    .category-name {
      color: $text-primary;
      font-size: 1.1rem;
      margin: 0;
      font-weight: 600;
    }
  }

  .skills-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 1.5rem;
  }

  .skill-badge {
    background: rgba($text-tertiary, 0.1);
    color: $text-secondary;
    padding: 0.35rem 0.75rem;
    border-radius: 30px;
    font-size: 0.85rem;
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    font-weight: 500;
    margin-bottom: 0;
    white-space: nowrap;
    flex-shrink: 0;
    line-height: 1.2;
    opacity: 0;
    transform: translateY(10px);
    animation: fadeInUp 0.4s ease-out forwards;
    animation-delay: calc(var(--badge-delay, 0s) + var(--delay, 0s) + 0.3s);

    &.is-main {
      background: rgba($interactive-primary, 0.1);
      color: $interactive-primary;
      font-weight: 600;
    }

    .skill-level {
      background: rgba(255, 255, 255, 0.5);
      font-size: 0.7rem;
      padding: 0.1rem 0.3rem;
      border-radius: 4px;
      color: $text-tertiary;
      font-weight: normal;
    }
  }
}

// Accessibility improvements are now handled by the unified card system

// Reduced motion support
@media (prefers-reduced-motion: reduce) {
  .skill-badge {
    animation: none !important;
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
}
</style>
