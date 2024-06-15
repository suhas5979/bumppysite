import { useEffect, useState } from 'react';
import useLocale from './useLocale';

const useTranslation = () => {
  const [locale] = useLocale();
  const [common, setCommon] = useState({});

  useEffect(() => {
    const loadCommon = async () => {
      const commonRes = await import(`../public/locales/${locale}/common.json`);
      setCommon(commonRes.default);
    };

    loadCommon();
  }, [locale]);

  const translate = (key) => {
    return common[key] || key;
  };

  return translate;
};

export default useTranslation;