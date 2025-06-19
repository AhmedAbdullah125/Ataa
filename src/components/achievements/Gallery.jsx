'use client'
import React, { useEffect } from 'react';
import Image from 'next/image';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import BlurFade from '../ui/blur-fade';

export default function Gallery({ data, googleDriveUrl }) {
    useEffect(() => {
        const timeout = setTimeout(() => {
            Fancybox.bind("[data-fancybox]", {});
        }, 100);  // 100ms delay
        return () => {
            Fancybox.destroy();
            clearTimeout(timeout);
        }
    }, [data]);

    return (
        <section className="gallery" id='gallery'>
            <div className="container mx-auto">
                <section id="photos">

                    <div className="columns-2 gap-4 sm:columns-3">
                        {/* Embed Google Drive iFrame */}

                        {data.images.map((img, idx) =>
                            <BlurFade key={idx} delay={0.25 + idx * 0.05} inView>
                                <a href={img} data-fancybox="gallery">
                                    {img.endsWith('.mp4') || img.endsWith('.webm') || img.endsWith('.mov') ? (
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

                        )}
                        {
                            data.videosUrl.map((video, index) =>
                                <BlurFade delay={0.25 + data.images.length * 0.05} inView key={index}>
                                    <div className="mb-4 w-full max-h-96 rounded-3xl overflow-hidden relative">
                                        <label htmlFor={`video-${index}`} className="absolute top-0 left-0 w-full h-[20%]"></label>
                                        <iframe
                                            src={video.url.split('/view')[0] + '/preview'}
                                            // width="100"
                                            // height="400"
                                            allow="autoplay"
                                            className="w-full h-96 rounded-3xl"
                                            id={`video-${index}`}
                                        ></iframe>
                                    </div>
                                </BlurFade>
                            )
                        }

                    </div>

                </section>
            </div>
        </section>
    )
}
