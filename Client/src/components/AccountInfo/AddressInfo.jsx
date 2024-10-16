import React from 'react';

const AddressInfo = () => {
  return (
    <div className="border rounded-lg p-4">
      <h2 className="text-lg font-semibold">Address Info</h2>
      <div className="mt-4">
        <div className="border p-4 mb-4">
          <p><strong>Address 1:</strong> Ismailia, Fayyed</p>
          <p>El-Dobat Bldgs. 22/1 Ext. Ramses, Ismailia City</p>
          <p><strong>Phone:</strong> 01223716132</p>
          <div className="flex space-x-2">
            <button className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
            <button className="bg-orange-500 text-white px-4 py-2 rounded">Edit</button>
          </div>
        </div>

        <div className="border p-4">
          <p><strong>Address 2:</strong> Ismailia, Fayyed</p>
          <p>El-Dobat Bldgs. 22/1 Ext. Ramses, Ismailia City</p>
          <p><strong>Phone:</strong> 01223716132</p>
          <div className="flex space-x-2">
            <button className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
            <button className="bg-orange-500 text-white px-4 py-2 rounded">Edit</button>
          </div>
        </div>
      </div>
      <button className="bg-orange-500 text-white px-4 py-2 rounded mt-4">+ Add a new address</button>
    </div>
  );
};

export default AddressInfo;
