import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Timeline() {
    return (
        <div className='p-2 md:p-10'>
            <h2 className="md:text-5xl text-3xl font-bold mb-4 flex justify-center items-center">
            Work With <span className="text-[#90C418] px-5"> US </span>
          </h2>
            <div className='md:px-40 py-20'>
            
            <VerticalTimeline
             lineColor='#000' // Black line in the center
             className='custom-timeline' >
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#6F9700', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #6F9700' }}
                    iconStyle={{ background: '#000', color: '#fff' }}
                >
                    <h1 className='text-2xl font-bold'>OUR LEGACY</h1>

                    <p>
                        With 25+ years of expertise, Amezoltech delivers innovative, customer-focused solutions in specialty chemicals and water treatment, continuing the legacy of our parent company, Sri Sakthi Chemicals.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"

                    iconStyle={{ background: '#000', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #6F9700' }}
                    // icon={<WorkIcon />}
                    contentStyle={{ background: '#6F9700', color: '#fff' }}
                >
                    <h1 className='text-2xl font-bold'>OUR SOLUTION</h1>

                    <p>
                    We provide specialty water treatment chemicals and high-performance plants like ETPs, STPs, and RO systems, offering tailored, eco-friendly solutions from design to after-sales support.                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#6F9700', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #6F9700' }}
                    iconStyle={{ background: '#000', color: '#fff' }}
                // icon={<WorkIcon />}
                >
                    <h1 className='text-2xl font-bold'>OUR COMMITMENT</h1>

                    <p>
                    At XYZtech, we prioritize quality, economy, and sustainability. Our rigorously tested, eco-friendly products deliver top performance while minimizing environmental impact.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{ background: '#000', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #6F9700' }}
                    contentStyle={{ background: '#6F9700', color: '#fff' }}
                // icon={<WorkIcon />}
                >
                    <h1 className='text-2xl font-bold'>CUSTOMER FOCUS</h1>

                    <p>
                    At XYZtech, we focus on building lasting client relationships by providing tailored solutions for every need, from small operations to large plants. Our services include on-site assessments, lab trials, technical support, and after-sales service, ensuring the best customer experience.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    iconStyle={{ background: '#000', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #6F9700' }}
                    contentStyle={{ background: '#6F9700', color: '#fff' }}
                // icon={<SchoolIcon />}
                >
                    <h1 className='text-2xl font-bold'>INNOVATION AND GROWTH</h1>

                    <p>
                    At XYZtech, we drive innovation through R&D, creating advanced water treatment solutions. From startup to industry leader, we’re committed to excellence and future-ready technologies.
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
        </div>
        
    )
}
