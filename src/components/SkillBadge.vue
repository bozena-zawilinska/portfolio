<template>
  <span
    class="skill-badge"
    role="button"
    tabindex="0"
    @mouseenter="animateSkill"
    @focus="animateSkill"
    @click="$emit('click', skill)"
    @keydown.enter="$emit('click', skill)"
    @keydown.space.prevent="$emit('click', skill)"
  >
    {{ skill }}
  </span>
</template>

<script>
export default {
  name: 'SkillBadge',
  props: {
    skill: {
      type: String,
      required: true,
    },
  },
  emits: ['click'],
  methods: {
    animateSkill(event) {
      const badge = event.target
      badge.style.transform = 'scale(1.05) rotate(2deg)'

      setTimeout(() => {
        badge.style.transform = 'scale(1) rotate(0deg)'
      }, 200)

      // Create sparkle effect
      this.createSparkle(badge)
    },

    createSparkle(element) {
      const sparkle = document.createElement('div')
      sparkle.className = 'sparkle'
      sparkle.style.position = 'absolute'
      sparkle.style.width = '4px'
      sparkle.style.height = '4px'
      sparkle.style.background = '#1568e0' // matches $interactive-primary
      sparkle.style.borderRadius = '50%'
      sparkle.style.pointerEvents = 'none'
      sparkle.style.animation = 'sparkleAnimation 0.6s ease-out forwards'
      sparkle.style.zIndex = '9999'

      const rect = element.getBoundingClientRect()
      sparkle.style.left = rect.left + Math.random() * rect.width + 'px'
      sparkle.style.top = rect.top + Math.random() * rect.height + 'px'

      document.body.appendChild(sparkle)

      setTimeout(() => {
        if (document.body.contains(sparkle)) {
          document.body.removeChild(sparkle)
        }
      }, 600)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

// Sparkle animation
@keyframes sparkleAnimation {
  0% {
    transform: scale(0) rotate(0deg);
    opacity: 1;
  }
  50% {
    transform: scale(1) rotate(180deg);
    opacity: 0.8;
  }
  100% {
    transform: scale(0) rotate(360deg);
    opacity: 0;
  }
}
</style>
