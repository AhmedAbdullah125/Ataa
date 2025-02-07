'use client'
import Link from 'next/link'
import React, { useState } from 'react'
export default function Breadcrumb({ title, titleUrl, subtitle, subtitleUrl }) {

    return (
        <div className="bead-cramp">
            <p className='breadLink'><Link scroll={true} href={'/'}>الرئيسية</Link> <i className="fa-solid fa-chevron-left"></i> <Link scroll={true} href={titleUrl} className={`${subtitle == "" ? "active-link-cramp" : ""}`} >{title}</Link> {subtitle == "" ? null : <><i className="fa-solid fa-chevron-left"></i> <Link scroll={true} href={subtitleUrl} className="active-link-cramp">{subtitle}</Link></>}</p>
        </div>
    )
}