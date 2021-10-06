import { useState } from "react";

import { Container, Tabs, Tab, TabCont } from "./styles";

import UserRepos from "../UserRepos";
import StarredRepos from "../StarredRepos";

const Repos = () => {
  const [active, setActive] = useState("user");

  return (
    <Container>
      <Tabs role="navigation">
        <Tab
          className={active === "user" ? "on" : "off"}
          onClick={() => setActive("user")}
        >
          User
        </Tab>
        <Tab
          className={active === "starred" ? "on" : "off"}
          onClick={() => setActive("starred")}
        >
          Starred
        </Tab>
      </Tabs>
      <TabCont>
        {
          {
            user: <UserRepos />,
            starred: <StarredRepos />,
          }[active]
        }
      </TabCont>
    </Container>
  );
};

export default Repos;
