import {OfferType} from "../const";

const offers = [
  {
    id: 1,
    city: `Amsterdam`,
    pictures: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    title: `Monet Garden Hotel Amsterdam`,
    description: `Monet Garden Amsterdam is a modern boutique hotel located in Amsterdam, next to the city's canals. It offers air-conditioned rooms and free Wi-Fi throughout. Most rooms offer views of the canal and garden.`,
    isPremium: true,
    isBookmark: true,
    price: 120,
    type: OfferType.HOTEL,
    rating: 4,
    bedroomsMax: `4 Bedrooms`,
    guestsMax: `Max 5 adults`,
    amenities: [`Wi-Fi`, `Heating`, `Kitchen`, `Parking`, `Fridge`, `Dishwasher`, `Coffee machine`, `Cabel TV`],
    hostInfo: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Ross`,
      isSuper: true,
    }
  },
  {
    id: 2,
    city: `Amsterdam`,
    pictures: [`img/room.jpg`, `img/apartment-03.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/studio-01.jpg`, `img/apartment-02.jpg`],
    title: `Guest house Dynasty Sochi`,
    description: `Dynasty guest house is located in Sochi, a 10-minute walk from the Black sea. It offers free Wi-Fi and free private Parking.`,
    isPremium: true,
    isBookmark: false,
    price: 220,
    type: OfferType.HOTEL,
    rating: 5,
    bedroomsMax: `3 Bedrooms`,
    guestsMax: `Max 6 adults`,
    amenities: [`Wi-Fi`, `Fitness`, `Kitchen`, `Parking`, `Fridge`, `Dishwasher`, `Coffee machine`, `Pub`],
    hostInfo: {
      avatar: `img/avatar-max.jpg`,
      name: `Max`,
      isSuper: false,
    }
  },
  {
    id: 3,
    city: `Amsterdam`,
    pictures: [`img/apartment-03.jpg`, `img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/studio-01.jpg`, `img/apartment-03.jpg`],
    title: `The Hoxton`,
    description: `The rooms are equipped with a flat-screen TV with cable channels. Some rooms have a Seating area. The rooms are equipped with kettle, free toiletries and a Hairdryer. A TV is provided.`,
    isPremium: false,
    isBookmark: true,
    price: 90,
    type: OfferType.APARTMENT,
    rating: 3,
    bedroomsMax: `5 Bedrooms`,
    guestsMax: `Max 8 adults`,
    amenities: [`Wi-Fi`, `Fitness`, `Kitchen`, `Parking`, `Dishwasher`, `Heating`, `Coffee machine`, `Bicycles`],
    hostInfo: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Angelina`,
      isSuper: true,
    }
  },
  {
    id: 4,
    city: `Amsterdam`,
    pictures: [`img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`],
    title: `Caesars Studion`,
    description: `Caesars Place apartment is located in Amsterdam, 400 metres from Leidseplein and 500 metres from Flower market. Free Wi-Fi is available throughout the property.`,
    isPremium: true,
    isBookmark: true,
    price: 90,
    type: OfferType.HOUSE,
    rating: 4,
    bedroomsMax: `1 Bedrooms`,
    guestsMax: `Max 2 adults`,
    amenities: [`Wi-Fi`, `Kitchen`, `Parking`, `Dishwasher`, `Heating`, `Coffee machine`, `Bicycles`],
    hostInfo: {
      avatar: `img/avatar-max.jpg`,
      name: `Andy`,
      isSuper: false,
    }
  },
];

export default offers;
