import React from "react";
import {offerPropTypes} from "../../prop-validation/offer-prop-types";
import {Settings} from "../../const";


export const PropertyGallery = ({offer}) => {
  return (
    <div className="property__gallery-container container">

      <div className="property__gallery">
        {offer.images
          .slice(0, Settings.OFFERS_IMAGES_DISPLAY_LIMIT)
          .map((image, i) => {
            return (
              <div className="property__image-wrapper" key={image}>
                <img className="property__image" src={image} alt={`${offer.title}-${i}`}/>
              </div>
            );
          })
        }
      </div>

    </div>
  );
};

PropertyGallery.propTypes = {
  offer: offerPropTypes.isRequired,
};
