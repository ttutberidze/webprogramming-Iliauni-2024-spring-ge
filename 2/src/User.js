
const user = ({name, onInputChange}) => {
    return (
        <div>
            <p><input type='text' value={name} onChange={onInputChange} /></p>
            <p>User Name: {name}</p>
        </div>
    )
}

export const person = ({name, age}) => {
    return (
        <div>
            <p>Person Name: {name}</p>
            <p>Person Age: {age}</p>
        </div>
    )
}

export default user;