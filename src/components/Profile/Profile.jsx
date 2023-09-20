import { ProfileDivWrap } from './Profile.styled';
import { Description } from 'components/Profile/Description/Description';
import { Stats } from 'components/Profile/Stats/Stats';
export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileDivWrap>
      <Description
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <Stats stats={stats} />
    </ProfileDivWrap>
  );
};
