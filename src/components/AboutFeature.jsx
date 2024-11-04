import React from 'react'
import about from '../assets/about.png'

export default function() {
  return (
    <section className='flex flex-col lg:flex-row gap-5  items-center lg:p-0 py-10'>
        <div className='lg:w-1/2'>
            <img className='p-0 lg:p-20'  src={about} alt="" />
        </div>
        <div className='lg:w-1/2 flex flex-col gap-5 px-5 lg:px-0'>
          <p className='text-lg lg:text-xl'>PENSAKI is s bundle of SaaS software for 100 users. users can be added online. pensaki is a a 
                low cost package with high professional software features and includes:</p>
                <ul className=' list-disc flex flex-col gap-4'>
                    <li>Pensaki Doc Writer</li>
                    <li>Pensaki PDF Converter</li>
                    <li>Pensaki.one Email Anti-Spam Manager (No Advertising)</li>
                    <li>Omada HR</li>
                    <li>Omada Project Manager</li>
                    <li>Clasico Payslips</li>
                    <li>IFgaap Invoicing</li>
                    <li>IFgaap GL Accounting</li>
                    <li>Bobosoho private email chat share(photos,videos and docs)</li>
                    <li>Pensaki Vault Cloud Storage</li>
                </ul>
            <p className='text-lg lg:text-xl'>* The bundle is accessable via the pensaki blackboard panel, each users receives their own dedicated panel.</p>
        </div>
    </section>
  )
}
