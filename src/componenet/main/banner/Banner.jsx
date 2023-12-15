import React from 'react'
import "../banner/banner.css"
import { Link } from 'react-router-dom'

export default function Banner() {
  return (
    <div className='banner mt-5'>

      <div className="banner-content">
        <h1 className='banner-title'>İLHAM HEDİYE ET</h1>
        <p className='fs-4'>Mükemmmel hediye,onları harekete geçir</p>
        <div className="banner-btn">
          <button className='btn btn-light rounded-pill m-2'><Link>İncele</Link></button>
          <button className='btn btn-light rounded-pill m-2' ><Link>Çocuk Ürünlerini İncele</Link></button>
        </div>
      </div>
    </div>
  )
}
