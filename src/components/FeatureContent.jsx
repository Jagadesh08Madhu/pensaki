import React from 'react';
import logo1 from '../assets/logos/logo1.png';
import logo2 from '../assets/logos/logo7.png';
import logo3 from '../assets/logos/logo2.png';
import logo4 from '../assets/blackboard.png';
import featureBg from '../assets/featurebg.png';


export default function FeatureContent() {
    const features = [
        {
            image: logo1,
            title: "Pensaki BlackBoard",
            description: [
                "Doc writer/manager",
                "Blackboard note reminder",
                "Agenda",
                "Access to all pensaki SaaS software"
            ]
        },
        {
            image: logo3,
            title: "Bitss Cyber security",
            description: [
                "Advanced website contact form with built-in spam blocking",
                "Real-time antivirus protection"
            ]
        },
        {
            image: logo2,
            title: "Pensaki vault cloud storage",
            description: [
                "5G storage expandable online",
                "It helps to save documents, video, and photos"
            ]
        },
        {
            image: logo4,
            title: "Bundle of SaaS 9 Products",
            description: [
                "Pensaki Doc writer",
                "Pensaki Pdf convertor",
                "Pensaki vault cloud storage"
            ]
        }
    ];

    return (
        <section className='mx-5 md:mx-auto md:container flex justify-center flex-col items-center lg:w-[90%] '>
            <h1 className='text-3xl lg:text-5xl font-semibold'>Pensaki pack</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10   bg-center bg-cover">
                {features.map((feature, i) => (
                    <div
                        key={i}
                        className=" relative pb-20 flex flex-col items-center justify-start border-4 m-0 my-5 rounded-[2.5rem] transition-all duration-300 shadow-2xl"
                    >
                        <div className="w-full ml-5 mt-5">
                            <img className='w-[80px] rounded-full border-black border-[2px] p-2' src={feature.image} alt={feature.title} />
                        </div>

                        <div>
                            <h1 className='text-xl lg:text-3xl mb-10 mt-10 text-center px-2'>{feature.title}</h1>
                        </div>

                        <div>
                            <ul className='flex flex-col gap-5 px-5 w-full max-w-full'>
                                {feature.description.map((descri, idc) => (
                                    <li
                                        className='px-1 relative pl-6 before:content-["✓"] before:absolute before:left-0 before:text-green-500'
                                        key={idc}
                                    >
                                        {descri}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <a
                            className="my-5 absolute bottom-0 px-6 py-3 bg-gradient-to-tl hover:bg-gradient-to-br from-[#8627E2] to-[#BE2EE6] rounded-3xl text-white transition-all duration-700 ease-in-out transform hover:scale-105"
                            href="/features"
                        >
                            Know more
                        </a>

                    </div>
                ))}
            </div>
        </section>
    );
}




// import React from 'react'
// import { HiMiniSquaresPlus } from "react-icons/hi2";


// export default function FeatureContent() {
//   return (
//     <section className='flex items-center justify-center'>
//         <div className='grid grid-cols-4 items-center gap-10 '>
//             <div className='flex flex-col gap-5 w-72 border-2 px-5 py-2'>
//             <HiMiniSquaresPlus className='text-6xl rounded-full border-[1px] border-black p-3'/>
//             <h1 className='text-4xl text-center font-semibold'>Pensaki Plackboard</h1>
//             <ul class="space-y-2">
//                 <li class="flex items-start">
//                     <span class="mr-2 text-green-500">✔️</span>
//                     <span>Doc writer/manager</span>
//                 </li>
//                 <li class="flex items-start">
//                     <span class="mr-2 text-green-500">✔️</span>
//                     <span>Blackboard note reminder</span>
//                 </li>
//                 <li class="flex items-start">
//                     <span class="mr-2 text-green-500">✔️</span>
//                     <span>Agenda</span>
//                 </li>
//                 <li class="flex items-start">
//                     <span class="mr-2 text-green-500">✔️</span>
//                     <span>Access to all Pensaki SaaS software</span>
//                 </li>
//             </ul>

//             <button></button>
//             </div>

//             <div>
//             <HiMiniSquaresPlus />
//             <h1>Pensaki Plackboard</h1>
//             <ul>
//                 <li>Doc writer/manager</li>
//                 <li>Blackboard note reminder</li>
//                 <li>Agenda</li>
//                 <li>Access to all pensaki SaaS software</li>
//             </ul>
//             <button></button>
//             </div>
            

//             <div>
//             <HiMiniSquaresPlus />
//             <h1>Pensaki Plackboard</h1>
//             <ul>
//                 <li>Doc writer/manager</li>
//                 <li>Blackboard note reminder</li>
//                 <li>Agenda</li>
//                 <li>Access to all pensaki SaaS software</li>
//             </ul>
//             <button></button>
//             </div>


//             <div>
//             <HiMiniSquaresPlus />
//             <h1>Pensaki Plackboard</h1>
//             <ul>
//                 <li>Doc writer/manager</li>
//                 <li>Blackboard note reminder</li>
//                 <li>Agenda</li>
//                 <li>Access to all pensaki SaaS software</li>
//             </ul>
//             <button></button>
//             </div>
//         </div>
//     </section>
//   )
// }

