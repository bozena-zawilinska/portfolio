<template>
  <div class="typing">
    <component
      :is="wrapperElement"
      :aria-label="text"
      :class="{ 'visually-hidden': !displayedText }"
    >
      {{ displayedText }}
    </component>
    <span
      v-show="isTyping"
      :class="['cursor', customCursorClass]"
      aria-hidden="true"
      >|</span
    >
  </div>
</template>

<script>
export default {
  name: 'TypingAnimation',
  props: {
    customCursorClass: {
      type: String,
      default: '', // Default cursor size
    },
    startDelay: {
      type: Number,
      default: 0, // Delay before the animation starts in ms
    },
    text: {
      type: String,
      required: true,
    },
    speed: {
      type: Number,
      default: 150, // Typing speed in ms
    },
    wrapperElement: {
      type: String,
      default: 'span', // Default wrapper element
      validator: (value) => {
        // Allow only valid HTML tags
        return [
          'span',
          'p',
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'div',
        ].includes(value)
      },
    },
  },
  emits: ['typingFinished'],
  data() {
    return {
      displayedText: '',
      index: 0,
      isTyping: false,
    }
  },
  mounted() {
    setTimeout(() => {
      this.startTyping()
    }, this.startDelay)
  },
  methods: {
    startTyping() {
      this.isTyping = true // Start showing the cursor
      if (this.index < this.text.length) {
        this.displayedText += this.text[this.index]
        this.index++
        setTimeout(this.startTyping, this.speed)
      } else {
        this.isTyping = false // Stop showing the cursor
        this.$emit('typingFinished', this.text.length * this.speed) // Emit total duration
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.typing {
  display: flex;
  align-items: center;
  justify-content: center;
  @include breakpoint-up(md) {
    justify-content: flex-start;
  }
}

.cursor {
  animation: blink 1s steps(2, start) infinite;
}

@keyframes blink {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
