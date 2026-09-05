import React from 'react'
import Hero from './hero'
import Awards from './awards'
import Stats from './stats'
import Pricing from './pricing'
import education from './education'

import OpenAccount from '../openaccount'
import Navbar from '../navbar'
import Footer from '../footer'

function homepage() {
    return (  
        <>
        <Navbar />
        <hero />
        <awards />
        <stats />
        <pricing />
        <education />
        <openaccount />
        <footer />
        </>
    );
}

export default homepage;