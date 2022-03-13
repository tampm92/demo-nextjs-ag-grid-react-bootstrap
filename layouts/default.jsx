import React, { Component } from 'react'
import { useRouter } from 'next/router'

import routes from '@/auth/routes'
import Sidebar from '@/layouts/components/Sidebar'
import Navbar from '@/layouts/components/Navbar'
import Footer from '@/layouts/components/Footer'

const routesShowed = routes.filter(item => item.isShowed)

const DefaultLayout = (props) => {
  const imageUrl = '/img/sidebar-3.jpg'
  const hasImage = false
  const color = '#3c3c3c'
  const { asPath } = useRouter()

  const getCurrentBrandText = () => {
    const currentBrandText = routesShowed.find(route => {
      return asPath === route.path
    })

    return currentBrandText ? currentBrandText.name : 'Brand'
  }

  return (
    <div className="wrapper">
      <Sidebar routes={routesShowed} image={imageUrl} color={color} hasImage={hasImage} />
      <div id="main-panel" className="main-panel">
        <Navbar brandText={getCurrentBrandText()}/>
        {props.children}
        <Footer />
      </div>
    </ div>
  )
}

export default DefaultLayout