// src/hooks/useDateTime.ts
import { useEffect, useState } from 'react';

export default function useDateTime(): string {
  const [dateTime, setDateTime] = useState<string>(() => {
    return new Date().toLocaleString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(
        new Date().toLocaleString([], {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return dateTime;
}
