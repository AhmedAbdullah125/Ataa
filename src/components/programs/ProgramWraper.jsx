import ProrgamLikes from '@/components/programs/ProrgamLikes'
import ImageSwiper from '@/components/programs/ImageSwiper'
import ProgramDetails from '@/components/programs/ProgramDetails'
import Breadcrumb from '@/components/sharing/BreadCrumb'
import React from 'react'
import img1 from '/public/programs/1.png'
import img2 from '/public/programs/2.png'
import img3 from '/public/programs/3.png'
import img4 from '/public/programs/4.png'
import img5 from '/public/programs/5.png'
import LogoutIcon from '/public/icons/logout.svg'
export default function ProramWraper() { // Defining the main functional component named 'Footer'.

    let data = [
        { id: 1, name: "تســـويق مبــــاشر", img: img1, category: "برنامج السلال الغذائية", categId: 2 },
        { id: 2, name: "تســـويق مبــــاشر", img: img2, category: "البرامج التنموية", categId: 3 },
        { id: 3, name: "تســـويق مبــــاشر", img: img3, category: "البرامج الصحية", categId: 4 },
        { id: 4, name: "تســـويق مبــــاشر", img: img1, category: "البرامج الموسمية", categId: 5 },
        { id: 5, name: "تســـويق مبــــاشر", img: img2, category: "البرامج التعليمية", categId: 6 },
        { id: 6, name: "تســـويق مبــــاشر", img: img3, category: "البرامج الاجتماعية", categId: 7 },
    ]
    let data2 = { id: 1, name: "بنـــاء واعمـــار المســـاجد", imgs: [img1, img2, img3, img4, img5], category: "برنامج السلال الغذائية", categId: 2 };

    return (
        <div className="container m-auto ataa-custom-slider proram-wraper">
            <Breadcrumb
                title={'البرامج التنموية'}           // Title of the breadcrumb
                titleUrl={'/programs'}       // URL for the title link (if clickable)
                subtitle={'برنامج السلال الغذائية'}            // Subtitle (if applicable, empty in this case)
                subtitleUrl={''}         // URL for the subtitle (if applicable, empty in this case)
            />
            <ImageSwiper data={data2} />
            <ProgramDetails data={data2} />
            <ProrgamLikes data={data} />

        </div>

    )
}
