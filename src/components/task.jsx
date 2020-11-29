import React from 'react';
import styled from 'styled-components'
import {Draggable} from "react-beautiful-dnd";

const Container = styled.div`
    border: 2px solid blue;
    border-radius: 2px;
    padding: 8px;
    margin-bottom: 8px;
    background-color: ${props => (props.isDragging ? 
                                'lightgreen' : 'white')}
`;


const Task = (props) => {

   return(
            <Draggable draggableId={props.tasks.id} index={props.index}>
                {(provided, snapshot) => (
                    <Container
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        isDragging={snapshot.isDragging}
                    >
                        {props.tasks.content}
                    </Container>

                )}

            </Draggable>
                )
}





export default Task;
