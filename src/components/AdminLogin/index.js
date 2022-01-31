import React from 'react';
import './index.css';
import { useFormik } from 'formik';
import validationSchema from './validation';
import Button from '../Button';

function AdminLogin() {
  const { handleChange, handleSubmit, values, errors, touched, handleBlur } = useFormik({
    initialValues: {
      userName: '',
      password: ''
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema
  });
  return (
    <div>
      <form className="adminContainer" onSubmit={handleSubmit}>
        <hr />
        <h2>Admin Login</h2>
        <div className="userNamePosition">
          <input
            name="userName"
            className="adminInput"
            type="text"
            placeholder="Please Enter Your User Name"
            onChange={handleChange}
            value={values.userName}
            onBlur={handleBlur}
          />
          {errors.userName && touched.userName && (
            <div className="errorAdmin">{errors.userName}</div>
          )}
        </div>
        <div className="passwordPosition">
          <input
            name="password"
            className="adminInput"
            type="password"
            placeholder="Please Enter Your Password"
            onChange={handleChange}
            value={values.password}
            onBlur={handleBlur}
          />
          {errors.password && touched.password && (
            <div className="errorAdmin">{errors.password}</div>
          )}
        </div>
        <Button className="buttonAdmin" buttonName="Login" type="submit" />
      </form>
    </div>
  );
}

export default AdminLogin;
