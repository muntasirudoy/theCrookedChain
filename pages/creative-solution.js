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
import { brand } from "../data/brand";
import Button from "../components/button/Button";
import ServiceTow from "../components/services/grid/ServiceTow";
import ServiceOne from "../components/services/grid/ServiceOne";

function Service() {
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
        <title>Service | {brand}</title>
      </Head>
      {/*========== Header Normal ========== */}
      <HeaderNormal
        backgroundColor="background-section"
        className="text-center"
      >
        <p className="subtitle p-relative line-shape   mb-30">
          <span className="pl-10 pr-10 background-main">
            OUR CREATIVE SOLUTIONS
          </span>
        </p>
        <h1 className="title">
          We are delivering beautiful <br /> digital products for you.
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
            {/* <TitleCover>CrookedChai</TitleCover> */}
            <TitleSection
              className="mb-30"
              description="We make digital"
              defaultSpace={false}
            >
              Make better products make products better
            </TitleSection>
            <List className="border-top  pt-30 mb-30" col={2} iconSize={"15px"}>
              <List.item
                icon={
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="theme-color"
                  />
                }
                headingTag="span"
              >
                {" "}
                Proin gravida nibh vel{" "}
              </List.item>
              <List.item
                icon={
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="theme-color"
                  />
                }
                headingTag="span"
              >
                {" "}
                Proin gravida nibh vel{" "}
              </List.item>
              <List.item
                icon={
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="theme-color"
                  />
                }
                headingTag="span"
              >
                {" "}
                Auctor aliquet aenean quis{" "}
              </List.item>
              <List.item
                icon={
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="theme-color"
                  />
                }
                headingTag="span"
              >
                {" "}
                Auctor aliquet aenean quis{" "}
              </List.item>
            </List>
            <ServiceGrid
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
            />
          </div>
        </DsnGrid>
      </div>
      {/*<!-- ========== End About section ========== */}

      {/*<!-- ========== Services Section ========== */}
      <section className="section-margin container" data-dsn-title="Services">
          <DsnGrid col={1} colTablet={1} >
      <div className="flex-column align-items-center mb-30 text-center">
              <div className="section-title mb-20 ">
                <p className="sub-heading  line-bg-left mb-15">
                  My specialization
                </p>
                <h4 className="text-left title-cap">
                  I am a trending designer who cares about the details
                </h4>
              </div>
            </div>
            </DsnGrid>
        <DsnGrid col={1} colTablet={1} >

          <ServiceOne
            data={getServiceDataTwo()}
            className="services-no-padding"
            masonry
          />
        </DsnGrid>
      </section>
      {/*<!-- ========== End Services Section ========== */}

      {/*========== team Section ========== */}
      <section
        className="container section-margin "
        data-dsn-title="Best Team Ever"
      >
        <TitleSection description={"Our Team"}>
          The Best Team Ever!
        </TitleSection>

        <Team
          data={getTeamData().slice(0, 3)}
          className={"team-classic"}
          col={3}
          colTablet={2}
        />
      </section>
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
