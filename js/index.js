const imageWrapper = document.querySelectorAll('.image-wrap');

imageWrapper.forEach(card =>{
    const imageText = card.querySelector('.image-text');
    const knowMore = document.createElement('a');
    knowMore.classList.add('know-more-link');
    knowMore.innerHTML = 'Know More  <i class="fa-solid fa-arrow-right-long"></i>';
    knowMore.style.opacity = 0;
    knowMore.style.marginTop = '-20px';
    imageText.appendChild(knowMore); 

    card.addEventListener('mouseover', () => {
        knowMore.style.opacity = '1';
        knowMore.style.marginTop = '0'
    });
    card.addEventListener('mouseout', () => {
        knowMore.style.opacity = '0';
        knowMore.style.marginTop = '-20px'
    });
})
