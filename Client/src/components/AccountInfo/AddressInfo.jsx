import { useState } from 'react';
import AddressCard from './AddressCard';
import { BiPlusCircle } from "react-icons/bi";

const AddressInfo = () => {
  const [addresses, setAddresses] = useState([
    {
      _id: '1',
      city: 'Ismailia',
      street: 'Fayyed',
      building: '23',
      floor: '2',
      addressInfo: 'El-Dobat Bldgs. 22/1 Ext. Ramses, Ismailia City',
      phoneNo: '01223716132'
    },
    {
      _id: '2',
      city: 'Cairo',
      street: 'Nasr City',
      building: '15',
      floor: '4',
      addressInfo: 'Building 15, Street 10, Cairo',
      phoneNo: '01010101010'
    },
    {
      _id: '3',
      city: 'Alexandria',
      street: 'Sidi Gaber',
      building: '8',
      floor: '1',
      addressInfo: 'Sidi Gaber District, Alexandria',
      phoneNo: '01111111111'
    }
  ]);

  return (
    <div className="border border-gray-200 shadow-lg rounded-xl p-6 w-full mx-auto">
      <h2 className="text-lg font-semibold mb-6">Address Info</h2>

      <div className="w-full flex flex-col gap-4">
        {addresses.map((address, index) => (
          <div key={address._id} className="flex">
            <div className="flex-grow">
              <AddressCard
                address={address}
                index={index}
                userId="yourUserId"
                setAddresses={setAddresses}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <button className="bg-white flex items-center text-xl font-semibold text-project-orange px-4 py-2 rounded-3xl hover:bg-project-orange hover:text-white">
          <BiPlusCircle className="mr-2" /> Add a new address
        </button>
      </div>
    </div>
  );
};

export default AddressInfo;
