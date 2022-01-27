import React from 'react';
import { connect } from 'react-redux';
import { inputUsernameLogin, inputPasswordLogin} from '../redux/action';
import {Link} from 'react-router-dom';


function LoginPage( props ){

    const onBtnClickLogin = () => {
        console.log(props.login)
    }

    return(
         <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="text" className="form-control" onChange={(e)=> props.inputUsernameLogin(e.target.value)} placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" onChange={(e)=> props.inputPasswordLogin(e.target.value)} placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    </div>
                </div>

                 <Link to='/home'>
                <p className="blue-text ml-1">
                  Login
                </p>
                </Link>

                <button type="button" className="btn btn-primary btn-block" onClick={onBtnClickLogin}>Submit</button>
            </form>
    )
}

const mapStateToProps = ({ login }) => {
    return { login }
}

export default connect(mapStateToProps, { inputUsernameLogin, inputPasswordLogin })(LoginPage);