import { rest } from "msw";
import { setupServer } from "msw/node";

import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

const fakeUser = {
  id: 5579319,
  avatar_url: "https://avatars.githubusercontent.com/u/5579319?v=4",
  login: "hgovra",
  name: "Hugo Vieira",
  html_url: "https://github.com/hgovra",
  blog: "",
  company: undefined,
  location: "Brazil",
  followers: 0,
  following: 0,
  public_gists: 0,
  public_repos: 6,
};

const fakeUserRepos = [
  {
    id: 404503301,
    name: "fake-github-user-repository",
    description: "Fake Github USER repo for testing purposes.",
    language: "Jest",
  },
];

const fakeUserStarred = [
  {
    id: 304503622,
    name: "fake-github-starred-repository",
    description: "Fake Github STARRED repo for testing purposes.",
    language: "Jest",
  },
];

const server = setupServer(
  rest.get("https://api.github.com/users/hgovra", (req, res, ctx) => {
    return res(ctx.json(fakeUser));
  }),

  rest.get("https://api.github.com/users/hgovra/repos", (req, res, ctx) => {
    return res(ctx.json(fakeUserRepos));
  }),

  rest.get("https://api.github.com/users/hgovra/starred", (req, res, ctx) => {
    return res(ctx.json(fakeUserStarred));
  }),

  rest.get("https://api.github.com/users/hgovrb", (req, res, ctx) => {
    return res(ctx.status(404));
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());

test("renders the UI", () => {
  render(<App />);

  const usernameInput = screen.getByRole("searchbox");
  const infoLabel = screen.getByText(/Insert username to search./i);

  expect(usernameInput).toBeInTheDocument();
  expect(infoLabel).toBeInTheDocument();
});

test("loads profile data based on search", async () => {
  render(<App />);

  const usernameInput = screen.getByRole("searchbox");

  fireEvent.change(usernameInput, { target: { value: "hgovra" } });

  await waitFor(() => {
    expect(screen.getByText("Hugo Vieira")).toBeInTheDocument();

    const userReposTabs = screen.getByRole("navigation");

    expect(userReposTabs).toBeInTheDocument();

    expect(screen.getByText("fake-github-user-repository")).toBeInTheDocument();
  });
});

test("loads user and starred repos upon clicking on tab", async () => {
  render(<App />);

  const usernameInput = screen.getByRole("searchbox");

  fireEvent.change(usernameInput, { target: { value: "hgovra" } });

  const userReposTab = await screen.findByText("User");
  const starredReposTab = await screen.findByText("Starred");

  userEvent.click(starredReposTab);

  expect(await screen.findByText("User")).toHaveClass("off");
  expect(await screen.findByText("Starred")).toHaveClass("on");
  expect(
    await screen.findByText("fake-github-starred-repository")
  ).toBeInTheDocument();

  userEvent.click(userReposTab);

  expect(await screen.findByText("User")).toHaveClass("on");
  expect(await screen.findByText("Starred")).toHaveClass("off");
  expect(
    await screen.findByText("fake-github-user-repository")
  ).toBeInTheDocument();
});

test("returns a message when searched name isn't found", async () => {
  render(<App />);

  const usernameInput = screen.getByRole("searchbox");

  fireEvent.change(usernameInput, { target: { value: "hgovrb" } });

  await waitFor(() => {
    const infoLabel = screen.getByText(/User not found!/i);

    expect(infoLabel).toBeInTheDocument();
  });
});
