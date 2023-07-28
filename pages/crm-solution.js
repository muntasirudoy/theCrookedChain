import Layout from "../layout/Layout";
import HeaderNormal from "../components/header/HeaderNormal";
import DsnGrid from "../layout/DsnGrid";
import TitleSection from "../components/heading/TitleSection";
import BgDot from "../components/header/BgDot";
import Facts from "../components/facts/Facts";
import TitleCover from "../components/heading/TitleCover";
import List from "../components/list/List";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { ServiceGrid } from "../components/services/Service";
import { IdeaIcon } from "../components/svg";
import ButtonProject from "../components/button/ButtonProject";
import { getServiceData, getServiceDataTwo } from "../data/service";
import Team from "../components/Team/Team";
import React from "react";
import { getTeamData } from "../data/team";
import Image from "next/image";
import NextPage from "../components/next/NextPage";
import Footer from "../components/footer/Footer";
import ModalContact from "../components/model-right/ModalContact";
import Head from "next/head";
export const getServerSideProps = async () => {
  const res = await fetch('https://crooked-7kzx.onrender.com/api/crm-solutions');
  const data = await res.json()

return{
props:{
    crm :data
}
}
}
function Service({crm}) {
  TitleSection.defaultProps = {
    classDesInner: "line-bg-left",
  };
  return (
    <Layout
      modelRight={{
        children: <ModalContact />,
        propsModal: { textBtn: "Contact" },
      }}
    >
      <Head>
        <title>CRM Solution | The Crooked Chain </title>
      </Head>
      {/*========== Header Normal ========== */}
      <HeaderNormal
        backgroundColor="background-section"
        className="text-center"
      >
        <p className="subtitle p-relative line-shape   mb-30">
          <span className="pl-10 pr-10 background-main">CRM SOLUTION</span>
        </p>
        <h1 className="title">
        Customer Journey for CRM after the sale is closed
        </h1>
      </HeaderNormal>
      {/*========== End Header Normal ==========*/}

      {/*<!-- ========== About section ========== */}
      <div
        className="p-relative background-section section-padding"
        data-dsn-title="products better"
      >
        <DsnGrid className="container" col={2} colTablet={1}>
          <div className="p-relative box-left">
            <div className="box-im h-100 ">
              <Image
                className="cover-bg-img "
                src="/img/rachel-claire.jpg"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 75vw,100vw"
              />
            </div>
          </div>

          <div className="p-relative box-right">
            <TitleCover>CRM</TitleCover>
            <TitleSection
              className="mb-30"
              description="We make digital"
              defaultSpace={false}
            >
              Project Kick-off and Requirements Gathering
            </TitleSection>

            <div class="timeline">
              <div class="outer">
                <div class="card">
                  <div class="info">
                    <h3 class="title"></h3>
                    <p>
                     1. Once the sale is closed, the first step is to kick off the
                      project. The project manager or a designated team member
                      reaches out to the customer to introduce themselves and
                      schedule an initial meeting.
                    </p>
                  </div>
                </div>
                <div class="card">
                  <div class="info">
                    <h3 class="title"></h3>
                    <p>
                     2. During this meeting, the project team gathers detailed
                      requirements (BRD- Business requirement documents) from
                      the customer. They discuss the purpose, scope, and
                      objectives of the custom software solution and create a
                      project SRS.
                    </p>
                  </div>
                </div>
                <div class="card">
                  <div class="info">
                    <h3 class="title"></h3>
                    <p>
                     3. The team also clarifies any doubts and sets expectations
                      regarding the project timeline, deliverables, and
                      communication channels.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* <ServiceGrid
              className="icon-left p-0 border-top  pt-30 align-items-center"
              iconOption={{
                className: "background-main p-15 align-self-center",
              }}
              data={[
                {
                  icon: IdeaIcon,
                  title: "Best Practices from Industry Experts ",
                  description:
                    "We’ve designed a culture that allows our stewards to assimilate with our clients and bring.",
                },
              ]}
            /> */}
          </div>
        </DsnGrid>
      </div>

      <section id="cd-timeline" class="cd-container">
{crm?.data?.map((e,i)=> (

        <div key={i} class="cd-timeline-block">
          <div class="cd-timeline-img cd-picture"></div>

          <div class="cd-timeline-content">
            <h1>{e.attributes.title}</h1>
           
            <p>
             {e.attributes.subtitle}
            </p>
            {/* <ul class="content-skills">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>Wordpress</li>
            </ul> */}
          </div>
        </div>

))}
       
      </section>

      {/*<!-- ========== End About section ========== */}

      {/*<!-- ========== About section ========== */}
      <div
        className="p-relative section-margin"
        data-dsn-title="BUSINESS CONSULTING"
      >
        <DsnGrid className="container" col={2} colTablet={1}>
          <div className="p-relative box-left order-md-2">
            <TitleCover>Diesel</TitleCover>
            <TitleSection
              className="mb-30"
              description="Some Feature"
              defaultSpace={false}
            >
              BUSINESS CONSULTING
            </TitleSection>
            <p className="max-w570 dsn-up mb-10 border-top pt-30">
              Founded in 2000, Dsn Grid has become one of the best Digital
              Agency in ThemeForest Blue money going forward.
            </p>
            <p className="max-w570 dsn-up border-bottom pb-30">
              but deploy to production. C-suite. First-order optimal strategies
              build on a culture of contribution and inclusion so those options
            </p>
            <ButtonProject href="#0" className="mt-30">
              {" "}
              Visit Website{" "}
            </ButtonProject>
          </div>
          <div className="p-relative box-right order-md-1">
            <div className="box-im h-100 ">
              <Image
                className="cover-bg-img "
                src="/img/help-project.jpg"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 75vw"
              />
            </div>
          </div>
        </DsnGrid>
      </div>
      {/*<!-- ========== End About section ========== */}

      {/*<!-- ========== About section ========== */}
      <div
        className="p-relative background-section section-padding"
        data-dsn-title="Project Manager"
      >
        <div className="container">
          <TitleSection
            className="text-center"
            description="Most have theme"
            defaultSpace={false}
          >
            BUSINESS CONSULTING
          </TitleSection>
          <TitleSection
            className="text-center mt-15"
            tag="p"
            dirDescription="after"
            classDesInner="max-w570"
            description="Get Essentials today and start building next-generation websites,
                              create awesome pages with unlimited possibilities."
          />

          <DsnGrid
            className="background-main"
            col={2}
            colTablet={1}
            rowGapTablet={0}
            rowGapMobile={0}
          >
            <div className="p-relative box-padding box-left order-md-2">
              <TitleCover>Diesel</TitleCover>
              <TitleSection
                className="mb-15"
                defaultSpace={false}
                description="Project Manager"
              />
              <h4 className="mb-50">
                Get Dsn Grid today and start building next-generation websites
                in minutes!
              </h4>
              <ServiceGrid
                className="icon-left p-0"
                rowGapTablet={30}
                rowGapMobile={30}
                data={[
                  {
                    icon: (
                      <Image
                        src="/img/team/1.jpg"
                        alt=""
                        width={70}
                        height={70}
                      />
                    ),
                    title: "Build powerful websites with Essentials",
                    description: `Start building next-level websites using Essentials WordPress theme. `,
                  },
                  {
                    icon: (
                      <Image
                        src="/img/team/2.jpg"
                        alt=""
                        width={70}
                        height={70}
                      />
                    ),
                    title: "Build powerful websites with Essentials",
                    description: `Start building next-level websites using Essentials WordPress theme. `,
                  },
                  {
                    icon: (
                      <Image
                        src="/img/team/3.jpg"
                        alt=""
                        width={70}
                        height={70}
                      />
                    ),
                    title: "Build powerful websites with Essentials",
                    description: `Start building next-level websites using Essentials WordPress theme. `,
                  },
                ]}
              />
            </div>
            <div className="p-relative box-right order-md-1">
              <div className="box-im h-100 ">
                <Image
                  className="cover-bg-img "
                  src="/img/corporate.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw,(max-width: 1200px) 75vw"
                />
              </div>
            </div>
          </DsnGrid>
          <ServiceGrid
            className="mt-50 p-0 text-center"
            data={getServiceDataTwo().slice(0, 3)}
            col={3}
            colTablet={2}
            colGap={50}
          />
        </div>
      </div>
      {/*<!-- ========== End About section ========== */}

      {/*========== End team Section ========== */}

      {/*========== Next Page ==========*/}
      <NextPage className="section-padding border-top background-section" />
      {/*========== End Next Page ==========*/}

      {/*========== Footer ==========*/}
      <Footer className="background-section" />
      {/*========== End Footer ==========*/}
    </Layout>
  );
}

export default Service;
