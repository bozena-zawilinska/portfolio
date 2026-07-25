import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Composable for handling scroll-related functionality
 * Provides scroll button visibility and scroll progress tracking
 */
export function useScroll(options = {}) {
  const {
    threshold = 300, // Pixels to scroll before showing button
    throttleMs = 16, // Throttle scroll events (~60fps)
  } = options

  // Reactive state
  const showScrollButton = ref(false)
  const scrollProgress = ref(0)
  const isScrolling = ref(false)

  // Throttle function
  let throttleTimer = null

  const throttle = (func, delay) => {
    if (throttleTimer) return
    throttleTimer = setTimeout(() => {
      func()
      throttleTimer = null
    }, delay)
  }

  // Handle scroll events
  const handleScroll = () => {
    throttle(() => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const windowHeight = window.innerHeight
      const documentHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      )

      // Update scroll button visibility
      showScrollButton.value = scrollTop > threshold

      // Calculate scroll progress (0-100)
      const maxScroll = documentHeight - windowHeight
      scrollProgress.value = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0

      // Update scrolling state
      isScrolling.value = true
      clearTimeout(scrollingTimeout)
      scrollingTimeout = setTimeout(() => {
        isScrolling.value = false
      }, 150)
    }, throttleMs)
  }

  let scrollingTimeout = null

  // Lifecycle
  onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    // Initial check
    handleScroll()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    if (throttleTimer) {
      clearTimeout(throttleTimer)
    }
    if (scrollingTimeout) {
      clearTimeout(scrollingTimeout)
    }
  })

  return {
    showScrollButton,
    scrollProgress,
    isScrolling,
  }
}

/**
 * Composable for smooth scroll functionality
 */
export function useSmoothScroll() {
  const scrollToTop = () => {
    // Smooth scroll to top with fallback for older browsers
    if ('scrollBehavior' in document.documentElement.style) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    } else {
      // Fallback animation for older browsers
      const scrollStep = -window.scrollY / (500 / 15)
      const scrollInterval = setInterval(() => {
        if (window.scrollY !== 0) {
          window.scrollBy(0, scrollStep)
        } else {
          clearInterval(scrollInterval)
        }
      }, 15)
    }
  }

  const scrollToElement = (element, options = {}) => {
    const { behavior = 'smooth', offset = 0 } = options

    if (typeof element === 'string') {
      element = document.querySelector(element)
    }

    if (!element) return

    const elementTop = element.getBoundingClientRect().top + window.pageYOffset
    const offsetTop = elementTop + offset

    window.scrollTo({
      top: offsetTop,
      behavior,
    })
  }

  const scrollToSection = (sectionId, offset = -100) => {
    const element = document.getElementById(sectionId)
    if (element) {
      scrollToElement(element, { offset })
    }
  }

  return {
    scrollToTop,
    scrollToElement,
    scrollToSection,
  }
}

/**
 * Combined scroll composable with all functionality
 */
export function useScrollManagement(options = {}) {
  const scroll = useScroll(options)
  const smoothScroll = useSmoothScroll()

  return {
    ...scroll,
    ...smoothScroll,
  }
}
