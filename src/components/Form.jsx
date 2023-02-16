import styled from "styled-components";
import { useState } from "react";
import validation from "./validation";

const ErrorMsg = styled.p`
  color: red;
  font-size: 18px;
  font-weight: bold;
  -webkit-text-stroke: 1.5px black;
`;

const StyledForm = styled.form`
background-image: url(https://i.pinimg.com/originals/7f/c5/4b/7fc54b68a969f363c6d1a9a3277201c3.jpg);
background-size: cover;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const StyledLabel = styled.label`
    color: white;
  margin: 5px 0;
  font-size: 25px;
  font-weight: bold;
  font-family: Verdana;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.4);
  -webkit-text-stroke: 1.5px black;
`;
 
const StyledInput = styled.input`
  padding: 5px;
  margin: 5px 0;
`;

const StyledButton = styled.button`
  margin: 10px 0;
  padding: 5px 10px;
  background-color: lightgreen;
  font-weight: bold;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: green;
    color: white;
  }
`;


const Form = ({login}) => {

    const [userData, setUserData] = useState({ username: '', password: '' });

    const [errors, setErrors] = useState({
        username: "",
        password: ""
    })

    const handleInputChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }
    
    const handleSubmit = (event) =>{
        event.preventDefault()
        login(userData)
    }
    
  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel htmlFor="username">Username:</StyledLabel>
      <StyledInput type="text" name="username" value={userData.username} onChange={handleInputChange}/>
      {errors.username && <ErrorMsg>{errors.username}</ErrorMsg>}

      <StyledLabel htmlFor="password">Password:</StyledLabel>
      <StyledInput type="password" name="password" value={userData.password} onChange={handleInputChange}/>
      {errors.password && <ErrorMsg>{errors.password}</ErrorMsg>}

      <StyledButton>Login</StyledButton>
    </StyledForm>
  );
};

export default Form;