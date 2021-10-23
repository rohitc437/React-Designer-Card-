



function Cart({title,description,price1,price2,cal,image}) {
    return (
      <div id="container">
        <img src={image} alt=""/>
         <h2>{ title }</h2>
         <p>{description} </p>
         <div id="element1">
           <span>{cal} Cal</span><span>P/F/C:12/10/31</span><span>53.8 C</span>
         </div>
         <div id="price">
           <h3><span> &#36;</span>{price1}<del><span> &#36;</span>{price2}</del></h3><button>ORDER</button>
         </div>
     </div> 
   )}
export {  Cart }