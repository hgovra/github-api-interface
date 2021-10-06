import styled from 'styled-components'

export const Spacer = styled.div`
    width: 33.3%;
    display: inline-block;
    vertical-align: middle;
    padding: 10px;
`;
export const Block = styled.div`
    width: 100%;
    height: 136px;
    border: 1px solid #DDD;
    border-radius: 10px;
    padding: 10px 20px;
    text-align: center;
`;

export const Info = styled.span`
    display: block;
    width: 100%;
    cursor: default;
`;
export const Name = styled(Info)`
    font-weight: 700;
    font-size: 20px;
    margin: 5px 0 10px;
    height: 23px;
    line-height: 21px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;
export const Description = styled(Info)`
    font-size: 14px;
    margin-bottom: 10px;
    height: 43px;
    overflow: hidden;
    text-overflow: ellipsis;
`;
export const Lang = styled(Info)`
    font-size: 16px;
    font-weight: 700;
    color: #999;
`;