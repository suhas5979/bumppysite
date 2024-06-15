
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';
import { ProductService } from './SliderService';

const cards = [
    {
        text: "New Payment Regulations for Online Transactions Implemented",
        image: "/images/image1/s1.png",
        additionalText: "Explore the latest payment regulations implemented for online transactions, ensuring secure and seamless payment experiences for consumers.",
        date: "2feb 2024",
        more: "Read More",
    },
    {
        text: "Introduction of Contactless Payment Solutions in Retail Stores",
        image: "/images/image1/s2.png",
        additionalText: "Discover the advancements in retail stores with the introduction of contactless payment solutions, providing convenient and hygienic payment options for customers.",
        date: "2feb 2024",
        more: "Read More",
    },
    {
        text: "Rise of Cryptocurrency Adoption in Mainstream Payment Systems",
        image: "/images/image1/s3.png",
        additionalText: "Learn about the increasing adoption of cryptocurrencies in mainstream payment systems, reshaping traditional financial landscapes and offering alternative payment methods.",
        date: "2feb 2024",
        more: "Read More",
    },
    {
        text: "Integration of Biometric Authentication for Secure Mobile Payments",
        image: "/images/image1/s4.png",
        additionalText: "Explore the integration of biometric authentication methods for secure mobile payments, enhancing the security and user experience of digital transactions.",
        date: "2feb 2024",
        more: "Read More",
    },
    {
        text: "Enhancements in Peer-to-Peer Payment Platforms for Instant Transactions",
        image: "/images/image1/s1.png",
        additionalText: "Discover the latest enhancements in peer-to-peer payment platforms, enabling instant and seamless transactions between users, fostering financial inclusivity and convenience.",
        date: "2feb 2024",
        more: "Read More",
    },
    {
        text: "Emergence of Blockchain Technology for Transparent Cross-Border Payments",
        image: "/images/image1/s2.png",
        additionalText: "Learn about the emergence of blockchain technology for transparent cross-border payments, revolutionizing international transactions with enhanced security, speed, and transparency.",
        date: "2feb 2024",
        more: "Read More",
    },
    {
        text: "Role of Artificial Intelligence in Fraud Detection for Payment Systems",
        image: "/images/image1/s3.png",
        additionalText: "Explore the role of artificial intelligence in fraud detection for payment systems, leveraging machine learning algorithms to identify and prevent fraudulent activities, ensuring secure transactions.",
        date: "2feb 2024",
        more: "Read More",
    },
    {
        text: "Adoption of Open Banking APIs for Seamless Financial Data Sharing",
        image: "/images/image1/s4.png",
        additionalText: "Understand the adoption of open banking APIs for seamless financial data sharing, empowering consumers to securely share their financial information across various banking and fintech platforms.",
        date: "2feb 2024",
        more: "Read More",
    },
]


export default function Carousal() {
    const [products, setProducts] = useState([]);

    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 4,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const getSeverity = (product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };

    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 9)));
    }, []);

    const productTemplate = (card) => {
        return (
            <div
              //  key={index}
                style={{
                    backgroundColor: "#fff",
                    margin: "10px",
                    display: "flex",
                    flexDirection: "column",
                  //  opacity: this.state.transitioning ? 0 : 1,
                    transition: "opacity 0.5s ease-in-out",
                    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                    maxHeight: "100vh",
                    overflow: "auto",
                }}
            >
                <img
                    src={card.image}
                    style={{
                        maxWidth: "100%",
                        marginBottom: "10px",
                        height: "28vh",
                    }}
                />
                <div
                    className="card-content"
                    style={{
                        padding: "0 10px",
                        height: "15rem",
                        overflow: "auto",
                    }}
                >
                    <p
                        className="mx-2 mb-1"
                        style={{
                            textAlign: "start",
                            color: "#6d6d6d",
                            fontFamily: "Roboto, sans-serif",
                            fontSize: ".8rem",
                            fontWeight: "400",
                        }}
                    >
                        {card.date.slice(0, 1)} {card.date.slice(1)}
                    </p>
                    <h6
                        className="mx-2"
                        style={{
                            textAlign: "start",
                            color: "#3E3232",
                            fontFamily: "Roboto, sans-serif",
                        }}
                    >
                        {card.text}
                    </h6>
                    <p
                        className="mx-2"
                        style={{
                            textAlign: "start",
                            color: "#6d6d6d",
                            fontFamily: "Roboto, sans-serif",
                            fontSize: ".9rem",
                        }}
                    >
                        {card.additionalText}
                    </p>
                </div>
                <div
                    className="mx-2 m-3 px-md-3"
                    style={{ textAlign: "start", color: "#6d6d6d" }}
                >
                    <button
                        className="p-0 m-0  read-more-button-slider"
                        style={{
                            background: "none",
                            fontSize: ".9rem",
                            color: "#000",
                        }}
                    >
                        {card.more}
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div className="card">
            <Carousel value={cards} numScroll={1} numVisible={3} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} />
        </div>
    )
}
