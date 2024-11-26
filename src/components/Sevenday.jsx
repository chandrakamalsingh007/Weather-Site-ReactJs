import React from 'react'

const SevenDayForecast = ({forecastData}) => {
    const formatDate = (dateString) =>{
        const date = new Date(dateString);
        return new Intl.DateTimeFormat("en-GB",{
            day: "2-digit",
            month: 'short'
        }).format(date);
    };
  return (
    <div className='bg-[#4B5563] text-white rounded-md w-[220px] p-3'>
        {forecastData.list.slice(0,7).map((item,index) => (
            <div key={index} className='mb-2 flex justify-start items-center gap-5'>
                <div>
                    <div className=''>
                        {Math.round(item.main.temp)}°C
                    </div>
                </div>
                <div>
            <div className='text-sm font-bold'>
              {formatDate(item.dt_txt)}
            </div>
          </div>
          <div>
            <div className='text-md'>
              {item.weather[0].description}
            </div>
          </div>
            </div>
        ))}
    </div>
  )
}

export default SevenDayForecast