'use client'
import React, { useEffect } from 'react';
import Image from 'next/image';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import BlurFade from '../ui/blur-fade';

export default function Gallery({ data }) {
    useEffect(() => {
        Fancybox.bind("[data-fancybox]", {});
        return () => {
            Fancybox.destroy(); // مهم لتنظيف الفانسي بوكس لما يتغير الكمبوننت
        }
    }, []);

    console.log(data);

    return (
        <section className="gallery" id='gallery'>
            <div className="container mx-auto">
                <section id="photos">
                    <div className="columns-2 gap-4 sm:columns-3">
                        {data.images.map((img, idx) => {
                            const isVideo = img.endsWith('.mp4') || img.endsWith('.webm') || img.endsWith('.mov'); // مثال بسيط لتحديد الفيديو من الصورة
                            return (
                                <BlurFade key={idx} delay={0.25 + idx * 0.05} inView>
                                    <a href={img} data-fancybox="gallery">
                                        {isVideo ? (
                                            <video
                                                src={img}
                                                className="mb-4 w-full max-h-96 rounded-3xl object-cover aspect-auto"
                                                controls
                                            />
                                        ) : (
                                            <figure>
                                                <Image
                                                    src={img}
                                                    alt="Ataa"
                                                    width={200}
                                                    height={200}
                                                    className="mb-4 w-full max-h-96 rounded-3xl object-cover aspect-auto"
                                                />
                                            </figure>
                                        )}
                                    </a>
                                </BlurFade>
                            );
                        })}
                    </div>
                </section>
            </div>
        </section>
    )
}
