import React from "react";
import { FaQuoteLeft } from "react-icons/fa6";

const testimonialCard = ({ testimonial }) => {
  return (
    <div className="testimonial-card relative mt-24 max-w-2xl rounded-2xl border border-secondary-200 bg-secondary-50 px-10 py-4 text-center shadow-sm md:mx-10">
      <div className="flex justify-center">
        <FaQuoteLeft className="-mt-14 mr-2 bg-transparent text-7xl text-primary-500 xxs:-mt-12 xxs:mr-7 xxs:text-6xl md:mr-14" />
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="-mt-[68px] mb-4 h-24 w-24 rounded-full border-4 border-primary-500 object-cover md:h-28 md:w-28"
        />
        <FaQuoteLeft className="-mt-14 ml-2 scale-x-[-1] bg-transparent text-7xl text-primary-500 xxs:-mt-12 xxs:ml-7 xxs:text-6xl md:ml-14" />
      </div>
      <h2 className="text-xl font-semibold text-secondary-900">
        {testimonial.name}
      </h2>
      <p className="text-center text-sm text-secondary-500">
        {testimonial.date}
      </p>
      <p className="mt-2 text-center text-secondary-500">
        {testimonial.feedback}
      </p>
    </div>
  );
};

export default testimonialCard;
