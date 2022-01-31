import React from 'react';
import { useFormik } from 'formik';
import InputField from '../FormInput';
import './index.css';
import Button from '../Button';
import validationSchema from './validation';
import { useDispatch } from 'react-redux';
import { submitApplication } from '../../redux/applicationForm/applicationFormSlice'; // aldığımız action'lar.
import { useHistory } from 'react-router-dom';

function ApplicationForm() {
  const dispatch = useDispatch();
  let history = useHistory();

  const { handleChange, handleSubmit, values, errors, touched, handleBlur } = useFormik({
    initialValues: {
      name: '',
      lastName: '',
      age: '',
      identificationNumber: '',
      reasonForApplication: '',
      address: '',
      attachments: '',
      applicationNumber: ''
    },
    validationSchema,
    // onSubmit: async (values) => {
    //   values.applicationNumber = Math.floor(Math.random() * 90000) + 10000;
    //   await dispatch(submitApplicationAsync(values));
    //   console.log('values');
    //   history.push('/successfulapplication');
    // },
    onSubmit: (values) => {
      dispatch(submitApplication(values));

      history.push('/successfulapplication');
    }
  });

  return (
    <div>
      <form className="formContainer" onSubmit={handleSubmit}>
        <h1>Create Your Aplication</h1>
        <div className="inputMoveRight">
          <InputField
            name="name"
            label="Name"
            type="text"
            onChange={handleChange}
            placeholder="Please Enter Your Name"
            value={values.name}
            onBlur={handleBlur}
          />
          {errors.name && touched.name && <div className="error">{errors.name}</div>}
        </div>

        <InputField
          name="lastName"
          onChange={handleChange}
          label="Last Name"
          type="text"
          placeholder="Please Enter Your Name"
          value={values.lastName}
          onBlur={handleBlur}
        />
        {errors.lastName && touched.lastName && <div className="error">{errors.lastName}</div>}

        <div className="inputMoveRight">
          <InputField
            name="age"
            onChange={handleChange}
            label="Age"
            type="text"
            placeholder="Please Enter Your Age"
            value={values.age}
            onBlur={handleBlur}
          />
          {errors.age && touched.age && <div className="error">{errors.age}</div>}
        </div>

        <InputField
          name="identificationNumber"
          onChange={handleChange}
          label="Identification Number"
          type="text"
          placeholder="Please Enter Your Identification Number"
          value={values.identificationNumber}
          onBlur={handleBlur}
        />
        {errors.identificationNumber && touched.identificationNumber && (
          <div className="error">{errors.identificationNumber}</div>
        )}

        <div className="inputMoveRight">
          <InputField
            name="reasonForApplication"
            onChange={handleChange}
            label="Reason For Application"
            type="text"
            placeholder="Please Enter Your Reason For Application"
            value={values.reasonForApplication}
            onBlur={handleBlur}
          />
          {errors.reasonForApplication && touched.reasonForApplication && (
            <div className="error">{errors.reasonForApplication}</div>
          )}
        </div>

        <InputField
          name="address"
          onChange={handleChange}
          label="Address"
          type="text"
          placeholder="Please Enter Your Adress"
          value={values.address}
          onBlur={handleBlur}
        />
        {errors.address && touched.address && <div className="error">{errors.address}</div>}
        <div className="fileInput">
          <input
            name="attachments"
            onChange={handleChange}
            type="file"
            id="files"
            className="hidden"
            value={values.attachments}
            onBlur={handleBlur}
          />

          <label htmlFor="files">Select File</label>
          {errors.attachments && <div className="error">{errors.attachments}</div>}
        </div>
        <div className="btnFix">
          <Button className="buttonForm" buttonName="Submit" type="submit" />
        </div>
      </form>
    </div>
  );
}

export default ApplicationForm;
