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
   return(
       <Draggable draggableId={props.task.id}
                  index={props.index}>
           {(provided) => (
               <Container
                   {...provided.droppableProps}
                   {...provided.dragHandleProps}
                   innerRef={provided.innerRef}
               >
                   {props.tasks.content}
               </Container>
           )}

       </Draggable>

   )
}

export default Task;
