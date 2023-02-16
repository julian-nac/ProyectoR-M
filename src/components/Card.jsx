import styled from "styled-components";
import { Link } from "react-router-dom";

const DivEstilo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20px;
  background-image: url(https://ronaldojeda98.files.wordpress.com/2014/09/texturas-fondos-de-pantalla-espacio-estrellas-galaxias-nebulosas-542447.jpg%3Fw%3D7880);
  background-size: cover;
  background-position: center;
  padding: 20px;
  background-color: black;


  border: 1px solid black;
  border-radius: 5px;

  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
  }
`;
const Image = styled.img`
  border: 10px solid black;
  margin-top: 10px;
`;

const CardData = styled.h2`
  margin: 20px;
  font-weight: bold;
  text-shadow: 5px 5px black;
  padding: 1px 1px;
  width: 200px;
  font-size: 35px;
  margin: 20px;
  font-weight: bold;
  color: white;
  text-shadow: 5px 5px black;
`;

const CloseButton = styled.button`
font-weight: bold;
width: 25px;
height: 25px;
line-height: 20px;
text-align: center;
background-color: red;
font-size: 12px;
border: 3px solid black;
color: white; 
cursor: pointer;
`;

function Card({ name, gender, onClose, species, image, id }) {
  return (
    <DivEstilo>
      <CloseButton onClick={onClose}>X</CloseButton>
      <Link to={`/detail/${id}`}>
        <CardData>Name: {name}</CardData>
      </Link>
      <CardData>Specie: {species}</CardData>
      <CardData>Gender: {gender}</CardData>
      <Image src={image} alt={name} />
    </DivEstilo>
  );
}

export default Card;
