import React from 'react';
import Head from 'next/head';

import {
  LandingPage
} from '@/components';

export const metadata = {
  title: 'Mock Response'
};

const page = () => (
  <LandingPage />
);

export default page;
