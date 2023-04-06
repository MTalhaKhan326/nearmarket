import { padding, width } from '@mui/system';
import React from 'react'
import { AppImages } from '../Asset/images/image';
import Main from './Main';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div>
      <section className="w-[100%] p-[2vw] bg-[#288fcc]">
        <div className="w-[150px] sm:w-[200px] bg-white rounded-3xl sm:rounded-3xl">
          <Link to={`/`}>
            <img src={AppImages.logo} alt="" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Header