const searchInput = document.querySelector('.search-form__input');
const productList= document.querySelectorAll('.product-card');

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();

    productList.forEach(product => {
        const productText = product.textContent.toLowerCase();

        if (productText.includes(searchTerm)) {
            product.style.display = '';
        } else {
            product.style.display = 'none';
        }
    });
});