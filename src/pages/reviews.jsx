function Reviews(){
  const pro =[
      {
      name:'Suit',
      images:'https://th.bing.com/th/id/OIP.n0Ryh8V9foccFllXmURktQHaHa?rs=1&pid=ImgDetMain',
      price:'$19.99',
      rating:'5.5',
      id:1
  },
  {
      name:'frok',
      images:'https://th.bing.com/th/id/OIP.83Mrl1XHxEPzDPgo5JvmFgHaHU?rs=1&pid=ImgDetMain',
      price:'$29.99',
      rating:'5',
      id:2
  },
  {
      name:'shorts',
      images:'https://i.pinimg.com/originals/24/08/cd/2408cde987709a7ccbcca46a1433ad87.jpg',
      price:'$29.99',
      rating:'5',
      id:3
  },
]
return(
  <>
  <section id="cardouter">
  {pro.map(e=>{
      return  <div key={e.id}>
                <div class="product-card">
                  <div class="product-image">
                      <img src={e.images} alt="product-image"></img>
                  </div>
                  <div class="product-details">
                    <div class="product-name">{e.name}</div>
                    <div class="product-price">{e.price}</div>
                  </div>
                </div>
              </div>
  })}

</section>
<center><h1>Review per month</h1></center>
  </>
);
}
export default Reviews;
