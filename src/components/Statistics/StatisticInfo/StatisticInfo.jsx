import {
  StatsList,
  StatsItem,
  StatsLabel,
  StatsPercentage,
} from 'components/Statistics/StatisticInfo/StatisticInfo.styled';
export const StatisticsInfo = ({ data }) => {
  return (
    <StatsList>
      {data.map(info => (
        <StatsItem key={info.id}>
          <StatsLabel>{info.label}</StatsLabel>
          <StatsPercentage>{info.percentage}%</StatsPercentage>
        </StatsItem>
      ))}
    </StatsList>
  );
};
