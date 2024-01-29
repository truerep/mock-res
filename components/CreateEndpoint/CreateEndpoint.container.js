'use client';

import React, {
  useEffect,
  useRef,
  useState
} from 'react';
import {
  redirect
} from 'next/navigation';
import CreateEndpoint from './CreateEndpoint';
import {
  createApiEndpoint
} from '@/api';

const CreateEndpointContainer = () => {
  const [endPoint, setEndPoint] = useState('');
  const [response, setResponse] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const textareaRef = useRef(null);

  const handleBeautify = () => {
    try {
      const rawResponse = JSON.parse(document.getElementById('response').value);
      document.getElementById('response').value = JSON.stringify(rawResponse, null, 4);
    } catch (err) {}
  };

  const generateApi = async () => {
    if (!isLoading) {
      setIsLoading(true);
      const res = await createApiEndpoint(endPoint, JSON.parse(response));
      if (res?.slug) {
        const endpointUrl = `/api/${res.slug}`;
        window.location.href = endpointUrl;
      }
      setIsLoading(false);
    }
  };

  useEffect(() => {
    textareaRef.current.focus();
  }, []);

  useEffect(() => {
    const endpoint = sessionStorage.getItem('endpoint');
    console.log(endpoint, '<----endses');
    if (endpoint == null) {
      redirect('/');
    }
    if (endPoint.length <= 0) {
      setEndPoint(endpoint);
    }
  }, []);

  return (
    <CreateEndpoint
      endPoint={endPoint}
      textareaRef={textareaRef}
      isLoading={isLoading}
      setResponse={setResponse}
      handleBeautify={handleBeautify}
      generateApi={generateApi}
    />
  );
};

export default CreateEndpointContainer;
