import {formatUpperCaseFirst} from "./utils";
import {Sorting} from "./const";

export const getCityOffers = (offers, city) => offers.filter((it) => it.city === city);

export const getParsedOffer = (data) => {
  return {
    id: String(data[`id`]),
    img: data[`images`],
    smallImg: data[`preview_image`],
    title: data[`title`],
    description: [data[`description`]],
    isPremium: data[`is_premium`],
    type: formatUpperCaseFirst(data[`type`]),
    rating: data[`rating`],
    bedroom: data[`bedrooms`],
    visitor: data[`max_adults`],
    price: data[`price`],
    option: data[`goods`],
    isBookmark: data[`is_favorite`],
    city: data[`city`][`name`],
    cityCoordinates: [data[`city`][`location`][`latitude`], data[`city`][`location`][`longitude`]],
    cityZoom: data[`city`][`location`][`zoom`],
    host: data[`host`][`name`],
    hostTop: data[`host`][`is_pro`],
    avatar: data[`host`][`avatar_url`],
    coordinates: [data[`location`][`latitude`], data[`location`][`longitude`]],
  };
};

export const getSortedOffersByType = (offers, sortType) => {
  switch (sortType) {
    case Sorting.POPULAR:
      return offers.slice();
    case Sorting.PRICE_TO_HIGH:
      return offers.slice().sort((a, b) => a.price - b.price);
    case Sorting.PRICE_TO_LOW:
      return offers.slice().sort((a, b) => b.price - a.price);
    case Sorting.TOP_RATED:
      return offers.slice().sort((a, b) => b.rating - a.rating);
  }
  return offers;
};

export const getParsedAuthInfo = (data) => {
  return {
    id: data[`id`],
    email: data[`email`],
    avatarUrl: data[`avatar_url`],
    isPro: data[`is_pro`],
  };
};

export const getParsedArray = (dataArray, getParsedItem) => dataArray.map((it) => getParsedItem(it));

export const getOffersWithNewOfferByIndex = (offers, offer) => {
  const cloneOffers = offers.slice();
  const index = cloneOffers.findIndex((it) => it.id === offer.id);
  if (index === -1) {
    return offers;
  }
  cloneOffers[index] = offer;
  return cloneOffers;
};

export const getParsedReview = (data) => {
  return {
    id: data[`id`],
    date: data[`date`],
    comment: data[`comment`],
    rate: data[`rating`],
    user: {
      id: data[`user`][`id`],
      avatarUrl: data[`user`][`avatar_url`],
      isPro: data[`user`][`is_pro`],
      name: data[`user`][`name`],
    },
  };
};
