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
      <>
        <div id="preloader">
          <div id="loader" className="dots-fade">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </>
    )
  );
}

export default PreLoader;
