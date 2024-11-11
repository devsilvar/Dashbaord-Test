import { motion } from 'framer-motion';

const Statcard = ({ value, name, icon }) => {
  return (
    <motion.div
      className='h-[150px] cursor-pointer bg-gray-200 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border '
      whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}
    >
      <div className='px-4 py-5 sm:p-6'>
        <span className='flex justify-between items-center text-[1.0rem] text-black'>
          <p className='text-[3rem]'>{icon} </p>
          <p>{name}</p>
        </span>
        <p className='my-4 text-[2rem] text-center font-semibold text-gray-600'>
          {value}
        </p>
      </div>
    </motion.div>
  );
};

export default Statcard;
