import { useEffect } from "react";

import { useGithub } from "../../services/api";

import Repo from "../Repo";

const UserRepos = () => {
  const { githubState, getUserRepos } = useGithub();

  useEffect(() => {
    if (githubState.user.login) {
      getUserRepos(githubState.user.login);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [githubState.user.login]);

  return (
    <>
      {githubState.repositories.map((repo) => (
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
