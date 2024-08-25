import { useEffect, useState } from "react";

const TouchScrollWrapper = ({ children }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  const endTouch = function (e) {
    setShowOverlay(false);
  };

  const moveTouch = function (e) {
    if (e.targetTouches.length === 1) {
      setShowOverlay(true);
      e.preventDefault();
    }
  };

  useEffect(() => {
    const scrollableDiv = document.getElementById(children.props.id);

    scrollableDiv.addEventListener("touchend", endTouch, {
      passive: false,
    });
    scrollableDiv.addEventListener("touchmove", moveTouch, {
      passive: false,
    });
  }, []);

  return (
    <div className="touch-scroll-wrapper">
      {showOverlay && (
        <div className="touch-scrol-overlay">
          Use two fingers to scroll the list
        </div>
      )}
      {children}
    </div>
  );
};

export default TouchScrollWrapper;
