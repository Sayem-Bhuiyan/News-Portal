const handleCategory = async () => {
    
    const response = await fetch(`https://openapi.programming-hero.com/api/news/categories`);
    const data = await response.json();

    let category = data.data.news_category;
    category = category.slice(0, 3)

    const tabContainer = document.getElementById('tab-container')

    category.forEach((category) => {
        const div = document.createElement('div');
        div.innerHTML = `
        <a onclick="handleNews('${category.category_id}')" role="tab" class="tab">${category.category_name}</a>
        `;

        tabContainer.appendChild(div)
    })
    console.log(data.data.news_category)
};


const handleNews = async (categoryId) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/news/category/${categoryId}`)
    const data = await response.json();
    
    const cardContainer = document.getElementById('card-container')
    data.data.forEach((news) => {
        const div  = document.createElement('div');
        div.innerHTML = `

        <div class="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div class="">
              
              <div class="flex items-center mt-5 px-5">
                <h2 class="text-2xl font-semibold">Biden Pledges Nearly $3 Billion To Ukraine</h2>
                <button class="btn btn-secondary rounded-3xl">Excellent</button>
              </div>
              <p class="px-5 mt-4">Wednesday, August 24, 2022 | Tag Cloud<br>
                  Tags: Biden, EU, Euro, Europe, Joe Biden
            
                </p>
            </div>

            <div class="px-5 flex items-center justify-between pb-5">
                <div class="flex gap-1 items-center mt-10 ">
                    <div class="avatar online">
                        <div class="w-16 rounded-full">
                          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <div class="space-y-2">
                        <h3 class="text-xl font-medium">Jimmy Dane</h3>
                        <p>2022-08-24 17:27:34</p>
                    </div>
                </div>

                <div class="mt-10">
                    <button class="btn btn-neutral">DETAILS</button>
                </div>
            </div>

        </div>

        `;
        cardContainer.appendChild(div)
    })
}






handleCategory()