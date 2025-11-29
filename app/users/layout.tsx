import AppBreadCrumb from '@/components/AppBreadCrumb';
import React from 'react';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AppBreadCrumb />
      {children}
    </>
  );
}
