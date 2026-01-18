export class ActorUX {
  // Save the current scroll position
  static async _saveScrollPositions(actor) {
    const activeList = this.findActiveList(actor)

    if (activeList.length) {
      actor._scroll = activeList.scrollTop()
    }
  }

  // Restore the saved scroll position
  static async _restoreScrollPositions(actor) {
    const activeList = this.findActiveList(actor)

    if (activeList.length && actor._scroll != null) {
      activeList.scrollTop(actor._scroll)
    }
  }

  // Get the scroll area of the currently active tab
  static findActiveList(actor) {
    const activeList = $(actor.element).find('section.tab.active')

    return activeList
  }

  // Save the maxHeight of all collapsible-content elements if it's greater than 0
  static async _saveCollapsibleStates(actor) {
    // Clear out the old states
    actor._collapsibleStates.clear()

    // Iterate through each collapsible element in the page
    $(actor.element)
      .find('.collapsible-content')
      .each((index, content) => {
        const contentElement = $(content)
        const maxHeight = parseFloat(contentElement.css('maxHeight'))

        // Check if max height is greater than 0, and if it is, we save its maxHeight state
        if (maxHeight > 0) {
          actor._collapsibleStates.set(contentElement.attr('data-id') || index, maxHeight)
        }
      })
  }

  // Restore the maxHeight of previously expanded collapsible-content elements
  static async _restoreCollapsibleStates(actor) {
    $(actor.element)
      .find('.collapsible-content')
      .each((index, content) => {
        const contentElement = $(content)
        const key = contentElement.attr('data-id') || index // Match with saved state

        if (actor._collapsibleStates.has(key)) {
          // Disable the transition property before re-setting the max height
          // This makes it so that on re-render, the user doesn't watch the
          // collapse animation again
          contentElement.css('transition', 'none')
          $(content).css('maxHeight', `${actor._collapsibleStates.get(key)}px`)

          // Force a reflow and then re-enable the transition property
          // We have to tell eslint to ignore the no-void rule because it's genuinely useful here

          void contentElement[0].offsetHeight
          contentElement.css('transition', '')
        }
      })
  }
}
