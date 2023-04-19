import Head from 'next/head'
import React from 'react'
import Sidebar from './Sidebar'
import Container from './Container'
import { useStateContext } from '@/context/StateContext'
import JobDetails from '../Applicant/job-details'
import ApplicationDetails from '../Applicant/application-details'
import JobDetailsEmployer from '../Employer/job-details'
import ApplicantDetails from '../Employer/applicant-details'

const DashboardLayout = ({children, menu, title}) => {
  const { detailsExpanded, applicationExpanded, detailsExpandedEmployer, applicantDetailsExpanded } = useStateContext()

  return (
    <div>
        <Head>
        <title>UK Care Connection</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ukc-favicon-white.png" />
      </Head>
      <div className=' relative min-h-screen bg-slate-200 transition duration-1000 ease-in-out'>
        <Sidebar menu={menu} />
        <Container title={title}>
            {children}
        </Container>
        <div className={`${detailsExpanded || applicantDetailsExpanded || detailsExpandedEmployer || applicationExpanded ? 'block' : 'hidden'} w-full bg-slate-900 opacity-70 fixed top-0 h-full`}>
          Cover
        </div>
        <div className={`${detailsExpanded ? 'block' : 'hidden'} overscroll-contain fixed top-0 right-0 bg-slate-100 overflow-auto 
          px-4 md:px-12 pt-12 pb-8 h-full w-full md:w-3/4`}>
          <JobDetails />
        </div>
        <div className={`${applicationExpanded ? 'block' : 'hidden'} overscroll-contain fixed top-0 right-0 bg-slate-100 overflow-auto 
          px-4 md:px-12 pt-12 pb-8 h-full w-full md:w-3/4`}>
          <ApplicationDetails />
        </div>
        <div className={`${detailsExpandedEmployer ? 'block' : 'hidden'} overscroll-contain fixed top-0 right-0 bg-slate-100 overflow-auto 
          px-4 md:px-12 pt-12 pb-8 h-full w-full md:w-3/4`}>
          <JobDetailsEmployer />
        </div>
        <div className={`${applicantDetailsExpanded ? 'block' : 'hidden'} overscroll-contain fixed top-0 right-0 bg-slate-100 overflow-auto 
          px-4 md:px-12 pt-12 pb-8 h-full w-full md:w-3/4`}>
          <ApplicantDetails />
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout