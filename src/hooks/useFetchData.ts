import { useEffect, useState } from "react";

function useFetchData<T>(url: string): T | undefined {
  const [data, setData] = useState<T | undefined>(undefined);

  useEffect(() => {
    let ignoreUntilFinished = false;
    fetch(url)
      .then((r) => r.json())
      .then((json: T) => {
        if (!ignoreUntilFinished) {
          setData(json);
        }
      });
    return () => {
      ignoreUntilFinished = true;
    };
  }, [url]);

  return data;
}

export default useFetchData;
