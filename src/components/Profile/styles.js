import styled from 'styled-components'

export const Container = styled.aside`
    width: 300px;
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: #ebebeb;
`;

export const Photo = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin-bottom: 10px;
`;

export const Name = styled.h2`
    font-weight: 700;
    font-size: 30px;
    margin-bottom: 5px;
    text-align: center;
`;

export const Nick = styled.h3`
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 10px;
    margin-top: 5px;
    color: #999;
`;

export const Info = styled.span`
    font-size: 14px;
    font-weight: 700;
    color: #111;
    display: block;
    width: 200px;
    margin: 2px 0;
    height: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const ExtraBox = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 20px;
`;
export const Blob = styled.span`
    background: #fff;
    display: block;
    width: 50px;
    height: 50px;
    margin: 0 5px;
    border-radius: 50%;
    padding: 10px 0;
    font-size: 11px;
    font-weight: 700;
    text-align: center;
    line-height: 16px;
`;