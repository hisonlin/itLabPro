import React, {useEffect, useRef, useState} from 'react';

const Input = ({updateEquation}) => {
    const [input, setInput] = useState('');
    console.log('input', input);
    const [firstNumber, setFirstNumber] = useState('');
    console.log('firstNumber', firstNumber);
    const [operator, setOperator] = useState('');
    console.log('operator', operator);
    const[equation, setEquation] = useState('');
    console.log('equation', equation);

    const inputRef = useRef();
    const additionRef = useRef();
    const subtractionRef = useRef();
    const multiplicationRef = useRef();
    const divisionRef = useRef();
    const equalRef = useRef();

    useEffect(() => {
        if (equation) {
            updateEquation(equation);
        }
    }, [equation]);


    const handleNumberClick = (event) => {
        const value = event.target.innerText;
        setInput((input) => input + value);
    };

    const handleOperatorClick = (event) => {
        setFirstNumber(input);
        setInput('');
        const operator = event.target.innerText;
        setOperator(operator);
        additionRef.current.disabled = true;
        subtractionRef.current.disabled = true;
        multiplicationRef.current.disabled = true;
        divisionRef.current.disabled = true;
    };

    const handleEqualClick = () => {
        if(!firstNumber && !operator && !input) {
            setInput('')
        }else if(input && !operator) {
            setInput(input)
        }else{
            let result = 0;
            const num1 = parseFloat(firstNumber);
            console.log('num1', num1);
            const num2 = parseFloat(input);
            console.log('num2', num2);

            switch (operator) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    result = num1 / num2;
                    break;
                default:
                    result = 0;
            }
            setInput(result.toString());
            setFirstNumber('');
            setOperator('');
            setEquation(`${num1} ${operator} ${num2} = ${result}`);
            additionRef.current.disabled = false;
            subtractionRef.current.disabled = false;
            multiplicationRef.current.disabled = false;
            divisionRef.current.disabled = false;
        }

    };

    const handleClearClick = () => {
        setInput('');
        setFirstNumber('');
        setOperator('');
        setEquation('');
        additionRef.current.disabled = false;
        subtractionRef.current.disabled = false;
        multiplicationRef.current.disabled = false;
        divisionRef.current.disabled = false;

    };

    return (
        <div className={'calculatorContent'}>
            <div className={'equation'}>
                {equation? equation:`${firstNumber} ${operator}`}
            </div>
            <div>
                <input
                    type="number"
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
            </div>
            <div className={'buttonList'}>
                <div className={'buttonRow'}>
                    <button onClick={handleNumberClick}>9</button>
                    <button onClick={handleNumberClick}>8</button>
                    <button onClick={handleNumberClick}>7</button>
                    <button ref={additionRef} onClick={handleOperatorClick}>+</button>
                </div>
                <div className={'buttonRow'}>
                    <button onClick={handleNumberClick}>6</button>
                    <button onClick={handleNumberClick}>5</button>
                    <button onClick={handleNumberClick}>4</button>
                    <button ref={subtractionRef} onClick={handleOperatorClick}>-</button>
                </div>
                <div className={'buttonRow'}>
                    <button onClick={handleNumberClick}>3</button>
                    <button onClick={handleNumberClick}>2</button>
                    <button onClick={handleNumberClick}>1</button>
                    <button ref={multiplicationRef} onClick={handleOperatorClick}>*</button>
                </div>
                <div className={'buttonRow'}>
                    <button onClick={handleNumberClick}>0</button>
                    <button ref={equalRef} onClick={handleEqualClick}>=</button>
                    <button ref={divisionRef} onClick={handleOperatorClick}>/</button>
                    <button onClick={handleClearClick}>C</button>
                </div>
            </div>
        </div>
    );
};

export default Input;
