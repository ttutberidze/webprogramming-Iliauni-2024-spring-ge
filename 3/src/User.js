import { memo } from "react";

const User = ({name, onInputChange, onDelete, clearUser, index}) => {
    // useEffect(() => {
    //     console.log(name + ' is mounted')
    //     return () => {
    //         console.log(`${name} is unmounted`)
    //     }
    // })
    console.log(name)
    return (
        <div>
            <p>
                <input 
                    type='text' 
                    value={name} 
                    onChange={(event) => onInputChange(event.target.value, index)} 
                />
                <button onClick={() => onDelete(index)}>Delete</button>
                <button onClick={() => clearUser(index)}>Clear</button>
            </p>
            <p>User Name: {name}</p>
        </div>
    )
}

export default memo(User);