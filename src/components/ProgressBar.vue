<template>
  <div class="progress-bar" aria-hidden="true">
    <div class="progress-bar__fill" :style="{ width: progress + '%' }"></div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    progress: {
      type: Number,
      required: true,
      default: 0,
    },
  },
}
</script>

<style scoped lang="scss">
.progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: rgba($text-primary, 0.1);
  z-index: z(progress-bar);

  &__fill {
    height: 100%;
    background: $gradient-hero;
    transition: width 0.1s ease-out;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 20px;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5));
      animation: shimmer 2s ease-in-out infinite;
    }
  }
}
// .progress-bar {
//   width: 100%;
//   height: 6px;
//   background: #f3f4f6;
//   border-radius: 3px;
//   overflow: hidden;
//   margin-bottom: 1.5rem;

//   .progress-bar__fill {
//     height: 100%;
//     background: linear-gradient(90deg, #1772f3 0%, #8b5cf6 100%);
//     border-radius: 3px;
//     transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//   }
// }
</style>
