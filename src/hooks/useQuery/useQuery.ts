import { useCallback, useEffect, useRef, useState } from 'react';
/**
 *
 * @param fetchCallback async callback function to call (this will get called within the initial render)
 * @param dependencies dependencies for the callback, every-time dependencies change fetchCallback will call executed
 * @param initValue initial value for the return value `data`
 * @param disabled weather the fetchCallback is disabled
 * @returns {
 *  data,
 *  isLoading,
 *  errors,
 *  reFetch,
 *  firstFetchedData
 * }
 */
const useQuery = <T>(
  fetchCallback: () => Promise<T>,
  dependencies: unknown[],
  initValue: unknown,
  disabled = false,
) => {
  const [data, setData] = useState<T>(initValue as T);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>();
  const firstFetchedData = useRef<{ data: T | null }>({ data: null });

  const callFetch = useCallback(async () => {
    if (disabled) return null;
    setIsLoading(true);
    try {
      const res = await fetchCallback();

      setData(res);
      if (firstFetchedData.current?.data === null) {
        firstFetchedData.current.data = res;
      }
      setIsLoading(false);

      return res;
    } catch (e) {
      console.log('error in hook', { e });

      setError(e);

      throw e;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disabled]);

  useEffect(() => {
    callFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...dependencies]);

  const reFetch = async () => {
    console.log('refetch,');

    const res = await callFetch();
    console.log('refetch', { res });
    firstFetchedData.current.data = res;
    return res;
  };

  return {
    data,
    isLoading,
    firstFetchedData: firstFetchedData.current?.data,
    error,
    reFetch,
    setData,
  };
};

export { useQuery };
