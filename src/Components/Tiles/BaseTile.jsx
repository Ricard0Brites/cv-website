import React from 'react';

export default function StandardTile({JSONObject}) {
  return (
      <div className='flex flex-col h-[360px] w-full relative bg-white border-1 border-black'>
        <div className='flex-9'>

        </div>
        <div className='pl-2 flex flex-1'>
          {`${JSONObject.RoleName} - ${JSONObject.CompanyName}`} <br />
          {`(${JSONObject.Duration})`}
        </div>
      </div>
  );
}