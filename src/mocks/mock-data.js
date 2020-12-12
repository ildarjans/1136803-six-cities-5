export const FAVORITE_BUTTON_OPTIONS = {
  PLACE_CARD: {
    WIDTH: 18,
    HEIGHT: 19,
    CLASSNAME_PREFIX: `place-card`
  },
  PROPERTY: {
    WIDTH: 31,
    HEIGHT: 33,
    CLASSNAME_PREFIX: `property`
  },
};

export const mockCities = [
  `AMSTERDAM`,
  `PARIS`,
  `COLOGNE`,
  `BRUSSELS`,
  `HAMBURG`,
  `DUSSELDORF`
];

export const mockCityOffers = {
  AMSTERDAM: [
    {
      city: {
        name: `Amsterdam`,
        location: {
          latitude: 52.38333,
          longitude: 4.9,
          zoom: 12
        }
      },
      id: 73,
      images: [
        `http://picsum.photos/248/152?r=0.0922933754368811`,
        `http://picsum.photos/248/152?r=0.897019347231856`
      ],
      previewImage: `http://picsum.photos/248/152?r=0.16844568825898554`,
      isFavorite: false,
      isPremium: false,
      price: 2523,
      title: `Big company apartment`,
      type: `apartment`,
      rating: 1,
      description: `Et malesuada fames ac turpis egestas integer eget aliquet nibh`,
      bedrooms: 2,
      maxAdults: 9,
      goods: [
        [
          `Washer`,
          `Heating`,
          `Gym`
        ]
      ],
      host: {
        id: 17,
        avatarUrl: `/public/img/avatar-angelina.jpg`,
        name: `Christopher Jones`,
        isPro: true
      },
      location: {
        latitude: 52.37333,
        longitude: 4.86,
        zoom: 12
      }
    },
    {
      city: {
        name: `Amsterdam`,
        location: {
          latitude: 52.38333,
          longitude: 4.9,
          zoom: 12
        }
      },
      id: 85,
      images: [
        `http://picsum.photos/248/152?r=0.45448580373366476`,
        `http://picsum.photos/248/152?r=0.731415434249594`
      ],
      previewImage: `http://picsum.photos/248/152?r=0.34977443093807237`,
      isFavorite: true,
      isPremium: true,
      price: 3585,
      title: `Big company apartment`,
      type: `room`,
      rating: 0,
      description: `Eu turpis egestas pretium aenean pharetra magna ac`,
      bedrooms: 3,
      maxAdults: 10,
      goods: [
        [
          `Washer`,
          `Heating`,
          `Towels`
        ]
      ],
      host: {
        id: 26,
        avatarUrl: `/public/img/avatar-angelina.jpg`,
        name: `Christopher Jackson`,
        isPro: true
      },
      location: {
        latitude: 52.35333,
        longitude: 4.95,
        zoom: 12
      }
    }
  ],
};

export const mockOffers = {
  73: {
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 52.38333,
        longitude: 4.9,
        zoom: 12
      }
    },
    id: 73,
    images: [
      `http://picsum.photos/248/152?r=0.0922933754368811`,
      `http://picsum.photos/248/152?r=0.897019347231856`
    ],
    previewImage: `http://picsum.photos/248/152?r=0.16844568825898554`,
    isFavorite: false,
    isPremium: false,
    price: 2523,
    title: `Big company apartment`,
    type: `apartment`,
    rating: 1,
    description: `Et malesuada fames ac turpis egestas integer eget aliquet nibh`,
    bedrooms: 2,
    maxAdults: 9,
    goods: [
      [
        `Washer`,
        `Heating`,
        `Gym`
      ]
    ],
    host: {
      id: 17,
      avatarUrl: `/public/img/avatar-angelina.jpg`,
      name: `Christopher Jones`,
      isPro: true
    },
    location: {
      latitude: 52.37333,
      longitude: 4.86,
      zoom: 12
    }
  },
  85: {
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 52.38333,
        longitude: 4.9,
        zoom: 12
      }
    },
    id: 85,
    images: [
      `http://picsum.photos/248/152?r=0.45448580373366476`,
      `http://picsum.photos/248/152?r=0.731415434249594`
    ],
    previewImage: `http://picsum.photos/248/152?r=0.34977443093807237`,
    isFavorite: true,
    isPremium: true,
    price: 3585,
    title: `Big company apartment`,
    type: `room`,
    rating: 0,
    description: `Eu turpis egestas pretium aenean pharetra magna ac`,
    bedrooms: 3,
    maxAdults: 10,
    goods: [
      [
        `Washer`,
        `Heating`,
        `Towels`
      ]
    ],
    host: {
      id: 26,
      avatarUrl: `/public/img/avatar-angelina.jpg`,
      name: `Christopher Jackson`,
      isPro: true
    },
    location: {
      latitude: 52.35333,
      longitude: 4.95,
      zoom: 12
    }
  },
};

export const mockOffersList = [mockOffers[`73`], mockOffers[`85`]];

export const mockFavoritesOffers = {
  AMSTERDAM: mockCityOffers[`AMSTERDAM`].filter((offer) => offer.isFavorite),
};

export const mockUser = {
  id: 3,
  avatarUrl: `https://avatars.dicebear.com/api/female/222.svg`,
  name: `Samuel Robinson`,
  isPro: false,
  email: `samrob@dirtyjob.net`
};

export const mockReviewUser = {
  id: 3,
  avatarUrl: `https://avatars.dicebear.com/api/female/222.svg`,
  name: `Samuel Robinson`,
  isPro: false,
};

export const mockResponseUser = {
  id: 3,
  email: `samrob@dirtyjob.net`,
  name: `Samuel Robinson`,
  [`avatar_url`]: `https://avatars.dicebear.com/api/female/222.svg`,
  [`is_pro`]: false,
};

export const mockResponseReviewUser = {
  id: 3,
  name: `Samuel Robinson`,
  [`avatar_url`]: `https://avatars.dicebear.com/api/female/222.svg`,
  [`is_pro`]: false,
};

export const mockAmsterdamIcons = mockCityOffers[`AMSTERDAM`].map((offer) => ({
  id: offer.id,
  lat: offer.location.latitude,
  lng: offer.location.longitude,
}));

export const mockAmsterdamMapCenter = {
  lat: 52.38333,
  lng: 4.9,
  zoom: 12,
};

export const mockReviews = [
  {
    id: 42,
    user: mockReviewUser,
    date: `2020-10-28T16:40:08.863Z`,
    rating: 4,
    comment: `Elit ut aliquam purus sit amet luctus venenatis lectus`
  },
  {
    id: 24,
    user: mockReviewUser,
    date: `2020-11-28T15:20:18.534Z`,
    rating: 5,
    comment: `Elit ut aliquam purus sit amet luctus venenatis lectus`
  },
];

export const mockResponseReviews = [
  {
    id: 42,
    user: mockResponseReviewUser,
    date: `2020-10-28T16:40:08.863Z`,
    rating: 4,
    comment: `Elit ut aliquam purus sit amet luctus venenatis lectus`
  },
  {
    id: 24,
    user: mockResponseReviewUser,
    date: `2020-11-28T15:20:18.534Z`,
    rating: 5,
    comment: `Elit ut aliquam purus sit amet luctus venenatis lectus`
  },
];

export const mockError = {
  status: 404,
  message: `Bad request`
};

export const mockResponseOffers = [
  {
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 52.38333,
        longitude: 4.9,
        zoom: 12
      }
    },
    id: 73,
    images: [
      `http://picsum.photos/248/152?r=0.0922933754368811`,
      `http://picsum.photos/248/152?r=0.897019347231856`
    ],
    [`preview_image`]: `http://picsum.photos/248/152?r=0.16844568825898554`,
    [`is_favorite`]: false,
    [`is_premium`]: false,
    price: 2523,
    title: `Big company apartment`,
    type: `apartment`,
    rating: 1,
    description: `Et malesuada fames ac turpis egestas integer eget aliquet nibh`,
    bedrooms: 2,
    [`max_adults`]: 9,
    goods: [
      [
        `Washer`,
        `Heating`,
        `Gym`
      ]
    ],
    host: {
      id: 17,
      [`avatar_url`]: `public/img/avatar-angelina.jpg`,
      name: `Christopher Jones`,
      [`is_pro`]: true
    },
    location: {
      latitude: 52.37333,
      longitude: 4.86,
      zoom: 12
    }
  },
  {
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 52.38333,
        longitude: 4.9,
        zoom: 12
      }
    },
    id: 85,
    images: [
      `http://picsum.photos/248/152?r=0.45448580373366476`,
      `http://picsum.photos/248/152?r=0.731415434249594`
    ],
    [`preview_image`]: `http://picsum.photos/248/152?r=0.34977443093807237`,
    [`is_favorite`]: true,
    [`is_premium`]: true,
    price: 3585,
    title: `Big company apartment`,
    type: `room`,
    rating: 0,
    description: `Eu turpis egestas pretium aenean pharetra magna ac`,
    bedrooms: 3,
    [`max_adults`]: 10,
    goods: [
      [
        `Washer`,
        `Heating`,
        `Towels`
      ]
    ],
    host: {
      id: 26,
      [`avatar_url`]: `public/img/avatar-angelina.jpg`,
      name: `Christopher Jackson`,
      [`is_pro`]: true
    },
    location: {
      latitude: 52.35333,
      longitude: 4.95,
      zoom: 12
    }
  }
];
