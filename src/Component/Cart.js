import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { removeProduct } from '../store/careSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
const Cart = () => {
  const productCart = useSelector(state=>state.cart)
  const Dispatch = useDispatch();
  const removeCart = (product)=>
  {
    Dispatch(removeProduct(product))
  }
  const product=[]
  return (
    <div className='cardsContainer'>
       
       {
      productCart.map((product)=>
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
