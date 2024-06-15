import React from 'react';
import styled from "styled-components"
import logo from "../assets/logo.png";

export default function Top() {

    function resetPage() {
        window.location.reload();
    }    

    return (
        <TopStyle>
            <img src={logo} alt="logo" onClick={resetPage} />
            <NameLogo onClick={resetPage}>ZapRecall</NameLogo>
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
const NameLogo = styled.h1`
    display: flex;
    width: 100%;
    justify-content: center;
`

