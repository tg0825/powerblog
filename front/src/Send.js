import React, {useState, useEffect} from 'react';
import { SampleConsumer } from './contexts/sample';

class Send extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            input: ''
        }
    }
    
    componentDidMount() {
        // :: 초기 값 설정
        this.setState({
            input: this.props.value
        });
    }
    
    handleChange(e) {
        this.setState({ 
            input: e.target.value 
        });
    }
    
    handleSubmit(e) {
        e.preventDefault();
        // contenxt api 메서드 활용
        this.props.setValue(this.state.input);
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input value={this.input} onChange={this.handleChange.bind(this)} type="text"/>
                    <button type="submit">set</button>
                </form>
            </div>
        );
    }
}

const SendsContainer = () => {
    return <SampleConsumer>
        {({state, actions}) => (
            <Send 
                value={state.value}
                setValue={actions.setValue}
            />
        )}
    </SampleConsumer>
}

export default SendsContainer;