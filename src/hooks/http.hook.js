import { useState, useCallback } from "react";
import axios from "axios";

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(
    async (
      url,
      method = "GET",
      body = null,
      headers = { "Content-Type": "application/json" },
    ) => {
      setLoading(true);

      try {
        const response = await axios(url, { method, body, headers }).catch(
          (error) => {
            console.log(error);
            if (error.response) {
              // Когда код состояния ответа выходит за пределы диапазона 2xx
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              // Когда не был получен ответ после того, как запрос был сделан
              console.log(error.request);
            } else {
              // Ошибка
              console.log(error.message);
            }
          },
        );

        const { data } = response;
        console.log(data);

        setLoading(false);
        return data;
      } catch (e) {
        setLoading(false);
        setError(e.message);
        throw e;
      }
    },
    [],
  );

  const clearError = useCallback(() => setError(null), []);

  return {
    loading,
    request,
    error,
    clearError,
  };
};
