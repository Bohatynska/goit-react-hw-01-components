import {
  StatisticsSection,
  StatisticsTitle,
} from 'components/Statistics/Statistic.styled';
import { StatisticsInfo } from 'components/Statistics/StatisticInfo/StatisticInfo';

export const Statistics = ({ title, data }) => {
  return (
    <StatisticsSection>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}
      <StatisticsInfo data={data} />
    </StatisticsSection>
  );
};
