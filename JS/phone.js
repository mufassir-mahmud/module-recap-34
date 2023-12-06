const loadPhone = async (searchText,isShowAll) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones,isShowAll)
    
}
const displayPhones = (phones,isShowAll) =>{
   const phoneContainer = document.getElementById('phone-container');
   phoneContainer.textContent = '';
   const showAllContainer = document.getElementById('show-all-container');
   if(phones.length > 12 && !isShowAll){
    showAllContainer.classList.remove('hidden')
   }
   else{
    showAllContainer.classList.add('hidden')
   }
   if(!isShowAll){
    phones = phones.slice(0,12)
   }
     
 
  
    phones.forEach(phone =>{
        
        const phoneCard = document.createElement('div');
        phoneCard.classList =`card w-96 bg-base-100 shadow-xl`;
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
    })
    toggleLoading(false)
}

const handlClick = (isShowAll) =>{
  toggleLoading(true)
    const searchBox = document.getElementById('search-box');
    const searchText = searchBox.value;
    loadPhone(searchText,isShowAll)
}
// const handlClick2 = () =>{
//   toggleLoading(true)
//   const searchBox2 = document.getElementById('search-box2');
//   searchText2 = searchBox2.value;
//   loadPhone(searchText2)
// }
const toggleLoading = (isloading) =>{
  const loadingSpiner = document.getElementById('loading-spinner');
  if(isloading){
    loadingSpiner.classList.remove('hidden')
  }
  else{
    loadingSpiner.classList.add('hidden')
  }
}
const handleShow = () =>{
  handlClick(true)
}