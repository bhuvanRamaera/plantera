import "./review.css";

const ReviewImg = () => {
  return (
    <div className="review-img w-[47%] flex flex-col justify-center mt-5">
      <div className="small-box1"></div>
      <div className="spices5"></div>
      <div className="spices6"></div>
      <div className="order absolute z-50 bg-gray-50 rounded-3xl border rotating-border rotating-border--google mt-20">
        <div className="order-info w-[85%] mx-auto my-3">
          <div className="flex justify-between">
            <p>Order Now</p>
            <p>10.00$</p>
          </div>

          <div>
            <p className="order-desc mt-6">
              Lorem ipsum dolor sit amet, consectetur elit. Quisque diam
              pellentesque bibendum fringilla bibendum. Urna
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewImg;
