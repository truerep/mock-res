import React from 'react';

import styles from './styles.module.css';

const dummy = {
  user_id: 123,
  email: 'placeholder@example.com',
  is_active: true,
  registration_date: '2024-01-29',
  preferences: {
    theme: 'light',
    language: 'en'
  }
};

const CreateEndpoint = ({
  endPoint,
  textareaRef,
  setResponse,
  handleBeautify,
  generateApi,
  isLoading
}) => (
  <div className={styles.container}>
    <div className={styles.endpoint}>
      <p>
        http://mock-res.netlify.app/api/
        {endPoint}
      </p>
    </div>
    <div className={styles.responseWrapper}>
      <textarea
        id="response"
        onChange={(e) => setResponse(e.target.value)}
        onKeyUp={() => handleBeautify()}
        ref={textareaRef}
        className={styles.response}
        placeholder={JSON.stringify(dummy, undefined, 4)}
      />
    </div>
    <div className={styles.btnWrapper}>
      <button
        type="button"
        onClick={() => generateApi()}
        className="btn-primary"
      >
        {isLoading ? 'Generating...' : 'Generate'}
      </button>
    </div>
  </div>
);

export default CreateEndpoint;
