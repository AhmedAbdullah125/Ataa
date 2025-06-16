'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import BlurFade from '../ui/blur-fade';

export default function Gallery({ data }) {
    Fancybox.bind("[data-fancybox]", {
    });
    let [activeTab, setActiveTab] = useState('all');
    return (
        <section className="gallery" id='gallery'>
            <div className="container mx-auto">
                <section id="photos">
                    <div className="columns-2 gap-4 sm:columns-3">
                        {data.imagesAndVideo.map((img, idx) => (
                            <BlurFade key={idx} delay={0.25 + idx * 0.05} inView>
                                <a href={img.url} data-fancybox="gallery">
                                    {
                                        img.type == "image" ?
                                            <figure>
                                                <Image src={img.url} alt="Ataa" width={200} height={200} className="mb-4 w-full max-h-96   rounded-3xl object-cover aspect-auto" />
                                            </figure>
                                            :
                                            <video src={img.url} className="mb-4 w-full max-h-96   rounded-3xl object-cover aspect-auto" ></video>
                                    }
                                </a>
                            </BlurFade>
                        ))}
                    </div>
                </section>
            </div>
        </section>
    )
}
