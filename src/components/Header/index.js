import { useState, useEffect } from "react";

import { useGithub } from "../../services/api";

import { Container, Logo, SearchBar, Icon } from "./styles";
import LogoImg from "./logo.svg";

import {faSearch} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const { getUser } = useGithub();
  const [userSearch, setUserSearch] = useState();

  const changeHandler = (e) => {
    setTimeout(() => {
      setUserSearch(e.target.value);
    }, 200);
  };

  useEffect(() => {
    getUser(userSearch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userSearch]);

  return (
    <Container>
      <Logo src={LogoImg} />
      <SearchBar id="search-bar" role="searchbox" onChange={e => changeHandler(e)} />
      <Icon icon={faSearch} size="lg" />
    </Container>
  );
};

export default Header;
