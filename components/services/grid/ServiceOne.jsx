import React from 'react'

import Service from "../Service";
import {getServiceDataTwo} from "../../../data/service";


const ServiceOne  = ({className}) => {
    return (
        <Service.grid col={2} colTablet={2} colMobile={1}  colGap={15} masonry
             className={className} data={getServiceDataTwo()} backgroundColor={"background-section"} styleBox={"line"}
        />
    );
};


export default ServiceOne