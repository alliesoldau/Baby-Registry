import styled from "styled-components";

const COLORS = {
    "--purple": "#9A94BC",
    "--blue": "#3C4F76",
    "--bone": "#E8DBC5",
    "--green": "#646F58",
    "--pink": "#AC7B7D",
  };

  const Form = styled.div`
  width: 400px;
  margin: 20px auto 20px;
  background-color: ${props => 
    props.bg === "purple" ? "#9A94BC" 
    : props.bg === "pink" ? "#AC7B7D"
    : props.bg === "green" ? "#646F58"
    : props.bg === "blue" ? "#3C4F76"
    : props.bg === "bone" ? "#E8DBC5"
    : "#fff"
    };
  padding: 0 20px 20px;
  border-radius: 6px;
  box-shadow: 0 2px 5px var(--purple);
    h2 {
      font-size: 32px;
      font-weight: 600;
      margin-bottom: 15px;
      color: var(--blue);
      text-align: left;
    } 
    h2.purple {
        color: var(--bone);
    }
    h2.blue {
        color: var(--purple);
    }
    h4 {
        margin: 5px;
        color: var(--blue);
    }
    p {
        font-size: 16px;
        line-height: 26px;
        color: var(--blue);
        margin: 5px;
        vertical-align: center;
    }`

  export default Form;
