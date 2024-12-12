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
            <h2 className="text-2xl font-bold">OUR LEGACY</h2>

            <p>
              With over <strong>7 years of expertise</strong>, Amazetech
              Corporation has become a trusted leader in{" "}
              <strong>water treatment</strong> and specialty chemicals,
              delivering innovative, customer-focused solutions.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: "#000", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #6F9700" }}
            contentStyle={{ background: "#6F9700", color: "#fff" }}
          >
            <h2 className="text-2xl font-bold">OUR SOLUTION</h2>

            <p>
              Amazetech Corporation provides{" "}
              <strong>specialty water treatment chemicals</strong> and
              high-performance systems like <strong>ETPs, STPs,</strong> and
              <strong> RO plants</strong>. We offer tailored, eco-friendly
              solutions with end-to-end support from design to after-sales.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#6F9700", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #6F9700" }}
            iconStyle={{ background: "#000", color: "#fff" }}
          >
            <h2 className="text-2xl font-bold">OUR COMMITMENT</h2>

            <p>
              At Amazetech Corporation, we prioritize{" "}
              <strong>quality, sustainability,</strong> and{" "}
              <strong>cost-effectiveness</strong>. Our rigorously tested,
              eco-friendly products deliver exceptional performance while
              reducing environmental impact.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: "#000", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #6F9700" }}
            contentStyle={{ background: "#6F9700", color: "#fff" }}
          >
            <h2 className="text-2xl font-bold">CUSTOMER FOCUS</h2>

            <p>
              At Amazetech Corporation, we deliver{" "}
              <strong>customized water treatment solutions</strong> for
              operations of all sizes, from small businesses to industrial
              plants. Our services include on-site assessments, lab trials,
              technical support, and reliable after-sales service.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            iconStyle={{ background: "#000", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #6F9700" }}
            contentStyle={{ background: "#6F9700", color: "#fff" }}
          >
            <h2 className="text-2xl font-bold">INNOVATION AND GROWTH</h2>

            <p>
              Innovation is central to our growth. Through continuous{" "}
              <strong>research and development (R&D)</strong>, we provide
              advanced solutions for modern industry challenges. Since 2020,
              we’ve remained committed to future-ready technologies and
              excellence.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}
