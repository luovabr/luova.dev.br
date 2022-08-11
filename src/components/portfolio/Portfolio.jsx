import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import { FiLink } from "react-icons/fi";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
};

const tabList = ["Todos"];
const tabListContent = [
  {
    porftoliItems: [
      {
        img: "m-portfolio-1",
        title: "",
        subTitle: "",
        alterText: "",
        portfolioLink: "",
      },
      {
        img: "m-portfolio-2",
        title: "",
        subTitle: "",
        alterText: "",
        portfolioLink: "#",
      },
      {
        img: "m-portfolio-3",
        title: "",
        subTitle: "",
        alterText: "",
        portfolioLink: "#",
      },
      {
        img: "m-portfolio-4",
        title: "",
        subTitle: "",
        alterText: "",
        portfolioLink: "#",
      },
      {
        img: "m-portfolio-5",
        title: "",
        subTitle: "",
        alterText: "",
        portfolioLink: "#",
      },
      {
        img: "m-portfolio-6",
        title: "",
        subTitle: "",
        alterText: "",
        portfolioLink: "#",
      },
      {
        img: "m-portfolio-7",
        title: "",
        subTitle: "",
        alterText: "",
        portfolioLink: "#",
      },
      {
        img: "m-portfolio-8",
        title: "",
        subTitle: "",
        alterText: "",
        portfolioLink: "#",
      },
      {
        img: "m-portfolio-9",
        title: "",
        subTitle: "",
        alterText: "",
        portfolioLink: "#",
      },
    ],
  },
];

const Portfolio = () => {
  return (
    <SimpleReactLightbox>
      <div className="portfolio-filter-01">
        <Tabs>
          <TabList className="filter d-flex flex-wrap justify-content-start">
            {tabList.map((val, i) => (
              <Tab key={i}>{val}</Tab>
            ))}
          </TabList>
          {/* End tablist */}

          <SRLWrapper>
            {tabListContent.map((tabContent, i) => (
              <TabPanel key={i}>
                <div className="portfolio-content ">
                  <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                  >
                    {tabContent.porftoliItems.map((val, i) => (
                      <div className="portfolio-box-01" key={i}>
                        <div className="portfolio-img">
                          <div className="portfolio-info">
                            <h5>
                              <a
                                href={val.portfolioLink}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {val.title}
                              </a>
                            </h5>
                            <span>{val.subTitle}</span>
                          </div>
                          {/* End .portfolio-info */}
                          <a
                            href={`img/portfolio/${val.img}.jpg`}
                            className="gallery-link"
                          >
                            <img
                              src={`img/portfolio/${val.img}.jpg`}
                              alt={val.alterText}
                            />
                          </a>
                          {/* End gallery link */}
                          {/*
                          <a
                            className="portfolio-icon"
                            href={val.portfolioLink}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FiLink />
                          </a>
                           End .portfolio-icon */}
                        </div>
                      </div>
                    ))}
                  </Masonry>
                </div>
                {/* End list wrapper */}
              </TabPanel>
            ))}
          </SRLWrapper>
          {/* End tabpanel */}
        </Tabs>
      </div>
    </SimpleReactLightbox>
  );
};

export default Portfolio;
