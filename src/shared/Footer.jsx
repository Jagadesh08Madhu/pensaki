import React from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'

export default function Footer() {

  const Hosting = [
    {
      name : "Fully Managed Dedicated Server",
      link :"https://bfinit.com/fully-managed-dedicated-server"
    },
    {
      name : "Fully Managed Virtual Dedicated Server",
      link :"https://bfinit.com/fully-managed-virtual-dedicated-server"
    },
    {
      name : "Self Managed Dedicated Server",
      link :"https://bfinit.com/self-managed-dedicated-server"
    },
    {
      name: "Fully Managed Pure Website Hosting",
      link :"https://bfinit.com/fully-managed-pure-web-hosting"
    },
    {
      name: "Self Managed Pure Website Hosting",
      link :"https://bfinit.com/self-managed-pure-web-hosting"
    },
  ]

  const Products = [
    {
      name: "Bitss Cyber Security",
      link :"https://bitss.fr/"
    },
    {
      name: "Omada-HR payroll",
      link :"https://omada-clasico.org/"
    },
    {
      name: "Ifgaap Acounting & Invoicing",
      link :"https://ifgaap.org/"
    },
    {
      name: "Sosay Social Media",
      link :"https://sosay.org/"
    }
  ]

  const Quicklinks = [
    {
      name: "Features",
      link :"/features"
    },
    {
      name: "Products",
      link :"/products"
    },
    {
      name: "FAQ?",
      link :"/faq"
    },
    {
      name: "Global support",
      link :"/support"
    }
  ]

  return (
    <div className='bg-teal-400'>
        <section className='mx-5 md:container md:mx-auto py-10'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              {/* logo section */}
              <div className='flex flex-col gap-5'>
                <div>
                  <img className=' mix-blend-darken' src={logo} alt="" />
                </div>
                <div className='flex flex-col gap-10'> 
                    <h1 className='text-2xl lg:text-4xl'>Join Bfinit Cosmopolitan</h1>
                    <div className='flex gap-5 flex-col lg:flex-row'><input type="email" className='px-4 py-2 rounded-lg outline-orange-900 outline-double' placeholder='Enter your email' /> 
                    <button className='px-6 py-2 bg-orange-400 lg:ml-4 mml-0 rounded-lg'>Subscribe</button></div>
                </div>
              </div>

              {/* Link section */}
              <div>
                <h1 className='text-center text-2xl lg:text-4xl py-10 font-semibold underline'>Pensaki by BFINIT</h1>
                <div className='grid lg:grid-cols-3 gap-5'>
                  {/* Hosting products */}
                  <div>
                    <h1 className='text-2xl font-semibold'>Hosting Products</h1>
                    <div className='flex flex-col gap-5'>
                        {Hosting.map((hosting , i)=>(
                          <Link to={hosting.link} key={i}>
                            {hosting.name}
                          </Link>
                        ))}
                    </div>
                  </div>

                  {/* Products */}
                  <div>
                  <h1 className='text-2xl font-semibold'>Products</h1>
                    <div className='flex flex-col gap-5'>
                        {Products.map((products , i)=>(
                          <Link to={products.link} key={i} className='flex '>
                            {products.name}
                          </Link>
                        ))}
                    </div>
                  </div>


                  {/* Pages */}
                  <div>
                  <h1 className='text-2xl font-semibold'>Quick links</h1>
                    <div className='flex flex-col gap-5'>
                        {Quicklinks.map((links , i)=>(
                          <Link to={links.link} key={i} className='flex '>
                            {links.name}
                          </Link>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>
    </div>
  )
}
