import React from 'react'
import { useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { removeProduct } from '../store/careSlice';
const Cart = () => {
  const Dispatch = useDispatch();
  const productcart = useSelector(state=>state.cart)
  const removeCart =(product)=>
  {
    Dispatch(removeProduct(product))
  }
  return (
    <div className='cardsContainer'>
    {
      productcart.map((product)=>
      {
        return(<>
        
          <Card style={{ textAlign:"center",width: '25rem',height:"auto",margin:"20px",boxShadow:"0px 0px 12px black",borderRadius:"10px"}}>
      <Card.Img variant="top" style={{width:"120px",marginLeft:"130px",marginTop:"30px"}} src={product.image} />
      <Card.Body>
        <Card.Title style={{}}>{product.title}</Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
        <p>Price: ${product.price}</p>
        <Button variant="buttom" onClick={()=>removeCart(product)} style={{poasition:"bottom",marginBottom:"20px",background:"red" ,color:"white"}}>Remove from Cart</Button>
      </Card.Body>
    </Card>
    

        </>)
      })
    }
      
    </div>
  )
}

export default Cart
