import { useRef, useState } from "react";

export const useCarousel = (itemSize) => {
  const trackRef = useRef();
  const [leftPosition, setLeftPosition] = useState(0);
  const [start, setStart] = useState(0);
  const [change, setChange] = useState(0);

  const handlePrevClick = () => {
    if (leftPosition > 0) {
      trackRef.current.style.left = `${-1 * (leftPosition - itemSize)}px`;
      setLeftPosition(leftPosition - itemSize);
    } else {
      trackRef.current.style.left = `-${
        trackRef.current.offsetWidth -
        trackRef.current.parentElement.offsetWidth
      }px`;
      setLeftPosition(
        trackRef.current.offsetWidth -
          trackRef.current.parentElement.offsetWidth
      );
    }
  };

  const handleNextClick = () => {
    if (
      leftPosition <
      trackRef.current.offsetWidth - trackRef.current.parentElement.offsetWidth
    ) {
      trackRef.current.style.left = `${-1 * (leftPosition + itemSize)}px`;
      setLeftPosition(leftPosition + itemSize);
    } else {
      trackRef.current.style.left = 0;
      setLeftPosition(0);
    }
  };

  const handleDragStart = (e) => {
    setStart(e.clientX);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    let touch = e.clientX;
    setChange(start - touch);
  };

  const handleDragEnd = (e) => {
    if (
      change > 0 &&
      leftPosition < trackRef.current.offsetWidth - trackRef.current.parentElement.offsetWidth
    ) {
      trackRef.current.style.left = `${-1 * (leftPosition + itemSize)}px`;
      setLeftPosition(leftPosition + itemSize);
    } else if (leftPosition > 0) {
      trackRef.current.style.left = `${-1 * (leftPosition - itemSize)}px`;
      setLeftPosition(leftPosition - itemSize);
    }
  };

  const handleTouchStart = (e) => {
    setStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    let touch = e.touches[0];
    setChange(start - touch.clientX);
  };

  const handleTouchEnd = (e) => {
    if (
      change > 0 &&
      leftPosition < trackRef.current.offsetWidth - trackRef.current.parentElement.offsetWidth
    ) {
      trackRef.current.style.left = `${-1 * (leftPosition + itemSize)}px`;
      setLeftPosition(leftPosition + itemSize);
    } else if (leftPosition > 0) {
      trackRef.current.style.left = `${-1 * (leftPosition - itemSize)}px`;
      setLeftPosition(leftPosition - itemSize);
    }
  };

  return {
      handleNextClick, 
      handlePrevClick, 
      handleDragStart, 
      handleDragEnd, 
      handleDragOver,
      handleTouchEnd,
      handleTouchMove,
      handleTouchStart, 
      trackRef,

    }
};
