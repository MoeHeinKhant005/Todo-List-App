import { useContext } from 'react'; 
import { TodoContext } from '../App';

const TodoList = () => {

    const [todoData, setTodoData] = useContext(TodoContext);

    function handleCheck(event, id){
        event.target.nextElementSibling.classList.add('line-through');
        setTimeout(() => {
            const updatedData = todoData.filter(todo => todo.id !== id);
            setTodoData(updatedData);
        }, 5000);
    }

    function handleDelete(id){
        const updatedData = todoData.filter(todo => todo.id !== id);
        setTodoData(updatedData);
    }

    return (
        <div className="w-[85%] h-auto max-h-[300px] flex flex-col justify-start items-center gap-y-2 overflow-y-auto">
            { todoData.length >= 1 ? todoData.map(todo => (
            <div key={ todo.id } className="todo-item w-full h-[50px] bg-white flex flex-none flex-row justify-between items-center gap-x-3 px-3">
                <input type="checkbox" className="w-[16px] h-[16px] accent-primary text-base" onChange={(e) => handleCheck(e, todo.id)}/>
                <span className="w-[80%] font-dm-sans text-sm text-slate-900 text-ellipsis overflow-hidden whitespace-nowrap">{ todo.task }</span>
                <i className="fa-solid fa-trash text-slate-600 text-base" onClick={() => handleDelete(todo.id)}></i>
            </div>
            )): <p className='font-dm-sans text-sm text-gray-400 my-4'>No todo list has added yet!</p>}
        </div>
    )
}

export default TodoList;