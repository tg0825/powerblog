import React, { Component, createContext } from 'react';

const Context = createContext(); // Context 를 만듭니다.

// Context 안에는 Provider 와 Consumer 라는게 존재합니다.
// 이 둘은, Context 를 이용하기 위해 필요한 컴포넌트들입니다.
// Consumer 는 나중에 내보내줄 때 편하도록 SampleConsumer 라고 부르도록 설정했습니다.
const { 
    Provider, 
    Consumer: AnotherConsumer
} = Context; 

// Provider 에서 state 를 사용하기 위해서 컴포넌트를 새로 만들어줍니다.
class AnotherProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'another 기본값'
        }
        
        this.actions = {
            setValue: (value) => {
                this.setState({value});
            }
        };
    }
    
    render() {
        const { state, actions } = this;
        const value = { state, actions };
        return (
            <Provider value={value}>
                {this.props.children}
            </Provider>
        )
    }
}

// 내보내줍니다.
export {
  AnotherProvider,
  AnotherConsumer,
};