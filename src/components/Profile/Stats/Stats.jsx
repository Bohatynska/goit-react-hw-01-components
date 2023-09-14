import {
  StatsList,
  StatsItem,
  StatsLabel,
  StatsQuantity,
} from './Stats.styled';

export const Stats = ({ stats }) => {
  const { followers, views, likes } = stats;
  return (
    <StatsList>
      <StatsItem>
        <StatsLabel>Followers</StatsLabel>
        <StatsQuantity>{followers}</StatsQuantity>
      </StatsItem>

      <StatsItem>
        <StatsLabel>Views</StatsLabel>
        <StatsQuantity>{views}</StatsQuantity>
      </StatsItem>

      <StatsItem>
        <StatsLabel>Likes</StatsLabel>
        <StatsQuantity>{likes}</StatsQuantity>
      </StatsItem>
    </StatsList>
  );
};
