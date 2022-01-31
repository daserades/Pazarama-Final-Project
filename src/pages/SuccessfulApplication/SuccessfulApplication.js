import React from 'react';
import StatusForm from '../../components/StatusForm';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getApplicationAsync } from '../../redux/applicationForm/applicationFormSlice';
import { useDispatch } from 'react-redux';

function SuccessfulApplication() {
  let applicationFormInfo = useSelector((state) => state.applicationForm);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getApplicationAsync());
  }, [dispatch]);

  return (
    <div>
      <div>
        <StatusForm />
      </div>
      <div className={styles.formContainer}>
        <h1>Congratulations {applicationFormInfo.name} 🎉 </h1>
        <h4> Your Application is Successful, Thanks for Your Application 😊 </h4>
        <br />
        <br />
        <h3> Application Details</h3>
        <p>
          Name: {applicationFormInfo.name} <br />
          Last Name:{applicationFormInfo.lastName} <br />
          Age: {applicationFormInfo.age} <br />
          Identification Number: {applicationFormInfo.identificationNumber} <br />
          Reason For Application: {applicationFormInfo.reasonForApplication} <br />
          Address: {applicationFormInfo.address} <br />
          Attachments: {applicationFormInfo.attachments} <br />
          Application Code: {applicationFormInfo.applicationCode}
        </p>
      </div>
    </div>
  );
}

export default SuccessfulApplication;
