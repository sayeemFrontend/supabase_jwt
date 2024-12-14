import React from 'react';
import Loader from './Loader';
import WithError from './WithError';

export default function WithLoader({
  children,
  isLoading = false,
  isError = false,
}) {
  return isLoading ? (
    <Loader />
  ) : isError ? (
    <WithError>{children}</WithError>
  ) : (
    children
  );
}
