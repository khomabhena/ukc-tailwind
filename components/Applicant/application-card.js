import { useStateContext } from '@/context/StateContext'
import React from 'react'

const ApplicationCard = () => {
    const { setApplicationExpanded} = useStateContext()

  return (
    <div onClick={() => setApplicationExpanded(prev => !prev)} className='bg-slate-50 rounded-md shadow-md px-8 py-4 mt-2 md:mt-0 cursor-pointer'>
        <div className=' text-xl font-semibold text-slate-600'>Home nurse aid</div>
        <div className=' text-slate-500 text-sm'>Uk Care Connection</div>
        <div className=' mt-8 flex justify-between md:justify-start md:gap-32'>
            <div>
                <div className=' text-slate-600 text-lg font-semibold'>$950</div>
                <div className=' text-slate-400 text-xs'>Monthly Salary</div>
            </div>
            <div>
                <div className='text-slate-600 text-lg font-semibold'>Part-time</div>
                <div className='text-slate-400 text-xs'>Employment type</div>
            </div>
        </div>
        <div className=' mt-8 text-slate-600 text-base'>A Home Care Assistant, or Care Worker helps elderly or infirmed people live safely in their own homes. Their duties include assisting clients in daily tasks, performing domestic duties and delivering client reports.</div>
        <div className=' my-8 flex justify-between md:justify-start md:gap-32'>
            <div className='text-slate-500 text-sm font-semibold'>Hospice Care</div>
            <div className='text-slate-500 text-sm font-semibold'>London</div>
        </div>

        {/* Status */}
        <div className=' mt-12 flex justify-between md:justify-end md:gap-32'>
            <div>
                <div className=' text-emerald-500 text-lg md:text-xl font-semibold'>Pending</div>
                <div className=' text-slate-400 text-xs'>Application Status</div>
            </div>
            <button className=' bg-red-500 h-min py-2 px-8 text-slate-50 rounded-md shadow-md'>Cancel</button>
        </div>
    </div>
  )
}

export default ApplicationCard