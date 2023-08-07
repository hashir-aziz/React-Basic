import React from 'react'

export const RecentPost = () => {
  return (
    <div className="bigboss1">
      <div className="nav2">
        <p className='Recent'>Recent Posts</p>
        <p className='View'>View All</p>
      </div>

      <div className="innerbox1">

        <div className="cart1">
            <p className='cartInfo1'>
            Making a design system from scratch
            </p>
            <p className='Date1'>12 Feb 2020  |  Design, Pattern </p>
            <p className='cart-inner-data'>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>

        </div>
        <div className="cart2">
              <p className='cartInfo2'>
              Creating pixel perfect icons in Figma
              </p>
              <p className='Date2'>12 Feb 2020  |  figma icon Design, Pattern </p>
              <p className=  'cart-inner-data'>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
              </p>
        </div>


      </div>

    </div>
  )
}

export default RecentPost