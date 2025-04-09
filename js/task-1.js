
const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(item => {
    const title = item.querySelector('h2').textContent;
    const itemCount = item.querySelectorAll('ul li').length;

    console.log(`Category: ${title}`);
    console.log(`Elements: ${itemCount}`);
})