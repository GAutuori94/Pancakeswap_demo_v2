import React from 'react'
import Footer from '../../shared/Footer'
import Nav from '../../shared/Nav'
import BottomCardSection from './card_sections/bottomCardSection'
import TopCardSection from './card_sections/topCardSection'

export function Home () {
    return (
        <>
        <Nav />
        <TopCardSection />
        <BottomCardSection />
        <Footer />
        </>
    )
}
