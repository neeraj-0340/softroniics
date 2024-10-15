import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import img from "./lufy.jpeg";
import img1 from "./mangekyo.png";
import img2 from "./itachi.png";
import card1 from "./tokyo_ghoul.jpeg";
import card2 from "./my_hero_academia.jpeg";
import card3 from "./naruto.jpeg";
import card4 from "./Jujutsu_Kaisen.jpeg";
import card5 from "./bleach.jpeg";

function Abc1() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img src={img} width={1282} height={500}></img>
          <Carousel.Caption>
            <h3>One piece</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={img1} width={1282} height={500}></img>

          <Carousel.Caption>
            <h3>Naruto</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={img2} width={1282} height={500}></img>
          <Carousel.Caption>
            <h3>Naruto</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="d-flex justify-content-center align-items-center gap-3 bg-secondary">
        <Card
          style={{ width: "18rem" }}
          className="d-flex justify-content-center align-items-center bg-info">
          <img src={card1} width={241} height={300}></img>
          <Card.Body>
          <a href="https://hianime.to/tokyo-ghoul-a-3130?ref=search"><Button>Watch</Button></a>
          </Card.Body>
        </Card>

        <Card
          style={{ width: "18rem" }}
          className="d-flex justify-content-center align-items-center bg-info">
          <img src={card2} width={241} height={300}></img>
          <Card.Body>
          <a href="https://hianime.to/watch/one-piece-100?ep=2761&ep=2761 "><Button>Watch</Button></a>
          </Card.Body>
        </Card>

        <Card
          style={{ width: "18rem" }}
          className="d-flex justify-content-center align-items-center bg-info">
          <img src={card3} width={241} height={300}></img>
          <Card.Body className="">
          <a href="https://hianime.to/watch/one-piece-100?ep=2761&ep=2761 "><Button>Watch</Button></a>
          </Card.Body>
        </Card>

        <Card
          style={{ width: "18rem" }}
          className="d-flex justify-content-center align-items-center bg-info">
          <img src={card4} width={241} height={300}></img>
          <Card.Body>
          <a href="https://hianime.to/jujutsu-kaisen-tv-534"><Button>Watch</Button></a>
          </Card.Body>
        </Card>

        <Card
          style={{ width: "18rem" }}
          className="d-flex justify-content-center align-items-center bg-info">
          <img src={card5} width={241} height={300}></img>
          <Card.Body>
            <a href="https://hianime.to/watch/one-piece-100?ep=2761&ep=2761 "><Button>Watch</Button></a>
            
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Abc1;
