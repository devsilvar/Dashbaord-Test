import { useState } from 'react';
import Header from '../components/Header';
import { useFormData } from '../context/FormContentData';
import Inputbar from '../components/Inputbar';
import Selectbar from '../components/Selectbar';

const AddUsers = () => {
  const { inputData, handleEdits, handleSubmit, validateSubmit } =
    useFormData();

  return (
    <div className='flex-1 overflow-auto bg-gray-100 relative z-10'>
      <Header title='Add New Users' />
      <main className='max-w-7xl mx-auto py-6 mt-20 ' onSubmit={handleSubmit}>
        <form className='max-w-[70%] mx-auto p-5 rounded-sm bg-white shadow-md '>
          <div className='mb-5 flex gap-5 flex-wrap'>
            <div className='flex-1'>
              <Inputbar
                text='Enter Your FirstName'
                value={inputData.firstname}
                changer={handleEdits}
                id='firstname'
                placeholder='First Name'
              />
            </div>
            <div className='flex-1'>
              <Inputbar
                text='Enter Your LastName'
                value={inputData.lastname}
                changer={handleEdits}
                id='lastname'
                placeholder='last Name'
              />
            </div>
          </div>
          <div className='mb-5 flex gap-5 flex-wrap'>
            <div className='flex-1'>
              <Inputbar
                text='Enter Your Email Adress'
                value={inputData.email}
                changer={handleEdits}
                id='email'
                placeholder='Email Adress'
              />
            </div>
            <div className='flex-1'>
              <Inputbar
                text='Enter Your Phone Number'
                value={inputData.phonenumber}
                changer={handleEdits}
                id='phonenumber'
                placeholder='Phone Number'
              />
            </div>
          </div>

          <div className='mb-5 flex gap-5 flex-wrap'>
            <div className='flex-1'>
              <Inputbar
                text='Enter Your Age'
                value={inputData.age}
                changer={handleEdits}
                id='age'
                placeholder='Age'
              />
            </div>
            <div className='flex-1'>
              <Selectbar
                text='Select your gender'
                value={inputData.gender}
                changer={handleEdits}
                options={['Male', 'Female', 'Binary']}
                id='gender'
              />
            </div>
            <div className='flex-1'>
              <Selectbar
                text='Select your role'
                value={inputData.role}
                changer={handleEdits}
                options={['Admin', 'User', 'Manager']}
                id='role'
              />
            </div>
          </div>

          <button
            disabled={!validateSubmit()}
            type='submit'
            className='add-button disabled:bg-gray-400'
          >
            Submit
          </button>
        </form>
      </main>
    </div>
  );
};

export default AddUsers;
