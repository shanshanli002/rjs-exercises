const Person = ({name, age, hobbies}) => {
    return (
        <div>
            <p>Learn some information about this person</p>
            <h3>{name.length > 8? name.split('').slice(0,8).join('') : name}</h3>
            <h3>{age > 18? "please go vote!": "you must be 18"}</h3>
            <ul> <h4>hobbies:</h4>
                {hobbies.map(hobby => <li>{hobby}</li>)}
            </ul>
        </div>
    )
}