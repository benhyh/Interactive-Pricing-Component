const slider = document.querySelector('input[type="range"]');
const discountToggle = document.querySelector('#discount-toggle');
const filledBar = document.querySelector('.filled');
const thumbBar = document.querySelector('.thumb');

discountToggle.addEventListener('change', calculatePrice);
slider.addEventListener('input', calculatePrice);

function calculatePrice() {
    const pageViews = document.querySelector('.page-views');
    const priceAmount = document.querySelector('.price-amount');
    const filledBar = document.querySelector('.filled');
    const thumbBar = document.querySelector('.thumb');
    
    switch (Number(slider.value)) {
        case (1):
            pageViews.textContent = '10K PAGEVIEWS';
            priceAmount.textContent = '$8.00';
            setTimeout(function() {
                filledBar.style.width = '0%';
            }, 50);
            thumbBar.style.left = '10%';
            break;
        case (2):
            pageViews.textContent = '50K PAGEVIEWS';
            priceAmount.textContent = '$12.00';
            setTimeout(function() {
                filledBar.style.width = '25%';
            }, 50);
            thumbBar.style.left = '25%';
            break;
        case (3):
            pageViews.textContent = '100K PAGEVIEWS';
            priceAmount.textContent = '$16.00';
            setTimeout(function() {
                filledBar.style.width = '46.8%';
            }, 50);
            thumbBar.style.left = '46.8%';
            break;
        case (4):
            pageViews.textContent = '500K PAGEVIEWS';
            priceAmount.textContent = '$24.00';
            setTimeout(function() {
                filledBar.style.width = '70%';
            }, 50);
            thumbBar.style.left = '64%';
            break;
        case (5):
            pageViews.textContent = '1M PAGEVIEWS';
            priceAmount.textContent = '$36.00';
            setTimeout(function() {
                filledBar.style.width = '100%';
            }, 50);
            thumbBar.style.left = '85%';
            break;
        default:
            console.log('Error: Slider value out of range');
    }

    if (discountToggle.checked) {
        priceAmount.textContent = '$' + (Number(priceAmount.textContent.slice(1)) * 0.75).toFixed(2);
    }
}
