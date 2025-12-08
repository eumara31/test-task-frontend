const categoryList = document.querySelector('.category-nav__list');
const productArr = document.querySelectorAll('.product-card'); 

if (categoryList) {
    categoryList.addEventListener('click', (e) => {
        const target = e.target.closest('.category-nav__item');
        if (!target) return; 
        const categoryItems = categoryList.querySelectorAll('.category-nav__item');
        categoryItems.forEach(categoryItem => {
            categoryItem.classList.remove('category-nav__item--active')
        });
        target.classList.add('category-nav__item--active');
        const selectedCategory = target.dataset.category;
        filterCatalog(selectedCategory);
    });
}


const filterCatalog = (selectedCategory) => {
    let normalizedCategory = selectedCategory.toLowerCase();
    productArr.forEach(product => {
        const productCategory = product.dataset.category ? product.dataset.category.toLowerCase() : '';
        let isMatch = (normalizedCategory === '') || (productCategory === normalizedCategory);
        if (normalizedCategory === 'all') {
            isMatch = true;
        }
        if (isMatch) {
            product.style.display = ''
        } else {
            product.style.display = 'none';
        }
    });
}