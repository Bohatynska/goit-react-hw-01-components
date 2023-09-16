import styled from 'styled-components';
export const StatsList = styled.ul`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  border-top: 1px solid grey;
`;
export const StatsItem = styled.li`
  padding: 15px 0;
  width: calc(100% / 5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: lavenderblush;
`;
export const StatsLabel = styled.span`
  color: black;
  font-weight: 500;
  font-size: 18px;
`;
export const StatsPercentage = styled.span`
  color: black;
  font-weight: 500;
  font-size: 20px;
`;
