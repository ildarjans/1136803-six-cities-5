import {
  generateId,
  getLocationCoords,
  getRandomArrayElement,
  getRandomArrayElements,
  getRandomAvatar,
  getRandomFullName,
  getRandomImageGallery,
  getRandomInteger,
} from "./utils";
import {offerTypes, cities} from "../const";
import {
  MAX_FEATURES,
  descriptions,
  features,
  titles,
  bedroomsRange,
  guestRange,
  priceRange,
} from "./consts";

export function getOffer() {
  const city = getRandomArrayElement(cities);
  return {
    city,
    id: generateId(),
    images: getRandomImageGallery(),
    premium: Boolean(getRandomInteger(1)),
    price: getRandomInteger(priceRange.MAX, priceRange.MIN),
    title: getRandomArrayElement(titles),
    type: getRandomArrayElement(offerTypes),
    rating: getRandomInteger(5),
    description: getRandomArrayElement(descriptions),
    bedrooms: getRandomInteger(bedroomsRange.MAX, bedroomsRange.MIN),
    guests: getRandomInteger(guestRange.MAX, guestRange.MIN),
    features: getRandomArrayElements(features, MAX_FEATURES),
    owner: {
      avatar: getRandomAvatar(),
      name: getRandomFullName(),
      super: Boolean(getRandomInteger(1)),
    },
    coords: getLocationCoords(city)
  };
}

export const offers = [
  {
    "city": `COLOGNE`,
    "id": `d5ebcf7a4c`,
    "images": [
      `http://picsum.photos/248/152?r=0.9830371429576976`,
      `http://picsum.photos/248/152?r=0.49252865525236467`,
      `http://picsum.photos/248/152?r=0.9847333997772119`,
      `http://picsum.photos/248/152?r=0.7569432574208499`
    ],
    "premium": true,
    "price": 343,
    "title": `Quite place for zen vacations`,
    "type": `room`,
    "rating": 4,
    "description": `Ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus`,
    "bedrooms": 5,
    "guests": 1,
    "features": [
      `Towels`,
      `Video games`,
      `Washer`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/female/0.5656493762541519.svg`,
      "name": `Kenneth Smith`,
      "super": true
    },
    "coords": {
      "lat": 50.923333,
      "lng": 7
    }
  },
  {
    "city": `DUSSELDORF`,
    "id": `c7f3db36a1`,
    "images": [
      `http://picsum.photos/248/152?r=0.05023224934702353`,
      `http://picsum.photos/248/152?r=0.15227354037488072`
    ],
    "premium": true,
    "price": 4008,
    "title": `Best lobby bar & Michelin restaurant`,
    "type": `house`,
    "rating": 1,
    "description": `Dictum fusce ut placerat orci`,
    "bedrooms": 1,
    "guests": 3,
    "features": [
      `Washer`,
      `Video games`,
      `Guide`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/female/0.7466176983418797.svg`,
      "name": `Stephen Clark`,
      "super": true
    },
    "coords": {
      "lat": 51.208304,
      "lng": 6.833849
    }
  },
  {
    "city": `COLOGNE`,
    "id": `153a4a342c5`,
    "images": [
      `http://picsum.photos/248/152?r=0.8167911327858441`,
      `http://picsum.photos/248/152?r=0.07306043576027754`,
      `http://picsum.photos/248/152?r=0.7143562386286446`,
      `http://picsum.photos/248/152?r=0.9019009185552906`,
      `http://picsum.photos/248/152?r=0.24527197274615653`,
      `http://picsum.photos/248/152?r=0.987982647851567`
    ],
    "premium": true,
    "price": 4141,
    "title": `Big company apartment`,
    "type": `house`,
    "rating": 5,
    "description": `Pharetra massa massa ultricies mi quis hendrerit dolor`,
    "bedrooms": 5,
    "guests": 8,
    "features": [
      `Towels`,
      `Wi-fi`,
      `Guide`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/bottts/0.5436074421722454.svg`,
      "name": `Kenneth Thompson`,
      "super": false
    },
    "coords": {
      "lat": 50.943332999999996,
      "lng": 6.97
    }
  },
  {
    "city": `PARIS`,
    "id": `6190f542bb`,
    "images": [
      `http://picsum.photos/248/152?r=0.6088551259388473`,
      `http://picsum.photos/248/152?r=0.6703292222464319`
    ],
    "premium": false,
    "price": 2874,
    "title": `Bed and breakfast. Best offer!`,
    "type": `house`,
    "rating": 5,
    "description": `Et malesuada fames ac turpis egestas integer eget aliquet nibh`,
    "bedrooms": 2,
    "guests": 8,
    "features": [
      `Kitchen`,
      `Dishwasher`,
      `Guide`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/female/0.1282531677374048.svg`,
      "name": `Edward Jones`,
      "super": true
    },
    "coords": {
      "lat": 48.836667,
      "lng": 2.363333
    }
  },
  {
    "city": `COLOGNE`,
    "id": `1c69cfa7c1`,
    "images": [
      `http://picsum.photos/248/152?r=0.41948449041409686`,
      `http://picsum.photos/248/152?r=0.09903561783900505`,
      `http://picsum.photos/248/152?r=0.9665910626273018`,
      `http://picsum.photos/248/152?r=0.9634211177660026`,
      `http://picsum.photos/248/152?r=0.5242306626819078`
    ],
    "premium": false,
    "price": 3115,
    "title": `Beautiful & luxurious apartment at great location`,
    "type": `hotel`,
    "rating": 3,
    "description": `Justo donec enim diam vulputate ut pharetra sit amet aliquam`,
    "bedrooms": 6,
    "guests": 8,
    "features": [
      `Guide`,
      `Video games`,
      `Wi-fi`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/female/0.2726761594753073.svg`,
      "name": `Sandra Scott`,
      "super": false
    },
    "coords": {
      "lat": 50.913332999999994,
      "lng": 6.99
    }
  },
  {
    "city": `COLOGNE`,
    "id": `b5e2510c0`,
    "images": [
      `http://picsum.photos/248/152?r=0.06402439824055262`,
      `http://picsum.photos/248/152?r=0.25258074102884076`,
      `http://picsum.photos/248/152?r=0.3620780764536624`,
      `http://picsum.photos/248/152?r=0.12677684259776245`,
      `http://picsum.photos/248/152?r=0.5702108057380415`
    ],
    "premium": false,
    "price": 2562,
    "title": `Couples particularly like this location `,
    "type": `hotel`,
    "rating": 0,
    "description": `Et malesuada fames ac turpis egestas integer eget aliquet nibh`,
    "bedrooms": 6,
    "guests": 10,
    "features": [
      `Video games`,
      `Elevator`,
      `Washer`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/male/0.066076786073201.svg`,
      "name": `Thomas Johnson`,
      "super": false
    },
    "coords": {
      "lat": 50.953333,
      "lng": 6.94
    }
  },
  {
    "city": `HAMBURG`,
    "id": `729aea8cad`,
    "images": [
      `http://picsum.photos/248/152?r=0.7937593370423432`,
      `http://picsum.photos/248/152?r=0.11888298217997151`,
      `http://picsum.photos/248/152?r=0.8821330315254299`,
      `http://picsum.photos/248/152?r=0.9784088161634015`
    ],
    "premium": true,
    "price": 2899,
    "title": `Beautiful & luxurious apartment at great location`,
    "type": `house`,
    "rating": 3,
    "description": `Et malesuada fames ac turpis egestas integer eget aliquet nibh`,
    "bedrooms": 3,
    "guests": 7,
    "features": [
      `Washer`,
      `Elevator`,
      `Kitchen`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/female/0.8141984192044525.svg`,
      "name": `Samantha Clark`,
      "super": true
    },
    "coords": {
      "lat": 53.565323,
      "lng": 9.98534
    }
  },
  {
    "city": `BRUSSELS`,
    "id": `b3f5f06d06`,
    "images": [
      `http://picsum.photos/248/152?r=0.3715068016201255`,
      `http://picsum.photos/248/152?r=0.9727870746517342`,
      `http://picsum.photos/248/152?r=0.24957580583556904`,
      `http://picsum.photos/248/152?r=0.5265640318978346`,
      `http://picsum.photos/248/152?r=0.0767604906834145`,
      `http://picsum.photos/248/152?r=0.6419455042281825`,
      `http://picsum.photos/248/152?r=0.007892931791556146`
    ],
    "premium": true,
    "price": 4281,
    "title": `Bed and breakfast. Best offer!`,
    "type": `house`,
    "rating": 1,
    "description": `Elementum eu facilisis sed odio morbi quis commodo odio`,
    "bedrooms": 6,
    "guests": 6,
    "features": [
      `Guide`,
      `Parking`,
      `Towels`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/avataaars/0.4056836898272471.svg`,
      "name": `Justin Carter`,
      "super": false
    },
    "coords": {
      "lat": 50.833333,
      "lng": 4.283333
    }
  },
  {
    "city": `HAMBURG`,
    "id": `16e9168ae24`,
    "images": [
      `http://picsum.photos/248/152?r=0.22861375365495995`,
      `http://picsum.photos/248/152?r=0.8102671045511634`,
      `http://picsum.photos/248/152?r=0.9417266868963354`,
      `http://picsum.photos/248/152?r=0.9407170781239576`,
      `http://picsum.photos/248/152?r=0.5911523804863235`,
      `http://picsum.photos/248/152?r=0.36065664693315913`,
      `http://picsum.photos/248/152?r=0.2436615179299304`,
      `http://picsum.photos/248/152?r=0.8171079992874575`
    ],
    "premium": false,
    "price": 2883,
    "title": `Beautiful & luxurious apartment at great location`,
    "type": `apartment`,
    "rating": 4,
    "description": `Eget velit aliquet sagittis id`,
    "bedrooms": 3,
    "guests": 2,
    "features": [
      `Washer`,
      `Gym`,
      `Towels`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/gridy/0.6568535027123961.svg`,
      "name": `Dorothy White`,
      "super": true
    },
    "coords": {
      "lat": 53.555322999999994,
      "lng": 9.98534
    }
  },
  {
    "city": `BRUSSELS`,
    "id": `15f3db79745`,
    "images": [
      `http://picsum.photos/248/152?r=0.24162529651426978`,
      `http://picsum.photos/248/152?r=0.5505764005055693`,
      `http://picsum.photos/248/152?r=0.939578682944264`
    ],
    "premium": false,
    "price": 1383,
    "title": `Best lobby bar & Michelin restaurant`,
    "type": `house`,
    "rating": 4,
    "description": `Eu turpis egestas pretium aenean pharetra magna ac`,
    "bedrooms": 4,
    "guests": 1,
    "features": [
      `Kitchen`,
      `Guide`,
      `Heating`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/human/0.43159279390666594.svg`,
      "name": `Elizabeth Green`,
      "super": true
    },
    "coords": {
      "lat": 50.833333,
      "lng": 4.323333
    }
  },
  {
    "city": `HAMBURG`,
    "id": `11f0f8af5d8`,
    "images": [
      `http://picsum.photos/248/152?r=0.39462265140088926`,
      `http://picsum.photos/248/152?r=0.017381844914057698`
    ],
    "premium": false,
    "price": 2517,
    "title": `Beautiful & luxurious apartment at great location`,
    "type": `apartment`,
    "rating": 3,
    "description": `Eu turpis egestas pretium aenean pharetra magna ac`,
    "bedrooms": 5,
    "guests": 7,
    "features": [
      `Conditioner`,
      `Towels`,
      `Video games`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/female/0.8464172297138814.svg`,
      "name": `Samuel Robinson`,
      "super": true
    },
    "coords": {
      "lat": 53.545322999999996,
      "lng": 9.975340000000001
    }
  },
  {
    "city": `HAMBURG`,
    "id": `f7befa50d9`,
    "images": [
      `http://picsum.photos/248/152?r=0.17186309352180262`,
      `http://picsum.photos/248/152?r=0.6025059432141835`,
      `http://picsum.photos/248/152?r=0.005029164507758921`,
      `http://picsum.photos/248/152?r=0.079634494655491`,
      `http://picsum.photos/248/152?r=0.4324201920979227`,
      `http://picsum.photos/248/152?r=0.8158154087295897`
    ],
    "premium": false,
    "price": 3231,
    "title": `Best lobby bar & Michelin restaurant`,
    "type": `room`,
    "rating": 4,
    "description": `Justo donec enim diam vulputate ut pharetra sit amet aliquam`,
    "bedrooms": 2,
    "guests": 4,
    "features": [
      `Wi-fi`,
      `Conditioner`,
      `Video games`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/avataaars/0.3906016404757915.svg`,
      "name": `Jessica Scott`,
      "super": true
    },
    "coords": {
      "lat": 53.545322999999996,
      "lng": 9.96534
    }
  },
  {
    "city": `HAMBURG`,
    "id": `57c943f66d`,
    "images": [
      `http://picsum.photos/248/152?r=0.8398637453348354`,
      `http://picsum.photos/248/152?r=0.013586463844021957`,
      `http://picsum.photos/248/152?r=0.1434538293435823`,
      `http://picsum.photos/248/152?r=0.25349359547524686`
    ],
    "premium": true,
    "price": 806,
    "title": `Couples particularly like this location `,
    "type": `room`,
    "rating": 2,
    "description": `Mauris sit amet massa vitae tortor condimentum lacinia quis vel`,
    "bedrooms": 1,
    "guests": 10,
    "features": [
      `Towels`,
      `Gym`,
      `Heating`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/bottts/0.6492039859816157.svg`,
      "name": `Rebecca Williams`,
      "super": true
    },
    "coords": {
      "lat": 53.565323,
      "lng": 9.99534
    }
  },
  {
    "city": `HAMBURG`,
    "id": `13d84a1df1e`,
    "images": [
      `http://picsum.photos/248/152?r=0.5446250587647099`,
      `http://picsum.photos/248/152?r=0.5904909751785379`,
      `http://picsum.photos/248/152?r=0.457477022595173`,
      `http://picsum.photos/248/152?r=0.12838766114361233`
    ],
    "premium": false,
    "price": 2832,
    "title": `Big company apartment`,
    "type": `house`,
    "rating": 4,
    "description": `Elit ut aliquam purus sit amet luctus venenatis lectus`,
    "bedrooms": 3,
    "guests": 5,
    "features": [
      `Video games`,
      `Gym`,
      `Towels`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/human/0.6560830005856528.svg`,
      "name": `Patricia Brown`,
      "super": true
    },
    "coords": {
      "lat": 53.555322999999994,
      "lng": 9.975340000000001
    }
  },
  {
    "city": `AMSTERDAM`,
    "id": `3d91090e66`,
    "images": [
      `http://picsum.photos/248/152?r=0.28218840967904457`,
      `http://picsum.photos/248/152?r=0.7140486759881584`,
      `http://picsum.photos/248/152?r=0.508561788490614`,
      `http://picsum.photos/248/152?r=0.9169828734694061`,
      `http://picsum.photos/248/152?r=0.46137751572424435`
    ],
    "premium": true,
    "price": 4675,
    "title": `Bed and breakfast. Best offer!`,
    "type": `apartment`,
    "rating": 4,
    "description": `Dictum fusce ut placerat orci`,
    "bedrooms": 3,
    "guests": 10,
    "features": [
      `Dishwasher`,
      `Video games`,
      `Heating`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/human/0.7874256733851881.svg`,
      "name": `Jennifer Smith`,
      "super": false
    },
    "coords": {
      "lat": 52.39333,
      "lng": 4.930000000000001
    }
  },
  {
    "city": `COLOGNE`,
    "id": `9966ab0964`,
    "images": [
      `http://picsum.photos/248/152?r=0.7528172852291315`,
      `http://picsum.photos/248/152?r=0.021922642951011095`,
      `http://picsum.photos/248/152?r=0.5891684684752854`,
      `http://picsum.photos/248/152?r=0.9977850225433902`,
      `http://picsum.photos/248/152?r=0.4260100148160473`,
      `http://picsum.photos/248/152?r=0.021392534999185475`
    ],
    "premium": true,
    "price": 2977,
    "title": `Big company apartment`,
    "type": `apartment`,
    "rating": 4,
    "description": `Pharetra massa massa ultricies mi quis hendrerit dolor`,
    "bedrooms": 2,
    "guests": 1,
    "features": [
      `Dishwasher`,
      `Video games`,
      `Conditioner`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/bottts/0.29928823791668724.svg`,
      "name": `Jason Johnson`,
      "super": true
    },
    "coords": {
      "lat": 50.963333,
      "lng": 6.99
    }
  },
  {
    "city": `DUSSELDORF`,
    "id": `279073558f`,
    "images": [
      `http://picsum.photos/248/152?r=0.21901000411528226`,
      `http://picsum.photos/248/152?r=0.7794990306800045`,
      `http://picsum.photos/248/152?r=0.7791534927288253`
    ],
    "premium": false,
    "price": 2110,
    "title": `Couples particularly like this location `,
    "type": `room`,
    "rating": 3,
    "description": `Ut ornare lectus sit amet est placerat`,
    "bedrooms": 2,
    "guests": 7,
    "features": [
      `Towels`,
      `Parking`,
      `Wi-fi`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/female/0.009669942373727869.svg`,
      "name": `Nicole Jackson`,
      "super": true
    },
    "coords": {
      "lat": 51.218304,
      "lng": 6.833849
    }
  },
  {
    "city": `BRUSSELS`,
    "id": `1523120ecac`,
    "images": [
      `http://picsum.photos/248/152?r=0.7617024767502245`,
      `http://picsum.photos/248/152?r=0.42172538551476313`,
      `http://picsum.photos/248/152?r=0.17882305607749438`,
      `http://picsum.photos/248/152?r=0.40735115784879117`
    ],
    "premium": true,
    "price": 4917,
    "title": `Quite place for zen vacations`,
    "type": `room`,
    "rating": 5,
    "description": `Dictum fusce ut placerat orci`,
    "bedrooms": 5,
    "guests": 10,
    "features": [
      `Heating`,
      `Gym`,
      `Parking`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/gridy/0.08783314470489989.svg`,
      "name": `Jeffrey Carter`,
      "super": true
    },
    "coords": {
      "lat": 50.853333000000006,
      "lng": 4.283333
    }
  },
  {
    "city": `AMSTERDAM`,
    "id": `12fe45c987d`,
    "images": [
      `http://picsum.photos/248/152?r=0.7993403071751337`,
      `http://picsum.photos/248/152?r=0.10095080330989648`,
      `http://picsum.photos/248/152?r=0.536944312980705`,
      `http://picsum.photos/248/152?r=0.11039311293318632`
    ],
    "premium": true,
    "price": 2757,
    "title": `Nearest airport & transport station`,
    "type": `house`,
    "rating": 2,
    "description": `Ullamcorper a lacus vestibulum sed arcu non odio`,
    "bedrooms": 6,
    "guests": 4,
    "features": [
      `Conditioner`,
      `Washer`,
      `Guide`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/avataaars/0.7308090467032271.svg`,
      "name": `Sarah Clark`,
      "super": true
    },
    "coords": {
      "lat": 52.39333,
      "lng": 4.880000000000001
    }
  },
  {
    "city": `COLOGNE`,
    "id": `36bf8b0ed`,
    "images": [
      `http://picsum.photos/248/152?r=0.006445529686524676`,
      `http://picsum.photos/248/152?r=0.2599968040842229`
    ],
    "premium": false,
    "price": 1318,
    "title": `Beautiful & luxurious apartment at great location`,
    "type": `house`,
    "rating": 5,
    "description": `Mi sit amet mauris commodo quis imperdiet massa`,
    "bedrooms": 5,
    "guests": 1,
    "features": [
      `Wi-fi`,
      `Gym`,
      `Conditioner`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/human/0.7675102723612821.svg`,
      "name": `Jason Thompson`,
      "super": false
    },
    "coords": {
      "lat": 50.933333,
      "lng": 6.95
    }
  },
  {
    "city": `DUSSELDORF`,
    "id": `d14e1d5e1c`,
    "images": [
      `http://picsum.photos/248/152?r=0.40882055409299745`,
      `http://picsum.photos/248/152?r=0.06672450926066764`,
      `http://picsum.photos/248/152?r=0.05453651598244158`,
      `http://picsum.photos/248/152?r=0.8274632465153111`,
      `http://picsum.photos/248/152?r=0.27908618436940014`,
      `http://picsum.photos/248/152?r=0.8015697419568137`,
      `http://picsum.photos/248/152?r=0.8256622967878835`
    ],
    "premium": false,
    "price": 4420,
    "title": `Big company apartment`,
    "type": `room`,
    "rating": 1,
    "description": `Nisi vitae suscipit tellus mauris a diam maecenas sed`,
    "bedrooms": 1,
    "guests": 8,
    "features": [
      `Gym`,
      `Elevator`,
      `Heating`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/male/0.5251631118523317.svg`,
      "name": `Dorothy Campbell`,
      "super": false
    },
    "coords": {
      "lat": 51.208304,
      "lng": 6.773849
    }
  },
  {
    "city": `COLOGNE`,
    "id": `e3d9794d69`,
    "images": [
      `http://picsum.photos/248/152?r=0.8399269006369048`,
      `http://picsum.photos/248/152?r=0.7407776886602895`,
      `http://picsum.photos/248/152?r=0.06497114618684763`,
      `http://picsum.photos/248/152?r=0.7112065679750474`,
      `http://picsum.photos/248/152?r=0.7840524232154522`,
      `http://picsum.photos/248/152?r=0.40008665285519185`,
      `http://picsum.photos/248/152?r=0.46520267138190374`
    ],
    "premium": false,
    "price": 2289,
    "title": `Best lobby bar & Michelin restaurant`,
    "type": `room`,
    "rating": 2,
    "description": `Id faucibus nisl tincidunt eget nullam non nisi est sit.`,
    "bedrooms": 2,
    "guests": 8,
    "features": [
      `Guide`,
      `Wi-fi`,
      `Video games`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/human/0.23520004691184515.svg`,
      "name": `Charles Turner`,
      "super": false
    },
    "coords": {
      "lat": 50.953333,
      "lng": 6.96
    }
  },
  {
    "city": `BRUSSELS`,
    "id": `cab2d717f2`,
    "images": [
      `http://picsum.photos/248/152?r=0.49373948257945144`,
      `http://picsum.photos/248/152?r=0.2982193527752943`
    ],
    "premium": false,
    "price": 1659,
    "title": `Beautiful & luxurious apartment at great location`,
    "type": `room`,
    "rating": 3,
    "description": `Elit ut aliquam purus sit amet luctus venenatis lectus`,
    "bedrooms": 4,
    "guests": 1,
    "features": [
      `Video games`,
      `Kitchen`,
      `Parking`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/gridy/0.8717482190970416.svg`,
      "name": `Karen Campbell`,
      "super": true
    },
    "coords": {
      "lat": 50.863333000000004,
      "lng": 4.363333
    }
  },
  {
    "city": `DUSSELDORF`,
    "id": `488b09c1c0`,
    "images": [
      `http://picsum.photos/248/152?r=0.21822926403928133`,
      `http://picsum.photos/248/152?r=0.09152673504751374`,
      `http://picsum.photos/248/152?r=0.8753184977237791`,
      `http://picsum.photos/248/152?r=0.27678033040499384`,
      `http://picsum.photos/248/152?r=0.2864990157984286`,
      `http://picsum.photos/248/152?r=0.23820605290524832`,
      `http://picsum.photos/248/152?r=0.31329275929444944`
    ],
    "premium": true,
    "price": 3248,
    "title": `Nearest airport & transport station`,
    "type": `apartment`,
    "rating": 1,
    "description": `Eget velit aliquet sagittis id`,
    "bedrooms": 3,
    "guests": 10,
    "features": [
      `Washer`,
      `Guide`,
      `Elevator`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/bottts/0.9712165885253132.svg`,
      "name": `James Davis`,
      "super": false
    },
    "coords": {
      "lat": 51.218304,
      "lng": 6.833849
    }
  },
  {
    "city": `HAMBURG`,
    "id": `1653d6dda60`,
    "images": [
      `http://picsum.photos/248/152?r=0.5756828644367376`,
      `http://picsum.photos/248/152?r=0.8684452527540116`,
      `http://picsum.photos/248/152?r=0.198531448781609`,
      `http://picsum.photos/248/152?r=0.25828596140474125`,
      `http://picsum.photos/248/152?r=0.26010479887908167`
    ],
    "premium": false,
    "price": 903,
    "title": `Beautiful & luxurious apartment at great location`,
    "type": `room`,
    "rating": 3,
    "description": `Justo donec enim diam vulputate ut pharetra sit amet aliquam`,
    "bedrooms": 6,
    "guests": 10,
    "features": [
      `Guide`,
      `Heating`,
      `Kitchen`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/female/0.7676258373335056.svg`,
      "name": `James Clark`,
      "super": false
    },
    "coords": {
      "lat": 53.575323,
      "lng": 10.03534
    }
  },
  {
    "city": `PARIS`,
    "id": `129afddfe7f`,
    "images": [
      `http://picsum.photos/248/152?r=0.0694497465760977`,
      `http://picsum.photos/248/152?r=0.9057396170348462`,
      `http://picsum.photos/248/152?r=0.6944094038869075`,
      `http://picsum.photos/248/152?r=0.4631614836611593`,
      `http://picsum.photos/248/152?r=0.8126249422153031`
    ],
    "premium": false,
    "price": 4302,
    "title": `Nearest airport & transport station`,
    "type": `room`,
    "rating": 2,
    "description": `Justo donec enim diam vulputate ut pharetra sit amet aliquam`,
    "bedrooms": 6,
    "guests": 2,
    "features": [
      `Conditioner`,
      `Gym`,
      `Towels`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/bottts/0.690382832121381.svg`,
      "name": `Gary Clark`,
      "super": false
    },
    "coords": {
      "lat": 48.846667,
      "lng": 2.333333
    }
  },
  {
    "city": `PARIS`,
    "id": `2e642274ee`,
    "images": [
      `http://picsum.photos/248/152?r=0.6306171157411999`,
      `http://picsum.photos/248/152?r=0.5175244005030795`,
      `http://picsum.photos/248/152?r=0.7221053381646432`,
      `http://picsum.photos/248/152?r=0.7639074321649424`,
      `http://picsum.photos/248/152?r=0.6004477603751652`
    ],
    "premium": true,
    "price": 4471,
    "title": `Quite place for zen vacations`,
    "type": `apartment`,
    "rating": 2,
    "description": `Elit ut aliquam purus sit amet luctus venenatis lectus`,
    "bedrooms": 6,
    "guests": 3,
    "features": [
      `Heating`,
      `Washer`,
      `Towels`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/male/0.6004578245524812.svg`,
      "name": `Gary Campbell`,
      "super": true
    },
    "coords": {
      "lat": 48.846667,
      "lng": 2.373333
    }
  },
  {
    "city": `COLOGNE`,
    "id": `142427e29c5`,
    "images": [
      `http://picsum.photos/248/152?r=0.38337224678532555`,
      `http://picsum.photos/248/152?r=0.936218322858626`,
      `http://picsum.photos/248/152?r=0.1432921738992048`,
      `http://picsum.photos/248/152?r=0.15633545956955097`,
      `http://picsum.photos/248/152?r=0.6483456684849147`,
      `http://picsum.photos/248/152?r=0.6256915544244499`,
      `http://picsum.photos/248/152?r=0.152422563553966`
    ],
    "premium": false,
    "price": 1276,
    "title": `Bed and breakfast. Best offer!`,
    "type": `house`,
    "rating": 2,
    "description": `Pharetra massa massa ultricies mi quis hendrerit dolor`,
    "bedrooms": 4,
    "guests": 9,
    "features": [
      `Conditioner`,
      `Towels`,
      `Wi-fi`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/female/0.46383229086428446.svg`,
      "name": `Sandra Turner`,
      "super": true
    },
    "coords": {
      "lat": 50.923333,
      "lng": 6.94
    }
  },
  {
    "city": `DUSSELDORF`,
    "id": `a3589df1dd`,
    "images": [
      `http://picsum.photos/248/152?r=0.8653885842499134`,
      `http://picsum.photos/248/152?r=0.09919428047054635`,
      `http://picsum.photos/248/152?r=0.09800170267420416`
    ],
    "premium": true,
    "price": 1828,
    "title": `Quite place for zen vacations`,
    "type": `hotel`,
    "rating": 3,
    "description": `Eget velit aliquet sagittis id`,
    "bedrooms": 1,
    "guests": 4,
    "features": [
      `Dishwasher`,
      `Elevator`,
      `Gym`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/bottts/0.47932427383594933.svg`,
      "name": `Gary Robinson`,
      "super": false
    },
    "coords": {
      "lat": 51.238304,
      "lng": 6.843849
    }
  },
  {
    "city": `BRUSSELS`,
    "id": `104690c19e4`,
    "images": [
      `http://picsum.photos/248/152?r=0.7571382280429537`,
      `http://picsum.photos/248/152?r=0.2983567961968734`,
      `http://picsum.photos/248/152?r=0.4143406039232571`,
      `http://picsum.photos/248/152?r=0.44878808621604205`,
      `http://picsum.photos/248/152?r=0.8613753041479735`,
      `http://picsum.photos/248/152?r=0.263755432282778`,
      `http://picsum.photos/248/152?r=0.2614806731985799`
    ],
    "premium": true,
    "price": 2187,
    "title": `Bed and breakfast. Best offer!`,
    "type": `house`,
    "rating": 5,
    "description": `Ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus`,
    "bedrooms": 4,
    "guests": 4,
    "features": [
      `Guide`,
      `Parking`,
      `Heating`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/bottts/0.2175293387810322.svg`,
      "name": `Stephen Clark`,
      "super": false
    },
    "coords": {
      "lat": 50.833333,
      "lng": 4.313333
    }
  },
  {
    "city": `HAMBURG`,
    "id": `11601edc4dc`,
    "images": [
      `http://picsum.photos/248/152?r=0.38029590802257607`,
      `http://picsum.photos/248/152?r=0.6223781603073568`,
      `http://picsum.photos/248/152?r=0.418838808877384`,
      `http://picsum.photos/248/152?r=0.6732998304945808`,
      `http://picsum.photos/248/152?r=0.23096644704602887`,
      `http://picsum.photos/248/152?r=0.40267872084272294`
    ],
    "premium": false,
    "price": 1966,
    "title": `Couples particularly like this location `,
    "type": `house`,
    "rating": 5,
    "description": `Mi sit amet mauris commodo quis imperdiet massa`,
    "bedrooms": 5,
    "guests": 1,
    "features": [
      `Washer`,
      `Conditioner`,
      `Kitchen`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/female/0.9590307730342564.svg`,
      "name": `Gregory Carter`,
      "super": false
    },
    "coords": {
      "lat": 53.555322999999994,
      "lng": 10.03534
    }
  },
  {
    "city": `HAMBURG`,
    "id": `e36bb4a2dc`,
    "images": [
      `http://picsum.photos/248/152?r=0.3885712269179593`,
      `http://picsum.photos/248/152?r=0.346401743898066`,
      `http://picsum.photos/248/152?r=0.5531129493838098`,
      `http://picsum.photos/248/152?r=0.00898192425994604`
    ],
    "premium": true,
    "price": 4985,
    "title": `Nearest airport & transport station`,
    "type": `hotel`,
    "rating": 0,
    "description": `Ut ornare lectus sit amet est placerat`,
    "bedrooms": 4,
    "guests": 4,
    "features": [
      `Parking`,
      `Heating`,
      `Guide`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/female/0.06467896735896628.svg`,
      "name": `Patricia Scott`,
      "super": false
    },
    "coords": {
      "lat": 53.555322999999994,
      "lng": 9.99534
    }
  },
  {
    "city": `HAMBURG`,
    "id": `a7371d65e7`,
    "images": [
      `http://picsum.photos/248/152?r=0.5205762837234098`,
      `http://picsum.photos/248/152?r=0.9782149680398269`,
      `http://picsum.photos/248/152?r=0.06192594065652446`,
      `http://picsum.photos/248/152?r=0.35880895630673626`,
      `http://picsum.photos/248/152?r=0.9380000401877799`,
      `http://picsum.photos/248/152?r=0.5463984162101068`
    ],
    "premium": true,
    "price": 3008,
    "title": `Bed and breakfast. Best offer!`,
    "type": `apartment`,
    "rating": 4,
    "description": `Nisi vitae suscipit tellus mauris a diam maecenas sed`,
    "bedrooms": 2,
    "guests": 4,
    "features": [
      `Wi-fi`,
      `Guide`,
      `Video games`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/avataaars/0.6844192416013564.svg`,
      "name": `Steven Johnson`,
      "super": true
    },
    "coords": {
      "lat": 53.555322999999994,
      "lng": 9.975340000000001
    }
  },
  {
    "city": `HAMBURG`,
    "id": `e79c678f69`,
    "images": [
      `http://picsum.photos/248/152?r=0.10760391211674669`,
      `http://picsum.photos/248/152?r=0.4278513169754705`,
      `http://picsum.photos/248/152?r=0.3538412063374681`,
      `http://picsum.photos/248/152?r=0.9964914061291354`,
      `http://picsum.photos/248/152?r=0.4095844986542023`
    ],
    "premium": true,
    "price": 4520,
    "title": `Beautiful & luxurious apartment at great location`,
    "type": `house`,
    "rating": 3,
    "description": `Pharetra massa massa ultricies mi quis hendrerit dolor`,
    "bedrooms": 3,
    "guests": 6,
    "features": [
      `Conditioner`,
      `Washer`,
      `Parking`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/bottts/0.4356794149108367.svg`,
      "name": `Kenneth Brown`,
      "super": false
    },
    "coords": {
      "lat": 53.545322999999996,
      "lng": 10.01534
    }
  },
  {
    "city": `AMSTERDAM`,
    "id": `8f1ade6058`,
    "images": [
      `http://picsum.photos/248/152?r=0.7211887880379877`,
      `http://picsum.photos/248/152?r=0.43655717592431365`,
      `http://picsum.photos/248/152?r=0.4794344519645999`,
      `http://picsum.photos/248/152?r=0.9867194788088094`,
      `http://picsum.photos/248/152?r=0.8571374850736013`,
      `http://picsum.photos/248/152?r=0.6225859786302537`,
      `http://picsum.photos/248/152?r=0.14449851258802338`
    ],
    "premium": true,
    "price": 3398,
    "title": `Nearest airport & transport station`,
    "type": `hotel`,
    "rating": 1,
    "description": `Mattis enim ut tellus elementum`,
    "bedrooms": 5,
    "guests": 2,
    "features": [
      `Gym`,
      `Dishwasher`,
      `Elevator`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/avataaars/0.0437978038380451.svg`,
      "name": `Dorothy Phillips`,
      "super": true
    },
    "coords": {
      "lat": 52.35333,
      "lng": 4.9
    }
  },
  {
    "city": `DUSSELDORF`,
    "id": `13d5d4dd91f`,
    "images": [
      `http://picsum.photos/248/152?r=0.040241162987365575`,
      `http://picsum.photos/248/152?r=0.16867013549191912`,
      `http://picsum.photos/248/152?r=0.3182210252093094`,
      `http://picsum.photos/248/152?r=0.511091228832778`,
      `http://picsum.photos/248/152?r=0.030902365356150208`
    ],
    "premium": false,
    "price": 3381,
    "title": `Bed and breakfast. Best offer!`,
    "type": `apartment`,
    "rating": 3,
    "description": `Mauris sit amet massa vitae tortor condimentum lacinia quis vel`,
    "bedrooms": 1,
    "guests": 3,
    "features": [
      `Heating`,
      `Dishwasher`,
      `Washer`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/bottts/0.5516260035836802.svg`,
      "name": `Samantha Lewis`,
      "super": true
    },
    "coords": {
      "lat": 51.228304,
      "lng": 6.843849
    }
  },
  {
    "city": `BRUSSELS`,
    "id": `f6bb3b95d2`,
    "images": [
      `http://picsum.photos/248/152?r=0.5213215104731548`,
      `http://picsum.photos/248/152?r=0.8785108937057093`,
      `http://picsum.photos/248/152?r=0.7365871486318825`,
      `http://picsum.photos/248/152?r=0.03719047734114178`,
      `http://picsum.photos/248/152?r=0.7031880622122455`,
      `http://picsum.photos/248/152?r=0.9700160351709768`,
      `http://picsum.photos/248/152?r=0.7229462812065139`,
      `http://picsum.photos/248/152?r=0.5173251354984982`
    ],
    "premium": true,
    "price": 665,
    "title": `Quite place for zen vacations`,
    "type": `hotel`,
    "rating": 1,
    "description": `Mauris sit amet massa vitae tortor condimentum lacinia quis vel`,
    "bedrooms": 4,
    "guests": 2,
    "features": [
      `Washer`,
      `Dishwasher`,
      `Gym`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/bottts/0.7945721112237267.svg`,
      "name": `Gregory Parker`,
      "super": false
    },
    "coords": {
      "lat": 50.803333,
      "lng": 4.353332999999999
    }
  },
  {
    "city": `COLOGNE`,
    "id": `17491143aeb`,
    "images": [
      `http://picsum.photos/248/152?r=0.7380591956530658`,
      `http://picsum.photos/248/152?r=0.9288659502179284`
    ],
    "premium": true,
    "price": 2049,
    "title": `Beautiful & luxurious apartment at great location`,
    "type": `hotel`,
    "rating": 0,
    "description": `Elit ut aliquam purus sit amet luctus venenatis lectus`,
    "bedrooms": 4,
    "guests": 9,
    "features": [
      `Guide`,
      `Kitchen`,
      `Parking`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/female/0.6318555798147463.svg`,
      "name": `Gary Green`,
      "super": false
    },
    "coords": {
      "lat": 50.943332999999996,
      "lng": 6.9
    }
  },
  {
    "city": `COLOGNE`,
    "id": `dbc18b4748`,
    "images": [
      `http://picsum.photos/248/152?r=0.5587353404889868`,
      `http://picsum.photos/248/152?r=0.929815623878715`,
      `http://picsum.photos/248/152?r=0.562098971983954`,
      `http://picsum.photos/248/152?r=0.18578199221981673`,
      `http://picsum.photos/248/152?r=0.6458140636070584`,
      `http://picsum.photos/248/152?r=0.7269648540557347`
    ],
    "premium": false,
    "price": 1010,
    "title": `Quite place for zen vacations`,
    "type": `room`,
    "rating": 5,
    "description": `Eget velit aliquet sagittis id`,
    "bedrooms": 4,
    "guests": 4,
    "features": [
      `Heating`,
      `Washer`,
      `Guide`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/avataaars/0.19651795766436897.svg`,
      "name": `Justin Campbell`,
      "super": false
    },
    "coords": {
      "lat": 50.953333,
      "lng": 6.99
    }
  },
  {
    "city": `BRUSSELS`,
    "id": `88f83cec41`,
    "images": [
      `http://picsum.photos/248/152?r=0.92792815031539`,
      `http://picsum.photos/248/152?r=0.3703095595202375`
    ],
    "premium": false,
    "price": 1614,
    "title": `Big company apartment`,
    "type": `house`,
    "rating": 5,
    "description": `Et malesuada fames ac turpis egestas integer eget aliquet nibh`,
    "bedrooms": 6,
    "guests": 6,
    "features": [
      `Kitchen`,
      `Guide`,
      `Parking`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/male/0.8116603900909782.svg`,
      "name": `Robert Smith`,
      "super": false
    },
    "coords": {
      "lat": 50.803333,
      "lng": 4.333333
    }
  },
  {
    "city": `AMSTERDAM`,
    "id": `4346d2aac`,
    "images": [
      `http://picsum.photos/248/152?r=0.3407106684725656`,
      `http://picsum.photos/248/152?r=0.5722777458713477`,
      `http://picsum.photos/248/152?r=0.3664835209085944`,
      `http://picsum.photos/248/152?r=0.13911282122276725`
    ],
    "premium": false,
    "price": 51,
    "title": `Nearest airport & transport station`,
    "type": `apartment`,
    "rating": 0,
    "description": `Habitant morbi tristique senectus et`,
    "bedrooms": 5,
    "guests": 5,
    "features": [
      `Towels`,
      `Parking`,
      `Gym`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/gridy/0.7569249506863462.svg`,
      "name": `Nancy Davis`,
      "super": true
    },
    "coords": {
      "lat": 52.36333,
      "lng": 4.880000000000001
    }
  },
  {
    "city": `PARIS`,
    "id": `97e9f6eaeb`,
    "images": [
      `http://picsum.photos/248/152?r=0.922952059619323`,
      `http://picsum.photos/248/152?r=0.05409614838055665`,
      `http://picsum.photos/248/152?r=0.5182260746181468`,
      `http://picsum.photos/248/152?r=0.30623445244860004`,
      `http://picsum.photos/248/152?r=0.17187606115365361`
    ],
    "premium": true,
    "price": 2305,
    "title": `Big company apartment`,
    "type": `room`,
    "rating": 4,
    "description": `Ut ornare lectus sit amet est placerat`,
    "bedrooms": 5,
    "guests": 8,
    "features": [
      `Washer`,
      `Kitchen`,
      `Guide`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/gridy/0.9113449502212072.svg`,
      "name": `Jason Davis`,
      "super": false
    },
    "coords": {
      "lat": 48.836667,
      "lng": 2.383333
    }
  },
  {
    "city": `BRUSSELS`,
    "id": `acf0a3278b`,
    "images": [
      `http://picsum.photos/248/152?r=0.21117627103316727`,
      `http://picsum.photos/248/152?r=0.6951900960877144`,
      `http://picsum.photos/248/152?r=0.16150733019565422`,
      `http://picsum.photos/248/152?r=0.8889994003007726`,
      `http://picsum.photos/248/152?r=0.20976400351820979`,
      `http://picsum.photos/248/152?r=0.20176564413284725`
    ],
    "premium": false,
    "price": 2721,
    "title": `Best lobby bar & Michelin restaurant`,
    "type": `house`,
    "rating": 3,
    "description": `Justo donec enim diam vulputate ut pharetra sit amet aliquam`,
    "bedrooms": 1,
    "guests": 5,
    "features": [
      `Heating`,
      `Parking`,
      `Guide`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/avataaars/0.6920940404169631.svg`,
      "name": `Kenneth Jones`,
      "super": false
    },
    "coords": {
      "lat": 50.803333,
      "lng": 4.3433329999999994
    }
  },
  {
    "city": `BRUSSELS`,
    "id": `5e324b9404`,
    "images": [
      `http://picsum.photos/248/152?r=0.3062039329991577`,
      `http://picsum.photos/248/152?r=0.7650034727195052`,
      `http://picsum.photos/248/152?r=0.6060155735316766`,
      `http://picsum.photos/248/152?r=0.9263040674104388`,
      `http://picsum.photos/248/152?r=0.93940264288744`,
      `http://picsum.photos/248/152?r=0.5193703890173094`,
      `http://picsum.photos/248/152?r=0.10992150412163348`
    ],
    "premium": false,
    "price": 3160,
    "title": `Nearest airport & transport station`,
    "type": `house`,
    "rating": 4,
    "description": `Dictum fusce ut placerat orci`,
    "bedrooms": 4,
    "guests": 2,
    "features": [
      `Parking`,
      `Video games`,
      `Towels`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/avataaars/0.22756566647037801.svg`,
      "name": `Robert Smith`,
      "super": false
    },
    "coords": {
      "lat": 50.823333000000005,
      "lng": 4.283333
    }
  },
  {
    "city": `AMSTERDAM`,
    "id": `2ea6e75a7`,
    "images": [
      `http://picsum.photos/248/152?r=0.5812677237285768`,
      `http://picsum.photos/248/152?r=0.4966382296068783`,
      `http://picsum.photos/248/152?r=0.05582879746525893`,
      `http://picsum.photos/248/152?r=0.8736672023114449`,
      `http://picsum.photos/248/152?r=0.6037268989891569`
    ],
    "premium": true,
    "price": 977,
    "title": `Big company apartment`,
    "type": `apartment`,
    "rating": 0,
    "description": `Ullamcorper a lacus vestibulum sed arcu non odio`,
    "bedrooms": 3,
    "guests": 7,
    "features": [
      `Heating`,
      `Washer`,
      `Towels`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/avataaars/0.9081904405054184.svg`,
      "name": `Anthony Adams`,
      "super": false
    },
    "coords": {
      "lat": 52.35333,
      "lng": 4.87
    }
  },
  {
    "city": `BRUSSELS`,
    "id": `15c0e0a3f55`,
    "images": [
      `http://picsum.photos/248/152?r=0.2543406157025532`,
      `http://picsum.photos/248/152?r=0.6414155902252043`
    ],
    "premium": false,
    "price": 1194,
    "title": `Quite place for zen vacations`,
    "type": `apartment`,
    "rating": 2,
    "description": `Ut ornare lectus sit amet est placerat`,
    "bedrooms": 1,
    "guests": 4,
    "features": [
      `Kitchen`,
      `Towels`,
      `Wi-fi`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/bottts/0.8289787029451119.svg`,
      "name": `Nancy Brown`,
      "super": true
    },
    "coords": {
      "lat": 50.863333000000004,
      "lng": 4.283333
    }
  },
  {
    "city": `AMSTERDAM`,
    "id": `f99a244ca2`,
    "images": [
      `http://picsum.photos/248/152?r=0.5327483307041077`,
      `http://picsum.photos/248/152?r=0.7690237199035004`,
      `http://picsum.photos/248/152?r=0.7838915009373844`,
      `http://picsum.photos/248/152?r=0.3272023646571731`,
      `http://picsum.photos/248/152?r=0.017070129136166345`,
      `http://picsum.photos/248/152?r=0.2377329372121053`,
      `http://picsum.photos/248/152?r=0.9330860182453764`
    ],
    "premium": false,
    "price": 376,
    "title": `Big company apartment`,
    "type": `hotel`,
    "rating": 4,
    "description": `Ut ornare lectus sit amet est placerat`,
    "bedrooms": 1,
    "guests": 9,
    "features": [
      `Dishwasher`,
      `Elevator`,
      `Parking`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/male/0.4314875931143185.svg`,
      "name": `Edward Brown`,
      "super": true
    },
    "coords": {
      "lat": 52.38333,
      "lng": 4.890000000000001
    }
  },
  {
    "city": `COLOGNE`,
    "id": `10fd5cbbe78`,
    "images": [
      `http://picsum.photos/248/152?r=0.1986937827331159`,
      `http://picsum.photos/248/152?r=0.9070907919937183`,
      `http://picsum.photos/248/152?r=0.6195608696169002`,
      `http://picsum.photos/248/152?r=0.9807182018356766`,
      `http://picsum.photos/248/152?r=0.5234780179039735`,
      `http://picsum.photos/248/152?r=0.6239813429710757`,
      `http://picsum.photos/248/152?r=0.4795372949399892`
    ],
    "premium": true,
    "price": 4719,
    "title": `Big company apartment`,
    "type": `room`,
    "rating": 0,
    "description": `Mi sit amet mauris commodo quis imperdiet massa`,
    "bedrooms": 6,
    "guests": 8,
    "features": [
      `Parking`,
      `Video games`,
      `Towels`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/avataaars/0.7417673840294703.svg`,
      "name": `Katherine Adams`,
      "super": true
    },
    "coords": {
      "lat": 50.933333,
      "lng": 6.930000000000001
    }
  },
  {
    "city": `PARIS`,
    "id": `6f36c071d6`,
    "images": [
      `http://picsum.photos/248/152?r=0.6241296205009483`,
      `http://picsum.photos/248/152?r=0.7127522528349175`,
      `http://picsum.photos/248/152?r=0.6290634315123644`,
      `http://picsum.photos/248/152?r=0.12786331389917227`
    ],
    "premium": true,
    "price": 723,
    "title": `Couples particularly like this location `,
    "type": `house`,
    "rating": 2,
    "description": `Dictum fusce ut placerat orci`,
    "bedrooms": 2,
    "guests": 10,
    "features": [
      `Dishwasher`,
      `Parking`,
      `Heating`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/bottts/0.8981164100064443.svg`,
      "name": `Amanda Brown`,
      "super": true
    },
    "coords": {
      "lat": 48.896667,
      "lng": 2.383333
    }
  },
  {
    "city": `PARIS`,
    "id": `5a868f2e85`,
    "images": [
      `http://picsum.photos/248/152?r=0.5849225399347273`,
      `http://picsum.photos/248/152?r=0.9523569532176517`,
      `http://picsum.photos/248/152?r=0.32204248942709723`,
      `http://picsum.photos/248/152?r=0.5473914358831469`
    ],
    "premium": true,
    "price": 2548,
    "title": `Big company apartment`,
    "type": `house`,
    "rating": 1,
    "description": `Nisi vitae suscipit tellus mauris a diam maecenas sed`,
    "bedrooms": 6,
    "guests": 3,
    "features": [
      `Gym`,
      `Washer`,
      `Kitchen`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/human/0.9507285699920405.svg`,
      "name": `Christopher Anderson`,
      "super": false
    },
    "coords": {
      "lat": 48.836667,
      "lng": 2.313333
    }
  },
  {
    "city": `AMSTERDAM`,
    "id": `7ba1ff0935`,
    "images": [
      `http://picsum.photos/248/152?r=0.023750339361846784`,
      `http://picsum.photos/248/152?r=0.6428858904350079`
    ],
    "premium": false,
    "price": 3675,
    "title": `Best lobby bar & Michelin restaurant`,
    "type": `apartment`,
    "rating": 2,
    "description": `Et malesuada fames ac turpis egestas integer eget aliquet nibh`,
    "bedrooms": 2,
    "guests": 1,
    "features": [
      `Elevator`,
      `Washer`,
      `Parking`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/avataaars/0.22614356194686058.svg`,
      "name": `Joseph Moore`,
      "super": true
    },
    "coords": {
      "lat": 52.38333,
      "lng": 4.880000000000001
    }
  },
  {
    "city": `DUSSELDORF`,
    "id": `11996fa8fc4`,
    "images": [
      `http://picsum.photos/248/152?r=0.22688372921589317`,
      `http://picsum.photos/248/152?r=0.5054701464583062`,
      `http://picsum.photos/248/152?r=0.7041076492519878`,
      `http://picsum.photos/248/152?r=0.060110000088336335`
    ],
    "premium": true,
    "price": 2346,
    "title": `Best lobby bar & Michelin restaurant`,
    "type": `house`,
    "rating": 4,
    "description": `Mauris sit amet massa vitae tortor condimentum lacinia quis vel`,
    "bedrooms": 2,
    "guests": 1,
    "features": [
      `Kitchen`,
      `Dishwasher`,
      `Washer`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/gridy/0.24870748133539.svg`,
      "name": `Christopher Davis`,
      "super": false
    },
    "coords": {
      "lat": 51.258304,
      "lng": 6.833849
    }
  },
  {
    "city": `PARIS`,
    "id": `7a84c38963`,
    "images": [
      `http://picsum.photos/248/152?r=0.3286806462486245`,
      `http://picsum.photos/248/152?r=0.28651631047209114`
    ],
    "premium": false,
    "price": 2806,
    "title": `Quite place for zen vacations`,
    "type": `room`,
    "rating": 3,
    "description": `Nisi vitae suscipit tellus mauris a diam maecenas sed`,
    "bedrooms": 4,
    "guests": 1,
    "features": [
      `Elevator`,
      `Heating`,
      `Washer`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/bottts/0.480460364858589.svg`,
      "name": `Sharon Adams`,
      "super": true
    },
    "coords": {
      "lat": 48.836667,
      "lng": 2.2833330000000003
    }
  },
  {
    "city": `COLOGNE`,
    "id": `d58b19a23c`,
    "images": [
      `http://picsum.photos/248/152?r=0.6344381108804316`,
      `http://picsum.photos/248/152?r=0.12133491860911483`,
      `http://picsum.photos/248/152?r=0.5018971250852773`,
      `http://picsum.photos/248/152?r=0.741964237070615`,
      `http://picsum.photos/248/152?r=0.26020508961272637`,
      `http://picsum.photos/248/152?r=0.7749614981258717`
    ],
    "premium": false,
    "price": 4243,
    "title": `Nearest airport & transport station`,
    "type": `apartment`,
    "rating": 5,
    "description": `Habitant morbi tristique senectus et`,
    "bedrooms": 5,
    "guests": 10,
    "features": [
      `Elevator`,
      `Wi-fi`,
      `Washer`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/avataaars/0.6239920906273821.svg`,
      "name": `Sarah Thomas`,
      "super": false
    },
    "coords": {
      "lat": 50.943332999999996,
      "lng": 6.94
    }
  },
  {
    "city": `HAMBURG`,
    "id": `bc37a80e`,
    "images": [
      `http://picsum.photos/248/152?r=0.8561787955512019`,
      `http://picsum.photos/248/152?r=0.6833979959040375`,
      `http://picsum.photos/248/152?r=0.30539861132822854`,
      `http://picsum.photos/248/152?r=0.1795353652774334`,
      `http://picsum.photos/248/152?r=0.5874431085431402`
    ],
    "premium": true,
    "price": 4154,
    "title": `Beautiful & luxurious apartment at great location`,
    "type": `apartment`,
    "rating": 5,
    "description": `Mi sit amet mauris commodo quis imperdiet massa`,
    "bedrooms": 5,
    "guests": 8,
    "features": [
      `Guide`,
      `Conditioner`,
      `Video games`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/gridy/0.8422510072095617.svg`,
      "name": `Edward Thompson`,
      "super": true
    },
    "coords": {
      "lat": 53.595323,
      "lng": 10.02534
    }
  },
  {
    "city": `BRUSSELS`,
    "id": `22bf188fb1`,
    "images": [
      `http://picsum.photos/248/152?r=0.8453292699885318`,
      `http://picsum.photos/248/152?r=0.4453744318675936`,
      `http://picsum.photos/248/152?r=0.18067163421684218`
    ],
    "premium": true,
    "price": 4263,
    "title": `Quite place for zen vacations`,
    "type": `house`,
    "rating": 0,
    "description": `Mauris sit amet massa vitae tortor condimentum lacinia quis vel`,
    "bedrooms": 6,
    "guests": 10,
    "features": [
      `Heating`,
      `Dishwasher`,
      `Conditioner`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/male/0.8657932885146005.svg`,
      "name": `Justin Jones`,
      "super": false
    },
    "coords": {
      "lat": 50.863333000000004,
      "lng": 4.303332999999999
    }
  },
  {
    "city": `DUSSELDORF`,
    "id": `15e60d08745`,
    "images": [
      `http://picsum.photos/248/152?r=0.27346346891333706`,
      `http://picsum.photos/248/152?r=0.09637060728665126`,
      `http://picsum.photos/248/152?r=0.9650709226930432`,
      `http://picsum.photos/248/152?r=0.49560589402459154`
    ],
    "premium": true,
    "price": 2959,
    "title": `Best lobby bar & Michelin restaurant`,
    "type": `apartment`,
    "rating": 1,
    "description": `Lorem ipsum dolor sit amet, consectetur adipiscing…empor incididunt ut labore et dolore magna aliqua`,
    "bedrooms": 3,
    "guests": 4,
    "features": [
      `Towels`,
      `Parking`,
      `Kitchen`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/human/0.06898470739816709.svg`,
      "name": `William Adams`,
      "super": false
    },
    "coords": {
      "lat": 51.198304,
      "lng": 6.843849
    }
  },
  {
    "city": `DUSSELDORF`,
    "id": `11852ce3eea`,
    "images": [
      `http://picsum.photos/248/152?r=0.019741581981713496`,
      `http://picsum.photos/248/152?r=0.9460624858757525`,
      `http://picsum.photos/248/152?r=0.5285347031651293`,
      `http://picsum.photos/248/152?r=0.7413632612277414`,
      `http://picsum.photos/248/152?r=0.11868097116173937`,
      `http://picsum.photos/248/152?r=0.29203544995584596`
    ],
    "premium": false,
    "price": 1851,
    "title": `Bed and breakfast. Best offer!`,
    "type": `apartment`,
    "rating": 4,
    "description": `Tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium`,
    "bedrooms": 3,
    "guests": 4,
    "features": [
      `Parking`,
      `Guide`,
      `Wi-fi`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/human/0.11270944175600195.svg`,
      "name": `Edward Wood`,
      "super": true
    },
    "coords": {
      "lat": 51.198304,
      "lng": 6.783849
    }
  },
  {
    "city": `HAMBURG`,
    "id": `1017125705`,
    "images": [
      `http://picsum.photos/248/152?r=0.22418710129669228`,
      `http://picsum.photos/248/152?r=0.969552072266566`,
      `http://picsum.photos/248/152?r=0.4611599107123545`,
      `http://picsum.photos/248/152?r=0.7418735268605055`,
      `http://picsum.photos/248/152?r=0.7361504396280922`
    ],
    "premium": true,
    "price": 3704,
    "title": `Big company apartment`,
    "type": `house`,
    "rating": 1,
    "description": `Tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium`,
    "bedrooms": 4,
    "guests": 9,
    "features": [
      `Heating`,
      `Gym`,
      `Parking`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/human/0.4675814056288754.svg`,
      "name": `Jeffrey Wood`,
      "super": true
    },
    "coords": {
      "lat": 53.565323,
      "lng": 9.96534
    }
  },
  {
    "city": `HAMBURG`,
    "id": `fb6d0271cf`,
    "images": [
      `http://picsum.photos/248/152?r=0.6486787382205845`,
      `http://picsum.photos/248/152?r=0.1348321633372076`,
      `http://picsum.photos/248/152?r=0.24581882096784202`,
      `http://picsum.photos/248/152?r=0.2752076807040258`,
      `http://picsum.photos/248/152?r=0.9147245374963882`,
      `http://picsum.photos/248/152?r=0.3653864794591781`
    ],
    "premium": false,
    "price": 1156,
    "title": `Quite place for zen vacations`,
    "type": `house`,
    "rating": 4,
    "description": `Nisi vitae suscipit tellus mauris a diam maecenas sed`,
    "bedrooms": 1,
    "guests": 9,
    "features": [
      `Video games`,
      `Conditioner`,
      `Towels`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/avataaars/0.13856331731319949.svg`,
      "name": `Paul Smith`,
      "super": false
    },
    "coords": {
      "lat": 53.545322999999996,
      "lng": 10.02534
    }
  },
  {
    "city": `BRUSSELS`,
    "id": `15cb2bb20f4`,
    "images": [
      `http://picsum.photos/248/152?r=0.25519736475590116`,
      `http://picsum.photos/248/152?r=0.42864300561440105`
    ],
    "premium": true,
    "price": 651,
    "title": `Bed and breakfast. Best offer!`,
    "type": `apartment`,
    "rating": 3,
    "description": `Tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium`,
    "bedrooms": 1,
    "guests": 2,
    "features": [
      `Washer`,
      `Guide`,
      `Heating`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/human/0.2903221689713398.svg`,
      "name": `Sandra Anderson`,
      "super": true
    },
    "coords": {
      "lat": 50.803333,
      "lng": 4.293333
    }
  },
  {
    "city": `AMSTERDAM`,
    "id": `8e7f917928`,
    "images": [
      `http://picsum.photos/248/152?r=0.028290254868925446`,
      `http://picsum.photos/248/152?r=0.29253827825408973`,
      `http://picsum.photos/248/152?r=0.8716709106087956`,
      `http://picsum.photos/248/152?r=0.12954982599419984`,
      `http://picsum.photos/248/152?r=0.5237972103497248`,
      `http://picsum.photos/248/152?r=0.17696339378123005`,
      `http://picsum.photos/248/152?r=0.0004887187291804374`
    ],
    "premium": true,
    "price": 4508,
    "title": `Nearest airport & transport station`,
    "type": `apartment`,
    "rating": 3,
    "description": `Eu turpis egestas pretium aenean pharetra magna ac`,
    "bedrooms": 2,
    "guests": 3,
    "features": [
      `Towels`,
      `Elevator`,
      `Kitchen`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/avataaars/0.3181677111019239.svg`,
      "name": `John Johnson`,
      "super": true
    },
    "coords": {
      "lat": 52.35333,
      "lng": 4.87
    }
  },
  {
    "city": `PARIS`,
    "id": `92c1a34c6b`,
    "images": [
      `http://picsum.photos/248/152?r=0.26138625007780303`,
      `http://picsum.photos/248/152?r=0.4329207854235033`,
      `http://picsum.photos/248/152?r=0.19811047546426264`,
      `http://picsum.photos/248/152?r=0.06406787597067232`,
      `http://picsum.photos/248/152?r=0.4308381437347699`,
      `http://picsum.photos/248/152?r=0.8538825086827462`,
      `http://picsum.photos/248/152?r=0.6310024360906938`,
      `http://picsum.photos/248/152?r=0.5412416391183763`
    ],
    "premium": true,
    "price": 4007,
    "title": `Big company apartment`,
    "type": `house`,
    "rating": 5,
    "description": `Eu turpis egestas pretium aenean pharetra magna ac`,
    "bedrooms": 5,
    "guests": 8,
    "features": [
      `Washer`,
      `Kitchen`,
      `Dishwasher`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/avataaars/0.9099920116531399.svg`,
      "name": `Sandra Campbell`,
      "super": true
    },
    "coords": {
      "lat": 48.876667,
      "lng": 2.2833330000000003
    }
  },
  {
    "city": `HAMBURG`,
    "id": `114967df77b`,
    "images": [
      `http://picsum.photos/248/152?r=0.9848765245108269`,
      `http://picsum.photos/248/152?r=0.5181374766696079`,
      `http://picsum.photos/248/152?r=0.07449953797581621`,
      `http://picsum.photos/248/152?r=0.49291132837591434`
    ],
    "premium": true,
    "price": 4497,
    "title": `Couples particularly like this location `,
    "type": `hotel`,
    "rating": 4,
    "description": `Eu turpis egestas pretium aenean pharetra magna ac`,
    "bedrooms": 1,
    "guests": 7,
    "features": [
      `Kitchen`,
      `Gym`,
      `Guide`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/human/0.20816239887559274.svg`,
      "name": `Jessica Thomas`,
      "super": true
    },
    "coords": {
      "lat": 53.595323,
      "lng": 10.01534
    }
  },
  {
    "city": `BRUSSELS`,
    "id": `109bde82f1a`,
    "images": [
      `http://picsum.photos/248/152?r=0.007942593968341516`,
      `http://picsum.photos/248/152?r=0.9844310304698569`,
      `http://picsum.photos/248/152?r=0.971274736654121`,
      `http://picsum.photos/248/152?r=0.1514434974594121`,
      `http://picsum.photos/248/152?r=0.6318606732557408`,
      `http://picsum.photos/248/152?r=0.008525195143022968`,
      `http://picsum.photos/248/152?r=0.4848787634663958`,
      `http://picsum.photos/248/152?r=0.8783428216495008`
    ],
    "premium": true,
    "price": 3835,
    "title": `Beautiful & luxurious apartment at great location`,
    "type": `house`,
    "rating": 3,
    "description": `Ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus`,
    "bedrooms": 5,
    "guests": 5,
    "features": [
      `Gym`,
      `Wi-fi`,
      `Towels`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/male/0.869738464221673.svg`,
      "name": `Patricia Jackson`,
      "super": true
    },
    "coords": {
      "lat": 50.863333000000004,
      "lng": 4.3433329999999994
    }
  },
  {
    "city": `DUSSELDORF`,
    "id": `13d6610fe47`,
    "images": [
      `http://picsum.photos/248/152?r=0.18491233755723124`,
      `http://picsum.photos/248/152?r=0.2886626186218917`,
      `http://picsum.photos/248/152?r=0.3637924471733107`,
      `http://picsum.photos/248/152?r=0.9545231911467968`,
      `http://picsum.photos/248/152?r=0.5401114389511252`,
      `http://picsum.photos/248/152?r=0.32775821442344677`,
      `http://picsum.photos/248/152?r=0.04844580114483277`,
      `http://picsum.photos/248/152?r=0.8880840227217368`
    ],
    "premium": false,
    "price": 3177,
    "title": `Nearest airport & transport station`,
    "type": `hotel`,
    "rating": 1,
    "description": `Habitant morbi tristique senectus et`,
    "bedrooms": 4,
    "guests": 5,
    "features": [
      `Dishwasher`,
      `Washer`,
      `Wi-fi`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/male/0.7543705529282376.svg`,
      "name": `Dorothy Carter`,
      "super": true
    },
    "coords": {
      "lat": 51.198304,
      "lng": 6.833849
    }
  },
  {
    "city": `PARIS`,
    "id": `41550d0734`,
    "images": [
      `http://picsum.photos/248/152?r=0.29567923994174317`,
      `http://picsum.photos/248/152?r=0.29124502585483936`,
      `http://picsum.photos/248/152?r=0.4824909543279765`,
      `http://picsum.photos/248/152?r=0.32732324430414006`
    ],
    "premium": false,
    "price": 224,
    "title": `Couples particularly like this location `,
    "type": `room`,
    "rating": 2,
    "description": `Pharetra massa massa ultricies mi quis hendrerit dolor`,
    "bedrooms": 6,
    "guests": 9,
    "features": [
      `Towels`,
      `Gym`,
      `Guide`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/bottts/0.13241805230054782.svg`,
      "name": `Christopher Scott`,
      "super": false
    },
    "coords": {
      "lat": 48.886667,
      "lng": 2.343333
    }
  },
  {
    "city": `HAMBURG`,
    "id": `6df9ab487f`,
    "images": [
      `http://picsum.photos/248/152?r=0.5770648528093036`,
      `http://picsum.photos/248/152?r=0.5802648108546904`
    ],
    "premium": true,
    "price": 2560,
    "title": `Beautiful & luxurious apartment at great location`,
    "type": `house`,
    "rating": 4,
    "description": `Ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus`,
    "bedrooms": 3,
    "guests": 6,
    "features": [
      `Dishwasher`,
      `Parking`,
      `Wi-fi`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/avataaars/0.6436582060128548.svg`,
      "name": `Charles Jackson`,
      "super": false
    },
    "coords": {
      "lat": 53.585322999999995,
      "lng": 9.96534
    }
  },
  {
    "city": `COLOGNE`,
    "id": `a2dd8bdf0c`,
    "images": [
      `http://picsum.photos/248/152?r=0.1578432461211965`,
      `http://picsum.photos/248/152?r=0.6881342839669176`,
      `http://picsum.photos/248/152?r=0.6724474674050771`,
      `http://picsum.photos/248/152?r=0.45858864924601805`
    ],
    "premium": false,
    "price": 4847,
    "title": `Nearest airport & transport station`,
    "type": `apartment`,
    "rating": 3,
    "description": `Eu turpis egestas pretium aenean pharetra magna ac`,
    "bedrooms": 1,
    "guests": 6,
    "features": [
      `Dishwasher`,
      `Video games`,
      `Washer`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/bottts/0.2651221258389165.svg`,
      "name": `Gary Green`,
      "super": true
    },
    "coords": {
      "lat": 50.903332999999996,
      "lng": 6.96
    }
  },
  {
    "city": `AMSTERDAM`,
    "id": `162506d4e85`,
    "images": [
      `http://picsum.photos/248/152?r=0.8934191276793058`,
      `http://picsum.photos/248/152?r=0.3154707502712588`,
      `http://picsum.photos/248/152?r=0.3859320686779508`,
      `http://picsum.photos/248/152?r=0.6596906906627666`,
      `http://picsum.photos/248/152?r=0.6039474386218799`,
      `http://picsum.photos/248/152?r=0.10692228802221027`,
      `http://picsum.photos/248/152?r=0.7880962230335804`
    ],
    "premium": false,
    "price": 1741,
    "title": `Couples particularly like this location `,
    "type": `house`,
    "rating": 2,
    "description": `Odio aenean sed adipiscing diam donec adipiscing tristique risus nec`,
    "bedrooms": 5,
    "guests": 2,
    "features": [
      `Conditioner`,
      `Guide`,
      `Dishwasher`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/male/0.7322458807278138.svg`,
      "name": `Nicholas Lewis`,
      "super": false
    },
    "coords": {
      "lat": 52.37333,
      "lng": 4.890000000000001
    }
  },
  {
    "city": `HAMBURG`,
    "id": `ec275a6bd8`,
    "images": [
      `http://picsum.photos/248/152?r=0.21244667800991968`,
      `http://picsum.photos/248/152?r=0.8510940815825143`,
      `http://picsum.photos/248/152?r=0.05675457465379985`,
      `http://picsum.photos/248/152?r=0.13682376797203677`,
      `http://picsum.photos/248/152?r=0.17042148398694867`
    ],
    "premium": true,
    "price": 1367,
    "title": `Quite place for zen vacations`,
    "type": `apartment`,
    "rating": 0,
    "description": `Justo donec enim diam vulputate ut pharetra sit amet aliquam`,
    "bedrooms": 5,
    "guests": 6,
    "features": [
      `Gym`,
      `Guide`,
      `Conditioner`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/human/0.531754082422673.svg`,
      "name": `Gary Clark`,
      "super": true
    },
    "coords": {
      "lat": 53.565323,
      "lng": 10.06534
    }
  },
  {
    "city": `AMSTERDAM`,
    "id": `12c4516c09b`,
    "images": [
      `http://picsum.photos/248/152?r=0.10562768858990257`,
      `http://picsum.photos/248/152?r=0.12541635883368074`,
      `http://picsum.photos/248/152?r=0.3314725681163715`,
      `http://picsum.photos/248/152?r=0.15392521939012727`,
      `http://picsum.photos/248/152?r=0.9325376288147038`
    ],
    "premium": false,
    "price": 2599,
    "title": `Beautiful & luxurious apartment at great location`,
    "type": `house`,
    "rating": 5,
    "description": `Mauris sit amet massa vitae tortor condimentum lacinia quis vel`,
    "bedrooms": 1,
    "guests": 3,
    "features": [
      `Gym`,
      `Conditioner`,
      `Video games`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/female/0.2943628678818151.svg`,
      "name": `Steven Campbell`,
      "super": true
    },
    "coords": {
      "lat": 52.41333,
      "lng": 4.87
    }
  },
  {
    "city": `PARIS`,
    "id": `3d206fff7f`,
    "images": [
      `http://picsum.photos/248/152?r=0.3558807795318577`,
      `http://picsum.photos/248/152?r=0.6241658835216886`,
      `http://picsum.photos/248/152?r=0.9741193342739887`
    ],
    "premium": false,
    "price": 4417,
    "title": `Bed and breakfast. Best offer!`,
    "type": `hotel`,
    "rating": 0,
    "description": `Elit ut aliquam purus sit amet luctus venenatis lectus`,
    "bedrooms": 6,
    "guests": 6,
    "features": [
      `Guide`,
      `Washer`,
      `Conditioner`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/bottts/0.697094366269891.svg`,
      "name": `Kenneth Carter`,
      "super": false
    },
    "coords": {
      "lat": 48.886667,
      "lng": 2.333333
    }
  },
  {
    "city": `DUSSELDORF`,
    "id": `d14a2b8c62`,
    "images": [
      `http://picsum.photos/248/152?r=0.00739585216618166`,
      `http://picsum.photos/248/152?r=0.8656377445225218`,
      `http://picsum.photos/248/152?r=0.46367188301067563`,
      `http://picsum.photos/248/152?r=0.9444904176794857`
    ],
    "premium": true,
    "price": 137,
    "title": `Nearest airport & transport station`,
    "type": `room`,
    "rating": 5,
    "description": `Elementum eu facilisis sed odio morbi quis commodo odio`,
    "bedrooms": 3,
    "guests": 5,
    "features": [
      `Parking`,
      `Gym`,
      `Towels`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/gridy/0.6481819890119833.svg`,
      "name": `Jonathan Johnson`,
      "super": true
    },
    "coords": {
      "lat": 51.228304,
      "lng": 6.813848999999999
    }
  },
  {
    "city": `AMSTERDAM`,
    "id": `16d3afb2678`,
    "images": [
      `http://picsum.photos/248/152?r=0.7907511959675235`,
      `http://picsum.photos/248/152?r=0.7412090939949156`,
      `http://picsum.photos/248/152?r=0.07206408942098719`,
      `http://picsum.photos/248/152?r=0.884888446550467`,
      `http://picsum.photos/248/152?r=0.14105520625628087`,
      `http://picsum.photos/248/152?r=0.40559740423013`,
      `http://picsum.photos/248/152?r=0.9945814299094906`,
      `http://picsum.photos/248/152?r=0.2224663057024392`
    ],
    "premium": false,
    "price": 4101,
    "title": `Big company apartment`,
    "type": `room`,
    "rating": 2,
    "description": `Ullamcorper a lacus vestibulum sed arcu non odio`,
    "bedrooms": 4,
    "guests": 7,
    "features": [
      `Elevator`,
      `Kitchen`,
      `Guide`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/gridy/0.47905815525816564.svg`,
      "name": `Karen Jones`,
      "super": true
    },
    "coords": {
      "lat": 52.403330000000004,
      "lng": 4.8500000000000005
    }
  },
  {
    "city": `PARIS`,
    "id": `1561ab1855e`,
    "images": [
      `http://picsum.photos/248/152?r=0.7484122951141372`,
      `http://picsum.photos/248/152?r=0.5660145468338134`
    ],
    "premium": true,
    "price": 4278,
    "title": `Couples particularly like this location `,
    "type": `room`,
    "rating": 5,
    "description": `Eget velit aliquet sagittis id`,
    "bedrooms": 6,
    "guests": 2,
    "features": [
      `Dishwasher`,
      `Elevator`,
      `Heating`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/human/0.5934574579769063.svg`,
      "name": `Paul Anderson`,
      "super": false
    },
    "coords": {
      "lat": 48.886667,
      "lng": 2.343333
    }
  },
  {
    "city": `DUSSELDORF`,
    "id": `d549fd0411`,
    "images": [
      `http://picsum.photos/248/152?r=0.3489000957840578`,
      `http://picsum.photos/248/152?r=0.7816768252926625`,
      `http://picsum.photos/248/152?r=0.36235389743715785`,
      `http://picsum.photos/248/152?r=0.6834641965961721`,
      `http://picsum.photos/248/152?r=0.02455150545167717`,
      `http://picsum.photos/248/152?r=0.21055300410099398`,
      `http://picsum.photos/248/152?r=0.5946592891491658`,
      `http://picsum.photos/248/152?r=0.4830522343768495`
    ],
    "premium": true,
    "price": 175,
    "title": `Couples particularly like this location `,
    "type": `hotel`,
    "rating": 1,
    "description": `Eget velit aliquet sagittis id`,
    "bedrooms": 6,
    "guests": 6,
    "features": [
      `Dishwasher`,
      `Towels`,
      `Parking`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/avataaars/0.40977131399996414.svg`,
      "name": `Elizabeth Jackson`,
      "super": false
    },
    "coords": {
      "lat": 51.218304,
      "lng": 6.753849
    }
  },
  {
    "city": `DUSSELDORF`,
    "id": `716a69985a`,
    "images": [
      `http://picsum.photos/248/152?r=0.8241634996740266`,
      `http://picsum.photos/248/152?r=0.8457785937627145`
    ],
    "premium": false,
    "price": 2180,
    "title": `Best lobby bar & Michelin restaurant`,
    "type": `room`,
    "rating": 4,
    "description": `Mi sit amet mauris commodo quis imperdiet massa`,
    "bedrooms": 6,
    "guests": 1,
    "features": [
      `Guide`,
      `Wi-fi`,
      `Gym`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/gridy/0.18466535557374342.svg`,
      "name": `Jessica Turner`,
      "super": false
    },
    "coords": {
      "lat": 51.258304,
      "lng": 6.773849
    }
  },
  {
    "city": `BRUSSELS`,
    "id": `506b910c64`,
    "images": [
      `http://picsum.photos/248/152?r=0.10738898500126881`,
      `http://picsum.photos/248/152?r=0.7909656877705753`,
      `http://picsum.photos/248/152?r=0.22229074813818284`
    ],
    "premium": true,
    "price": 1254,
    "title": `Big company apartment`,
    "type": `house`,
    "rating": 2,
    "description": `Ullamcorper a lacus vestibulum sed arcu non odio`,
    "bedrooms": 4,
    "guests": 7,
    "features": [
      `Wi-fi`,
      `Elevator`,
      `Video games`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/human/0.12087485358357108.svg`,
      "name": `Christopher Lewis`,
      "super": true
    },
    "coords": {
      "lat": 50.833333,
      "lng": 4.323333
    }
  },
  {
    "city": `DUSSELDORF`,
    "id": `c718424c62`,
    "images": [
      `http://picsum.photos/248/152?r=0.3186166581265868`,
      `http://picsum.photos/248/152?r=0.8211626284802664`,
      `http://picsum.photos/248/152?r=0.2107156172103133`,
      `http://picsum.photos/248/152?r=0.6233486497466652`,
      `http://picsum.photos/248/152?r=0.5687535088421993`,
      `http://picsum.photos/248/152?r=0.495250873622064`,
      `http://picsum.photos/248/152?r=0.6355870132769448`,
      `http://picsum.photos/248/152?r=0.3392521788560108`
    ],
    "premium": false,
    "price": 2658,
    "title": `Best lobby bar & Michelin restaurant`,
    "type": `house`,
    "rating": 5,
    "description": `Mi sit amet mauris commodo quis imperdiet massa`,
    "bedrooms": 1,
    "guests": 6,
    "features": [
      `Guide`,
      `Towels`,
      `Heating`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/gridy/0.9346269266019962.svg`,
      "name": `Cynthia Smith`,
      "super": true
    },
    "coords": {
      "lat": 51.198304,
      "lng": 6.763849
    }
  },
  {
    "city": `COLOGNE`,
    "id": `ab505fa33b`,
    "images": [
      `http://picsum.photos/248/152?r=0.9261200978694049`,
      `http://picsum.photos/248/152?r=0.7306459807903274`,
      `http://picsum.photos/248/152?r=0.9731105188844245`,
      `http://picsum.photos/248/152?r=0.9984646726172199`,
      `http://picsum.photos/248/152?r=0.2867814674612372`,
      `http://picsum.photos/248/152?r=0.7639154742906724`,
      `http://picsum.photos/248/152?r=0.27131519446601726`,
      `http://picsum.photos/248/152?r=0.3144236609901845`
    ],
    "premium": true,
    "price": 1610,
    "title": `Big company apartment`,
    "type": `apartment`,
    "rating": 2,
    "description": `Mauris sit amet massa vitae tortor condimentum lacinia quis vel`,
    "bedrooms": 1,
    "guests": 4,
    "features": [
      `Kitchen`,
      `Heating`,
      `Gym`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/gridy/0.4272903260619123.svg`,
      "name": `Sandra Williams`,
      "super": false
    },
    "coords": {
      "lat": 50.923333,
      "lng": 6.92
    }
  },
  {
    "city": `AMSTERDAM`,
    "id": `33244b59a7`,
    "images": [
      `http://picsum.photos/248/152?r=0.39599107198706296`,
      `http://picsum.photos/248/152?r=0.8850035808719288`,
      `http://picsum.photos/248/152?r=0.6007993361518829`,
      `http://picsum.photos/248/152?r=0.8867798560647251`,
      `http://picsum.photos/248/152?r=0.24668124594473428`,
      `http://picsum.photos/248/152?r=0.5543412351028181`
    ],
    "premium": true,
    "price": 2820,
    "title": `Nearest airport & transport station`,
    "type": `hotel`,
    "rating": 5,
    "description": `Justo donec enim diam vulputate ut pharetra sit amet aliquam`,
    "bedrooms": 4,
    "guests": 5,
    "features": [
      `Wi-fi`,
      `Dishwasher`,
      `Washer`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/avataaars/0.7431654050173184.svg`,
      "name": `Jeffrey Campbell`,
      "super": false
    },
    "coords": {
      "lat": 52.37333,
      "lng": 4.880000000000001
    }
  },
  {
    "city": `AMSTERDAM`,
    "id": `566793a273`,
    "images": [
      `http://picsum.photos/248/152?r=0.6375448267390815`,
      `http://picsum.photos/248/152?r=0.6675135137395041`,
      `http://picsum.photos/248/152?r=0.46702855748869676`
    ],
    "premium": false,
    "price": 643,
    "title": `Best lobby bar & Michelin restaurant`,
    "type": `apartment`,
    "rating": 5,
    "description": `Ullamcorper a lacus vestibulum sed arcu non odio`,
    "bedrooms": 4,
    "guests": 8,
    "features": [
      `Conditioner`,
      `Dishwasher`,
      `Heating`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/male/0.8768341638119388.svg`,
      "name": `Rebecca Smith`,
      "super": false
    },
    "coords": {
      "lat": 52.37333,
      "lng": 4.94
    }
  },
  {
    "city": `PARIS`,
    "id": `16794872774`,
    "images": [
      `http://picsum.photos/248/152?r=0.19523476893848368`,
      `http://picsum.photos/248/152?r=0.5683195098174174`,
      `http://picsum.photos/248/152?r=0.05987235150701009`
    ],
    "premium": true,
    "price": 3214,
    "title": `Beautiful & luxurious apartment at great location`,
    "type": `room`,
    "rating": 3,
    "description": `Ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus`,
    "bedrooms": 6,
    "guests": 4,
    "features": [
      `Guide`,
      `Video games`,
      `Parking`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/female/0.7724833306105985.svg`,
      "name": `Cynthia Adams`,
      "super": true
    },
    "coords": {
      "lat": 48.846667,
      "lng": 2.313333
    }
  },
  {
    "city": `AMSTERDAM`,
    "id": `2c7b54fae9`,
    "images": [
      `http://picsum.photos/248/152?r=0.029180729152149754`,
      `http://picsum.photos/248/152?r=0.5714500241522571`,
      `http://picsum.photos/248/152?r=0.47486280493147937`,
      `http://picsum.photos/248/152?r=0.731876291579034`,
      `http://picsum.photos/248/152?r=0.4155987094425866`,
      `http://picsum.photos/248/152?r=0.6394428548128244`
    ],
    "premium": true,
    "price": 3065,
    "title": `Best lobby bar & Michelin restaurant`,
    "type": `apartment`,
    "rating": 4,
    "description": `Nisi vitae suscipit tellus mauris a diam maecenas sed`,
    "bedrooms": 6,
    "guests": 5,
    "features": [
      `Parking`,
      `Conditioner`,
      `Kitchen`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/gridy/0.5718479895774777.svg`,
      "name": `Nancy Davis`,
      "super": true
    },
    "coords": {
      "lat": 52.39333,
      "lng": 4.92
    }
  },
  {
    "city": `AMSTERDAM`,
    "id": `10bea50f495`,
    "images": [
      `http://picsum.photos/248/152?r=0.8952077723156238`,
      `http://picsum.photos/248/152?r=0.291065086476604`,
      `http://picsum.photos/248/152?r=0.8227917538265981`
    ],
    "premium": true,
    "price": 2660,
    "title": `Bed and breakfast. Best offer!`,
    "type": `room`,
    "rating": 4,
    "description": `Mattis enim ut tellus elementum`,
    "bedrooms": 6,
    "guests": 5,
    "features": [
      `Dishwasher`,
      `Kitchen`,
      `Elevator`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/male/0.7409752554052247.svg`,
      "name": `Rebecca Green`,
      "super": true
    },
    "coords": {
      "lat": 52.39333,
      "lng": 4.95
    }
  },
  {
    "city": `AMSTERDAM`,
    "id": `fd3669a969`,
    "images": [
      `http://picsum.photos/248/152?r=0.14780445471639392`,
      `http://picsum.photos/248/152?r=0.08290554267084604`,
      `http://picsum.photos/248/152?r=0.1822134397413977`
    ],
    "premium": true,
    "price": 3870,
    "title": `Quite place for zen vacations`,
    "type": `apartment`,
    "rating": 4,
    "description": `Ut ornare lectus sit amet est placerat`,
    "bedrooms": 1,
    "guests": 7,
    "features": [
      `Video games`,
      `Towels`,
      `Kitchen`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/bottts/0.7608239219440744.svg`,
      "name": `Jonathan Carter`,
      "super": false
    },
    "coords": {
      "lat": 52.38333,
      "lng": 4.91
    }
  },
  {
    "city": `BRUSSELS`,
    "id": `d9aa7e8f20`,
    "images": [
      `http://picsum.photos/248/152?r=0.7618016494279467`,
      `http://picsum.photos/248/152?r=0.5817310106668454`,
      `http://picsum.photos/248/152?r=0.33063650285032375`
    ],
    "premium": false,
    "price": 4640,
    "title": `Bed and breakfast. Best offer!`,
    "type": `apartment`,
    "rating": 0,
    "description": `Tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium`,
    "bedrooms": 1,
    "guests": 8,
    "features": [
      `Towels`,
      `Heating`,
      `Dishwasher`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/gridy/0.7259066453754133.svg`,
      "name": `Jessica Wood`,
      "super": true
    },
    "coords": {
      "lat": 50.863333000000004,
      "lng": 4.363333
    }
  },
  {
    "city": `HAMBURG`,
    "id": `59471cfb78`,
    "images": [
      `http://picsum.photos/248/152?r=0.9392249048919212`,
      `http://picsum.photos/248/152?r=0.278128023746925`,
      `http://picsum.photos/248/152?r=0.09770926006839953`
    ],
    "premium": false,
    "price": 1354,
    "title": `Couples particularly like this location `,
    "type": `hotel`,
    "rating": 5,
    "description": `Nisi vitae suscipit tellus mauris a diam maecenas sed`,
    "bedrooms": 4,
    "guests": 7,
    "features": [
      `Guide`,
      `Heating`,
      `Conditioner`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/bottts/0.7467533823818797.svg`,
      "name": `John Carter`,
      "super": true
    },
    "coords": {
      "lat": 53.545322999999996,
      "lng": 10.03534
    }
  },
  {
    "city": `BRUSSELS`,
    "id": `fc91dc1eb5`,
    "images": [
      `http://picsum.photos/248/152?r=0.7507835777994851`,
      `http://picsum.photos/248/152?r=0.1064970003896899`,
      `http://picsum.photos/248/152?r=0.17886685893315657`,
      `http://picsum.photos/248/152?r=0.3135006906392963`
    ],
    "premium": true,
    "price": 3688,
    "title": `Quite place for zen vacations`,
    "type": `hotel`,
    "rating": 4,
    "description": `Lorem ipsum dolor sit amet, consectetur adipiscing…empor incididunt ut labore et dolore magna aliqua`,
    "bedrooms": 5,
    "guests": 7,
    "features": [
      `Wi-fi`,
      `Guide`,
      `Parking`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/avataaars/0.44577336026205283.svg`,
      "name": `Karen Johnson`,
      "super": false
    },
    "coords": {
      "lat": 50.863333000000004,
      "lng": 4.3833329999999995
    }
  },
  {
    "city": `BRUSSELS`,
    "id": `dadc8cb503`,
    "images": [
      `http://picsum.photos/248/152?r=0.4927092212915112`,
      `http://picsum.photos/248/152?r=0.604538865028303`,
      `http://picsum.photos/248/152?r=0.649792821484189`,
      `http://picsum.photos/248/152?r=0.38668303117159475`
    ],
    "premium": true,
    "price": 156,
    "title": `Quite place for zen vacations`,
    "type": `hotel`,
    "rating": 5,
    "description": `Et malesuada fames ac turpis egestas integer eget aliquet nibh`,
    "bedrooms": 4,
    "guests": 4,
    "features": [
      `Guide`,
      `Conditioner`,
      `Video games`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/female/0.20276458950994036.svg`,
      "name": `Anthony Adams`,
      "super": true
    },
    "coords": {
      "lat": 50.823333000000005,
      "lng": 4.283333
    }
  },
  {
    "city": `BRUSSELS`,
    "id": `5a6c2d5d80`,
    "images": [
      `http://picsum.photos/248/152?r=0.8855583450887308`,
      `http://picsum.photos/248/152?r=0.7023734298415447`
    ],
    "premium": true,
    "price": 2705,
    "title": `Big company apartment`,
    "type": `apartment`,
    "rating": 5,
    "description": `Et malesuada fames ac turpis egestas integer eget aliquet nibh`,
    "bedrooms": 4,
    "guests": 9,
    "features": [
      `Towels`,
      `Dishwasher`,
      `Washer`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/female/0.27099432344286356.svg`,
      "name": `Mary Anderson`,
      "super": true
    },
    "coords": {
      "lat": 50.863333000000004,
      "lng": 4.373333
    }
  },
  {
    "city": `DUSSELDORF`,
    "id": `110d9fc6f9`,
    "images": [
      `http://picsum.photos/248/152?r=0.328715076099499`,
      `http://picsum.photos/248/152?r=0.15132829909946444`,
      `http://picsum.photos/248/152?r=0.19297269172473075`,
      `http://picsum.photos/248/152?r=0.14001085797656643`,
      `http://picsum.photos/248/152?r=0.6999196566695145`,
      `http://picsum.photos/248/152?r=0.7352158039820802`
    ],
    "premium": false,
    "price": 2915,
    "title": `Bed and breakfast. Best offer!`,
    "type": `house`,
    "rating": 1,
    "description": `Nisi vitae suscipit tellus mauris a diam maecenas sed`,
    "bedrooms": 6,
    "guests": 5,
    "features": [
      `Parking`,
      `Towels`,
      `Washer`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/human/0.9129305845346987.svg`,
      "name": `Rebecca Scott`,
      "super": false
    },
    "coords": {
      "lat": 51.238304,
      "lng": 6.833849
    }
  },
  {
    "city": `DUSSELDORF`,
    "id": `6fbe5a9253`,
    "images": [
      `http://picsum.photos/248/152?r=0.03675585403927428`,
      `http://picsum.photos/248/152?r=0.05536987688235229`,
      `http://picsum.photos/248/152?r=0.7876151571495791`
    ],
    "premium": true,
    "price": 1527,
    "title": `Quite place for zen vacations`,
    "type": `house`,
    "rating": 5,
    "description": `Justo donec enim diam vulputate ut pharetra sit amet aliquam`,
    "bedrooms": 1,
    "guests": 5,
    "features": [
      `Heating`,
      `Video games`,
      `Guide`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/female/0.7913016600449212.svg`,
      "name": `Edward Clark`,
      "super": true
    },
    "coords": {
      "lat": 51.208304,
      "lng": 6.793849
    }
  },
  {
    "city": `AMSTERDAM`,
    "id": `158bf7945f9`,
    "images": [
      `http://picsum.photos/248/152?r=0.7197038314796771`,
      `http://picsum.photos/248/152?r=0.7448551671017438`
    ],
    "premium": false,
    "price": 2697,
    "title": `Best lobby bar & Michelin restaurant`,
    "type": `room`,
    "rating": 3,
    "description": `Ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus`,
    "bedrooms": 6,
    "guests": 6,
    "features": [
      `Washer`,
      `Kitchen`,
      `Parking`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/gridy/0.9203293382694515.svg`,
      "name": `Kenneth Thomas`,
      "super": false
    },
    "coords": {
      "lat": 52.41333,
      "lng": 4.94
    }
  },
  {
    "city": `BRUSSELS`,
    "id": `14704a8816`,
    "images": [
      `http://picsum.photos/248/152?r=0.9794989297769969`,
      `http://picsum.photos/248/152?r=0.8682948791679912`,
      `http://picsum.photos/248/152?r=0.6686804963507369`,
      `http://picsum.photos/248/152?r=0.6650588359466845`,
      `http://picsum.photos/248/152?r=0.050016051919016924`
    ],
    "premium": false,
    "price": 3497,
    "title": `Nearest airport & transport station`,
    "type": `hotel`,
    "rating": 5,
    "description": `Odio aenean sed adipiscing diam donec adipiscing tristique risus nec`,
    "bedrooms": 1,
    "guests": 2,
    "features": [
      `Dishwasher`,
      `Video games`,
      `Parking`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/human/0.9382170117312372.svg`,
      "name": `Patricia Brown`,
      "super": true
    },
    "coords": {
      "lat": 50.833333,
      "lng": 4.333333
    }
  },
  {
    "city": `COLOGNE`,
    "id": `97a8da009b`,
    "images": [
      `http://picsum.photos/248/152?r=0.5673043244560774`,
      `http://picsum.photos/248/152?r=0.9847611206858744`,
      `http://picsum.photos/248/152?r=0.32868244919367773`,
      `http://picsum.photos/248/152?r=0.16694420692745005`,
      `http://picsum.photos/248/152?r=0.6738410974370876`
    ],
    "premium": false,
    "price": 4578,
    "title": `Big company apartment`,
    "type": `hotel`,
    "rating": 3,
    "description": `Odio aenean sed adipiscing diam donec adipiscing tristique risus nec`,
    "bedrooms": 1,
    "guests": 10,
    "features": [
      `Parking`,
      `Conditioner`,
      `Wi-fi`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/gridy/0.6565149154977652.svg`,
      "name": `Jeffrey Phillips`,
      "super": false
    },
    "coords": {
      "lat": 50.943332999999996,
      "lng": 6.97
    }
  },
  {
    "city": `BRUSSELS`,
    "id": `12b6f338ee1`,
    "images": [
      `http://picsum.photos/248/152?r=0.32883328624251784`,
      `http://picsum.photos/248/152?r=0.09349767291202982`
    ],
    "premium": true,
    "price": 1550,
    "title": `Best lobby bar & Michelin restaurant`,
    "type": `hotel`,
    "rating": 0,
    "description": `Tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium`,
    "bedrooms": 3,
    "guests": 1,
    "features": [
      `Gym`,
      `Washer`,
      `Video games`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/gridy/0.3832092350860896.svg`,
      "name": `Jeffrey Green`,
      "super": true
    },
    "coords": {
      "lat": 50.813333,
      "lng": 4.363333
    }
  },
  {
    "city": `DUSSELDORF`,
    "id": `1496b8b7aa2`,
    "images": [
      `http://picsum.photos/248/152?r=0.7329559697144303`,
      `http://picsum.photos/248/152?r=0.9914534481769492`
    ],
    "premium": true,
    "price": 1688,
    "title": `Beautiful & luxurious apartment at great location`,
    "type": `house`,
    "rating": 5,
    "description": `Pharetra massa massa ultricies mi quis hendrerit dolor`,
    "bedrooms": 4,
    "guests": 6,
    "features": [
      `Dishwasher`,
      `Wi-fi`,
      `Gym`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/male/0.7441719897385519.svg`,
      "name": `Paul Jackson`,
      "super": false
    },
    "coords": {
      "lat": 51.228304,
      "lng": 6.793849
    }
  },
  {
    "city": `COLOGNE`,
    "id": `1322066c29e`,
    "images": [
      `http://picsum.photos/248/152?r=0.6043581490558996`,
      `http://picsum.photos/248/152?r=0.6129882147464354`,
      `http://picsum.photos/248/152?r=0.6261328040013925`,
      `http://picsum.photos/248/152?r=0.15295256464934437`,
      `http://picsum.photos/248/152?r=0.2323890608099768`,
      `http://picsum.photos/248/152?r=0.15901365360911512`,
      `http://picsum.photos/248/152?r=0.1271398306215772`
    ],
    "premium": false,
    "price": 1630,
    "title": `Bed and breakfast. Best offer!`,
    "type": `hotel`,
    "rating": 1,
    "description": `Odio aenean sed adipiscing diam donec adipiscing tristique risus nec`,
    "bedrooms": 4,
    "guests": 2,
    "features": [
      `Elevator`,
      `Kitchen`,
      `Guide`
    ],
    "owner": {
      "avatar": `https://avatars.dicebear.com/api/gridy/0.6123187320731547.svg`,
      "name": `Mary Wood`,
      "super": false
    },
    "coords": {
      "lat": 50.943332999999996,
      "lng": 6.98
    }
  }

];
