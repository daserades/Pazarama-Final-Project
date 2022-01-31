import React from 'react';
import ApplicationForm from '../../components/ApplicationForm';
import StatusForm from '../../components/StatusForm';

function CreateApplication() {
  return (
    <div>
      <StatusForm />
      <ApplicationForm />
    </div>
  );
}

export default CreateApplication;
