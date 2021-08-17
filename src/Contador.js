import { useState } from "react";

const Contador = ({valor}) => {

    const [conteo, setConteo] = useState(valor);

    const handleIncrease = () => {
        setConteo(conteo + 1);
    }
    
    const handleDecrease = () => {
        setConteo(conteo - 1);
    } 

    const handleReset = () => {
        setConteo(valor);
    } 

    return (
        <>
            <h1>Contador</h1>
            <h2>{conteo}</h2>
            <button onClick={handleIncrease}>+</button>
            <button onClick={handleReset}>Resetear</button>
            <button onClick={handleDecrease}>-</button>
        </>
    );
}

export default Contador;