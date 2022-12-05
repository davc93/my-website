const services = [
  {
    id:1,
    name:"Landing page",
    path: "landing-page",
    discount: null,
    image: "",
    priceMonthly: 0,
    description:
      "https://firebasestorage.googleapis.com/v0/b/davc93.appspot.com/o/services_description%2Fwebsite_english.md?alt=media&token=bf83a6be-d4d9-49ce-b1e8-511778f66e93",
  },
  {
    id:2,
    description:
      "https://firebasestorage.googleapis.com/v0/b/davc93.appspot.com/o/services_description%2Flanding_english.md?alt=media&token=bf83a6be-d4d9-49ce-b1e8-511778f66e93",
    image: "",
    name: "Web Site",
    discount: null,
    path: "web-site",
    priceMonthly:18000
  },
];

const projects = [
  {
    id:1,
    description:
      "Fakestore is a product store where product logic and an infinite scroll must be implemented, it is part of a platzi laboratory where it is sought to put into practice what has been learned throughout a series of courses",
    envLink: "https://davc93.github.io/laboratorio-fakestore/",
    techs: [
      {
        name: "javascript",
      },
    ],
    repoLink: "https://github.com/davc93/laboratorio-fakestore",
    featureImage:
      "https://firebasestorage.googleapis.com/v0/b/davc93.appspot.com/o/featuresImages%2Fthumb_laboratorio-fakestore.png?alt=media&token=376fc466-db08-4cfb-87d5-1fb7be0d797b",
    name: "Fakestore lab",
  },
  {
    id:2,
    featureImage:
      "https://firebasestorage.googleapis.com/v0/b/davc93.appspot.com/o/featuresImages%2Fthumb_travels.png?alt=media&token=93347137-715a-457e-b1a9-1867c6fc4f42",
    envLink: "https://davc93.github.io/travels/",
    description:
      'Find the most incredible destinations in the world on this landing page. The following project is the result of Platzi\'s course "Tailwindcss 2 and 3", where the full potential of this css framework is applied, which enhances productivity in page development.',
    techs: [
      {
        name: "tailwind",
      },
    ],
    repoLink: "https://github.com/davc93/travels",
    name: "Travels",
  },
  {
    id:3,
    envLink: "https://doctorcasanova.cl/",
    featureImage:
      "https://firebasestorage.googleapis.com/v0/b/davc93.appspot.com/o/featuresImages%2Fthumb_doctorcasanova.jpg?alt=media&token=9af8d027-94e4-4952-8391-12d071c14907",
    description:
      'The following website is a landing page that was build with plain HTML and CSS, includes Google tools for SEO and metrics like Analytics, Search console, Tag Manager.\n\nThe purpose of the website is caught users by the search doctor at home or "Doctor a domicilio"',
    name: "Doctor Casanova",
    repoLink: "https://github.com/davc93/DoctorCasanova",
    techs: [
      {
        name: "css3",
      },
      {
        name: "html5",
      },
    ],
  },
  {
    id:4,
    envLink: "",
    description:
      'The following project is a server to receive payments with credit card, debit card, mercado pago account even cash and bank transfer, this project was created to my "checkout pro" certification and this version includes typescript and clean architecture for the backend.',
    techs: [
      {
        name: "typescript",
      },
      {
        name: "nodejs",
      },
      {
        name: "express",
      },
    ],
    featureImage:
      "https://firebasestorage.googleapis.com/v0/b/davc93.appspot.com/o/featuresImages%2Fthumb_mercadopago-server.png?alt=media&token=ea131dc3-6f2a-44f2-becd-defa8edf2ba8",
    repoLink: "https://github.com/davc93/mercadopago-server-typescript",
    name: "Mercado Pago Server",
  },
  {
    id:5,
    envLink: "https://yard-sales-9043f.firebaseapp.com/",
    description:
      "Welcome to yard sales, an incredible online store where you can find the most beautiful things. The following project is based on the platzi yard-sales project for the feedback challenge",
    repoLink: "https://github.com/davc93/yard-sales",
    featureImage:
      "https://firebasestorage.googleapis.com/v0/b/davc93.appspot.com/o/featuresImages%2Fthumb_yard-sales.png?alt=media&token=d883249d-c56c-4377-883a-bfbda4d7b7d5",
    name: "Yard Sales",
    techs: [
      {
        name: "javascript",
      },
      {
        name: "css3",
      },
      {
        name: "html5",
      },
      {
        name: "firebase",
      },
    ],
  },
];

export default {
  services,
  projects,
};
