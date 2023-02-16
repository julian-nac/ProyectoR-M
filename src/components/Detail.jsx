import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import styled from "styled-components";

const Image = styled.img`
  border: 10px solid black;
  margin-top: 10px;
`;

const StyledStrong = styled.strong`
  font-weight: bold;
  
`;

const StyledButton = styled.button`
  background-color: lightgray;
  font-weight: bold;
  padding: 10px;
  margin: 20px 0;
  font.size: 20px;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #EBEBEB;
  padding: 20px;
`;

const CharacterName = styled.h1`
  margin-top: 0;
`;

const Detail = () => {
    const { detailId } = useParams()
    const [character, setCharacter] = useState({})

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);

    return(
        <DetailContainer>
            <StyledButton>
                <Link to="/home">Home</Link>
            </StyledButton>
            <CharacterName>{character?.name}</CharacterName>
            <p>
        <StyledStrong>Status:</StyledStrong> {character?.status}
      </p>
      <p>
        <StyledStrong>Specie:</StyledStrong> {character?.species}
      </p>
      <p>
        <StyledStrong>Gender:</StyledStrong> {character?.gender}
      </p>
      <p>
        <StyledStrong>Origin:</StyledStrong> {character?.origin?.name}
      </p>
            <Image src={character.image} alt={character.name}/>
        </DetailContainer>
    )
}

export default Detail