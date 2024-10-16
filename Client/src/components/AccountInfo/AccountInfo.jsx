import { useState } from 'react';

const AccountInfo = () => {
const [userInfo, setUserInfo] = useState({
fullName: 'Elsayed',
email: 'elsayedessame@gmail.com',
});

const [isEditing, setIsEditing] = useState(false);

const handleChange = (e) => {
const { name, value } = e.target;
setUserInfo({ ...userInfo, [name]: value });
};

const toggleEdit = () => {
setIsEditing(!isEditing);
};

const handleSave = () => {
console.log('Saved data:', userInfo);

setIsEditing(false);
};

return (
<div className="border border-gray-200 rounded-xl p-6 shadow-lg w-full mb-6">
    <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-700">Personal Info</h2>
        {!isEditing && (
        <button className="bg-orange-500 text-white px-4 py-2 rounded-full text-lg font-semibold" onClick={toggleEdit}>
            Edit
        </button>
        )}
    </div>
    <div className="mt-6">
        {isEditing ? (
        <div>
            <div className="flex justify-between space-x-6">
                <div className="w-1/2">
                    <label className="block text-xl font-medium text-gray-600">
                        Full name:
                    </label>
                    <input type="text" name="fullName" value={userInfo.fullName} onChange={handleChange}
                        className="border border-gray-300 rounded w-full px-3 py-2 mt-1 text-gray-700" />
                </div>

                <div className="w-1/2">
                    <label className="block text-xl font-medium text-gray-600">
                        Email address:
                    </label>
                    <input type="email" name="email" value={userInfo.email} onChange={handleChange}
                        className="border border-gray-300 rounded w-full px-3 py-2 mt-1 text-gray-700" />
                </div>
            </div>
            <div className="flex justify-end mt-4">
                <button className="bg-green-500 text-white px-4 py-2 rounded-full text-lg font-semibold"
                    onClick={handleSave}>
                    Save
                </button>
            </div>
        </div>
        ) : (
        <div className="flex justify-between space-x-6">
            <div className="w-1/2">
                <p className="text-xl text-gray-600">Full name:</p>
                <p className="text-xl text-gray-800 mt-1">{userInfo.fullName}</p>
            </div>

            <div className="w-1/2">
                <p className="text-xl text-gray-600">Email address:</p>
                <p className="text-xl text-gray-800 mt-1">{userInfo.email}</p>
            </div>
        </div>
        )}
    </div>
</div>
);
};

export default AccountInfo;