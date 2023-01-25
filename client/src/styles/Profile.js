import styled from "styled-components";

const COLORS = {
    "--purple": "#9A94BC",
    "--blue": "#3C4F76",
    "--bone": "#E8DBC5",
    "--green": "#646F58",
    "--pink": "#AC7B7D",
  };

const Profile = styled.div`
    display: flex;
    justify-content: start;
    flex-direction: column;
    font-family:Arial, sans-serif;
    margin: 10px;
    width: 100%;
    border-radius: 10px;
    a{
    text-decoration: none;
    color: var(--bone);
    }
    p {
        color: var(--blue);
        margin: 0px;
        padding-left: 10px;
        padding-right: 10px;
    }
    img {
        width: 200px;
    }
    button {
        background-color: var(--pink);
        border: none;
        border-radius: 8px;
        color: white;
        padding: 5px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        width: auto;
        margin: auto;
        margin-top: 5px;
        margin-bottom: 5px;
    }
    button:hover {
        background-color: var(--blue);
    }
    `

export default Profile;