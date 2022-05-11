import "./navbar/navbar.css";
import { Carousel } from "antd";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const contentStyle = {
  width: "700px",
  height: "400px",
  textAlign: "center",
};

export default function ImageCarousel({ images }) {
  return (
    <div>
      <div className="homepg" style={{ width: "600px", height: "400px"}}>
        {" "}
        <Carousel autoplay>
          <div>
            <img
              style={contentStyle}
              src="https://www.themanorrestaurant.com/blog/wp-content/uploads/2018/07/Knowles-309-wedding-decor-1.jpg"
              alt="image1"
            />
          </div>
          <div>
            <img
              style={contentStyle}
              src="https://media.istockphoto.com/photos/table-setting-for-an-event-party-or-wedding-reception-picture-id479977238?k=20&m=479977238&s=612x612&w=0&h=6yuuuuHTvosXEGwlPTdY8V4N95issAzrTTQ9ZKN1w3E="
              alt="image2"
            />
          </div>
          <div>
            <img
              style={contentStyle}
              src="https://media.istockphoto.com/photos/church-bouquets-picture-id155421318?k=20&m=155421318&s=612x612&w=0&h=gPXP-mGFRro48nCI_8Di5emPWjAOZjuWoWmPnbG6pl4="
              alt="image3"
            />
          </div>
          <div>
            <img
              style={contentStyle}
              src="https://media.istockphoto.com/photos/delicious-wedding-reception-birthday-cake-on-a-background-balloons-picture-id1163718652?k=20&m=1163718652&s=612x612&w=0&h=fPsGmNdiAIK3jsSjeP2GHKuaqdHbXF8TljRJ_FDitFU="
              alt="image4"
            />
          </div>
          <div>
            <img
              style={contentStyle}
              src="https://media.istockphoto.com/photos/gold-and-pastel-wedding-dinning-table-decoration-geometic-shapes-picture-id1131449276?k=20&m=1131449276&s=612x612&w=0&h=qdS1WP9KEu8HpUZjhHAvEBZma-BDYoA2cF-b2MFeeFQ="
              alt="image5"
            />
          </div>
          <div>
            <img
              style={contentStyle}
              src="https://media.istockphoto.com/photos/table-setting-at-a-luxury-wedding-reception-picture-id521802660?k=20&m=521802660&s=612x612&w=0&h=oD7qeaGwWayeSld5xsI-gkIhZUhOdDYlfnvRNDyBqZg="
              alt="image6"
            />
          </div>
          <div>
            <img
              style={contentStyle}
              src="https://i.pinimg.com/736x/2c/67/c2/2c67c24c25539fe31963a6d81938d63b--safari-room-safari-theme.jpg"
              alt="image7"
            />
          </div>
          <div>
            <img
              style={contentStyle}
              src="https://media.istockphoto.com/photos/table-setting-at-a-luxury-wedding-reception-picture-id521802660?k=20&m=521802660&s=612x612&w=0&h=oD7qeaGwWayeSld5xsI-gkIhZUhOdDYlfnvRNDyBqZg="
              alt="image8"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
