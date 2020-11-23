import {combineReducers} from "redux";
import {processReducer} from "./process/process-reducer";
import {userReducer} from "./user/user-reducer";
import {offersReducer} from "./offers/offers-reducer";
import {reviewsReducer} from "./reviews/reviews-reducer";
import {nearOffersReducer} from "./near-offers/near-offers-reducer";

export const NameSpace = {
  OFFERS: `OFFERS`,
  REVIEWS: `REVIEWS`,
  NEAR_OFFERS: `NEAR_OFFERS`,
  PROCESS: `PROCESS`,
  USER: `USER`,
};

export const rootReducer = combineReducers({
  [NameSpace.OFFERS]: offersReducer,
  [NameSpace.REVIEWS]: reviewsReducer,
  [NameSpace.NEAR_OFFERS]: nearOffersReducer,
  [NameSpace.PROCESS]: processReducer,
  [NameSpace.USER]: userReducer,
});
