const ulCategories = document.querySelectorAll('li.item');
console.log(`Number of categories: ${ulCategories.length}`);

ulCategories.forEach(element => {
    const categoryName = element.querySelector('h2');
    console.log(`Category: ${categoryName.textContent}`);

    const liCategories = element.querySelectorAll('li');
    console.log(`Elements: ${liCategories.length}`);
});