import React from "react";
import Slider from "react-slick";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Rahul Dalvi",
    role: "Verified Buyer",
    image: "https://i.pravatar.cc/100?img=12",
    review:
      "Amazing shopping experience. The quality exceeded my expectations and delivery was super fast.",
  },
  {
    id: 2,
    name: "Priya Shinde",
    role: "Fashion Lover",
    image: "https://i.pravatar.cc/100?img=32",
    review:
      "Absolutely loved the women's collection. Beautiful designs and affordable prices.",
  },
  {
    id: 3,
    name: "Rajesh Kumar",
    role: "Regular Customer",
    image: "https://i.pravatar.cc/100?img=15",
    review:
      "ShopMe has become my favorite online store. Great products and excellent customer support.",
  },
  {
    id: 4,
    name: "Sneha Jadhav",
    role: "Happy Customer",
    image: "https://i.pravatar.cc/100?img=25",
    review:
      "Everything arrived exactly as shown. Highly recommended!",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-100 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="container">

        <div className="text-center mb-14">
          <p className="uppercase tracking-[5px] text-primary font-semibold">
            Testimonials
          </p>

          <h2 className="text-4xl font-bold mt-2">
            What Our Customers Say ❤️
          </h2>

          <p className="text-gray-500 mt-3">
            Trusted by thousands of happy shoppers.
          </p>
        </div>

        <Slider {...settings}>
          {testimonials.map((item) => (
            <div key={item.id} className="p-4">

              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl duration-300 border border-gray-100">

                <FaQuoteLeft className="text-primary text-4xl mb-5" />

                <p className="text-gray-600 dark:text-gray-300 leading-7">
                  {item.review}
                </p>

                <div className="flex gap-1 mt-5 text-yellow-400">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <div className="flex items-center gap-4 mt-8">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />

                  <div>
                    <h3 className="font-bold">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.role}</p>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </Slider>

      </div>
    </section>
  );
};

export default Testimonials;