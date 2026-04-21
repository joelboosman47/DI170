import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Requires a loader
import { Carousel } from "react-responsive-carousel";
import hongkong from "./assets/hongkong.jpg";
import japan from "./assets/japan.webp";
import vegas from "./assets/las-vegas.webp";
import macao from "./assets/macau.webp";

const MyCarousel = () => {
	return (
		<Carousel>
			<div>
				<img src={hongkong} alt="Hong Kong" />
				<p className="legend">Hong Kong</p>
			</div>
			<div>
				<img src={macao} alt="Macao" />
				<p className="legend">Macao</p>
			</div>
			<div>
				<img src={japan} alt="Japan" />
				<p className="legend">Japan</p>
			</div>
			<div>
				<img src={vegas} alt="Las Vegas" />
				<p className="legend">Las Vegas</p>
			</div>
		</Carousel>
	);
};

export default MyCarousel;
