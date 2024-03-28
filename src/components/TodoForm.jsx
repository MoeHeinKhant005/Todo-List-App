const TodoForm = () => {
    return (
        <div className="w-[85%] h-auto flex flex-row justify-center items-center">
            <input 
            type="text"
            placeholder="Enter a new task..."
            className="w-4/5 h-[50px] bg-slate-100 text-slate-800 font-dm-sans text-sm rounded-s px-5 border-none outline-none"
            />
            <button className="w-1/5 h-[50px] bg-primary text-white rounded-e">
                <i className="fa-solid fa-circle-plus"></i>
            </button>
        </div>
    )
}

export default TodoForm;