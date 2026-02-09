// react
import React from 'react'
// pictures
import BookImg from '../../../../assets/pictures/CoursesPagePic.png' 

function IntroSection() {
  return (
    <section className='w-full flex items-center justify-between mt-3'>
        <h2 className='font-semibold text-8xl text-[#FFC107]'>Bizning Kurslar</h2>
        <img src={BookImg} alt="rasm bor" className='w-md' />
    </section>
  )
}

export default IntroSection