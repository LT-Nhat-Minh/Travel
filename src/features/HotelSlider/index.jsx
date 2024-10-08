import React from "react";
import ImageSlider from "./ImageSlider";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";

import img1_1 from "./HotelsImages/1/1.jpg";
import img1_2 from "./HotelsImages/1/2.jpg";
import img1_3 from "./HotelsImages/1/3.jpg";
import img1_4 from "./HotelsImages/1/4.jpg";

import img2_1 from "./HotelsImages/2/1.jpg";
import img2_2 from "./HotelsImages/2/2.jpg";
import img2_3 from "./HotelsImages/2/3.jpg";
import img2_4 from "./HotelsImages/2/4.jpg";

import img3_1 from "./HotelsImages/3/1.jpg";
import img3_2 from "./HotelsImages/3/2.jpg";
import img3_3 from "./HotelsImages/3/3.jpg";
import img3_4 from "./HotelsImages/3/4.jpg";

import img4_1 from "./HotelsImages/4/1.jpg";
import img4_2 from "./HotelsImages/4/2.jpg";
import img4_3 from "./HotelsImages/4/3.jpg";
import img4_4 from "./HotelsImages/4/4.jpg";

import img5_1 from "./HotelsImages/5/1.jpg";
import img5_2 from "./HotelsImages/5/2.jpg";
import img5_3 from "./HotelsImages/5/3.jpg";
import img5_4 from "./HotelsImages/5/4.jpg";

import img6_1 from "./HotelsImages/6/1.jpg";
import img6_2 from "./HotelsImages/6/2.jpg";
import img6_3 from "./HotelsImages/6/3.jpg";
import img6_4 from "./HotelsImages/6/4.jpg";

import img7_1 from "./HotelsImages/7/1.jpg";
import img7_2 from "./HotelsImages/7/2.jpg";
import img7_3 from "./HotelsImages/7/3.jpg";
import img7_4 from "./HotelsImages/7/4.jpg";

import img8_1 from "./HotelsImages/8/1.jpg";
import img8_2 from "./HotelsImages/8/2.jpg";
import img8_3 from "./HotelsImages/8/3.jpg";
import img8_4 from "./HotelsImages/8/4.jpg";

import img9_1 from "./HotelsImages/9/1.jpg";
import img9_2 from "./HotelsImages/9/2.jpg";
import img9_3 from "./HotelsImages/9/3.jpg";
import img9_4 from "./HotelsImages/9/4.jpg";
import SliderHeader from "./SliderHeader";
import {
  KeyboardArrowLeft,
  KeyboardArrowRight,
  Settings,
} from "@mui/icons-material";
import CardScripts from "./CardScripts";

HotelSlider.propTypes = {};

function HotelSlider(props) {
  const header = {
    heading: "Khách sạn hoàn hảo cho bạn 2024",
    subHeading: "Đặt phòng giá tốt nhất",
  };

  const Hotels = [
    {
      id: 1,
      images: [img1_1, img1_2, img1_3, img1_4],
      title: ["TP. Hồ Chí Minh", "Paradise Saigon Boutique Hotel & Spa"],
      rating: ["8.1", "Tuyệt vời", "(2.585 nhận xét)"],
      price: ["900.000", "1.500.000"],
      description: ["Mỗi đêm", "bao gồm thuế & phí"],
    },
    {
      id: 2,
      images: [img2_1, img2_2, img2_3, img2_4],
      title: ["Hoàn Kiếm, Hà Nội", "Hanoi Pearl Hotel"],
      rating: ["8.8", "Tuyệt vời", "(950 nhận xét)"],
      price: ["800.000", "1.050.000"],
      description: ["Mỗi đêm", "bao gồm thuế & phí"],
    },
    {
      id: 3,
      images: [img3_1, img3_2, img3_3, img3_4],
      title: ["Thanh Khê, Đà Nẵng", "Ocean View Danang Hotel"],
      rating: ["9.0", "Tuyệt vời", "(86 nhận xét)"],
      price: ["399.654", "700.489"],
      description: ["Mỗi đêm", "bao gồm thuế & phí"],
    },
    {
      id: 4,
      images: [img4_1, img4_2, img4_3, img4_4],
      title: ["Ninh Kiều, Cần Thơ", "Ninh Kieu Riverside Hotel"],
      rating: ["8.7", "Rất tốt", "(78 nhận xét)"],
      price: ["320.000", "700.000"],
      description: ["Mỗi đêm", "bao gồm thuế & phí"],
    },
    {
      id: 5,
      images: [img5_1, img5_2, img5_3, img5_4],
      title: ["Vũng Tàu, Bà Rịa - Vũng Tàu", "Vung Tau Sunset Hotel"],
      rating: ["9.3", "Tuyệt vời", "(132 nhận xét)"],
      price: ["620.000", "1.100.000"],
      description: ["Mỗi đêm", "bao gồm thuế & phí"],
    },
    {
      id: 6,
      images: [img6_1, img6_2, img6_3, img6_4],
      title: ["Hải Châu, Đà Nẵng", "The Dream Suite Danang"],
      rating: ["8.5", "Rất tốt", "(112 nhận xét)"],
      price: ["480.000", "880.000"],
      description: ["Mỗi đêm", "bao gồm thuế & phí"],
    },
    {
      id: 7,
      images: [img7_1, img7_2, img7_3, img7_4],
      title: ["Dương Đông, Phú Quốc", "Sea Breeze Hotel"],
      rating: ["9.1", "Tuyệt vời", "(67 nhận xét)"],
      price: ["550.000", "950.000"],
      description: ["Mỗi đêm", "bao gồm thuế & phí"],
    },
    {
      id: 8,
      images: [img8_1, img8_2, img8_3, img8_4],
      title: ["Hoàn Kiếm, Hà Nội", "Old Quarter View Hanoi Hostel"],
      rating: ["8.9", "Tuyệt vời", "(83 nhận xét)"],
      price: ["420.000", "790.000"],
      description: ["Mỗi đêm", "bao gồm thuế & phí"],
    },
    {
      id: 9,
      images: [img9_1, img9_2, img9_3, img9_4],
      title: ["Phú Nhuận, TP. Hồ Chí Minh", "Muong Thanh Luxury Saigon Hotel"],
      rating: ["9.4", "Tuyệt vời", "(142 nhận xét)"],
      price: ["650.000", "1.200.000"],
      description: ["Mỗi đêm", "bao gồm thuế & phí"],
    },
    {
      id: 10,
      images: [img9_1, img9_2, img9_3, img9_4],
      title: ["Phú Nhuận, TP. Hồ Chí Minh", "Muong Thanh Luxury Saigon Hotel"],
      rating: ["9.4", "Tuyệt vời", "(142 nhận xét)"],
      price: ["650.000", "1.200.000"],
      description: ["Mỗi đêm", "bao gồm thuế & phí"],
    },
    {
      id: 11,
      images: [img9_1, img9_2, img9_3, img9_4],
      title: ["Phú Nhuận, TP. Hồ Chí Minh", "Muong Thanh Luxury Saigon Hotel"],
      rating: ["9.4", "Tuyệt vời", "(142 nhận xét)"],
      price: ["650.000", "1.200.000"],
      description: ["Mỗi đêm", "bao gồm thuế & phí"],
    },
    {
      id: 12,
      images: [img9_1, img9_2, img9_3, img9_4],
      title: ["Phú Nhuận, TP. Hồ Chí Minh", "Muong Thanh Luxury Saigon Hotel"],
      rating: ["9.4", "Tuyệt vời", "(142 nhận xét)"],
      price: ["650.000", "1.200.000"],
      description: ["Mỗi đêm", "bao gồm thuế & phí"],
    },
  ];

  const [cardIndex, setCardIndex] = useState("0");

  function nextImg() {
    setCardIndex((cardIndex) => {
      if (cardIndex + 1 >= 4) return 4;
      return cardIndex + 1;
    });
  }

  function prevImg() {
    setCardIndex((cardIndex) => {
      if (cardIndex - 2 >= 0) {
        return cardIndex - 2;
      }

      return cardIndex - 1;
    });
  }

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={`slider_right_btn`} onClick={onClick}>
        <KeyboardArrowRight />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={`slider_left_btn`} onClick={onClick}>
        <KeyboardArrowLeft />
      </div>
    );
  }

  function SlidersTo() {
    const [slider, setSlider] = useState(1); // Default to scrolling 1 slide

    useEffect(() => {
      const slickSlider = document.querySelector(".slick-slider");

      const handleMouseEnter = () => {
        setSlider(2); // Change slidesToScroll to 2 when hovered
      };

      const handleMouseLeave = () => {
        setSlider(1); // Revert slidesToScroll to 1 when mouse leaves
      };

      if (slickSlider) {
        slickSlider.addEventListener("mouseenter", handleMouseEnter);
        slickSlider.addEventListener("mouseleave", handleMouseLeave);
      }

      // Cleanup on unmount
      return () => {
        if (slickSlider) {
          slickSlider.removeEventListener("mouseenter", handleMouseEnter);
          slickSlider.removeEventListener("mouseleave", handleMouseLeave);
        }
      };
    }, []); // Run only once, when component mounts

    return slider;
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: SlidersTo(),
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="HotelSlider" style={{ marginTop: "200px" }}>
      <SliderHeader header={header} />
      <Slider {...settings}>
        {/* <div
          className="Cards"
          style={{ translate: `${-(310 + 20) * cardIndex}px` }}
        > */}
        {Hotels.map((hotel, index) => (
          <div key={index}>
            <ImageSlider images={hotel.images} />
            <CardScripts
              scripts={[
                hotel.title,
                hotel.rating,
                hotel.price,
                hotel.description,
              ]}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HotelSlider;
