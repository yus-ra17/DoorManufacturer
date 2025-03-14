import BreadCumb from '@/app/Components/Common/BreadCumb';
import Form2 from '@/app/Components/Form/Form2';
import Pricing1 from '@/app/Components/Pricing/Pricing1';
import Services3 from '@/app/Components/Services/Services3';
import Video1 from '@/app/Components/Video/Video1';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb
                bgImg="/assets/img/page_heading_1.jpg"
                Title="Services"
            ></BreadCumb>
            <Services3></Services3>
            <Video1></Video1>
            <Form2></Form2>
            <Pricing1></Pricing1>            
        </div>
    );
};

export default page;