import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import { Context } from "..";

const TypeBar = observer(() => {
    const {lists} = useContext(Context)
    return (
        <ListGroup>
            {lists.types.map(type =>
                <ListGroup.Item
                style={{cursor: "pointer"}}
                active={type.id === lists.selectedType.id}
                onClick={() => lists.setSelectedType(type)}
                key={type.id}
                >
                    {type.name}
                </ListGroup.Item>)}
        </ListGroup>
    );
});
export default TypeBar;