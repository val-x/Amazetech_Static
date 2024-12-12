import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Timeline() {
  return (
    <div className="p-2 md:p-10">
      <h2 className="md:text-5xl text-3xl font-bold mb-4 flex justify-center items-center">
        Work With <span className="text-[#90C418] px-5"> US </span>
      </h2>
      <div className="md:px-40 py-20">
        <VerticalTimeline
          lineColor="#000" // Black line in the center
          className="custom-timeline"
        >
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#6F9700", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #6F9700" }}
            iconStyle={{ background: "#000", color: "#fff" }}
          >
            <h1 className="text-2xl font-bold">OUR LEGACY</h1>

            <p>
              With over 7 years of expertise, Amazetech Corporation has quickly
              become a trusted leader in water treatment and specialty
              chemicals, delivering innovative, customer-focused solutions.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: "#000", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #6F9700" }}
            // icon={<WorkIcon />}
            contentStyle={{ background: "#6F9700", color: "#fff" }}
          >
            <h1 className="text-2xl font-bold">OUR SOLUTION</h1>

            <p>
              Amazetech Corporation provides specialty water treatment chemicals
              and high-performance plants like ETPs, STPs, and RO systems,
              offering tailored, eco-friendly solutions from design to
              after-sales support.{" "}
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#6F9700", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #6F9700" }}
            iconStyle={{ background: "#000", color: "#fff" }}
            // icon={<WorkIcon />}
          >
            <h1 className="text-2xl font-bold">OUR COMMITMENT</h1>

            <p>
              At Amazetech Corporation, we prioritize quality, sustainability,
              and cost-effectiveness. Our rigorously tested, eco-friendly
              products ensure top performance while minimizing environmental
              impact.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: "#000", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #6F9700" }}
            contentStyle={{ background: "#6F9700", color: "#fff" }}
            // icon={<WorkIcon />}
          >
            <h1 className="text-2xl font-bold">CUSTOMER FOCUS</h1>

            <p>
              At Amazetech Corporation, we are dedicated to building lasting
              client relationships by delivering customized solutions for every
              need, from small-scale operations to large industrial plants. Our
              services include on-site assessments, lab trials, technical
              support, and reliable after-sales service to ensure the best
              customer experience.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            iconStyle={{ background: "#000", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #6F9700" }}
            contentStyle={{ background: "#6F9700", color: "#fff" }}
            // icon={<SchoolIcon />}
          >
            <h1 className="text-2xl font-bold">INNOVATION AND GROWTH</h1>

            <p>
              At Amazetech Corporation, innovation is at the core of our
              operations. Through continuous R&D, we develop advanced water
              treatment solutions that meet modern industry challenges. From our
              inception in 2020 to becoming a trusted leader, we remain
              committed to excellence and future-ready technologies.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}
