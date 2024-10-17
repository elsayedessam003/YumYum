import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { BiPlusCircle } from "react-icons/bi";
import { GiKnifeFork } from "react-icons/gi";
import ManageRestaurantCard from './ManageRestaurantCard';

const MyRestaurants = () => {

const [restaurants, setRestaurants] = useState([
{
name: 'Sushi World',
rating: '4.2',
reviews: '200',
logo:
'https://c4.wallpaperflare.com/wallpaper/39/346/426/digital-art-men-city-futuristic-night-hd-wallpaper-preview.jpg',
banner:
'https://c4.wallpaperflare.com/wallpaper/39/346/426/digital-art-men-city-futuristic-night-hd-wallpaper-preview.jpg',
},
{
name: 'Pizza Planet',
rating: '4.8',
reviews: '150',
logo:
'https://c4.wallpaperflare.com/wallpaper/39/346/426/digital-art-men-city-futuristic-night-hd-wallpaper-preview.jpg',
banner:
'https://c4.wallpaperflare.com/wallpaper/39/346/426/digital-art-men-city-futuristic-night-hd-wallpaper-preview.jpg',
},
]);

useEffect(() => {
}, [restaurants]);

return (
<div className="border border-gray-200 shadow-lg rounded-xl p-6 w-full mx-auto">
    <h2 className="text-2xl text-gray-700 flex items-center gap-1 font-bold mb-6">
        <GiKnifeFork className="stroke-1" />
        <p>Restaurants List</p>
    </h2>

    <div className="space-y-6">
        {restaurants.map((restaurant, index) => (
        <div key={index} className="w-full flex justify-center">
            <ManageRestaurantCard restaurant={restaurant} className="w-11/12" />
        </div>
        ))}
    </div>

    <div className="flex justify-center mt-6">
        <button
            className="bg-white flex items-center text-xl font-semibold text-project-orange px-4 py-2 rounded-3xl hover:bg-project-orange hover:text-white">
            <BiPlusCircle className="mr-2 stroke-1" /> Add a new restaurant
        </button>
    </div>
</div>
);
};

const restaurantShape = PropTypes.shape({
name: PropTypes.string.isRequired,
rating: PropTypes.string.isRequired,
reviews: PropTypes.string.isRequired,
logo: PropTypes.string.isRequired,
banner: PropTypes.string.isRequired,
});

MyRestaurants.propTypes = {
restaurants: PropTypes.arrayOf(restaurantShape),
};

export default MyRestaurants;