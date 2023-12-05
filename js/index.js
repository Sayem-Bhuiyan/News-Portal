const handleCategory = async () => {
    
    const response = await fetch(`https://openapi.programming-hero.com/api/news/categories`);
    const data = await response.json();

    let category = data.data.news_category;
    category = category.slice(0, 3)

    const tabContainer = document.getElementById('tab-container')

    category.forEach((category) => {
        const div = document.createElement('div');
        div.innerHTML = `
        <a role="tab" class="tab">${category.category_name}</a>
        `;

        tabContainer.appendChild(div)
    })
    console.log(data.data.news_category)
};






handleCategory()