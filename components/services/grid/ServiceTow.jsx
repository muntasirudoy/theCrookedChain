import React from 'react'

import Service from "../Service";
import {getServiceData} from "../../../data/service";


const ServiceTow  = ({className,data, ...restProps}) => {

    console.log(data)
    return (
        <Service.grid col={2} colTablet={2} colMobile={1}
             className={className} data={data} backgroundColor={"background-section"} styleBox={"corner"} {...restProps}
        />
    );
};


export default ServiceTow