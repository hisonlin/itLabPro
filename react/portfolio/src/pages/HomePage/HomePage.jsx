import React from 'react'
import Header from '../../Component/Header/Header'
import HomeMain from '../../Component/HomeMain/HomeMain'
import SkillCard from '../../Component/Skill/SkillCard'
import Footer from '../../Component/Footer/Footer'

const HomePage = props => {
    return (
        <>
            <Header />
            <HomeMain/>
            <SkillCard/>
            <Footer/>
        </>
    )
}

export default HomePage