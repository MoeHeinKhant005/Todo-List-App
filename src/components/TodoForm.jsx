import { useContext, createRef } from 'react'; 
import { TodoContext } from '../App';

const TodoForm = () => {

    const [todoData, setTodoData] = useContext(TodoContext);
    const todoInputRef = createRef();

    function handleAdd(){
        if(todoInputRef.current.value !== ""){
            const newTodo = {
                task: todoInputRef.current.value,
                id: todoData.length + 1
            };
            setTodoData([...todoData, newTodo]);
            todoInputRef.current.value = "";
        }
    }

    return (
        <div className="w-[85%] h-auto flex flex-row justify-center items-center">
            <input 
            type="text"
            ref={todoInputRef}
            placeholder="Add a new task..."
            className="w-4/5 h-[50px] bg-slate-100 text-slate-800 font-dm-sans text-sm rounded-s px-5 border-none outline-none"
            />
            <button className="w-1/5 h-[50px] bg-primary text-white rounded-e" onClick={handleAdd}>
                <i className="fa-solid fa-circle-plus"></i>
            </button>
        </div>
    )
}

export default TodoForm;