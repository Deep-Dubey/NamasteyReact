// Resturant Card
const RestaurantCard = ({ item }) => {
  return (
    <div className="res-card">
      <img src={item.image} />
      <h2>{item.resName}</h2>
      <h4>{item.cuisine}</h4>
      <h4>{item.rating}</h4>
    </div>
  );
};

export default RestaurantCard;
