import styled from "styled-components";

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Page = styled.main`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

export const Empty = styled.main`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 24px;
`;
