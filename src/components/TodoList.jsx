const TodoList = () => {
    return (
        <div className="w-[85%] h-auto flex flex-col justify-start items-center gap-y-2">
            <div className="todo-item w-full h-[50px] bg-white flex flex-row justify-between items-center gap-x-2 px-2">
                <input type="checkbox" className="w-[5%] accent-primary text-base"/>
                <span className="w-[80%] font-dm-sans text-sm text-slate-900 text-ellipsis overflow-hidden whitespace-nowrap"></span>
                <i className="fa-solid fa-trash text-slate-600 text-base w-[5%]"></i>
            </div>
        </div>
    )
}

export default TodoList;