'use client';

import React, {
  useEffect, useState
} from 'react';
import {
  redirect
} from 'next/navigation';

import styles from './styles.module.css';
import InitializingApp from './InitializingApp';
import {
  generateRandomEndpoint
} from '@/helpers';
import {
  checkEndpointAvailable
} from '@/api';

const InitializingAppContainer = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [apiEndpoint, setApiEndpoint] = useState('');

  const generateEndpoint = async () => {
    if (apiEndpoint.length === 0) {
      while (true) {
        const endpoint = await generateRandomEndpoint();
        const checkEndpointAvailability = await checkEndpointAvailable(endpoint);
        if (!checkEndpointAvailability) {
          sessionStorage.setItem('endpoint', endpoint);
          setApiEndpoint(endpoint);
          console.log(endpoint, checkEndpointAvailability);
          break;
        }
      }
    }
  };

  useEffect(() => {
    generateEndpoint();
  }, []);

  useEffect(() => {
    if (activeIndex > 3 && apiEndpoint.length > 0) {
      redirect(`/api/${apiEndpoint}/create`);
    }
  }, [activeIndex]);

  useEffect(() => {
    const delays = [0, 1000, 1000, 1000, 1000];

    const timerId = setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex === null ? 0 : prevIndex + 1));
    }, delays[activeIndex]);

    return () => clearTimeout(timerId);
  }, [activeIndex]);

  const handleLiClass = (index) => {
    const classes = [];

    if (index < activeIndex) {
      classes.push(styles.settled);

      if (index === 3) {
        classes.push(styles.active);
      }
    }

    if (index === activeIndex && index !== 3) {
      classes.push(styles.active);
    }

    return classes.join(' ');
  };

  return (
    <InitializingApp
      handleLiClass={handleLiClass}
      activeIndex={activeIndex}
    />
  );
};

export default InitializingAppContainer;
