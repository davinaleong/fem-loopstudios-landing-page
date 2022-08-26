const primaryHeaderEl = document.querySelector(`[data-primary-header]`)
const btnPrimaryToggleEl = document.querySelector(`[data-primary-toggle]`)

const openAttribute = `data-open`
const opaqueAttribute = `data-opaque`

window.addEventListener("scroll", () => {
  const yPos = window.scrollY
  if (yPos > 300) {
    primaryHeaderEl.setAttribute(opaqueAttribute, true)
  } else {
    primaryHeaderEl.removeAttribute(opaqueAttribute)
  }
})

btnPrimaryToggleEl.addEventListener(`click`, (e) => {
  primaryHeaderEl.toggleAttribute(openAttribute)
})
