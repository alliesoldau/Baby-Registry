import styled from "styled-components";

const COLORS = {
    "--purple": "#9A94BC",
    "--blue": "#3C4F76",
    "--bone": "#E8DBC5",
    "--green": "#646F58",
    "--pink": "#AC7B7D",
  };

const SummaryCard = styled.div`
width: 400px;
margin: 20px auto 20px;
background-color: #fff;
padding: 0 20px 20px;
border-radius: 6px;
box-shadow: 0 2px 5px var(--purple);
h2 {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 15px;
    color: var(--purple);
    text-align: center;
  } 
h4 {
    margin: 5px;
    color: var(--blue);
}
.Profile-Image {
    border-radius: 100px;
    overflow: hidden;
    height: 200px;
    width: 200px;
    position: relative;
    margin: auto;
    top: -60px;
    box-shadow: 0 0 0 13px var(--bone);
}
p {
    font-size: 16px;
    line-height: 26px;
    color: var(--blue);
    margin: 5px;
    vertical-align: center;
  } 
`

export default SummaryCard;