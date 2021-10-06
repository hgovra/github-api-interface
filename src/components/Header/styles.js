import styled from 'styled-components'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.header`
    width: 100%;
    background: #f7f7f7;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const Logo = styled.img`
    width: 50px;
    height: auto;
    margin: 0 0 0 20px;
`;
export const SearchBar = styled.input`
    width: calc(100% - 280px);
    flex: 1;
    margin: 20px;
    border: 1px solid #CCC;
    border-radius: 10px;
    font-size: 18px;
    padding: 5px 40px 5px 10px;
    height: 40px;
    line-height: 40px;
    font-family: 'IBM Plex Sans', sans-serif;
    text-align: center;

    &:focus {
        outline: none;
    }
`;
export const Icon = styled(FontAwesomeIcon)`
    color: #DDD;
    position: absolute;
    right: 32px;
    top: 29px;
`;