import {
  getRandomArrayElement,
  getRandomAvatar,
  getRandomFullName,
  getRandomInteger,
} from "./utils";
import {descriptions} from "./consts";

export function getReview() {
  return {
    avatar: getRandomAvatar(),
    name: getRandomFullName(),
    date: new Date(),
    rating: getRandomInteger(5),
    review: getRandomArrayElement(descriptions),
  };
}

export const reviews = [
  {
    "avatar": `https://avatars.dicebear.com/api/male/0.7645336175647433.svg`,
    "name": `William Carter`,
    "date": `2020-10-28T16:40:08.863Z`,
    "rating": 4,
    "review": `Elit ut aliquam purus sit amet luctus venenatis lectus`
  },
  {
    "avatar": `https://avatars.dicebear.com/api/avataaars/0.4781533062529908.svg`,
    "name": `John Jones`,
    "date": `2020-10-28T16:40:08.863Z`,
    "rating": 1,
    "review": `Odio aenean sed adipiscing diam donec adipiscing tristique risus nec`
  },
  {
    "avatar": `https://avatars.dicebear.com/api/avataaars/0.20441360363464578.svg`,
    "name": `Karen Jones`,
    "date": `2020-10-28T16:40:08.863Z`,
    "rating": 2,
    "review": `Dictum fusce ut placerat orci`
  },
  {
    "avatar": `https://avatars.dicebear.com/api/human/0.20063384989863553.svg`,
    "name": `Jennifer Jones`,
    "date": `2020-10-28T16:40:08.863Z`,
    "rating": 5,
    "review": `Lorem ipsum dolor sit amet, consectetur adipiscing…empor incididunt ut labore et dolore magna aliqua`
  },
  {
    "avatar": `https://avatars.dicebear.com/api/female/0.4119047101562143.svg`,
    "name": `Justin Smith`,
    "date": `2020-10-28T16:40:08.863Z`,
    "rating": 1,
    "review": `Nisi vitae suscipit tellus mauris a diam maecenas sed`
  },
  {
    "avatar": `https://avatars.dicebear.com/api/gridy/0.2854034196487161.svg`,
    "name": `Cynthia Turner`,
    "date": `2020-10-28T16:40:08.863Z`,
    "rating": 0,
    "review": `Ut ornare lectus sit amet est placerat`
  },
  {
    "avatar": `https://avatars.dicebear.com/api/male/0.18312085562858216.svg`,
    "name": `John Green`,
    "date": `2020-10-28T16:40:08.863Z`,
    "rating": 0,
    "review": `Ut ornare lectus sit amet est placerat`
  },
  {
    "avatar": `https://avatars.dicebear.com/api/female/0.17208039794558827.svg`,
    "name": `Kevin Thompson`,
    "date": `2020-10-28T16:40:08.863Z`,
    "rating": 4,
    "review": `Mi sit amet mauris commodo quis imperdiet massa`
  },
  {
    "avatar": `https://avatars.dicebear.com/api/male/0.5254200821659152.svg`,
    "name": `Samuel Turner`,
    "date": `2020-10-28T16:40:08.863Z`,
    "rating": 3,
    "review": `Dictum fusce ut placerat orci`
  },
  {
    "avatar": `https://avatars.dicebear.com/api/gridy/0.619189705794484.svg`,
    "name": `Pamela Brown`,
    "date": `2020-10-28T16:40:08.863Z`,
    "rating": 2,
    "review": `Ullamcorper a lacus vestibulum sed arcu non odio`
  },
  {
    "avatar": `https://avatars.dicebear.com/api/avataaars/0.5079530059976065.svg`,
    "name": `Gregory Clark`,
    "date": `2020-10-28T16:40:08.863Z`,
    "rating": 3,
    "review": `Lorem ipsum dolor sit amet, consectetur adipiscing…empor incididunt ut labore et dolore magna aliqua`
  },
  {
    "avatar": `https://avatars.dicebear.com/api/male/0.9815587881381682.svg`,
    "name": `Sharon Brown`,
    "date": `2020-10-28T16:40:08.863Z`,
    "rating": 4,
    "review": `Habitant morbi tristique senectus et`
  },
  {
    "avatar": `https://avatars.dicebear.com/api/gridy/0.18111430077067725.svg`,
    "name": `Jeffrey Johnson`,
    "date": `2020-10-28T16:40:08.863Z`,
    "rating": 5,
    "review": `Mi sit amet mauris commodo quis imperdiet massa`
  },
  {
    "avatar": `https://avatars.dicebear.com/api/human/0.5061432652322122.svg`,
    "name": `Pamela Scott`,
    "date": `2020-10-28T16:40:08.863Z`,
    "rating": 5,
    "review": `Eget velit aliquet sagittis id`
  },
  {
    "avatar": `https://avatars.dicebear.com/api/avataaars/0.7667121263914811.svg`,
    "name": `John Wood`,
    "date": `2020-10-28T16:40:08.863Z`,
    "rating": 3,
    "review": `Mauris sit amet massa vitae tortor condimentum lacinia quis vel`
  },
  {
    "avatar": `https://avatars.dicebear.com/api/male/0.26408513092924446.svg`,
    "name": `John Parker`,
    "date": `2020-10-28T16:40:08.863Z`,
    "rating": 4,
    "review": `Eget velit aliquet sagittis id`
  },
  {
    "avatar": `https://avatars.dicebear.com/api/female/0.5021644522422415.svg`,
    "name": `Robert Parker`,
    "date": `2020-10-28T16:40:08.863Z`,
    "rating": 3,
    "review": `Eget velit aliquet sagittis id`
  },
  {
    "avatar": `https://avatars.dicebear.com/api/avataaars/0.023841719308205445.svg`,
    "name": `Frank Brown`,
    "date": `2020-10-28T16:40:08.863Z`,
    "rating": 5,
    "review": `Mattis enim ut tellus elementum`
  },
  {
    "avatar": `https://avatars.dicebear.com/api/bottts/0.3808415736605266.svg`,
    "name": `Ronald Jones`,
    "date": `2020-10-28T16:40:08.863Z`,
    "rating": 1,
    "review": `Elementum eu facilisis sed odio morbi quis commodo odio`
  },
  {
    "avatar": `https://avatars.dicebear.com/api/gridy/0.8948243360462602.svg`,
    "name": `Thomas Robinson`,
    "date": `2020-10-28T16:40:08.863Z`,
    "rating": 4,
    "review": `Elit ut aliquam purus sit amet luctus venenatis lectus`
  },
  {
    "avatar": `https://avatars.dicebear.com/api/bottts/0.2568606893875942.svg`,
    "name": `Samantha Parker`,
    "date": `2020-10-28T16:40:08.863Z`,
    "rating": 5,
    "review": `Dictum fusce ut placerat orci`
  },
  {
    "avatar": `https://avatars.dicebear.com/api/bottts/0.1800691779533503.svg`,
    "name": `Nicholas Lewis`,
    "date": `2020-10-28T16:40:08.863Z`,
    "rating": 2,
    "review": `Ullamcorper a lacus vestibulum sed arcu non odio`
  },
  {
    "avatar": `https://avatars.dicebear.com/api/human/0.8872179017359962.svg`,
    "name": `Jason Johnson`,
    "date": `2020-10-28T16:40:08.863Z`,
    "rating": 3,
    "review": `Ullamcorper a lacus vestibulum sed arcu non odio`
  },
  {
    "avatar": `https://avatars.dicebear.com/api/female/0.5707207103274041.svg`,
    "name": `Patricia Scott`,
    "date": `2020-10-28T16:40:08.863Z`,
    "rating": 5,
    "review": `Et malesuada fames ac turpis egestas integer eget aliquet nibh`
  },
  {
    "avatar": `https://avatars.dicebear.com/api/female/0.12399667759178956.svg`,
    "name": `Karen Parker`,
    "date": `2020-10-28T16:40:08.863Z`,
    "rating": 4,
    "review": `Ut ornare lectus sit amet est placerat`
  },
  {
    "avatar": `https://avatars.dicebear.com/api/bottts/0.4085756351072285.svg`,
    "name": `Katherine Phillips`,
    "date": `2020-10-28T16:40:08.863Z`,
    "rating": 0,
    "review": `Pharetra massa massa ultricies mi quis hendrerit dolor`
  },
  {
    "avatar": `https://avatars.dicebear.com/api/bottts/0.5525537327747667.svg`,
    "name": `Carolyn Davis`,
    "date": `2020-10-28T16:40:08.863Z`,
    "rating": 0,
    "review": `Elementum eu facilisis sed odio morbi quis commodo odio`
  },
  {
    "avatar": `https://avatars.dicebear.com/api/avataaars/0.49109081340244365.svg`,
    "name": `Dorothy Jackson`,
    "date": `2020-10-28T16:40:08.863Z`,
    "rating": 4,
    "review": `Odio aenean sed adipiscing diam donec adipiscing tristique risus nec`
  },
  {
    "avatar": `https://avatars.dicebear.com/api/gridy/0.9347603473256572.svg`,
    "name": `Sarah Williams`,
    "date": `2020-10-28T16:40:08.863Z`,
    "rating": 1,
    "review": `Elementum eu facilisis sed odio morbi quis commodo odio`
  },
  {
    "avatar": `https://avatars.dicebear.com/api/human/0.6586195712312961.svg`,
    "name": `Edward Brown`,
    "date": `2020-10-28T16:40:08.863Z`,
    "rating": 2,
    "review": `Id faucibus nisl tincidunt eget nullam non nisi est sit.`
  },
  {
    "avatar": `https://avatars.dicebear.com/api/bottts/0.8903270419652642.svg`,
    "name": `Kevin Robinson`,
    "date": `2020-10-28T16:40:08.863Z`,
    "rating": 3,
    "review": `Elit ut aliquam purus sit amet luctus venenatis lectus`
  },
  {
    "avatar": `https://avatars.dicebear.com/api/human/0.25685957968140816.svg`,
    "name": `Christopher Parker`,
    "date": `2020-10-28T16:40:08.863Z`,
    "rating": 3,
    "review": `Ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus`
  },
  {
    "avatar": `https://avatars.dicebear.com/api/male/0.6046117105279802.svg`,
    "name": `Nicholas Green`,
    "date": `2020-10-28T16:40:08.863Z`,
    "rating": 1,
    "review": `Nisi vitae suscipit tellus mauris a diam maecenas sed`
  },
  {
    "avatar": `https://avatars.dicebear.com/api/female/0.5219588822583421.svg`,
    "name": `Mary Johnson`,
    "date": `2020-10-28T16:40:08.863Z`,
    "rating": 4,
    "review": `Mattis enim ut tellus elementum`
  },
  {
    "avatar": `https://avatars.dicebear.com/api/female/0.7269320214233967.svg`,
    "name": `Rebecca Robinson`,
    "date": `2020-10-28T16:40:08.863Z`,
    "rating": 4,
    "review": `Nisi vitae suscipit tellus mauris a diam maecenas sed`
  },
  {
    "avatar": `https://avatars.dicebear.com/api/female/0.9046622551606434.svg`,
    "name": `Steven Jones`,
    "date": `2020-10-28T16:40:08.863Z`,
    "rating": 0,
    "review": `Et malesuada fames ac turpis egestas integer eget aliquet nibh`
  },
  {
    "avatar": `https://avatars.dicebear.com/api/gridy/0.29907262412572133.svg`,
    "name": `John Clark`,
    "date": `2020-10-28T16:40:08.863Z`,
    "rating": 4,
    "review": `Ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus`
  },
  {
    "avatar": `https://avatars.dicebear.com/api/avataaars/0.35491605816256344.svg`,
    "name": `Sandra Robinson`,
    "date": `2020-10-28T16:40:08.863Z`,
    "rating": 4,
    "review": `Ut ornare lectus sit amet est placerat`
  },
  {
    "avatar": `https://avatars.dicebear.com/api/bottts/0.832743442739553.svg`,
    "name": `Gary Thomas`,
    "date": `2020-10-28T16:40:08.863Z`,
    "rating": 0,
    "review": `Id faucibus nisl tincidunt eget nullam non nisi est sit.`
  },
  {
    "avatar": `https://avatars.dicebear.com/api/male/0.01791333445198351.svg`,
    "name": `Justin Campbell`,
    "date": `2020-10-28T16:40:08.863Z`,
    "rating": 1,
    "review": `Id faucibus nisl tincidunt eget nullam non nisi est sit.`
  },
  {
    "avatar": `https://avatars.dicebear.com/api/female/0.5333398823252591.svg`,
    "name": `Jennifer Brown`,
    "date": `2020-10-28T16:40:08.863Z`,
    "rating": 3,
    "review": `Mi sit amet mauris commodo quis imperdiet massa`
  },
  {
    "avatar": `https://avatars.dicebear.com/api/male/0.18142184267443895.svg`,
    "name": `Edward Anderson`,
    "date": `2020-10-28T16:40:08.863Z`,
    "rating": 4,
    "review": `Dictum fusce ut placerat orci`
  },
  {
    "avatar": `https://avatars.dicebear.com/api/male/0.21549176707229556.svg`,
    "name": `William Brown`,
    "date": `2020-10-28T16:40:08.863Z`,
    "rating": 4,
    "review": `Tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium`
  },
  {
    "avatar": `https://avatars.dicebear.com/api/gridy/0.4125633049537427.svg`,
    "name": `Dorothy Johnson`,
    "date": `2020-10-28T16:40:08.863Z`,
    "rating": 1,
    "review": `Odio aenean sed adipiscing diam donec adipiscing tristique risus nec`
  },
  {
    "avatar": `https://avatars.dicebear.com/api/gridy/0.12213599589452873.svg`,
    "name": `Cynthia Brown`,
    "date": `2020-10-28T16:40:08.863Z`,
    "rating": 4,
    "review": `Lorem ipsum dolor sit amet, consectetur adipiscing…empor incididunt ut labore et dolore magna aliqua`
  },
  {
    "avatar": `https://avatars.dicebear.com/api/gridy/0.6339723443461984.svg`,
    "name": `Thomas Moore`,
    "date": `2020-10-28T16:40:08.863Z`,
    "rating": 5,
    "review": `Ullamcorper a lacus vestibulum sed arcu non odio`
  },
  {
    "avatar": `https://avatars.dicebear.com/api/female/0.31455337393997373.svg`,
    "name": `Steven Brown`,
    "date": `2020-10-28T16:40:08.863Z`,
    "rating": 0,
    "review": `Lorem ipsum dolor sit amet, consectetur adipiscing…empor incididunt ut labore et dolore magna aliqua`
  },
  {
    "avatar": `https://avatars.dicebear.com/api/bottts/0.943753283877806.svg`,
    "name": `Justin Adams`,
    "date": `2020-10-28T16:40:08.863Z`,
    "rating": 5,
    "review": `Ullamcorper a lacus vestibulum sed arcu non odio`
  },
  {
    "avatar": `https://avatars.dicebear.com/api/bottts/0.3560458774508326.svg`,
    "name": `Sharon Jackson`,
    "date": `2020-10-28T16:40:08.863Z`,
    "rating": 2,
    "review": `Eget velit aliquet sagittis id`
  },
  {
    "avatar": `https://avatars.dicebear.com/api/male/0.6443517042728419.svg`,
    "name": `Carolyn White`,
    "date": `2020-10-28T16:40:08.863Z`,
    "rating": 5,
    "review": `Odio aenean sed adipiscing diam donec adipiscing tristique risus nec`
  }
];

