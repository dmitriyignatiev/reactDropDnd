import React from 'react';
import styled from 'styled-components'
import {Draggable} from "react-beautiful-dnd";

const Container = styled.div`
    border: 2px solid blue;
    border-radius: 2px;
    padding: 8px;
    margin-bottom: 8px;
`;


const Task = (props) => {
   console.log('props Task', props)
    console.log('index', props.index)
   return(
            <Draggable draggableId={props.tasks.id} index={props.index}>
                {provided => (
                    <Container
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >
                        {props.tasks.content}
                    </Container>

                )}

            </Draggable>
                )
}





export default Task;
