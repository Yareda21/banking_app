import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/totalBalanceBox'
import React from 'react'

const Home = () => {
  const loggedIn = {
    firstName: "Yared"
  }
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type ="greeting"
            title = "Welcome"
            user = {loggedIn?.firstName || 'Guest'}
            subtext = "Access and manage your account and transactions efficiently."
          />
          <TotalBalanceBox 
            accounts= {[]}
            totalBank={1}
            totalCurentBalance={124.45}
          />
        </header>
      </div>
    </section>
  )
}

export default Home