import React from 'react'
import Bodysection2 from './Bodysection2'
import Bodysection3 from './Bodysection3'
import Bodysection1 from './Bodysection1'
import Bodysection4 from './Bodysection4'
import Partners from './Partners'
import Video from './Video'
import Bodysection6 from './Bodysection6'
import Bodysection5 from './Bodysection5'
import ThemeSwitcher from './ThemeSwitcher'

const Websitebody = () => {
  return (
    <div className="dark:bg-orange-600 lg:text-center bg-black text-orange-600 px-2">
       <Video />
      <Bodysection1 />
      <Bodysection2 />
      <Bodysection3 />
      <Partners />
      <Bodysection4 />
      <Bodysection5 />
      <Bodysection6 />
      </div>
  )
}

export default Websitebody
