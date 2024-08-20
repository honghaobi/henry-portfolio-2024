import { useEffect } from "react";
import { gsap } from "gsap";

export const useArrowKeyRotation = (ref, onKeyPress) => {
  useEffect(() => {
    let debounceTimeout;

    const handleKeyDown = (event) => {
      clearTimeout(debounceTimeout);
      if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
        gsap.to(ref.current.rotation, {
          z: ref.current.rotation.z - 0.35,
          duration: 1,
        });

        onKeyPress(ref.current.rotation.z, true);
      } else if (event.key === "ArrowDown" || event.key === "ArrowRight") {
        gsap.to(ref.current.rotation, {
          z: ref.current.rotation.z + 0.35,
          duration: 1,
        });
        onKeyPress(ref.current.rotation.z, false);
      }
      debounceTimeout = setTimeout(() => {
        onKeyPress(ref.current.rotation.z, null);
      }, 500);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      clearTimeout(debounceTimeout);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [ref]);
  return ref.current?.rotation.z;
};
