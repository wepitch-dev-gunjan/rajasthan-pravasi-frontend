import React from 'react'
import './style.scss'

const PageHero = (props) => {
  return (
<>
<div className="bannerHero">
    <div className="bannerHeroBox">
        <h1>{props.message}</h1>
    </div>
</div>
</>
  )
}

export default PageHero