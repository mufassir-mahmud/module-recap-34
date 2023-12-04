const loadPhone = async (searchValue) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchValue}`);
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones)
}

const displayPhones = (phones) =>{
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';
    for(const phone of phones){
        // console.log(phone);
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card w-96 bg-base-100 shadow-xl`;
        phoneCard.innerHTML =`
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
                    <div class="card-body">
                      <h2 class="card-title">${phone.phone_name}</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
        
        `;
        phoneContainer.appendChild(phoneCard)
    }
}

const searchPhone = () =>{
    const searchText = document.getElementById('search-text');
    searchValue = searchText.value;
    console.log(searchValue); 
    loadPhone(searchValue)

}
