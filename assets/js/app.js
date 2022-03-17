var filtro = document.getElementById('category-item').value
console.log(filtro);
fetch('https://fakestoreapi.com/products')
    .then( (data) => { return data.json() })
    .then((item) => item.filter( i => { 
      if(i.category == filtro) {return i }// ate aqui ta certo
      else if(filtro == "") { return i}
    }))
    .then((completeData) => {
      let cards = "";
      completeData.map((products) => {
          cards += `<div class="card" style="width: 15rem;">
          <img src=${products.image} class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${products.title}</h5>
  
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">R$ ${products.price}</li>
            <li class="list-group-item  "><button><i class="bi bi-cart-plus"></i>Compre</button> </li>
          </ul>
        </div>`
      } )
  
      document.getElementById('grid-cards').innerHTML = cards
  })
  .catch( (err) => {console.log(err);})
   