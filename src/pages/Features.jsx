import React from 'react';
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.png';
import logo5 from '../assets/logo5.png';
import logo6 from '../assets/logo6.png';
import logo7 from '../assets/logo7.png';
import logo8 from '../assets/logo8.png';

export default function Features() {
    const features = [
        {
            image: logo1,
            title: "Pensaki BlackBoard",
            description: [
                "Pensaki Blackboard is a complete package",
                "Document writer and manager",
                "Blackboard note reminder",
                "Agenda management",
                "Email integration with anti-spam features",
                "PDF Converter for seamless document handling",
                "Access to all Pensaki SaaS software",
                "Click here to know more"
            ],
            link: "https://pensaki.org/best-document-writing-software/",
            linkName: "Pensaki"
        },
        {
            image: logo2,
            title: "Bitss Cybersecurity",
            description: [
                "Bitss Real-time antivirus protection with additional math captcha features",
                "Bitss gives continuous support, training, and upgrades",
                "Advanced website contact form with built-in spam blocking",
                "Click here to know more"
            ],
            link : "bitss.fr",
            linkName: "Bitss Cyber Security"
        },
        {
            image: logo3,
            title: "Omada-HR Payroll",
            description: [
                "Omada-HR payroll used for task management for efficient workflow",
                "Payslip generation and management",
                "Attendance and time management",
                "Private staff panel for secure communication",
                "Multi-language support and more features",
                "Click here to know more"
            ],
            link: "https://omada-clasico.org/",
            linkName: "Omada-HR Payroll"
        },
        {
            image: logo4,
            title: "Pensaki PDF Convertor",
            description: [
                "Pensaki helps to convert PDF to DOC and vice versa",
                "Streamlined document handling",
                "Transform PDFs with precision:DIscover the Pensaki PDF convertor",
                "User friendly interface",
                "Cost-effective solution",
                "Click here to know more"
            ],
            link: "https://pensaki.org/convert-pdf-to-doc-file/",
            linkName: "Pensaki PDF Convertor"
        },
        {
            image: logo5,
            title: "Clasico Payslips",
            description: [
                "Clasico Payslips helps Customizable payslips for accurate payroll processing",
                "Private staff panel for employee engagement",
                "Multi-language support for global operations",
                "User friendly interface",
                "Cost-effective solution",
                "Click here to know more"
            ],
            link: "https://omada-clasico.org/clasico-payslip/",
            linkName: "Clasico Payslips"
        },
        {
            image: logo6,
            title: "Pensaki Vault Cloud Storage",
            description: [
                "Pensaki vault cloud storage  helps to  5G expandable online storage for documents, videos, and photos",
                "Secure and accessible storage solution",
                "User friendly interface",
                "Cost-effective solution",
                "Click here to know more"
            ],
            link: "https://pensaki.org/best-online-cloud-storage/",
            linkName: "Pensaki Vault Cloud Storage"
        },
        {
            image: logo7,
            title: "IFGAAP",
            description: [
                "IFGaap is a Invoicing with multi-language support",
                "Compliance-regulated global invoicing",
                "Create and email invoices instantly with payment links",
                "GL accounting with reporting compliance to GAAP and IFRS",
                "User friendly interface",
                "Cost-effective solution",
                "Click here to know more"
            ],
            link: "https://ifgaap.org/",
            linkName: "IFGAAP"
        },
        {
            image: logo8,
            title: "Sosay",
            description: [
                "Sosay is a public and private communications platform for video publishing, photos, and opinions",
                "5G cloud storage for video and image",
                "Inscription to live sales platform as a seller storage",
                "User friendly interface",
                "Cost-effective solution",
                "Click here to know more"
            ],
            link: "https://sosay.org/",
            linkName: "Sosay"
        },
    ];

    const colors = [
        "bg-[#C47A45]", 
        "bg-[#FF6A00]", 
        "bg-[#95867C]",
        "bg-[#000080]",
        "bg-blue-200",
        "bg-red-400",
        "bg-purple-300"
    ];

    return (
        <section className='mx-5 md:mx-auto md:container'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-5'>
                {features.map((feature, i) => (
                    <div 
                        key={i} 
                        className='flex flex-col items-center justify-start border-4 m-0 my-5 lg:m-10 rounded-2xl hover:border-gray-500 hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-slate-900 pb-10'
                    >
                        <div className={`${colors[i % colors.length]} w-full rounded-b-[100px] flex items-center justify-center rounded-t-2xl`}>
                            <img src={feature.image} alt={feature.title} />
                        </div>

                        <div>
                            <h1 className='text-2xl lg:text-4xl mb-10 mt-10 text-center'>{feature.title}</h1>
                        </div>

                        <div>
                            <ul className='flex flex-col gap-5 px-5 w-full max-w-full'>
                                {feature.description.map((descri, idc) => (
                                    <li 
                                        className='px-1 relative pl-6 before:content-["✓"] before:absolute before:left-0 before:text-green-500' 
                                        key={idc}
                                    >
                                        {descri}
                                        {descri === "Click here to know more" && feature.link && (
                                            <a href={feature.link} className='text-blue-500 hover:underline ml-2' target="_blank" rel="noopener noreferrer">
                                                {feature.linkName}
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}