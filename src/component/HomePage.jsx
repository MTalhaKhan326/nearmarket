import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppImages } from '../Asset/images/image';
import { useEffect } from 'react';

const HomePage = () => {
    const fields = {
      search: null,
    };
     const [formFields, setFormFields] = useState(fields);
     
     const onSubmit = async (e) => {
       e.preventDefault();
       console.log("search",formFields.search)
     };
     
     const [location, setLocation] = useState({
       latitude: null,
       longitude: null,
     });

     useEffect(() => {
       navigator.geolocation.getCurrentPosition(function (position) {
         setLocation({
           latitude: position.coords.latitude,
           longitude: position.coords.longitude,
         });
       });
     }, []);
  return (
    <>
      <form className="flex flex-col justify-center items-center h-screen">
        <img
          src={AppImages.logo}
          alt="Logo"
          className="mb-[15px]  md:mb-[30px] md:w-[18%] md:h-[11%]"
        />
        <div className="flex items-center w-5/5">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 md:w-[40vw] w-[90vw] border border-gray-300 rounded-l-lg focus:outline-none"
            onChange={(e) => {
              setFormFields(() => ({ search: e.target.value }));
            }}
          />
          <Link
            to={`/businessPage/${formFields.search}/${location.latitude}/${location.longitude}`}
          >
            <button className="px-4 py-2 bg-gray-200 text-white rounded-r-lg">
              <img
                src={AppImages.search}
                alt=""
                srcset=""
                className="w-[27px] h-[27px]"
              />
            </button>
          </Link>
        </div>
      </form>
    </>
  );
}

export default HomePage