// Get element references
const slider = document.querySelector('#initial-amount')
const sliderDisplay = document.querySelector('#initial-amount-display .amount')
const interestRateInput = document.querySelector('#interest-rate')
const yearInput = document.querySelector('#years')
const calculateButton = document.querySelector('.calculate-button')
const monthlyRadio = document.querySelector('#monthly')
const yearlyRadio = document.querySelector('#yearly')

const numberFormatter = new Intl.NumberFormat('en-US')

// Initial startup
sliderDisplay.innerHTML = numberFormatter.format(slider.value)
calculateFinalAmount()

// Add listeners
slider.addEventListener('input', handleSlide)
calculateButton.addEventListener('click', calculateFinalAmount)

/**
 * Calculates compound interest with formula A = P(1 + r/n)^tn where
 * A - final amount
 * P - principal amount
 * r - interest rate in decimal (e.g. 2% -> 0.02)
 * n - Times compounded per time period
 * t - Time period in years
 */
function calculateFinalAmount() {
	const initialAmount = slider.value
	// Convert interest rate from percentage to decimal
	const interestRate = interestRateInput.value / 100
	const years = yearInput.value
	// 12 or 1 compounding periods depending if monthly or yearly
	const compoundPerYear = monthlyRadio.checked ? 12 : 1
	const finalAmount = initialAmount * Math.pow(1 + interestRate / compoundPerYear, years * compoundPerYear)

	document.querySelector('#final-amount .amount').innerHTML = numberFormatter.format(Math.floor(finalAmount))
	document.querySelector('.num-years').innerHTML = years
	document.querySelector('.plural').innerHTML = years > 1 ? 's' : ''
}

// Define handlers

/**
 * Sets the display value whenever slider is changed
 * @param {Event} event Slider change event
 */
function handleSlide(event) {
	sliderDisplay.innerHTML = numberFormatter.format(event.target.value)
}
