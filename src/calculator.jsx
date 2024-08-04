import React, {useState} from "react";

const Calculator = () => {

    const values = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'];

    const operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => b !== 0 ? a / b : 'Error: Division by zero',
    }

    const [display, setDisplay] = useState('');

    const handleClick = (value) => {
        setDisplay(prev => prev + value.toString())
    }
    const handleClear = () => {
        setDisplay('');
    }

    const calculateResult = (value) => {
      // setDisplay(eval(display))

    }

    return (
        <div className="container">
            <h1>Calculator</h1>
            <input type="text" value={display}/>
            <div className="btns">
                {
                    values.map((value) => (
                        <button key={value}
                                onClick={value === '=' ? calculateResult : () => handleClick(value)}>{value}</button>
                    ))
                }
                <button id='clear' className='clear' onClick={handleClear}>Clear</button>
            </div>
        </div>
    );
}

export default Calculator;