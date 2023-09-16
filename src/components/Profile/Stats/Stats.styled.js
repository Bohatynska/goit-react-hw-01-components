import styled from 'styled-components';

export const StatsList = styled.ul`
  padding: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  width: 100%;
  border-top: 1px solid grey;
  border-radius: 4px;
  background-color: #e5e5e5;
`;
export const StatsItem = styled.li`
  padding: 15px 0;
  width: calc(100% / 3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:not(:last-child) {
    border-right: 1px solid grey;
  }
`;
export const StatsLabel = styled.span`
  margin-bottom: 10px;
  color: grey;
`;
export const StatsQuantity = styled.span`
  color: black;
  font-weight: 500;
`;
