"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { RiArrowDropRightLine } from "react-icons/ri";
import { useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from "react-icons/fa";

const themes = [
  {
    img: "/watch.png",
    title: "Lee Doe",
    description: `They are the best watches that one acquires, also they are always with the latest news and trends, with a very comfortable price and especially with the attention you receive, they are always attentive to your questions.`,
    details: [
      "March 27. 2021",
      "Director of a company",
      
    ],
  },
  {
    img: "/t33.jpg",
    title: "Machine Recognition",
    description: `The explosion of big data has created immense opportunities and challenges.
Most data—such as images, videos, audio, and handwritten text—is
unstructured and difficult for machines to process. AI-driven machine
recognition overcomes this limitation, structuring unorganized data to extract
actionable insights.
This capability is revolutionizing fields like healthcare, where it aids in medical
imaging, and retail, where it enhances customer insights. By making sense of
unstructured data, AI enables businesses to unlock new levels of efficiency
and innovation.`,
    details: [
      "Enable machines to respond to environments",
      "Improve efficiency and reduce admin workload",
      "Enhance product and service innovation",
      "Improve searchability of vast data records",
      "Lower operating costs",
    ],
  },
  {
    img: "/t22.jpg",
    title: "Hyper-personalization",
    description: `Hyper-personalization revolutionizes customer experiences by tailoring
interactions to individual preferences, behaviors, and needs. It replaces onesize-fits-all strategies with a dynamic, customer-first approach, enhancing
every engagement across communication, service delivery, and user
experience.
In today’s competitive landscape, personalized experiences aren’t just
appreciated—they’re expected. Brands that embrace hyper-personalization
can increase loyalty, deepen relationships, and differentiate themselves from
the competition.`,
    details: [
      "Create tailor-made user journeys",
      "Increase customer satisfaction and loyalty",
      "Deliver targeted marketing",
      "Boost cross-selling / upselling",
      "Revenue growth through engagement",
    ],
  },
  {
    img: "/t1.jpg",
    title: "Conversational AI",
    description: `AI has overcome a significant hurdle in human-machine interaction—
understanding natural language. With Natural Language Processing (NLP),
machines can interpret intent, sentiment, and meaning, enabling seamless
communication through voice or text.
This capability opens a world of possibilities, from real-time translation that
facilitates global business to conversational AI that enhances customer
service and user experiences. As machines become better at understanding
us, the potential to revolutionize communication is limitless.`,
    details: [
      "Hyper-personalized customer experiences",
      "Boost customer satisfaction",
      "Faster case resolutions",
      "Reduce strain on support teams",
      "24/7 intelligent engagement",
    ],
  },
  {
    img: "/t2.jpg",
    title: "Goal-driven AI Systems",
    description: `Goal-driven AI systems excel in solving complex problems by learning through trial
and error. Unlike traditional programming, these systems adapt dynamically,
discovering optimal strategies to achieve their objectives.
Whether it’s pioneering advancements in robotics, accelerating drug discovery, or
optimizing logistics, goal-driven systems bring unparalleled speed and precision to
problem-solving. The impact of these systems continues to grow, shaping
industries and addressing global challenges.`,
    details: [
      "Master complex challenges",
      "Execute real-world tasks precisely",
      "Deliver scalable AI-powered solutions",
      "Simulate dynamic scenarios",
      "Drive continuous improvement",
    ],
  },
  {
    img: "/t3.jpg",
    title: "Pattern & Anomaly Detection",
    description: `Pattern and anomaly detection dives deep into complex datasets to uncover
trends and pinpoint irregularities that might otherwise go unnoticed. Patterns
offer valuable insights into operational efficiency or customer behavior, while
anomalies can highlight risks, threats, or untapped opportunities.
With AI-powered detection, businesses can preempt potential issues, improve
decision-making, and act swiftly on emerging trends. Whether it’s fraud
detection, quality control, or market analysis, this capability ensures no critical
insight is overlooked.`,
    details: [
      "Uncover threats and opportunities",
      "Prevent risks and disruptions",
      "Reveal evolving customer needs",
      "Detect errors before escalation",
      "Gain insights from complex data",
    ],
  },
];

export default function NewArrival() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [currentSlide, setCurrentSlide] = useState(1);

  return (
    <div className="min-h-screen w-full relative bg-gray-100 flex flex-col p-6">
      <h1 className="text-4xl font-bold mb-8 text-black text-center">
        TESTIMONIALS
      </h1>

      <Swiper
        modules={[Navigation]}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex + 1)}
        spaceBetween={150}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 1.1, // On screens ≥768px (desktop/tablet)
          },
        }}
        className="w-full md:h-[80vh]"
      >
        {themes.map((theme, index) => (
          <SwiperSlide key={index}>
            <div className="w-full flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-[40%] group">
                <Image
                  src={theme.img}
                  width={400}
                  height={400}
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  alt={theme.img}
                />
              </div>
              <div className="bg-white w-12 h-12 flex items-center justify-center shadow-md mb-8">
                          <FaQuoteLeft className="text-[#FFB568]" />
                        </div>
              <div className="w-full md:w-[60%] h-full shadow-xl rounded-2xl md:px-6">
                <h2 className="text-2xl text-black font-bold mb-2">
                  {theme.title}
                </h2>
                <div className="h-1 w-full rounded-full bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 mb-4"></div>
                <p className="text-black mb-2">{theme.description}</p>
                <div className="text-left">
                  <h3 className="font-bold text-2xl mb-2 text-black">
                    Details:
                  </h3>
                  <div className="h-1 w-[70%] rounded-full bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 mb-4"></div>
                  <ul className="list-inside text-black space-y-1">
                    {theme.details.map((benefit, idx) => (
                      <li className="flex gap-2" key={idx}>
                        <RiArrowDropRightLine className="text-[#a100ff] text-[28px]" />{" "}
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute right-62.5 z-40 -bottom-6 md:bottom-10 flex items-center gap-4 mt-6">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="w-10 h-10 flex items-center justify-center bg-[#fde3c8] rounded"
        >
          <FaArrowLeft />
        </button>

        <span className="text-black font-medium">
          {currentSlide}/{themes.length}
        </span>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="w-10 h-10 flex items-center justify-center bg-[#fde3c8]  rounded"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
