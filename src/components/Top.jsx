import styled from "styled-components"
import logo from "../assets/logo.png";

export default function Top() {
    return (
        <TopStyle>
            <img src={logo} alt="logo" />
            <NameLogo>
                <h1>ZapRecall</h1>
            </NameLogo>
        </TopStyle>
    )
}

const TopStyle = styled.div`
    width: 255px;
    margin: 48px 0;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #FFF;
    font-size: 36px;
    font-family: "Righteous", sans-serif;

    img {
        height: 60px;
    }
`
const NameLogo = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`

