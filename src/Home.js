import { useState } from "react";



const Home = () => {
    const [age, setAge] = useState(21);
    const [name, setName] = useState('Abhishek');
    const handleClick = () => {
        setName('Amar');
        setAge(22);

    };


    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}

export default Home;