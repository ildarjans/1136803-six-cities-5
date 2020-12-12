import React from "react";
import PropTypes from "prop-types";
import {loginUser} from "../../middleware/thunk-api";
import {connect} from "react-redux";

const EMAIL_REGEX = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

const EMAIL_ERROR = `Email введен неправильно`;
const PASSWORD_ERROR = `Пароль не введен`;

export class LoginForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this._emailRef = React.createRef();
    this._passwordRef = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
    this._handleFieldValueChange = this._handleFieldValueChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    if (this._isFormValid()) {
      const authData = {
        email: this._emailRef.current.value,
        password: this._passwordRef.current.value,
      };
      this.props.onSubmit(authData);
    }
  }

  _isInputValid(input, isMatch, errorMessage) {
    if (isMatch) {
      input.setCustomValidity(``);
    } else {
      input.setCustomValidity(errorMessage);
    }

    return isMatch;
  }

  _isEmailValid() {
    return this._isInputValid(
        this._emailRef.current,
        EMAIL_REGEX.test(this._emailRef.current.value),
        EMAIL_ERROR
    );
  }

  _isPasswordValid() {
    return this._isInputValid(
        this._passwordRef.current,
        this._passwordRef.current.value.length > 0,
        PASSWORD_ERROR
    );
  }

  _isFormValid() {
    return this._isEmailValid() && this._isPasswordValid();
  }

  _handleFieldValueChange() {
    this._isFormValid();
  }

  render() {
    return (
      <form
        className="login__form form"
        action="#"
        method="post"
        onSubmit={this.handleSubmit}
      >
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">E-mail</label>
          <input
            ref={this._emailRef}
            onChange={this._handleFieldValueChange}
            className="login__input form__input"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">Password</label>
          <input
            ref={this._passwordRef}
            onChange={this._handleFieldValueChange}
            className="login__input form__input"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>
        <button className="login__submit form__submit button" type="submit">Sign in</button>
      </form>
    );
  }
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(loginUser(authData));
  }
});

export default connect(null, mapDispatchToProps)(LoginForm);
