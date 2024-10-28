import React from 'react'
import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'
import logo3 from '../assets/logo3.png'
import logo4 from '../assets/logo4.png'
import logo5 from '../assets/logos/logo5.png'



export default function Features() {
    const features = [
        {
            image : logo1,
            title : "Pensaki BlackBoard",
            description :[
                "Pensaki Blackboard is a complete package",
                "Document writer and manager",
                "Blackboard note reminder",
                "Agenda management",
                "Email integration with anti-spam features"
            ]
        },
        {
            image : logo2,
            title : "Bitss Cybersecurity",
            description :[
                "Pensaki Blackboard is a complete package",
                "Document writer and manager",
                "Blackboard note reminder",
                "Agenda management",
                "Email integration with anti-spam features"
            ]
        },
        {
            image : logo3,
            title : "Pensaki BlackBoard",
            description :[
                "Pensaki Blackboard is a complete package",
                "Document writer and manager",
                "Blackboard note reminder",
                "Agenda management",
                "Email integration with anti-spam features"
            ]
        },
    ];

    const colors =[
       "bg-[#C47A45]", "bg-[#FF6A00]","bg-[#95867C]"
    ]

  return (
    <section className='mx-5 md:mx-auto md:container'>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
       {features.map((feature , i)=>(
            <div key={i} className='flex flex-col items-center justify-center border-4 m-0 my-5  lg:m-10 rounded-2xl hover:border-gray-500 hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-slate-900 pb-10'>
                <div className= {`${colors[i % colors.length]} w-full rounded-b-[100px]  flex items-center justify-center rounded-t-2xl`}>
                    <img src={feature.image} alt="" />
                </div>

                <div>
                    <h1 className='text-2xl lg:text-4xl mb-10 mt-10'>{feature.title}</h1>
                </div>

                <div>
                    <ul className='flex flex-col gap-5 lg:list-decimal '>{feature.description.map((descri , idc)=>(
                        <li className='px-1' key={idc}>
                            {descri}
                        </li>
                    ))}</ul>
                </div>
            </div>
        ))}
       </div>
    </section>
  );
}
