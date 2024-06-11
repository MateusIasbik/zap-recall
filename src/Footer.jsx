import styled from "styled-components"

export default function Footer() {
    return (
        <FooterStyle>
            <span>0/4 CONCLUÍDOS</span>
        </FooterStyle>
    )
}

const FooterStyle = styled.div`
    background-color: #FFF;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Recursive", sans-serif;
    position: fixed;
    bottom: 0;
    left: 0;
`