import styled from "styled-components";

const COLORS = {
    "--purple": "#9A94BC",
    "--blue": "#3C4F76",
    "--bone": "#E8DBC5",
    "--green": "#646F58",
    "--pink": "#AC7B7D",
  };

// source help: https://www.bypeople.com/profile-card-hover-effect/ 

  const UserDetailStyles = styled.div`
    width: 300px;
    height: 200px;
    margin: 120px auto 120px;
    background-color: var(--green);
    padding: 0 20px 20px;
    border-radius: 6px;
    text-align: center;
    box-shadow: 0 2px 5px var(--purple);
    color: #fff;
    &:hover{
      transform: scale(1.1);
      transition: all ease 500ms;
    }
    h2 {
        font-size: 32px;
        font-weight: 600;
        margin-bottom: 15px;
        color: #fff;
        text-align: center;
        position: relative;
        top: -60px;
      } 
    h4 {
        margin: 5px;
        color: #fff;
        font-family: Courier New;
        font-size: 20px;
        line-height: 30px;
        position: relative;
        top: -60px;
    }
    .Profile-Image {
        background-color: #fff;
        border-radius: 100px;
        overflow: hidden;
        height: 150px;
        width: 150px;
        position: relative;
        margin: auto;
        top: -60px;
        box-shadow: 0 0 0 13px var(--bone);
    }
    img {
        width: 150px;
        height: 150px;
    }
    p {
        font-size: 16px;
        line-height: 26px;
        margin: 5px;
        vertical-align: center;
        color: #fff;
      }
  `

export default UserDetailStyles;