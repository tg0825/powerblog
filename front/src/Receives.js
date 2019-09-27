import React from 'react';
import { SampleConsumer } from './contexts/sample';

const Receives = () => {
    return (
        <SampleConsumer>
            {
                ({state}) => (
                    <div>
                        Receives {state.value}
                    </div>
                )
            }
        </SampleConsumer>
    );
};

export default Receives;