const primaryHeaderEl = document.querySelector(`[data-primary-header]`)
const btnPrimaryToggleEl = document.querySelector(`[data-primary-toggle]`)

const openAttribute = `data-open`

btnPrimaryToggleEl.addEventListener(`click`, (e) => {
  primaryHeaderEl.toggleAttribute(openAttribute)
})
