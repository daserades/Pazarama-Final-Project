import React from 'react';
import './index.css';
import PropTypes from 'prop-types';

function InputField(props) {
  /*Biz aşağıda değişken olan değerleri (type, placeholder, label) destructuring yöntemiyle propstan alıp farklı componentlerde farklı isim ve şekillerle kullanmak adına düzenledik */

  const { label, type, placeholder, value, onChange, name, onBlur } = props;

  return (
    <div className="field-container">
      <span className="field-title">{label}</span>
      <div>
        <input
          value={value}
          onChange={onChange}
          className="field-input"
          type={type}
          placeholder={placeholder}
          name={name}
          onBlur={onBlur}
        />
      </div>
    </div>
  );
}

InputField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  onBlur: PropTypes.func
};

export default InputField;
