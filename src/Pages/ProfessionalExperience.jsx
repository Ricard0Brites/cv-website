import React from 'react';
import Header from '../Components/Header/HeaderComponent';
import StandardTile from '../Components/Tiles/BaseTile';

export default function ProfessionalExperience() {
  return (
      <div className='flex flex-col h-screen w-screen relative'>
        <Header></Header>
        <div className='flex flex-1 w-full'>
          <div className='absolute right-0 bg-black h-10 w-10'>
          </div>

          <div className='flex flex-1'></div> {/* Spacer */}

          <div className='flex flex-col flex-2 bg-amber-800'>
            {/* Col 1 */}
            <StandardTile></StandardTile>
          </div>  
          <div className='flex flex-2 bg-amber-500'>
            {/* Col 2 */}
          </div>
          <div className='flex flex-2 bg-amber-800'>
            {/* Col 3 */}
          </div>
          <div className='flex flex-1'></div>{/* Spacer */}
        </div>
      </div>
  );
}