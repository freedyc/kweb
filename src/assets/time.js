import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const refreshTime = () => {
    return { type: 'REFRESH_TIME', time: new Date().toJSON() };
}
class Time extends React.Component {

    componentWillMount() {
        const { refreshTime } = this.props;
        this.timeId = setInterval(() => refreshTime(), 1000);
    }

    componentWillUnmount() {
        console.log('clear Interval')
        clearInterval(this.timeId)
    }

    render() {
        const { time } = this.props;
        return (
            <div>时间：{time}</div>
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


