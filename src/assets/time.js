import React from 'react';
import { connect } from 'react-redux';

const Time = (props) => {
    console.log(props);
    return (
        <div>时间：{props.time}</div>
    )
};

const mapStateToProps = (state) => ({
    time: state.time
});
export default connect(mapStateToProps)(Time);


