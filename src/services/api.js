import React, { createContext, useContext, useCallback, useState } from "react";
import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_GITHUB_API_URL,
});

export const GithubContext = createContext({
  loading: false,
  user: {},
  repositories: [],
  starred: [],
});

export const useGithub = () => {
  const { githubState, getUser, getUserRepos, getUserStarred } =
    useContext(GithubContext);

  return { githubState, getUser, getUserRepos, getUserStarred };
};

export const GithubProvider = ({ children }) => {
  const [githubState, setGithubState] = useState({
    hasUser: false,
    didNotFind: false,
    loading: false,
    user: {
      id: undefined,
      avatar_url: undefined,
      login: undefined,
      name: undefined,
      html_url: undefined,
      blog: undefined,
      company: undefined,
      location: undefined,
      followers: 0,
      following: 0,
      public_gists: 0,
      public_repos: 0,
    },
    repositories: [],
    starred: [],
  });

  const getUser = (username) => {
    setGithubState((prevState) => ({
      ...prevState,
      loading: !prevState.loading,
    }));

    if (username) {
      api
        .get(`users/${username}`)
        .then(({ data }) => {
          setGithubState((prevState) => ({
            ...prevState,
            hasUser: true,
            didNotFind: false,
            user: {
              id: data.id,
              avatar_url: data.avatar_url,
              login: data.login,
              name: data.name,
              html_url: data.html_url,
              blog: data.blog,
              company: data.company,
              location: data.location,
              followers: data.followers,
              following: data.following,
              public_gists: data.public_gists,
              public_repos: data.public_repos,
            },
          }));
        })
        .catch(() => {
          setGithubState((prevState) => ({
            ...prevState,
            hasUser: true,
            didNotFind: true,
            user: {
              id: undefined,
              avatar_url: undefined,
              login: undefined,
              name: undefined,
              html_url: undefined,
              blog: undefined,
              company: undefined,
              location: undefined,
              followers: 0,
              following: 0,
              public_gists: 0,
              public_repos: 0,
            },
            repositories: [],
            starred: [],
          }));
        })
        .finally(() => {
          setGithubState((prevState) => ({
            ...prevState,
            loading: !prevState.loading,
          }));
        });
    } else {
      setGithubState((prevState) => ({
        ...prevState,
        hasUser: false,
        didNotFind: false,
        user: {
          id: undefined,
          avatar_url: undefined,
          login: undefined,
          name: undefined,
          html_url: undefined,
          blog: undefined,
          company: undefined,
          location: undefined,
          followers: 0,
          following: 0,
          public_gists: 0,
          public_repos: 0,
        },
        repositories: [],
        starred: [],
      }));
    }
  };

  const getUserRepos = (username) => {
    api.get(`users/${username}/repos`).then(({ data }) => {
      setGithubState((prevState) => ({
        ...prevState,
        repositories: data,
      }));
    });
  };

  const getUserStarred = (username) => {
    api.get(`users/${username}/starred`).then(({ data }) => {
      setGithubState((prevState) => ({
        ...prevState,
        starred: data,
      }));
    });
  };

  const contextValue = {
    githubState,
    getUser: useCallback((username) => getUser(username), []),
    getUserRepos: useCallback((username) => getUserRepos(username), []),
    getUserStarred: useCallback((username) => getUserStarred(username), []),
  };

  return (
    <GithubContext.Provider value={contextValue}>
      {children}
    </GithubContext.Provider>
  );
};
