import { CDN_URL } from "../utils/constant";

const RestaurantCard=(props)=>{
    const {resData}=props;
    const {
        cloudinaryImageId,
        name,
        locality,
        areaName,
        cuisines,
        avgRating,
        costForTwo,
    }=resData?.info

    return(
        <div className="res-card">
            <img src={CDN_URL+cloudinaryImageId} className="res-logo" alt="restlogo"/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{resData.info.sla.deliveryTime} minutes</h4>
            <h4>{locality},{areaName}</h4>

        </div>
    );
};
export default RestaurantCard;