import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AppImages } from "../Asset/images/image";
import Footer from "./Footer";
import Header from "./Header";
import data from "./Data";
import Loading from "./basic/Loading";
import WebHeader from "./WebHeader";
import axios from "axios";

const BusinessPage = () => {
  
  const { searchdata , latitude , longitude } = useParams();
  console.log("Search", searchdata, "latitudee",latitude, "longitudee",longitude)
  const [dataa, setData] = useState('');
  const [formFields, setFormFields] = useState({ search: searchdata });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("search", formFields.search);
  };
   const fetchData = async () => {
     const result = await axios(
       `https://rogvftzrsuaealt3f7htqchmfa0zfumz.lambda-url.eu-west-1.on.aws/markers/nearby?lat=${latitude}8&lng=${longitude}&type=${formFields.search}&radius=2&page_no=1`
     );
     console.log("Resulttt",result)

     setData(result.data.data.markers);
   };

   
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://rogvftzrsuaealt3f7htqchmfa0zfumz.lambda-url.eu-west-1.on.aws/markers/nearby?lat=31.461038&lng=74.4189861&type=${formFields.search}&radius=2&page_no=1`
      );

      setData(result.data.data.markers);
    };
    
    fetchData();
  }, []);
  console.log("dataaa",dataa)
    const handleButtonClick = (phone) => {
      console.log("phoneee",phone)
      window.location.href = `tel:${phone}`;
    };

  return (
    <>
      <div className="block md:hidden">
        <Header />
        <form onSubmit={onSubmit}>
          <div className="flex mt-2 md:mt-2 items-center w-[100%]">
            <input
              type="text"
              placeholder="Search..."
              value={formFields.search}
              className="px-4 py-2 w-full border border-gray-300 rounded-l-lg focus:outline-none"
              onChange={(e) => {
                setFormFields(() => ({ search: e.target.value }));
              }}
            />
            <button
              className="px-4 py-2 bg-gray-200 text-white rounded-r-lg justify-center items-center"
              onClick={() => fetchData()}
            >
              <img
                src={AppImages.search}
                alt=""
                srcset=""
                className="w-[27px] h-[27px]"
              />
            </button>
          </div>
        </form>
      </div>
      <div className="hidden md:block">
        <form onSubmit={onSubmit} className="ml-9 my-4">
          <div className="flex flex-row">
            <Link to={`/`}>
              <div className="w-[20%] sm:w-[200px] bg-white rounded-3xl sm:rounded-3xl">
                <img src={AppImages.logo} alt="" />
              </div>
            </Link>
            <div className="flex mt-2 md:mt-2 items-center w-[40%]">
              <input
                type="text"
                placeholder="Search..."
                value={formFields.search}
                className="px-4 py-2 w-full border border-gray-300 rounded-l-lg focus:outline-none"
                onChange={(e) => {
                  setFormFields(() => ({ search: e.target.value }));
                }}
              />
              <button
                className="px-4 py-2 bg-gray-200 text-white rounded-r-lg justify-center items-center"
                onClick={() => fetchData()}
              >
                <img
                  src={AppImages.search}
                  alt=""
                  srcset=""
                  className="w-[27px] h-[27px]"
                />
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* </div> */}
      <div className="container mx-auto px-auto flex flex-col w-full justify-center mb-[40px]">
        <div className="flex flex-wrap">
          {dataa === '' ?(<Loading/>):(
            dataa.map((item, index) => (
              <div key={index} className="w-full md:w-1/5 px-1 my-2">
                <div className="rounded-xl border border-gray-300">
                  <div className="h-48 md:h-52 bg-slate-200 rounded-t-xl">
                    {item.photo_urls === "NA" ? (
                      <div className="md:ml-[30%] items-center text-[80px] ml-[40%] text-gray-400">
                        {item.name.replace(/name-/gi, "").slice(0, 2).toUpperCase()}
                      </div>
                    ) : (
                      <img
                        src={item.photo_urls}
                        alt="image"
                        className="h-full w-full object-cover rounded-t-xl"
                      />
                    )}
                  </div>
                  {/* <a href={item.phone}> */}
                  <div
                    className="absolute rounded-full bg-green-400 w-9 h-9 mt-[-17px] ml-2 cursor-pointer"
                    onClick={() => handleButtonClick(item.phone)}
                  >
                    <img
                      src={AppImages.phone}
                      alt=""
                      srcset=""
                      className="rounded-full"
                    />
                  </div>
                  {/* </a> */}
                  <div className="p-2 md:p-2 mt-[18px]">
                    <div className="flex flex-row justify-between">
                      <div className="text-lg font-medium mb-1 w-[74%]">
                        {item.name.replace(/name-/gi, "").slice(0, 17)}
                      </div>
                      <div className="text-sm mb-2 bg-blue text-white h-[20px] text-[14px] md:text-[16px] w-[13%] md:w-[22%] rounded-md px-2">
                        1 {item.distanceUnit}
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-green-600">
                      <img
                        src={AppImages.mapIcon}
                        alt=""
                        className="mr-1 w-7 h-7"
                      />
                      <div>
                        <a
                          href={`https://www.google.com/maps/?q=${item.address}`}
                          target="_blank"
                          className="text-blue-400 ml-2"
                        >
                          <span>{item.address.slice(0, 12)}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BusinessPage;
