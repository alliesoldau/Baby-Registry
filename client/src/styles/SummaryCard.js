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
margin: 120px auto 120px;
background-color: #fff;
padding: 0 20px 20px;
border-radius: 6px;
-webkit-border-radius: 6px;
-moz-border-radius: 6px;
box-shadow: 0 2px 5px rgba(0,0,0,0.075);
-webkit-box-shadow: 0 2px 5px;
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
img {
    width: 200px;
    height: 200px;
}
p {
    font-size: 16px;
    line-height: 26px;
    color: var(--blue);
    margin: 5px;
    vertical-align: center;
  }
.Line-Item {
    display: flex;
    flex-direction: row;
    margin-top: 5px;
    margin-bottom: 5px;
}
.Button-Container {
    display: flex;
    flex-direction: row;
}
button {
    border: none;
    border-radius: 8px;
    color: white;
    padding: 5px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    width: 200px;
    margin: 5px;
}
button.Edit-Button {
    background-color: var(--pink);
}
button.Delete-Button {
    background-color: var(--blue);
}
button:hover {
    font-weight: bold;
}   
`

export default SummaryCard;