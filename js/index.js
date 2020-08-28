// Get element references
const slider = document.querySelector('#initial-amount')
const sliderDisplay = document.querySelector('#initial-amount-display .amount')

const currencyFormatter = new Intl.NumberFormat('en-US')

// Initial startup
sliderDisplay.innerHTML = currencyFormatter.format(slider.value)

// Add listeners
slider.addEventListener('input', handleSlide)

// Define handlers

/**
 * Sets the display value whenever slider is changed
 * @param {Event} event Slider change event
 */
function handleSlide(event) {
	sliderDisplay.innerHTML = currencyFormatter.format(event.target.value)
}
