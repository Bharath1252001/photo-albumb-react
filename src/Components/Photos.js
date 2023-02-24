import React from "react";
import { useState,useEffect } from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import axios from "axios"

function Photos() {
  const [photo,setphotos] = useState([]);
  useEffect(()=>{
    axios
    .get("https://picsum.photos/v2/list").then((res)=>setphotos(res.data))
  },[])
    
  return (
    <>
      <Container>
        {/* <Link to='/about'>About Us</Link> */}
        <Row>
          {photo.map(function (photo) {
            return (
              <Col md={3} className="m-4 me-5" key={photo.id}>
                <Card style={{ width: "18rem", textAlign: "center" }}>
                  <Card.Img variant="top" src={photo.download_url} style={{height:"200px"}} />
                  <Card.Body>
                    <Card.Title>{photo.author}</Card.Title>
                    <a href={photo.url} className="btn btn-dark btn-sm">view details</a>
                    {/* <Link to={`photo${photo.id}`} className="m-1 btn btn-dark btn-sm">view enlarged</Link> */}
                    
                      
                   
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default Photos;
