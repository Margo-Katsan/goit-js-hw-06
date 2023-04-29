const categoriesEl = document.querySelector('#categories');
const listCategory = categoriesEl.children;

const showInfoCategories = categories => {
  console.log('Number of categories:', categories.length);
  [...categories].forEach(category => {
    console.log('');
    console.log('Category:', category.firstElementChild.textContent);
    console.log('Elements:', category.lastElementChild.children.length);
  });
};

showInfoCategories(listCategory);

