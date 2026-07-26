<template>
  <BaseButton
    :href="cvUrl"
    :download="filename"
    :variant="variant"
    :size="size"
    :full-width="fullWidth"
    :icon-right="ArrowDownTrayIcon"
    :aria-label="ariaLabel"
    v-bind="$attrs"
  >
    {{ label }}
  </BaseButton>
</template>

<script>
import { ArrowDownTrayIcon } from '@heroicons/vue/24/outline'
import BaseButton from '@/components/Button.vue'

const filename = 'Bozena_Zawilinska_Front_End_Engineer_CV.pdf'

export default {
  name: 'CvDownloadButton',
  components: {
    BaseButton,
  },
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: 'Download CV',
    },
    variant: {
      type: String,
      default: 'secondary',
    },
    size: {
      type: String,
      default: 'large',
    },
    fullWidth: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      ArrowDownTrayIcon,
      filename,
      ariaLabel: "Download Bozena Zawilinska's Front-End Engineer CV as a PDF",
    }
  },
  computed: {
    cvUrl() {
      return `${process.env.BASE_URL}assets/documents/${this.filename}`
    },
  },
}
</script>
