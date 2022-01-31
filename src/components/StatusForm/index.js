import React from 'react';
import './index.css';
import Button from '../Button';
import { useFormik } from 'formik';
import validationSchema from './validation';
import AdminLogin from '../AdminLogin';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function StatusForm() {
  const applicationCodes = useSelector((state) => state.applicationForm.applicationCode);
  const history = useHistory();

  const { handleChange, handleSubmit, values, errors, touched, handleBlur } = useFormik({
    initialValues: {
      applicationCode: ''
    },
    onSubmit: (values) => {
      if (applicationCodes == values.applicationCode) {
        history.push('/showapplication');
      } else {
        history.push('/fail');
      }
    },
    validationSchema
  });
  return (
    <div className="rightSideContainer">
      <form onSubmit={handleSubmit}>
        <h2>Application Status</h2>
        <div className="queryInputPosition">
          <input
            name="applicationCode"
            className="queryInput"
            type="text"
            onChange={handleChange}
            placeholder="Please Enter Your Application Code"
            value={values.applicationCode}
            onBlur={handleBlur}
          />
          {errors.applicationCode && touched.applicationCode && (
            <div className="errorStatus">{errors.applicationCode}</div>
          )}
        </div>

        <Button className="buttonQuery" buttonName="Check" type="submit" />
      </form>
      <AdminLogin />
    </div>
  );
}

export default StatusForm;
