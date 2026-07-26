<template>
  <section class="page page--contact">
    <ProgressBar :progress="scrollProgress" />
    <div class="row">
      <div class="col container">
        <div class="group-text">
          <TypingAnimation
            id="my-work-heading"
            class="header animated-heading text--flex-center"
            text="Let's Talk"
            :speed="80"
            wrapper-element="h1"
            custom-cursor-class="heading"
            @typing-finished="onFirstAnimationFinished"
          />
          <p class="intro-text" :class="{ 'is-animated': animationComplete }">
            I enjoy working with teams that care about accessible interfaces,
            maintainable code and thoughtful product decisions.
          </p>
          <p class="intro-text" :class="{ 'is-animated': animationComplete }">
            If you're hiring a Front-End Engineer or would like to discuss a
            suitable project, send me a message or connect with me directly.
          </p>
        </div>

        <!-- Success Message (shown after successful submission) -->
        <div
          v-if="isFormSubmitted"
          class="success-container"
          role="status"
          aria-live="polite"
        >
          <div class="success-message">
            <div class="success-icon" aria-hidden="true">✅</div>
            <h2>Thank you!</h2>
            <p>
              Your message has been sent successfully. I'll get back to you
              soon!
            </p>
            <BaseButton variant="secondary" @click="resetForm">
              Send Another Message
            </BaseButton>
          </div>
        </div>

        <!-- Contact Form (hidden after successful submission) -->
        <form
          v-else
          class="contact-form"
          :class="{ 'is-animated': animationComplete }"
          novalidate
          @submit.prevent="submitForm"
        >
          <div class="form-group">
            <label for="name">Your Name *</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              :disabled="isSubmitting"
              :aria-describedby="
                validationErrors.name
                  ? 'name-error'
                  : hasError
                  ? 'form-error'
                  : null
              "
              :aria-invalid="validationErrors.name ? 'true' : 'false'"
              required
              aria-required="true"
              :class="{ error: validationErrors.name }"
              @focus="clearFieldError('name')"
              @input="clearFieldError('name')"
            />
            <div
              v-if="validationErrors.name"
              id="name-error"
              class="field-error"
              role="alert"
            >
              {{ validationErrors.name }}
            </div>
          </div>

          <div class="form-group">
            <label for="email">Your Email *</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              :disabled="isSubmitting"
              :aria-describedby="
                validationErrors.email
                  ? 'email-error'
                  : hasError
                  ? 'form-error'
                  : null
              "
              :aria-invalid="validationErrors.email ? 'true' : 'false'"
              required
              aria-required="true"
              :class="{ error: validationErrors.email }"
              @focus="clearFieldError('email')"
              @input="clearFieldError('email')"
            />
            <div
              v-if="validationErrors.email"
              id="email-error"
              class="field-error"
              role="alert"
            >
              {{ validationErrors.email }}
            </div>
          </div>

          <div class="form-group">
            <label for="subject">Subject *</label>
            <input
              id="subject"
              v-model="form.subject"
              type="text"
              :disabled="isSubmitting"
              :aria-describedby="
                validationErrors.subject
                  ? 'subject-error'
                  : hasError
                  ? 'form-error'
                  : null
              "
              :aria-invalid="validationErrors.subject ? 'true' : 'false'"
              required
              aria-required="true"
              :class="{ error: validationErrors.subject }"
              @focus="clearFieldError('subject')"
              @input="clearFieldError('subject')"
            />
            <div
              v-if="validationErrors.subject"
              id="subject-error"
              class="field-error"
              role="alert"
            >
              {{ validationErrors.subject }}
            </div>
          </div>

          <div class="form-group">
            <label for="message">Your Message *</label>
            <textarea
              id="message"
              v-model="form.message"
              :disabled="isSubmitting"
              :aria-describedby="
                validationErrors.message
                  ? 'message-error'
                  : hasError
                  ? 'form-error'
                  : null
              "
              :aria-invalid="validationErrors.message ? 'true' : 'false'"
              rows="5"
              required
              aria-required="true"
              :class="{ error: validationErrors.message }"
              @focus="clearFieldError('message')"
              @input="clearFieldError('message')"
            ></textarea>
            <div
              v-if="validationErrors.message"
              id="message-error"
              class="field-error"
              role="alert"
            >
              {{ validationErrors.message }}
            </div>
          </div>

          <BaseButton
            type="submit"
            variant="primary"
            :disabled="isSubmitting"
            :loading="isSubmitting"
            :aria-describedby="isSubmitting ? 'submit-status' : null"
          >
            <span v-if="!isSubmitting">Send Message</span>
            <span v-else id="submit-status">Sending...</span>
          </BaseButton>

          <div
            v-if="hasError"
            id="form-error"
            class="error-message"
            role="alert"
            aria-live="assertive"
          >
            Sorry, there was an error sending your message. Please check your
            information and try again.
          </div>
        </form>
        <div class="group-connect">
          <h2 class="group-heading">Connect with me!</h2>
          <p class="group-text">
            Let's stay in touch and collaborate on exciting projects!
          </p>

          <div class="social-links">
            <a
              href="https://www.linkedin.com/in/zawilinska/"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link linkedin"
              aria-label="Connect with me on LinkedIn"
              tabindex="0"
            >
              <svg
                class="social-icon"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                />
              </svg>
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/bozena-zawilinska"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link github"
              aria-label="View my projects on GitHub"
              tabindex="0"
            >
              <svg
                class="social-icon"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
              <span>GitHub</span>
            </a>

            <button
              class="social-link email"
              type="button"
              aria-label="Send me an email"
              @click="sendEmail"
            >
              <EnvelopeIcon class="social-icon" aria-hidden="true" />
              <span>Email</span>
            </button>
          </div>

          <p class="group-location">
            <MapPinIcon class="location-icon" aria-hidden="true" />
            <span>Hamilton, Scotland</span>
          </p>
        </div>
      </div>
    </div>
    <!-- Background shades for visual interest -->
    <BackgroundShades
      primary-color="purple"
      secondary-color="aqua"
      tertiary-color="blue-bell"
      :show-tertiary="true"
    />

    <!-- Scroll to top button -->
    <ScrollToTopButton :visible="showScrollButton" />
  </section>
</template>

<script>
import emailjs from '@emailjs/browser'
import { EnvelopeIcon, MapPinIcon } from '@heroicons/vue/24/outline'
import BaseButton from '@/components/Button.vue'
import BackgroundShades from '@/components/BackgroundShades.vue'
import ScrollToTopButton from '@/components/ScrollToTopButton.vue'
import TypingAnimation from '@/components/TypingAnimation.vue'
import ProgressBar from '@/components/ProgressBar.vue'

export default {
  name: 'ContactPage',
  components: {
    EnvelopeIcon,
    MapPinIcon,
    BaseButton,
    BackgroundShades,
    ScrollToTopButton,
    TypingAnimation,
    ProgressBar,
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
      isSubmitting: false,
      isFormSubmitted: false,
      hasError: false,
      emailFallbackShown: false,
      validationErrors: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },

      showScrollButton: false,
      scrollProgress: 0,
      animationComplete: false,
    }
  },
  mounted() {
    this.emailFallbackShown = false
    this.setupScrollListener()
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    onFirstAnimationFinished() {
      this.animationComplete = true
    },
    validateForm() {
      // Reset validation errors
      this.validationErrors = {
        name: '',
        email: '',
        subject: '',
        message: '',
      }

      // Validate in order and show only the first error

      // Validate name first
      if (!this.form.name.trim()) {
        this.validationErrors.name = 'Name is required'
        return false
      }

      // Validate email second
      if (!this.form.email.trim()) {
        this.validationErrors.email = 'Email is required'
        return false
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email)) {
        this.validationErrors.email = 'Please enter a valid email address'
        return false
      }

      // Validate subject third
      if (!this.form.subject.trim()) {
        this.validationErrors.subject = 'Subject is required'
        return false
      }

      // Validate message last
      if (!this.form.message.trim()) {
        this.validationErrors.message = 'Message is required'
        return false
      } else if (this.form.message.trim().length < 10) {
        this.validationErrors.message =
          'Message must be at least 10 characters long'
        return false
      }

      return true
    },

    clearFieldError(fieldName) {
      // Clear the error for the specific field
      if (this.validationErrors[fieldName]) {
        this.validationErrors[fieldName] = ''
      }
    },

    async submitForm() {
      // Reset general error state
      this.hasError = false

      // Validate form
      if (!this.validateForm()) {
        return // Stop submission if validation fails
      }

      this.isSubmitting = true

      try {
        await this.sendWithEmailJS()

        // Hide form and show success message
        this.isFormSubmitted = true

        // Reset form data
        this.form = {
          name: '',
          email: '',
          subject: '',
          message: '',
        }
      } catch (error) {
        console.error('Error sending message:', error)
        this.hasError = true
      } finally {
        this.isSubmitting = false
      }
    },

    async sendWithEmailJS() {
      // EmailJS configuration from environment variables
      const SERVICE_ID = process.env.VUE_APP_EMAILJS_SERVICE_ID
      const TEMPLATE_ID = process.env.VUE_APP_EMAILJS_TEMPLATE_ID
      const PUBLIC_KEY = process.env.VUE_APP_EMAILJS_PUBLIC_KEY
      const TO_EMAIL = process.env.VUE_APP_CONTACT_EMAIL

      // Check if all required environment variables are set
      if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY || !TO_EMAIL) {
        console.error('Missing EmailJS configuration in environment variables')
        throw new Error(
          'EmailJS configuration is missing. Please check your .env file.'
        )
      }

      const templateParams = {
        from_name: this.form.name,
        from_email: this.form.email,
        subject: this.form.subject,
        message: this.form.message,
        to_email: TO_EMAIL,
        reply_to: this.form.email,
      }

      try {
        const response = await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          templateParams,
          PUBLIC_KEY
        )
        return response
      } catch (error) {
        console.error('EmailJS error:', error)
        throw error
      }
    },

    resetForm() {
      // Reset all form states to allow sending another message
      this.isFormSubmitted = false
      this.hasError = false
      this.form = {
        name: '',
        email: '',
        subject: '',
        message: '',
      }
      this.validationErrors = {
        name: '',
        email: '',
        subject: '',
        message: '',
      }
    },

    sendEmail() {
      const emailAddress = 'mailto.dev.bz@gmail.com'
      const subject = 'Hello'
      const body = 'Just reaching out!'
      const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`

      window.location.href = mailtoUrl

      // Prevent fallback from showing multiple times
      if (this.emailFallbackShown) return
      this.emailFallbackShown = true

      setTimeout(() => {
        const fallbackMessage = `If your mail client didn’t open, you can copy my email address to contact me directly.\n\n📧 ${emailAddress}`
        const wantsToCopy = confirm(fallbackMessage)

        if (wantsToCopy) {
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard
              .writeText(emailAddress)
              .then(() => {
                alert(`✅ Email copied to clipboard:\n${emailAddress}`)
              })
              .catch(() => {
                prompt('Copy this email address:', emailAddress)
              })
          } else {
            prompt('Copy this email address:', emailAddress)
          }
        }
      }, 500)
    },
    setupScrollListener() {
      window.addEventListener('scroll', this.handleScroll)
    },

    handleScroll() {
      this.showScrollButton = window.pageYOffset > 300

      // Calculate scroll progress
      const scrollTop = window.pageYOffset
      const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight
      this.scrollProgress = (scrollTop / documentHeight) * 100
    },
  },
}
</script>

<style scoped lang="scss">
.page--contact {
  .row {
    display: flex;
  }

  .col {
    width: 100%;
    @include breakpoint-up(md) {
      margin-top: 2.5rem;
      margin-bottom: 2.5rem;
    }

    &.container {
      // background: $white;
      display: flex;
      gap: 2.5rem;
      flex-direction: column;
    }
    // @include breakpoint-up(md) {
    //   width: 50%;
    // }
    // img {
    //   width: 100%;
    //   height: auto;
    //   object-fit: contain;
    //   border-radius: 16px;
    // }
  }

  // .col--left {
  //   display: none;
  //   @include breakpoint-up(md) {
  //     display: block;
  //     margin-right: -2.5rem;
  //   }
  // }

  // .col--right {

  // }

  .group-text {
    display: flex;
    flex-direction: column;
  }

  .group-connect {
    flex: 2;

    .group-heading {
      color: $text-primary;
      font-size: $font-size-h3;
      margin-bottom: 1.5rem;
      font-weight: 600;

      @include breakpoint-down(md) {
        font-size: $font-size-h3-mobile;
      }
    }

    .group-text {
      color: $text-secondary;
      line-height: 1.6;
      margin-bottom: 1rem;
      font-size: $font-size-base;

      strong {
        @include light-text-gradient;
        font-weight: 600;
      }
    }
  }

  .social-links {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    @include breakpoint-up(lg) {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }

  .group-location {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1.25rem;
    color: $text-tertiary;
    font-size: 0.9rem;

    .location-icon {
      width: 18px;
      height: 18px;
      flex-shrink: 0;
    }
  }

  .social-link {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.6rem 0.9rem;
    border-radius: 10px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.2s ease;
    border: 2px solid transparent;
    cursor: pointer;
    background: none;
    font-family: inherit;
    font-size: inherit;

    @include breakpoint-up(lg) {
      flex: 0 1 auto;
    }

    .social-icon {
      width: 18px;
      height: 18px;
      flex-shrink: 0;
    }

    span {
      font-size: 13px;
    }

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    &.animated-social-item {
      opacity: 1; /* Make visible immediately */
      transform: none; /* No transform */
    }

    &.linkedin {
      background: linear-gradient(135deg, #0077b5 0%, #005885 100%);
      color: $white;
      span {
        color: $white;
      }

      &:hover {
        background: linear-gradient(135deg, #005885 0%, #0077b5 100%);
      }
    }

    &.github {
      background: linear-gradient(135deg, #333 0%, #24292e 100%);
      color: $white;
      span {
        color: $white;
      }

      &:hover {
        background: linear-gradient(135deg, #24292e 0%, #333 100%);
      }
    }

    &.email {
      background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
      color: $text-secondary;
      border-color: $color-disabled-border;

      &:hover {
        background: linear-gradient(135deg, #e5e7eb 0%, #f3f4f6 100%);
        border-color: $color-disabled;
      }
    }
  }
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-form {
  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    label {
      font-weight: 600;
      font-size: 14px;
    }

    input,
    textarea {
      padding: 12px 16px;
      border: 2px solid $color-border;
      border-radius: 8px;
      font-size: 16px;
      transition: border-color 0.2s ease, box-shadow 0.2s ease;

      &.error {
        border-color: #dc2626;
        background-color: #fef2f2;
      }

      &.error:focus {
        border-color: #dc2626;
        box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
      }

      &:disabled {
        background-color: $color-disabled;
        opacity: 0.6;
        cursor: not-allowed;
      }
    }

    .field-error {
      color: #dc2626;
      font-size: 12px;
      font-weight: 500;
      margin-top: 0.25rem;
      display: flex;
      align-items: center;
      gap: 0.25rem;

      &::before {
        content: '🙀';
        font-size: 16px;
      }
    }

    textarea {
      resize: vertical;
      min-height: 120px;
      font-family: inherit;
    }
  }

  .error-message {
    padding: 12px 16px;
    border-radius: 8px;
    font-weight: 500;
    margin-top: 1rem;
    background-color: $color-error-bg;
    color: $color-error;
    border: 1px solid $color-error-border;
  }

  .btn {
    width: fit-content;
  }
}

.success-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  padding: 2rem;

  .success-message {
    text-align: center;
    padding: 3rem 2rem;
    background: linear-gradient(135deg, #dcfce7 0%, #f0fdf4 100%);
    border-radius: 16px;
    border: 2px solid $color-success-border;
    max-width: 500px;
    width: 100%;
    box-shadow: 0 10px 25px rgba(34, 197, 94, 0.1);
    color: $color-success;

    .success-icon {
      font-size: 3rem;
      //   margin-bottom: 1rem;
      animation: bounce 0.6s ease-in-out;
    }

    h2 {
      color: $color-success;
      //   font-size: 2rem;
      //   margin-bottom: 1rem;
      //   font-weight: 700;
    }

    p {
      color: $color-success;
      //   font-size: 1.1rem;
      margin-bottom: 2rem;
      //   line-height: 1.6;
    }
  }
}

@keyframes bounce {
  0%,
  20%,
  53%,
  80%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  40%,
  43% {
    transform: translate3d(0, -20px, 0);
  }
  70% {
    transform: translate3d(0, -10px, 0);
  }
  90% {
    transform: translate3d(0, -4px, 0);
  }
}
</style>
