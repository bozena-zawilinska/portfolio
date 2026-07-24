const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'

export function useFocusTrap() {
  function trapFocus(containerEl, event) {
    if (!containerEl || event.key !== 'Tab') return

    const focusable = Array.from(
      containerEl.querySelectorAll(FOCUSABLE_SELECTOR)
    ).filter((el) => el.offsetParent !== null)

    if (focusable.length === 0) {
      event.preventDefault()
      return
    }

    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    const current = document.activeElement

    if (event.shiftKey) {
      if (current === first || !containerEl.contains(current)) {
        event.preventDefault()
        last.focus()
      }
    } else if (current === last || !containerEl.contains(current)) {
      event.preventDefault()
      first.focus()
    }
  }

  return { trapFocus }
}
