import styled from 'styled-components'

export const Container = styled.section`
    flex: 1;
    background: #fff;
`;

export const Tabs = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: row;
`;
export const Tab = styled.div`
    flex: 1;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    padding: 20px;
    cursor: pointer;
    background: #CCC;
    border-bottom-left-radius: 10px;
    color: #666;

    &:first-child {
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 0;
    }
    &.on {
        background: #FFF;
        transition: background 200ms;
        cursor: default;
    }
`;

export const TabCont = styled.div`
    padding: 10px;
`;