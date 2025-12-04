import { Carousel } from "react-bootstrap";
import "./carousel.css"

import doctor1 from "../../assets/images/doctor1.jpg";
import doctor2 from "../../assets/images/doctor2.jpg";
import doctor3 from "../../assets/images/doctor3.jpg";

const CustomCarousel = () => {
    return (
        <>
            <div className="carouselSize">
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={doctor1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Empowering doctors with faster access to patient information</h3>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={doctor2}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Secure and confidential medical records management</h3>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={doctor3}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Simplifying appointments and consultations for every patient</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
}

export default CustomCarousel;