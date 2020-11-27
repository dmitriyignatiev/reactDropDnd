import './App.css';
import initialData from "./Initial-data";
import {DragDropContext} from "react-beautiful-dnd";
import Column from './components/column'



const App = () => {
  const state = initialData;

  const onDragEnd = result =>{
      //TODO
  }

  return state.columnOrder.map(columnId => {
    const column = state.columns[columnId];
    const tasks = column.taskIds.map(taskId => state.tasks[taskId]);
    console.log('tasks', tasks)

    return(
        <DragDropContext
            onDragEnd={onDragEnd}
        >
        <Column key={column.id} column={column} tasks={tasks} />
        </DragDropContext>
    )

  })

}

export default App;
