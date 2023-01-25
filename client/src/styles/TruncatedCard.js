// passing props into styled components: https://www.smashingmagazine.com/2020/07/styled-components-react/ 
//   I passed in props to change the background color depending on if the item has been claimed or not 

import styled from "styled-components";

const COLORS = {
    "--purple": "#9A94BC",
    "--blue": "#3C4F76",
    "--bone": "#E8DBC5",
    "--green": "#646F58",
    "--pink": "#AC7B7D",
  };

const TruncatedCard = styled.li`
    display:flex;
    flex-direction:column;
    justify-content:start;
    margin: 10px;
    background-color: ${props => props.claimed === "Yes" ? "#D3D3D3" : "#FFF"};
    width: 350px;
    border-radius: 6px;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.075);
    -webkit-box-shadow: 0 2px 5px;
    a{
        text-decoration: none;
        color: var(--pink);
    }
    img{
        width: 100%;
        padding: 0px;
    }
    position:relative;
        h4 {
        margin: 5px;
        color: var(--blue);
    }
    .Line-Item {
        display: flex;
        flex-direction: row;
        margin-left: 5px;
        margin-right: 5px;
    }
    p {
        font-size: 16px;
        line-height: 26px;
        color: var(--blue);
        margin: 5px;
        vertical-align: center;
    }
`


export default TruncatedCard;