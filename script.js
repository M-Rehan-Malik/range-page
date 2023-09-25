const pageViews = document.querySelector('.page-views');
const price = document.querySelector('.price');
const perOption = document.querySelector('.per-option');
const range = document.querySelector('.range');
const toggleButton = document.querySelector('.toggle');


const priceArr = [8, 12, 16, 24, 36]
const pageViewsArr = ['10K pageviews', '50K pageviews', '100K pageviews', '500k pageviews', '1M pageviews']

price.textContent = `$${priceArr[range.value-1]}.00`
pageViews.textContent = `${pageViewsArr[range.value-1]}`

range.addEventListener('change', rangeEvent)

function rangeEvent() {
    pageViews.textContent = `${pageViewsArr[range.value-1]}`
    if (toggleButton.classList.length===1) price.textContent = `$${priceArr[range.value-1]}.00`
    else price.textContent = `$${(priceArr[range.value-1]*12)-(priceArr[range.value-1]*3)}.00`
}

toggleButton.onclick = toggleBtnClick


function toggleBtnClick() {
    this.classList.toggle('active')
    if (this.classList.length===2) perOption.textContent = '/year'
    else perOption.textContent = '/month'
    rangeEvent()
}
