import React from 'react'
import Navebar from './Navebar'
import Heropage from './Heropage'
import Buttons from './Buttons'

import Products from './Products'
import Productprovider from './Productprovider'
function Home() {

  return (
    <div>
      <Productprovider>
      <Navebar/>
      <Heropage/>
      <Buttons/>
      <Products/>
      </Productprovider>
    </div>
  )
}

export default Home
