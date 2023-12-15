import {react, useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addProduct} from '../store/careSlice';
export const Product = ()=>
{
  const dispatch = useDispatch();

  const [prducts,setProducts] = useState([]);
  useEffect(()=>
  {
      fetch("https://fakestoreapi.com/products")
      .then(data=>data.json())
      .then(result=>setProducts(result))    
  },[]);
  const addtocart =(product)=>
  {
    dispatch(addProduct(product))
  }
  
 
    return(
        <> 
        <div className='cardsContainer'>
        {prducts.map((product=>{
          return(<>
          
            <Card style={{ textAlign:"center",width: '25rem',height:"auto",margin:"20px",boxShadow:"0px 0px 12px black",borderRadius:"10px"}}>
      <Card.Img variant="top" style={{width:"120px",marginLeft:"130px",marginTop:"30px"}} src={product.image} />
      <Card.Body>
        <Card.Title style={{}}>{product.title}</Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
        <p>Price: ${product.price}</p>
        <Button variant="buttom" onClick={()=>addtocart(product)} style={{poasition:"bottom",marginBottom:"20px",background:"blue" ,color:"white"}}>Add To Cart</Button>
      </Card.Body>
    </Card>
    
            
          </>)
        }
    ))}
    </div>
        </>
    )
}