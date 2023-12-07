const loadPhone = async (searchValue) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchValue}`);
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones)
}

const displayPhones = (phones) =>{
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';
    const showAllContainer = document.getElementById('show-all-container');
    if(phones.length > 12){
      showAllContainer.classList.remove('hidden')
    }
    else{
      showAllContainer.classList.add('hidden')
    }
    phones = phones.slice(0,12)
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
    toggleLoading(false)
}

const searchPhone = () =>{
  toggleLoading(true)
    const searchText = document.getElementById('search-text');
    searchValue = searchText.value;
    console.log(searchValue); 
    loadPhone(searchValue)

}

const toggleLoading = (isloading) =>{
  const loadingSpinner = document.getElementById('loading-spinner');
  if(isloading){
    loadingSpinner.classList.remove('hidden')
  }
  else{
    loadingSpinner.classList.add('hidden')
  }
}