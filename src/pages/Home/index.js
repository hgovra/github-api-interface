import { useGithub } from "../../services/api";

import { Grid, Page, Empty } from "./styles";

import Header from "../../components/Header";
import Profile from "../../components/Profile";
import Repos from "../../components/Repos";

const Home = () => {
  const { githubState } = useGithub();

  return (
    <Grid>
      <Header />

      {githubState.hasUser ? (
        githubState.didNotFind ? (
          <Empty>User not found!</Empty>
        ) : (
          <Page>
            <Profile />
            <Repos />
          </Page>
        )
      ) : (
        <Empty>Insert username to search.</Empty>
      )}
    </Grid>
  );
};

export default Home;
