import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import Container from "../components/container";

import Image from "next/image";
import heroImg from "../public/img/bgavrm.png";
import aboutImg from "../public/img/about.jpg";
import womImg from "../public/img/bgavrm.png";
import hrImg from "../public/img/bghrm.png";
import autoImg from "../public/img/bgauto.png";
import abImg from "../public/img/bgabout.png";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

//import dynamic from "next/dynamic";

// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Testimonials = dynamic(() => import("../components/testimonials"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

// const PopupWidget = dynamic(() => import("../components/popupWidget"));

export default function Aboutus() {
  return (
    <>
      <Head>
        <title>Talentegra - An Educational Consulting Company</title>
        <meta
          name="description"
          content="Talentegra - Develop your skills in a new technology using metaverse and blockchain"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
     
      
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              About US
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            Learn how we helped our several clients grow in their core business.It will give you an idea of our capabilities.
            </p>

         
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={autoImg}
              width="650"
              height="492"
              alt="Hero Illustration"
              layout="intrinsic"
              loading="eager"
              
            />
          </div>
        </div>
      </Container>

      <Container className="flex flex-wrap ">


      <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={hrImg}
              width="650"
              height="492"
              alt="Hero Illustration"
              layout="intrinsic"
              loading="eager"
              
            />
          </div>
        </div>
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Why Talentegra?
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            The Right Technology At The Right Time
We believe in using the right technology for the problems at hand. Because technology advances so rapidly, keeping an open mind is critical. What was the right solution yesterday may have already been replaced by a better one today, and you have to be willing to adapt. No single individual can be an expert in every possible technology, or have experience in every area. We make sure that we have professionals available from across the technology spectrum, so we can rely on answers that come from experience.
            </p>

         
          </div>
        </div>
     
      </Container>


      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              How we do it?
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            First, we get a feel for what your goals are and how your product will work; we can't help you out of the muck until everyone knows what needs to be done. Then, we cover all the bases by starting at the bottom of the infrastructure and working our way up. Work on the Blockchain or Cloud Infrastructure, making sure you have all the basic services you need to be successful.   
            Being the leader in IT Software Training sector Talentegra Technology Services holds the best and inevitable place in short time. To manage a company is a social process that processes consist of planning, control, co-ordination and motivation. Based on this our Talentegra Technology Services Chennai is a well-planned one. We are having the co-ordinators in dealing with all the subjects, lectures, problems and conclusions. We will motivate the student’s like fresher’s, job seekers and persons working in MNC’s. We achieved this part in a successful manner. Talentegra Technology Services entails a direct responsibility for the trainees. The company will understand more about one’s own capacity and weaknesses and based on these our technology will deal the trainees. We know our goals. To achieve our goals i.e.) giving training in all the supplementary courses related to software field to the needy people in a clear way without any doubts by using latest technologies structures, systems and procedures available with us.</p>

            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            Once again for achieving our goals we are preparing data’s to meet the trainees. According to that our activities and responsibilities are shared with the trainees. So, in order to meet the social and psychological needs of the trainee’s action plan will be prepared. By providing corrective mechanisms training will be provided to the trainees.</p>

<p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">Talentegra Technology Services Chennai establishes correct standard of performance. It is taking corrective actions which are appropriately needed to the trainees. Talentegra Technology Services is a place for everything and everything is in its place. The training is given with the right man in the right place. Since our company is situated in the Chrompet people in all walks of life know our company well. Humanity is a great strength for our company Talentegra Technology Services and team work has been encouraged here.</p>

<p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">We will share employment opportunists to all the trainees. From the past couple of years we are maintaining the placement record by 85%. So, judge yourself and join with Talentegra Technology Services for your future course of life.</p>

<p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">Talentegra Technology Services is a division of DigitalQ Information Services Pvt Ltd.</p>
            

          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={abImg}
              width="650"
              height="492"
              alt="Hero Illustration"
              layout="intrinsic"
              loading="eager"
              
            />
          </div>
        </div>
      </Container>

      <Footer />
      <PopupWidget />
    </>
  );
}
