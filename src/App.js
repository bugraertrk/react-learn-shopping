
import './App.css';
import Card from './components/card/card';
import { useState } from 'react';

function App() {
  const [productList, setProductList] =useState(
    [
      {
        id: 1,
        title: 'Iphone 12',
        price: 200,
        name:"Ios",
        image:"https://cdn.cimri.io/image/1000x1000/msisctrnbgfthinihgbddrgtxgddrgbgbssdfhdwleptop_614757655.jpg"
      },
      {
        id: 2,
        title: 'Iphone 11',
        price: 150,
        name:"Ios",
        image:"https://cdn.cimri.io/image/1000x1000/msisctrnbgfthinihgbddrgtxgddrgbgbssdfhdwleptop_614757655.jpg"
      },
      {
        id: 3,
        title: 'Xiaomi 10',
        price: 100,
        name:"Android",
        image:"https://cdn.cimri.io/image/1000x1000/msisctrnbgfthinihgbddrgtxgddrgbgbssdfhdwleptop_614757655.jpg"
      },
      {
        id: 4,
        title: 'Xiaomi 11',
        price: 175,
        name:"Android",
        image:"https://cdn.cimri.io/image/1000x1000/msisctrnbgfthinihgbddrgtxgddrgbgbssdfhdwleptop_614757655.jpg"
      }
    ]
  )

  const[boxProduct, setBoxProduct] = useState([])

  return (

    <div className="App">

    <div className='TitleHeader'>
    <div className="Title">SelfMarket</div>
    </div>

     <h3>Ürün Listesi</h3>

      <div className="gridItems">
        {productList.map((product,index)=>{
            return (
              <Card onClick={()=>{
                const arr =[...boxProduct]
                arr.push(product)
                setBoxProduct(arr)
              }} key={index} image = {product.image} info={product.info} title={product.title} name={product.name} price={product.price}/>
            )
        })}
      

      </div>

       <div className="urunHeader">
      {boxProduct.length > 0 && 
      
      <div className='Urun'> 
              <h4>Aldığınız Ürünler</h4>

                {
                  boxProduct.map((boxProduct,index)=>{
                    return (
                      <div key={index}>
                      {JSON.stringify(boxProduct)}

                      </div>
                    )
                })
                }
                </div>}
                <div className='urunYokHeader'>
              {boxProduct.length<1 && <div className='urunYokTitle'> Sepetinizde bir ürün bulunmamaktadır.</div>}
                </div>
    </div>
    </div>
  );
}

export default App;
