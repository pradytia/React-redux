import React from 'react';
import { connect } from 'react-redux';


function HomePage(props){

    return(
        <div>
                Welcome {props.login.username}
        </div>
    )
}

const mapStateToProps = ({ login }) => {
    return { login }
}

export default connect(mapStateToProps, { })(HomePage);