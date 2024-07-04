function Product(){
  const pro =[
      {
      name:'Suit',
      images:'https://ds393qgzrxwzn.cloudfront.net/cat1/img/images/0/LJvr0WJslH.jpg',
      price:'$19.99',
      rating:'5.5',
      id:1
  },
  {
  name:'Top',
  images:'https://th.bing.com/th/id/OIP.qzwtS5ru3JttNywtVlYcvwHaHa?w=640&h=640&rs=1&pid=ImgDetMain',
  price:'$29.99',
  rating:'5',
  id:2
},
{
  name:'jeans',
  images:'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  price:'$29.99',
  rating:'5',
  id:3
},
{
  name:'Watch',
  images:'https://images.pexels.com/photos/179909/pexels-photo-179909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  price:'$29.99',
  rating:'5',
  id:4
},
{
  name:'T-shirt',
  images:'https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  price:'$29.99',
  rating:'5',
  id:5
},
{
  name:'Onepice',
  images:'https://images.pexels.com/photos/1943846/pexels-photo-1943846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  price:'$29.99',
  rating:'5',
  id:6
},

]

 
  return(
      <>
     <section id="cardouter">
      {pro.map(e=>{
          return <div key={e.id}>
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
      </>
  );
}
export default Product;