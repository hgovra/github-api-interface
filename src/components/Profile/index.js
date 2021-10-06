import { useGithub } from "../../services/api";

import { Container, Photo, Name, Nick, Info, ExtraBox, Blob } from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faMapMarkerAlt,
  faHome,
  faUserFriends,
  faBinoculars,
  faCube,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  const { githubState } = useGithub();

  return (
    <Container>
      <Photo src={githubState.user.avatar_url} alt="" />
      <Name>{githubState.user.name}</Name>
      <Nick>{githubState.user.login}</Nick>

      {githubState.user.company && (
        <Info>
          <FontAwesomeIcon icon={faBuilding} fixedWidth />{" "}
          {githubState.user.company}
        </Info>
      )}
      {githubState.user.location && (
        <Info>
          <FontAwesomeIcon icon={faMapMarkerAlt} fixedWidth />{" "}
          {githubState.user.location}
        </Info>
      )}
      {githubState.user.blog && (
        <Info>
          <FontAwesomeIcon icon={faHome} fixedWidth /> {githubState.user.blog}
        </Info>
      )}
      <ExtraBox>
        <Blob>
          <FontAwesomeIcon icon={faUserFriends} size="lg" />
          <br />
          {githubState.user.followers}
        </Blob>
        <Blob>
          <FontAwesomeIcon icon={faBinoculars} size="lg" />
          <br />
          {githubState.user.following}
        </Blob>
        <Blob>
          <FontAwesomeIcon icon={faCube} size="lg" />
          <br />
          {githubState.user.public_repos}
        </Blob>
        <Blob>
          <FontAwesomeIcon icon={faCode} size="lg" />
          <br />
          {githubState.user.public_gists}
        </Blob>
      </ExtraBox>
    </Container>
  );
};

export default Profile;
