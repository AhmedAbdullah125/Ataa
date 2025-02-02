'use client'
import Link from 'next/link'
import React, { useState } from 'react'
export default function Breadcrumb({ title, titleUrl, subtitle, subtitleUrl }) {

    return (
        <div className="bead-cramp">
            <p className='breadLink'><Link href={'/'}>الرئيسية</Link> <i className="fa-solid fa-chevron-left"></i> <Link href={titleUrl}className={`${subtitle == "" ? "active-link-cramp" : ""}`} >{title}</Link> {subtitle == "" ? null : <><i className="fa-solid fa-chevron-left"></i> <Link href={subtitleUrl}>{subtitle}</Link></>}</p>
        </div>
    )
}