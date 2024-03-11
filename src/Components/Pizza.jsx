import React,{useState} from 'react'
import {Modal} from 'react-bootstrap'

const Pizza = ({pizza}) => {
    const [quantity , setquantity] = useState(1)
    const [ varient, setvarient] = useState('small')
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div style={{margin:'50px'}} className='shadow-lg p-3 mb-5 bg-body rounded'>
      <div onClick={handleShow}>
            <h1>{pizza.name}</h1>
            <img src={pizza.image} className='img-fluid' style={{height:'150px',width:'150px'}} />
      </div>
      <div className='flex-container'>

            <div className='w-100 m-1'>
                <p>Varients</p>
                <select className='form-control' value={varient} onChange={(e)=>{setvarient(e.target.value)}}>
                {pizza.varients.map(varients=>{
                    return  <option value={varients}>{varients}</option>
                })}
                </select>
            </div>

            <div className='w-100 m-1'>
                <p>Quantity</p>
                <select className='form-control' value={quantity} onChange={(e)=>{setquantity(e.target.value)}}>
                    {[...Array(10).keys()].map((x , i)=>{
                        return <option value={i+1}>{i+1}</option>
                    })}
                </select>
            </div>
      </div>
      <div className='flex-container'>
            <div className='m-1 w-80'>
                 <h1 className='mt-1'>Price: {pizza.prices[0][varient] * quantity} Rs/-</h1>   
            </div>
            <div className='m-1 w-80'>
                <button className='btn'>ADD TO CART</button>
            </div>
      </div>

     {/* Pasting the React-Bootstrap Model */}
      <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={pizza.image} className='img-fluid' style={{height:'300px'}} />
          <p>{pizza.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className='btn' onClick={handleClose}>CLOSE</button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default Pizza



