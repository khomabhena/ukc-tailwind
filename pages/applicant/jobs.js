import JobCard from '@/components/Applicant/job-card'
import ApplicantDashboard from '@/components/Dashboard/applicant-dashboard'
import NoDataFound from '@/components/no-data-found'
import { useAuthContext } from '@/context/AuthContext'
import { StateContext, useStateContext } from '@/context/StateContext'
import { FirebaseStorage } from '@/firebase/fetch-data'
import React, { useEffect, useState } from 'react'

const Jobs = () => {
  const {user} = useAuthContext()
  const [data, setData] = useState(null)
  const { setActiveLink } = useStateContext()

  useEffect(() => {
    setActiveLink("/applicant/jobs")
    const getData = async () => {
      let jobsArray = []
      let { result, error } = await FirebaseStorage().getAllData('jobs')

      if (error) {
        return console.log(error)
      }

      result.forEach(item => {
        let newObj = {}
        item.data.jobs.forEach(obj => {
          newObj = {...obj, id: item.id}
          jobsArray.push(newObj)
        })
      })

      setData(jobsArray)
    }

    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='flex flex-col gap-4 mx-8 mt-8 pb-12'>
      {
        data?.map((item, index) => (
          <JobCard
            data={item}
            key={index} />
        )) || <NoDataFound message='No Jobs Found' />
      }
    </div>
  )
}

Jobs.getLayout = function getLayout(page) {
  return (
      <ApplicantDashboard>
        {page}
      </ApplicantDashboard>
  )
}

export default Jobs