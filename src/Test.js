import React, { useEffect, memo } from 'react';

export const Test = memo(({ isMoreThemFive }) => {
    useEffect(() => {
        console.log('Test Component MOUNT');
        return () => {
            console.log('Test Component UNMOUNT');
        }
    }, []);

    console.log('Test Component UPDATE', isMoreThemFive);

    return (
        <div> best Component</div>
    );
})