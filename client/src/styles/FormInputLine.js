import styled from "styled-components";

// help with form alignment: https://stackoverflow.com/questions/10868640/align-html-input-fields-by 

const FormInputLine = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 5px;
    margin-right: 5px;

label {
    color: ${props => props.bg === "bone" ? "#3C4F76" : "#fff"};
    margin-top: auto;
    margin-bottom: auto;
    font-weight: bold;
    display: inline-block;
    float: left;
    clear: left;
    width: 250px;
    text-align: left;
  }

input {
    display: inline-block;
    float: left;
    font-size: 16px;
    line-height: 26px;
    background-color: #fff;
    color: var(--blue);
    margin: 5px;
    vertical-align: center;
    border-radius: 5px;
}`


export default FormInputLine;