import { useEffect } from "react";

import { useGithub } from "../../services/api";

import Repo from "../Repo";

const UserRepos = () => {
  const { githubState, getUserStarred } = useGithub();

  useEffect(() => {
    if (githubState.user.login) {
      getUserStarred(githubState.user.login);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [githubState.user.login]);

  return (
    <>
      {githubState.starred.map((repo) => (
        <Repo
          key={repo.id}
          name={repo.name}
          description={repo.description}
          language={repo.language}
        />
      ))}
    </>
  );
};

export default UserRepos;
