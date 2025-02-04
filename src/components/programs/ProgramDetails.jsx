'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import lovedMessage from '/public/icons/lovedMess.svg'
import Link from 'next/link';


export default function ImageSwiper({ data }) {
    return (
        <div className="ProgramDetails">
            <div className="prog-title">
                <div className="titles">
                    <h5>{data.category}</h5>
                    <h2>{data.name}</h2>
                </div>
                <div className="share">
                    <i className="fa-solid fa-share-nodes"></i>
                    <i className="fa-regular fa-heart"></i>
                </div>
            </div>
            <div className="text-achieved">
                <div className="text">
                    <p className="main-p">
                        ساهم معنا في بناء بيوت الله، واجعل صدقتك الجارية نورًا يدوم. بتبرعك، تساهم في إعمار المساجد وتجهيزها لتكون منارةً للعبادة والعلم. كن جزءًا من الخير المستدام اليوم .
                    </p>
                    <div className="para-cont">
                        <h3>صدقة جارية تدوم للأبد</h3>
                        <p>المساجد ليست مجرد أماكن للعبادة؛ إنها مراكز تجمع المسلمين، منارات للعلم، وبيوت لله على الأرض. المساهمة في بناء أو إعمار مسجد تُعد من أعظم الصدقات الجارية التي تمتد بركتها لتشمل الحياة الدنيا والآخرة. فمن خلال دعمك لهذا المشروع الخيري، تكون قد شاركت في نشر الخير وإحياء ذكر الله في مكان يظل مفتوحًا للعبادة على مدار السنوات، بل الأجيال.</p>
                    </div>
                    <div className="para-cont">
                        <h3>أهمية بناء المساجد في الإسلام</h3>
                        <p>المساجد ليست مجرد أماكن للعبادة؛ إنها مراكز تجمع المسلمين، منارات للعلم، وبيوت لله على الأرض. المساهمة في بناء أو إعمار مسجد تُعد من أعظم الصدقات الجارية التي تمتد بركتها لتشمل الحياة الدنيا والآخرة. فمن خلال دعمك لهذا المشروع الخيري، تكون قد شاركت في نشر الخير وإحياء ذكر الله في مكان يظل مفتوحًا للعبادة على مدار السنوات، بل الأجيال.</p>
                    </div>
                    <div className="para-cont">
                        <h3>كيف يمكن أن تكون جزءًا من هذا الخير؟</h3>
                        <p>المساجد ليست مجرد أماكن للعبادة؛ إنها مراكز تجمع المسلمين، منارات للعلم، وبيوت لله على الأرض. المساهمة في بناء أو إعمار مسجد تُعد من أعظم الصدقات الجارية التي تمتد بركتها لتشمل الحياة الدنيا والآخرة. فمن خلال دعمك لهذا المشروع الخيري، تكون قد شاركت في نشر الخير وإحياء ذكر الله في مكان يظل مفتوحًا للعبادة على مدار السنوات، بل الأجيال.</p>
                    </div>

                </div>
                <div className="achived">
                    <div className="cont-progress">
                        <h4 className="recievied-amount">$10,670</h4>
                        <span>تم جمع مبلغ 10 ألف دولار أمريكي</span>
                        <div className="progress-bar-cont">
                            <div className="progress-achived" style={{ width: `${10670/14000*100}%` }}></div>
                        </div>
                        <h6 className="target">$14k الهدف</h6>
                    </div>
                    <Link href={'/programs'} className='donate-link'><span>تبــرع الان</span><Image src={lovedMessage} alt="logout" /></Link>
                </div>
            </div>
        </div>
    );
}
