import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import Item from './Item';

const Header = styled.div`
background: green;
`;

const Container = () => {
    const [count, setCount] = useState(0);
    
    useEffect(()=>{
        document.title = `you clicked ${count} times`
        console.log('every time');
        
        return () => {
            console.log('bye!');
        }
    });
    
    // mount only
    useEffect(()=>{
        console.log('mount only');
    }, []);
    
    // unmount only
    useEffect(()=>{
        console.log('mount only');
        return () => {
            console.log('unmount only');
        }
    }, []);
    
    return (
        <div>
            <div>hook count! {count}</div>
            <button onClick={()=>setCount(count+1)}>click me!</button>
            <Item count={count}/>
        </div>
    );
};

export default Container;