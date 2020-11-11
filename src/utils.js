export function extend(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}

export function getSortCardTypeOffers(offers, cardType, offerId) {
  if (cardType === `related`) {
    return offers.filter((item) => (item.id !== +offerId)).slice(0, 3);
  } else {
    return offers;
  }
}

export function getActiveCityName(str) {
  if (!str) {
    return str;
  }

  str = str.toLowerCase();

  return str[0].toUpperCase() + str.slice(1);
}
