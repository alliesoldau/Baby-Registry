import styled from "styled-components";

const COLORS = {
    "--purple": "#9A94BC",
    "--blue": "#3C4F76",
    "--bone": "#E8DBC5",
    "--green": "#646F58",
    "--pink": "#AC7B7D",
  };

  const Button = styled.div`
    display: flex;
    margin-top: 10px;
    font-family: Verdana;
    font-weight: bold;
    button {
        background-color: var(--green);
        color: #fff;
        font-size: 1.25em;
        border-radius: 5px;
        margin-left: 10px;
        margin-top: 10px;
        padding: 5px;
        border: none;
    }  
    button:hover {
        text-decoration: underline;
    }
    button.Submit-Button{
        background-color: var(--blue);
        color: #fff;
        font-size: 1em;
        margin: auto;
    }
  `

  export default Button;
