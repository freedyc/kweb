import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ReactReduxContext } from 'react-redux';
const refreshTime = () => {
    return { type: 'REFRESH_TIME', time: new Date().toJSON() };
}
class Time extends React.Component {
    constructor(props, context) {
        super(props);
        console.log(context);
    }   
    componentWillMount() {
        const { refreshTime } = this.props;
        this.timeId = setInterval(() => refreshTime(), 1000);
    }

    componentWillUnmount() {
        console.log('clear Interval')
        clearInterval(this.timeId)
    }

    render() {
        return (
            <ReactReduxContext.Consumer>
               {({store}) => { return (<div>时间：{store.getState().time}</div>)}}
            </ReactReduxContext.Consumer>
        )
    }
};

const mapStateToProps = (state) => ({
    time: state.time
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    refreshTime,
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Time);


