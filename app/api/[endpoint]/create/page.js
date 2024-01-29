import React from 'react';
import Head from 'next/head';

import {
  CreateEndpoint
} from '@/components';

export const metadata = {
  title: 'Create Endpoint | Mock Res'
};

const page = () => (
  <CreateEndpoint />
);

export default page;
