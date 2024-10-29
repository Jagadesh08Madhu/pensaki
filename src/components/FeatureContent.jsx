import React from 'react';
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';

export default function FeatureContent() {
    const features = [
        {
            image: logo1,
            title: "Pensaki BlackBoard",
            description: [
                "Pensaki Blackboard is a complete package",
                "Document writer and manager",
                "Blackboard note reminder",
            ]
        },
        {
            image: logo2,
            title: "Bitss Cybersecurity",
            description: [
                "Bitss Real-time antivirus protection with additional math captcha features",
                "Bitss gives continuous support, training, and upgrades"
            ]
        },
        {
            image: logo3,
            title: "Omada-HR Payroll",
            description: [              
                "Omada-HR payroll used for task management for efficient workflow",
                "Payslip generation and management",
                "Attendance and time management"
            ]
        }
    ];

    const colors = [
        "bg-[#C47A45]", 
        "bg-[#FF6A00]", 
        "bg-[#95867C]"
    ];

    return (
        <section className='mx-5 md:mx-auto md:container'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {features.map((feature, i) => (
                    <div 
                        key={i} 
                        className='flex flex-col items-center justify-start border-4 m-0 my-5 lg:m-10 rounded-2xl hover:border-gray-500 hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-slate-900 pb-10'
                    >
                        <div className={`${colors[i % colors.length]} w-full rounded-b-[100px] flex items-center justify-center rounded-t-2xl`}>
                            <img src={feature.image} alt={feature.title} />
                        </div>

                        <div>
                            <h1 className='text-2xl lg:text-4xl mb-10 mt-10'>{feature.title}</h1>
                        </div>

                        <div>
                            <ul className='flex flex-col gap-5 px-5 w-full max-w-full'>
                                {feature.description.map((descri, idc) => (
                                    <li className='px-1 relative pl-6 before:content-["✓"] before:absolute before:left-0 before:text-green-500' key={idc}>
                                        {descri}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                ))}
            </div>
            <div className='flex items-center justify-center'>
                <a className='px-6 py-6 rounded-xl bg-gradient-to-r from-[#00c6ff] to-[#0072ff] hover:scale-105 text-white font-semibold hover:bg-gradient-to-l transition-all duration-700' href="/features">Know More About Our Feature</a>
            </div>
        </section>
    );
}
