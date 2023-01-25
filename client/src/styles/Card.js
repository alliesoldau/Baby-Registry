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
font-family:Arial, sans-serif;
margin: 10px;
background-color: var(--pink);
width: 300px;
border-radius: 10px;
a{
  text-decoration: none;
  color: var(--bone);
}
img{
  width: 100%;
  padding: 0px;
}
position:relative;
div{
 position:absolute;
}
p {
    color: var(--blue);
    margin: 0px;
    padding-left: 10px;
    padding-right: 10px;
}
button {
    background-color: var(--green);
    border: none;
    border-radius: 8px;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    width: 90%;
    margin: auto;
    margin-top: 5px;
    margin-bottom: 5px;
}
button:hover {
    background-color: var(--blue);
  }
`


export default Card;