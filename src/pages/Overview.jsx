import React from 'react';
import Header from '../components/Header';
import Usertable from '../components/Usertable';
import Statcard from '../components/Statcard';
import { FaCartShopping } from 'react-icons/fa6';
import { MdOutlinePanoramaPhotosphereSelect } from 'react-icons/md';
import { useFormData } from '../context/FormContentData';
import { FaShop } from 'react-icons/fa6';
const Overview = () => {
  const { inStock, category } = useFormData();
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title='Users' />
      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        <div className='grid md:grid-cols-3 sm:grid-col-10 gap-5 md:mt-16 mt-20 m-auto w-full '>
          <Statcard
            value={category.length}
            name='Products'
            icon={<FaCartShopping />}
          />
          <Statcard
            value='5'
            name='Category'
            icon={<MdOutlinePanoramaPhotosphereSelect />}
          />
          <Statcard value={inStock.length} name='In Stock' icon={<FaShop />} />
        </div>
        <div className='mt-5'>
          <Usertable />
        </div>
      </main>
    </div>
  );
};

export default Overview;
