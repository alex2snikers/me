import React, { useEffect, useState } from 'react';

import { Test } from './Test';

export const App = () => {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        console.log('df');
    }, []);

    const handleOnClick = () => {
        setCounter(counter + 1);
    }

    const isMoreThemFive = counter > 5;

    if (counter > 3) {
        return (
            <div>
                <Test key='a' isMoreThemFive={isMoreThemFive}/>
                <button onClick={handleOnClick}>Click {counter}</button>
                Hello world
            </div>
        )
    }

    return (
        <div>
            <button onClick={handleOnClick}>Click {counter}</button>
            Hello world
            <Test key='a' isMoreThemFive={isMoreThemFive}/>
        </div>
    );
};
