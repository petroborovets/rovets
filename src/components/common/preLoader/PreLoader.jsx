import s from './PreLoader.module.css';
import { useState, useEffect } from "react";

/**
 * PreLoader
 * TODO: requires styles implementation
 * @returns {false|JSX.Element}
 * @constructor
 */
function PreLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    isLoading && (
        <div className={s.pre_loader}>
        </div>
    )
  );
}

export default PreLoader;
