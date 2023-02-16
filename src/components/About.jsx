import styled from 'styled-components';

const StyledAbout = styled.div`
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
`;

const About = () => {
  return (
    <StyledAbout>
      <h1>Es mi primer proyecto de desarrollo web</h1>
      <h2>
        Creado por Julian David Narvaez Cuartas actualmente cursando el modulo 2
        en el cohorte 35a
      </h2>
    </StyledAbout>
  );
};

export default About;