import {
  DescriptionDivWrap,
  DescriptionAvatar,
  DescriptionInfo,
} from './Description.styled';
export const Description = ({ username, tag, location, avatar }) => {
  return (
    <DescriptionDivWrap>
      <DescriptionAvatar src={avatar} alt={username} />
      <DescriptionInfo>{username}</DescriptionInfo>
      <DescriptionInfo>@{tag}</DescriptionInfo>
      <DescriptionInfo>{location}</DescriptionInfo>
    </DescriptionDivWrap>
  );
};
