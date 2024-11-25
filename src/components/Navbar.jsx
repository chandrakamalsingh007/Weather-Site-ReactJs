import React from 'react'
import FilterDramaIcon from '@mui/icons-material/FilterDrama';

const Navbar = () => {
  return (
    <nav>
        <div className='flex items-center gap-2'>
            <FilterDramaIcon/>
            <p className="font-bold size-20">Hamro Weather</p>
        </div>
    </nav>
  )
}

export default Navbar