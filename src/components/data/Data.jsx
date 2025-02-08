export const navList = [
  {
    id: 1,
    path: "/",
    text: "Home",
  },
  {
    id: 2,
    path: "/about",
    text: "About",
  },
  {
    id: 3,
    path: "/services",
    text: "Services",
  },
  {
    id: 4,
    path: "/rooms",
    text: "Rooms",
  },
  {
    id: 5,
    path: "/page",
    text: "Page",
    subItems: [
      {
        id: 51,
        path: "/booking",
        text: "Booking",
      },
      {
        id: 52,
        path: "/team",
        text: "Our Team",
      },
      {
        id: 53,
        path: "/testimonial",
        text: "Testimonial",
      },
    ],
  },
  {
    id: 6,
    path: "/contact",
    text: "Contact",
  },
];
export const socialIcons = [
  {
    icon: <i className="fab fa-facebook-f"></i>,
  },
  {
    icon: <i className="fab fa-twitter"></i>,
  },
  {
    icon: <i className="fab fa-instagram"></i>,
  },
  {
    icon: <i className="fab fa-linkedin-in"></i>,
  },
  {
    icon: <i className="fab fa-youtube"></i>,
  },
];

export const carouselData = [
  {
    img: "../assets/img/hotel.jpg",
    title: "Discover Luxurious Hotel",
    subtitle: "luxury living",
    btn1: "Our Room",
    btn2: "Book Room",
  },
  {
    img: "../assets/img/main-E.jpg",
    title: "Discover Luxurious Hotel",
    subtitle: "luxury living",
    btn1: "Our Room",
    btn2: "Book Room",
  },
  {
    img: "../assets/img/swim.jpg",
    title: "Discover Luxurious Hotel",
    subtitle: "luxury living",
    btn1: "Our Room",
    btn2: "Book Room",
  },
];
export const about = [
  {
    icon: <i class="fa fa-hotel fa-2x text-primary mb-2"></i>,
    text: "Rooms",
    count: "7861",
  },
  {
    icon: <i class="fa fa-users fa-2x text-primary mb-2"></i>,
    text: "Staffs",
    count: "1234",
  },
  {
    icon: <i class="fa fa-users-cog fa-2x text-primary mb-2"></i>,
    text: "Clients",
    count: "4321",
  },
];

export const services = [
  {
    icon: <i class="fa fa-hotel fa-2x text-primary"></i>,
    name: "Rooms & Appartment",
    discription: "Contrary to popular belief, ipsum is not simply random.",
  },
  {
    icon: <i class="fa fa-utensils fa-2x text-primary"></i>,
    name: "Food & Restaurant",
    discription: "Contrary to popular belief, ipsum is not simply random.",
  },
  {
    icon: <i class="fa fa-spa fa-2x text-primary"></i>,
    name: "Spa & Swimming Pool",
    discription: "Contrary to popular belief, ipsum is not simply random.",
  },

  {
    icon: <i class="fa fa-swimmer fa-2x text-primary"></i>,
    name: "Sports & Gaming",
    discription: "Contrary to popular belief, ipsum is not simply random.",
  },
  {
    icon: <i class="fa fa-glass-cheers fa-2x text-primary"></i>,
    name: "Event & Party",
    discription: "Contrary to popular belief, ipsum is not simply random.",
  },

  {
    icon: <i class="fa fa-dumbbell fa-2x text-primary"></i>,
    name: "GYM & Yoga",
    discription: "Contrary to popular belief, ipsum is not simply random.",
  },
];
export const team = [
  {
    image: "../assets/img/manager.jpg",
    name: "Siddharth Sathe",
    designation: "Hotel Manager",
  },
  {
    image: "../assets/img/front.jpg",
    name: "Amrutha",
    designation: "Front Desk",
  },
  {
    image: "../assets/img/chef.jpg",
    name: "Manish Sharma ",
    designation: "Designation",
  },
  {
    image: "../assets/img/house.webp",
    name: "Housekeeping",
    designation: "Houekeeping Staff",
  },
];

export const footerItem = [
  {
    id: 1,
    header: "Company",
    UnitItem: [
      {
        name: "About Us",
      },
      {
        name: "Contact Us",
      },
      {
        name: "Privacy Policy",
      },
      {
        name: "Terms & Condition",
      },
      {
        name: "Support",
      },
    ],
  },
  {
    id: 2,
    header: "Services",
    UnitItem: [
      {
        name: "Food & Restaurant",
      },
      {
        name: "Spa & Swimming Pool",
      },
      {
        name: "Sports & Gaming",
      },
      {
        name: "Event & Party",
      },
      {
        name: "GYM & Yoga",
      },
    ],
  },
];

export const footerContact = [
  {
    icon: <i className="fa fa-map-marker-alt me-3"></i>,
    name: "123 Street, Bangalore, India",
  },
  {
    icon: <i className="fa fa-phone-alt me-3"></i>,
    name: "080 345 67890",
  },
  {
    icon: <i className="fa fa-envelope me-3"></i>,
    name: "info@example.com",
  },
];

export const contact = [
  {
    icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
    title: "Booking",
    email: "book@example.com",
  },
  {
    icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
    title: "Technical",
    email: "tech@example.com",
  },
  {
    icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
    title: "General",
    email: "info@example.com",
  },
];
export const testimonial = [
  {
    description:
      "The dishes were beautifully plated, making the dining experience even more enjoyable",
    name: "Vijay Prakash",
    profession: "Singer",
    icon: (
      <i class="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
    ),
    img: "../assets/img/vijya.jpg",
  },
  {
    description:
      "A great selection of both local and international cuisine to choose from, Amazing afternoon spent relaxing and getting pampered! ...",
    name: "Rashmika Madana",
    profession: "Actor",
    icon: (
      <i class="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
    ),
    img: "../assets/img/rashmika.jpg",
  },
  {
    description:
      "The food was absolutely delicious, with fresh ingredients and perfectly cooked dishes",
    name: "Sihi Kahi Chandru",
    profession: "Actor",
    icon: (
      <i class="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
    ),
    img: "../assets/img/chandru.jpg",
  },
  {
    description:
      "The food was absolutely delicious, with fresh ingredients. The gym was very clean and well-maintained, with towels readily available.",
    name: "Rocking Star Yash",
    profession: "Actor",
    icon: (
      <i class="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
    ),
    img: "../assets/img/yash.jpg",
  },
];

export const roomItems = [
  {
    img: "../assets/img/room-1.jpg",
    price: "₹3000/night",
    name: "Junior Suit",
    star: [
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
    ],
    description:
      "A larger sitting area compared to standard rooms, often with a sofa and chairs.",
    yellowbtn: "View Detail",
    darkbtn: "book now",
  },

  {
    img: "../assets/img/room-2.jpg",
price: "₹6000/night",
    name: "Executive Suite",
    star: [
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
    ],
    description:
      "A large, comfortable bedroom with a king-size bed and a dedicated living area with a sofa and chairs.",
    yellowbtn: "View Detail",
    darkbtn: "book now",
  },
  {
    img: "../assets/img/room-3.jpg",
price: "₹10000/night",
    name: "Super Deluxe",
    star: [
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
    ],
    description:
      "A large, comfortable bedroom with a king-size bed and high-speed internet access.",
    yellowbtn: "View Detail",
    darkbtn: "book now",
  },
];

export const facility = [
  {
    icon: <i class="fa fa-bed text-primary me-2"></i>,
    quantity: 3,
    facility: "bed",
  },
  {
    icon: <i class="fa fa-bath text-primary me-2"></i>,
    quantity: 2,
    facility: "bath",
  },
  {
    icon: <i class="fa fa-wifi text-primary me-2"></i>,
    facility: "Wifi",
  },
];
