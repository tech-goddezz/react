function Todo({task, handleClick}) {


    return (
        <>
            <div className="todo-item">
                <h2>{task} </h2>
                <button onClick={handleClick}>
                    Delete {task}</button>
            </div>
        </>
    );
}

export default Todo;