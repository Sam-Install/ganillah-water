import React, { useState } from 'react'
import pr from '../assets/process.jpeg'
import { FaPlus, FaMinus } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Process = () => {

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const steps = [
    {
      title: "Request a Consultation",
      content: "Clients reach out to Mikam Water to express interest in our services. You can contact us through phone, email, or our website."
    },
    {
      title: "Initial Consultation",
      content: "We schedule an initial meeting to understand your needs, assess requirements, and recommend suitable water solutions."
    },
    {
      title: "Proposal and Quotation",
      content: "We prepare a detailed proposal with scope, timeline, and budget."
    },
    {
      title: "Review and Approval",
      content: "You review the proposal and request any adjustments before approving."
    },
    {
      title: "Contract Signing",
      content: "A formal contract is signed to ensure clarity and transparency before work begins."
    },
    {
      title: "Project Implementation",
      content: "Our team begins executing the project with professionalism, quality, and adherence to standards."
    },
    {
      title: "Regular Updates and Communication",
      content: "You will receive consistent updates throughout the project, and communication lines remain open for questions."
    },
    {
      title: "Project Completion and Handover",
      content: "After finishing, we review the project with you and hand over all deliverables."
    }
  ];

  return (
    <div className='my-10'>

      <div className='flex flex-col sm:flex-row gap-2'>

        <div className='w-full sm:w-1/2'>
          <img src={pr} alt="water" />
        </div>

      
        <div className='w-full sm:w-1/2 mt-2'>
          <h1 className='prata-regular text-2xl text-blue-600 text-center mb-2'>
            Our Process
          </h1>

          <p className='text-center mb-4'>
            By following the following steps, Ganilla Water Limited aims to streamline
            the process of acquiring services, providing a transparent and
            collaborative experience for clients seeking water solutions.
          </p>

        
          <div className="space-y-3">
            {steps.map((step, index) => (
              <div key={index} className="border rounded-lg bg-white shadow-sm">
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center p-4 text-left"
                >
                  <span className="font-semibold">{step.title}</span>
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </button>

                {openIndex === index && (
                  <div className="p-4 pt-0 text-gray-700">
                    {step.content}
                  </div>
                )}
              </div>
            ))}
          </div>
    
<div className=' flex w-full items-center justify-center'>
<Link to='/contacts'><button className='bg-red-500 text-sm text-white px-6 py-1 rounded mt-4 items-center justify-center p-2'>Get a Quote</button>  </Link>
</div>
        </div>

      </div>

    </div>
  )
}

export default Process
