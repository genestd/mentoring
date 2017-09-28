import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { setFormField, setLoginMsg, login } from '../src/store/actions/loginActions';

class Login extends React.Component {

  /*
  * Basic Validation: If username or password are blank, set error message
  * and toggle CSS to display.
  * Otherwise, attempt to login with credentials.
  */
  validate = () => {
    if (this.props.login.username === ''){
      this.props.actions.setLoginMsg({msg: 'Username must be populated', css: 'show'});
      return;
    }
    if (this.props.login.password === ''){
      this.props.actions.setLoginMsg({msg: 'Password must be populated', css: 'show'});
      return;
    }
    this.props.actions.login({
      username: this.props.login.username,
      password: this.props.login.password
    });
  }

  render() {
    return (
      <div className="modal-content">
        <div className="form-header">
          Sign In
        </div>
        <div className="form-body">
          <div className="form-input-group">
              <input
                id="username"
                type="text"
                placeholder="Username"
                value={this.props.login.username}
                onChange={e => this.props.actions.setFormField({ id: e.target.id, value: e.target.value })}
                required
              />
          </div>
          <div className="form-input-group">
              <input
                id="password"
                type="password"
                placeholder="Password"
                required
                value={this.props.login.password}
                onChange={e => this.props.actions.setFormField({ id: e.target.id, value: e.target.value })}
              />
          </div>
          <div className={`form-error ${this.props.login.loginErrorClass}`} id="error">
            {this.props.login.loginMsg}
          </div>
          <div className="form-input-group">
            <input className="button" id="btn-continue" type="button" value="Continue" onClick={this.validate}/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  login: state.login,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ setFormField, setLoginMsg, login }, dispatch ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
