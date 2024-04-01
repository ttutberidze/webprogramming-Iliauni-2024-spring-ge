
const Todo = ({title, onChange}) => {
    return (
        <div>
            <p>{title}</p>
            <input value={title} onChange={onChange} />
        </div>
    )
}

export default Todo