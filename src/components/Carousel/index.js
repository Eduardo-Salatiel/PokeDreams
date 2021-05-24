import { SpinnerCircular } from "spinners-react";
import { useCarousel } from "../../hooks/useCarousel";
import "./style.scss";

const Carousel = ({ children, itemWidth = 300, loading }) => {
  const itemSize = itemWidth + 3;
  const {
    handleNextClick,
    handlePrevClick,
    handleDragStart,
    handleDragEnd,
    handleDragOver,
    handleTouchEnd,
    handleTouchMove,
    handleTouchStart,
    trackRef,
  } = useCarousel(itemSize);

  return (
    <section className="carousel">
      {loading ? (
        <SpinnerCircular
          size={100}
          style={{ margin: "0 30px" }}
          color="#ef4036"
        />
      ) : (
        <div className="carousel-slick-list">
          <div
            className="carousel-slick-list-btn prev"
            onClick={handlePrevClick}
            />
          <div
            className="carousel-slick-list-track"
            onDragOver={handleDragOver}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onTouchMove={handleTouchMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            ref={trackRef}
          >
            {children}
          </div>
          <div
            className="carousel-slick-list-btn next"
            onClick={handleNextClick}
          />
        </div>
      )}
    </section>
  );
};

export default Carousel;
