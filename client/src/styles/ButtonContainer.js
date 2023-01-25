import styled from "styled-components";
const ButtonContainer = styled.div`

display: flex;
flex-direction: row;
justify-content: space-evenly;
button {
    border: none;
    border-radius: 8px;
    color: white;
    padding: 5px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    width: auto;
    margin: 5px;
}
button.Edit-Button {
    background-color: var(--pink);
}
button.Delete-Button {
    background-color: var(--blue);
}
`


export default ButtonContainer;