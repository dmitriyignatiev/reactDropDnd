import './App.css';
import React, {useState, setState} from 'react';
import initialData from "./Initial-data";
import '@atlaskit/css-reset';
import styled from 'styled-components';
import {DragDropContext} from "react-beautiful-dnd";
import Column from './components/column';



const Container = styled.div`
    display: inline-flex;
`;



const App = () => {

    const [state, setState] = useState(initialData)

    const onDragEnd = result => {
        const {destination, source, draggableId} = result


        if (!destination) {
            return;
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        console.log('dopobleId', draggableId)

        const column = state.columns[source.droppableId];
        console.log('columnDropanleId', state.columns[source.droppableId])
        const newTaskIds = Array.from(column.taskIds)
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);

        const newColumn = {
            ...column,
            taskIds:newTaskIds
        };

        const newState = {
            ...state,
            columns:{
                ...state.columns,
                [newColumn.id]:newColumn
            }
        }

        setState(newState)

    }

        return state.columnOrder.map(columnId => {
            const column = state.columns[columnId];
            const tasks = column.taskIds.map(taskId => state.tasks[taskId]);


            return (
                <DragDropContext
                     onDragEnd={onDragEnd}
                >
                    <Container>
                        <Column key={column.id} column={column} tasks={tasks}/>
                    </Container>

                </DragDropContext>
            )

        })


}
export default App;
