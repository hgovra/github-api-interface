import { Spacer, Block, Name, Description, Lang } from './styles'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCube} from "@fortawesome/free-solid-svg-icons";

const Repos = (props) => {
    return (
        <Spacer>
            <Block>
                <Name title={props.name}><FontAwesomeIcon icon={faCube} /> {props.name}</Name>
                <Description>{props.description}</Description>

                <Lang>{props.language}</Lang>
            </Block>
        </Spacer>
    )
}

export default Repos;