import React from 'react';
import { connect, Provider } from 'react-redux';
import { createStore } from 'redux';

/** 
 * reducer是一个pure function, 没有任何副作用
 * 只依赖传入参数，并且根据参数返回唯一
 * 
 * 不同的reducer可以合并成在一个rootReducer中
 */
const reducer = (state, action) => {
  switch(action.type) {
    case 'INCREMENT': return { counter: state.counter + 1 };
    default: return state;
  }
}

/**
 * 只有一个全局state对象维护整个程序的状态，
 * 这也就是所谓的 single source
 * 
 * store代表着state, 但是是通过reducer
 * 当然你也可以传入处室状态state
 */
const store = createStore(reducer, { counter: 0 });

class Counter extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { counter, onIncrement } = this.props;
    return (
      <div>
        <h1>{counter}</h1>
        <button onClick={onIncrement}>Add</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { counter: state.counter };
}

const mapDispatchToProps = (dispatch) => {
  return {
    /**
     * Action Creator
     * 唯一修改 state 的方式就是通过触发 action
     * action 由 action creator 构造，
     * 本质上就是通过 dispath 方法构造一个 command
     * （command比event更合适，因为这里有 command hander
     * 而不涉及订阅和发布）
     */
    onIncrement: () => {
      dispatch({
        type: 'INCREMENT'
      });
    }
  }
}
/**
 * connect 函数把 mapStateToProps 和 mapDispatchToProps 的返回值
 * 并把它们作为 Counter 组件的 props
 * connect 返回的是一个 wrapper component
 */
Counter = connect(mapStateToProps, mapDispatchToProps)(Counter);

class SampleApp extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      /**
       * Provider 将应用包裹起来，
       * 并且将store传递给孩子组件
       */
      <Provider store={store}>
        <Counter />
      </Provider>
    )
  }
}

export default SampleApp;