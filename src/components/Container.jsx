import TodoForm from './TodoForm';

const Container = () => {
    return (
        <div className="w-[85%] h-auto bg-white flex flex-col justify-evenly items-center rounded">
            <h3 className="title text-primary font-lexend font-semibold text-3xl self-start mx-6">ToDo</h3>
            <TodoForm/>
        </div>
    )
}

export default Container;