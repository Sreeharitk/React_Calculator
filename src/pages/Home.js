import React, { useState } from 'react'
import "./home.css"
import Form from 'react-bootstrap/Form';
import { Col, Container, Row } from "react-bootstrap";

function Home() {

    const [name,setName] = useState("")

    const handleChange = (e)=>{
        const value = e.target.value
        setName(value)  
    }

    const handleClick = (value)=>{
        setName(name + value)
    }
    
    const clearOne = ()=>{
        const str = name.slice(0,-1)
        setName(str)
    }

    const clearAll = ()=>{
        setName("") 
    }

    const calResult = ()=>{
        try{
            const result = eval(name)
            setName(result) 
        }catch(error){
            setName("Error")
        }
    }

  return (
    <div>
        <div className="main">
            <div className="home1">
                <div className="home2">
                    <Form>
                        <Form.Control type="text" className="hinput" value={name}/>
                    </Form>
                </div>
                <Container className="home3">
                    <Row className="hrow">
                        <Col style={{textAlign:"center"}} className="home4">
                            <div onClick={()=>clearAll()}>CE</div>
                            <div onClick={()=>handleClick(7)}>7</div>
                            <div onClick={()=>handleClick(4)}>4</div>
                            <div onClick={()=>handleClick(1)}>1</div>
                            <div onClick={()=>handleClick("**")}>x<sup>2</sup></div>
                        </Col>
                        <Col style={{textAlign:"center"}} className="home4">
                            <div onClick={()=>clearOne()}>C</div>
                            <div onClick={()=>handleClick(8)}>8</div>
                            <div onClick={()=>handleClick(5)}>5</div>
                            <div onClick={()=>handleClick(2)}>2</div>
                            <div onClick={()=>handleClick(0)}>0</div>
                        </Col>
                        <Col style={{textAlign:"center"}} className="home4">
                            <div onClick={()=>handleClick("/")}>/</div>
                            <div onClick={()=>handleClick(9)}>9</div>
                            <div onClick={()=>handleClick(6)}>6</div>
                            <div onClick={()=>handleClick(3)}>3</div>
                            <div onClick={()=>handleClick(".")}>.</div>
                        </Col>
                        <Col style={{textAlign:"center"}} className="home4">
                            <div onClick={()=>handleClick("*")}>X</div>
                            <div onClick={()=>handleClick("%")}>%</div>
                            <div onClick={()=>handleClick("+")}>+</div>
                            <div onClick={()=>handleClick("-")}>-</div>
                            <div onClick={()=>calResult()}>=</div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    </div>
  )
}

export default Home