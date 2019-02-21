import React from 'react';
import { connect } from 'redux';

const Time = (props) => {
    return (
        <div>时间：{props.time}</div>
    )
};

const mapStateToProps = (state) => ({
    time: state.time
});
export default connect(mapStateToProps)(Time);


