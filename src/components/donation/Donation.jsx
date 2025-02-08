'use client'
import Breadcrumb from '@/components/sharing/BreadCrumb'
import React, { useEffect, useState } from 'react'
import Loading from '@/app/loading'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import axios from 'axios'
import { API_BASE_URL } from '@/lib/apiConfig'
import pay1icon from '/public/icons/p1.svg'
import pay2icon from '/public/icons/p2.svg'
import pay3icon from '/public/icons/p3.svg'
import pay4icon from '/public/icons/p4.svg'
import Link from 'next/link'
export default function Donation() { // Defining the main functional component named 'Footer'.

    const searchParams = useSearchParams()
    const [pathId, setPathId] = useState(searchParams.get('id'))
    let [program, setprogram] = useState([]);
    let [loading, setLoading] = useState(true);
    let [data, setData] = useState([]);
    const [donation, setDonation] = useState(null);
    const [payMethod, setPayMethod] = useState(null)
    const donationAmount = [100, 200, 500, 750, 1000, 1250]
    const methods = [pay1icon, pay2icon, pay3icon, pay4icon]
    useEffect(() => {
        setLoading(true)
        const getProgram = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/program/${pathId}`);
                let data = response.data.data;
                setprogram(data)
                const response2 = await axios.get(`${API_BASE_URL}/payment`);
                let data2 = response2.data.data;
                setData(data2)
                setLoading(false)
            } catch (error) {
                console.error('Error retrieving data:', error);
                throw new Error('Could not get data');
                setLoading(false)
            }
        };
        getProgram();
    }, []);

    return (
        <div className="">
            <div className="container m-auto mb-10">

                <Breadcrumb
                    title={'البرامج'}           // Title of the breadcrumb
                    titleUrl={'/programs'}       // URL for the title link (if clickable)
                    subtitle={'صفحة  التبرع'}            // Subtitle (if applicable, empty in this case)
                    subtitleUrl={''}         // URL for the subtitle (if applicable, empty in this case)
                />
            </div>
            {
                loading ? <Loading /> :
                    <div className="donation-page">
                        <div className="container m-auto">
                            <div className="donation-form">
                                <div className="details">
                                    <div className="img-cont">
                                        <Image src={program.thumbnail} alt="logout" width={600} height={600} />
                                    </div>
                                    <div className="text">
                                        {/* 
                                    <h3>  أنت تدعم حملة جمع التبرعات <span>{program.mainTitle}</span> </h3>
                                        <p>ستذهب تبرعاتك إلى<span> مؤسسة عطاء العالمية</span> .</p> */}
                                        <p>{program.titlePayment}</p>
                                    </div>
                                </div>
                                <div className="amounts">
                                    <h4>أدخل تبرعك</h4>
                                    <div className="amounts-cont">
                                        {
                                            data.amountPayment.map((amount, index) =>
                                                <div className={donation === index ? 'active-amount amount' : 'amount'} key={index} onClick={() => setDonation(index)}>
                                                    <span >{amount} $</span>
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div className="input-cont">
                                        <span>00.</span>
                                        <input type="text" />
                                        <p><span>USD</span> $ </p>
                                    </div>
                                    <div className="hints">
                                        <h4>نصائح حول خدمات</h4>
                                        <p>{data.advices}</p>
                                    </div>
                                    <h4>طريقة الدفع</h4>
                                    <div className="amounts-cont">
                                        {
                                            methods.map((method, index) =>
                                                <div className={payMethod === index ? 'active-amount amount' : 'amount'} key={index} onClick={() => setPayMethod(index)}>
                                                    <Image src={method} alt='ataa'></Image>
                                                </div>
                                            )
                                        }
                                    </div>
                                    <h4>تبرعك</h4>
                                    <div className="math-details">
                                        <div className="rr">
                                            <span>تبرعك</span>
                                            <span>{donationAmount[donation]} $</span>
                                        </div>
                                        <div className="rr last-of">
                                            <span>نصيحة العطاء العالمية</span>
                                            <span>15 $</span>
                                        </div>
                                        <div className="rr">
                                            <span>المجموع المستحق اليوم</span>
                                            <span>{donationAmount[donation] + 15} $</span>
                                        </div>
                                    </div>

                                </div>
                                <button className='pay-btn'><Image src={methods[payMethod] || pay1icon} alt='ataa'></Image></button>
                                <p className='p-poli'>من خلال اختيار طريقة الدفع أعلاه، فإنك توافق على شروط خدمة العطاء العالمية وتقر بإشعار <Link href='/policy'>الخصوصية</Link>.</p>
                                <p className='p-poli'>تعرف على المزيد حول <Link href='/policy'>الأسعار و الرسوم</Link>.</p>
                            </div>
                        </div>
                    </div>
            }
        </div>

    )
}
