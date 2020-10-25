import {OfferTypes} from "../const";

const offers = [
  {
    id: 1,
    city: `Amsterdam`,
    pictures: [`room.jpg`, `apartment-01.jpg`, `apartment-02.jpg`, `apartment-03.jpg`, `studio-01.jpg`, `apartment-01.jpg`],
    preview: `apartment-small-04.jpg`,
    title: `Monet Garden Hotel Amsterdam`,
    description: [
      `Monet Garden Amsterdam is a modern boutique hotel located in Amsterdam, next to the city's canals. It offers air-conditioned rooms and free Wi-Fi throughout. Most rooms offer views of the canal and garden.`,
      `The four-star superior hotel Rixwell Elefant is conveniently located between Riga international airport, which is a 5-minute drive away, and the city center.`
    ],
    isPremium: true,
    isBookMark: true,
    price: 120,
    type: OfferTypes.HOTEL,
    rating: 4,
    bedroomsMax: `4 Bedrooms`,
    guestsMax: `Max 5 adults`,
    amenities: [`Wi-Fi`, `Heating`, `Kitchen`, `Parking`, `Fridge`, `Dishwasher`, `Coffee machine`, `Cabel TV`],
    hostInfo: {
      avatar: `avatar-angelina.jpg`,
      name: `Ross`,
      isSuper: true,
    }
  },
  {
    id: 2,
    city: `Amsterdam`,
    pictures: [`room.jpg`, `apartment-03.jpg`, `apartment-01.jpg`, `apartment-02.jpg`, `studio-01.jpg`, `apartment-02.jpg`],
    preview: `apartment-small-03.jpg`,
    title: `Guest house Dynasty Sochi`,
    description: [
      `Dynasty guest house is located in Sochi, a 10-minute walk from the Black sea. It offers free Wi-Fi and free private Parking.`,
      `The four-star Wellton Centrum hotel & Spa is a modern building that preserves original historical elements. The hotel is located in the old town of Riga.`
    ],
    isPremium: true,
    isBookMark: false,
    price: 220,
    type: OfferTypes.HOTEL,
    rating: 5,
    bedroomsMax: `3 Bedrooms`,
    guestsMax: `Max 6 adults`,
    amenities: [`Wi-Fi`, `Fitness`, `Kitchen`, `Parking`, `Fridge`, `Dishwasher`, `Coffee machine`, `Pub`],
    hostInfo: {
      avatar: `avatar-max.jpg`,
      name: `Max`,
      isSuper: false,
    }
  },
  {
    id: 3,
    city: `Amsterdam`,
    pictures: [`apartment-03.jpg`, `room.jpg`, `apartment-01.jpg`, `apartment-02.jpg`, `studio-01.jpg`, `apartment-03.jpg`],
    preview: `apartment-small-04.jpg`,
    title: `The Hoxton`,
    description: [
      `The rooms are equipped with a flat-screen TV with cable channels. Some rooms have a Seating area. The rooms are equipped with kettle, free toiletries and a Hairdryer. A TV is provided.`,
      `Pacific Islands club hotel Old Riga Palace is located on a quiet street in the Old town, a short walk from all the main attractions.`
    ],
    isPremium: false,
    isBookMark: true,
    price: 90,
    type: OfferTypes.APARTMENT,
    rating: 3,
    bedroomsMax: `5 Bedrooms`,
    guestsMax: `Max 8 adults`,
    amenities: [`Wi-Fi`, `Fitness`, `Kitchen`, `Parking`, `Dishwasher`, `Heating`, `Coffee machine`, `Bicycles`],
    hostInfo: {
      avatar: `avatar-angelina.jpg`,
      name: `Angelina`,
      isSuper: true,
    }
  },
  {
    id: 4,
    city: `Amsterdam`,
    pictures: [`apartment-02.jpg`, `apartment-03.jpg`, `room.jpg`, `apartment-01.jpg`, `apartment-03.jpg`, `studio-01.jpg`],
    preview: `apartment-small-03.jpg`,
    title: `Caesars Studion`,
    description: [
      `Caesars Place apartment is located in Amsterdam, 400 metres from Leidseplein and 500 metres from Flower market. Free Wi-Fi is available throughout the property.`,
      `Located in Riga, 4.3 km from Kipsala international exhibition center, 5 km from Janis Lipke memorial and 5 km from Park, Classy in good neighborhood offers accommodation with a balcony and free wifi...`
    ],
    isPremium: true,
    isBookMark: true,
    price: 90,
    type: OfferTypes.HOUSE,
    rating: 4,
    bedroomsMax: `1 Bedrooms`,
    guestsMax: `Max 2 adults`,
    amenities: [`Wi-Fi`, `Kitchen`, `Parking`, `Dishwasher`, `Heating`, `Coffee machine`, `Bicycles`],
    hostInfo: {
      avatar: `avatar-max.jpg`,
      name: `Andy`,
      isSuper: false,
    }
  },
];

export default offers;
