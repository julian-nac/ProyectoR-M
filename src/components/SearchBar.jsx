import styled from "styled-components";
import { useState } from "react";

const StyledButton = styled.button`
  background-color: lightgreen;
  font-weight: bold;
  :hover {
    cursor: pointer;
  }
`;
const StyledInput = styled.input`
  border: 2px solid black;
`;

function SearchBar({onSearch}) {
   const [character, setCharacter] = useState('')

   const handleChange = (event) => {
      setCharacter(event.target.value)      
   }
   const handleAddClick = () => {
    onSearch(character);
    setCharacter("");
  };


    return (
      <div>
          <StyledInput type='search' value={character} onChange={handleChange}/>
          <StyledButton onClick={handleAddClick}>Agregar</StyledButton>
      </div>
   );
}
export default SearchBar;