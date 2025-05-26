export default function StandardTile({JSONObject, OnClick}) {
  return (
    <div className='flex flex-col  w-full relative pt-2 cursor-pointer' onClick={OnClick}>
      <img src={JSONObject.CompanyLogo} className='object-contain h-full w-full' />
    <div className='pl-2 flex flex-col justify-center flex-2'>
      <span>{`${JSONObject.RoleName} - ${JSONObject.CompanyName}`}</span>
      <span>{`(${JSONObject.Duration})`}</span>
    </div>
  </div>
  );
}