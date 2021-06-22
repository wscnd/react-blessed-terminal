import React from 'react';

import useDeepCompareEffect from 'use-deep-compare-effect';

import useInterval from '@use-it/interval';

import { status } from '../utils/constants';

const useRequest = ({ requestInterval, callback, options }) => {
  const [data, setData] = React.useState({
    status: status.loading,
    error: null,
    data: null,
  });

  const request = React.useCallback(
    async (options) => {
      setData({ status: status.loading, error: null, data: null });
      try {
        const data = await callback(options);
        setData({ data: data, error: null, status: status.complete });
      } catch (error) {
        setData({ data: null, error, status: status.error });
      }
    },
    [callback],
  );

  useDeepCompareEffect(() => {
    request(options);
  }, [request, options]);

  useInterval(() => {
    request(options);
  }, requestInterval);

  return data;
};

export default useRequest;
