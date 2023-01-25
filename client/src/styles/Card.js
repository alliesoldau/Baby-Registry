import styled from "styled-components";

const COLORS = {
    "--purple": "#9A94BC",
    "--blue": "#3C4F76",
    "--bone": "#E8DBC5",
    "--green": "#646F58",
    "--pink": "#AC7B7D",
  };

const Card = styled.li`
display:flex;
flex-direction:column;
justify-content:start;
margin: 10px;
background-color: #fff;
width: 350px;
border-radius: 6px;
box-shadow: 0 2px 5px var(--purple);
a{
  text-decoration: none;
  color: var(--pink);
}
img{
  width: 100%;
  padding: 0px;
}
position:relative;
`


export default Card;