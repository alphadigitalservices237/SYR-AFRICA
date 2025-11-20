import React from 'react';
import Phylosophie from '../components/phylosophie';
import Missions from '../components/Missions';
import Values from '../components/values';
import Team from '../components/team';

const Story = () => {
    return (
        <div className="relative  min-h-screen flex flex-col justify-start items-start w-full ">
  
            <div className='relative  w-full -top-[56px] h-[50vh]  object-cover bg-primary'>
                <img src={"/st josue/1.jpg"} className='relative z-0 flex h-full w-full  object-cover justify-center items-center' />
               
            </div>
            <Phylosophie />
            
      <div className="w-full  bg-black  text-white flex    m-0 p-0 justify-between items-center flex-col-reverse lg:flex-row">
            <Missions />
</div>
            <Values/>
            <Team />

        </div>
    );
};

export default Story;