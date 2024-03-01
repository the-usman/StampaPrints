import React, { Component } from 'react'
import Navbar from '../Componants/Navbar/Navbar'
import ContantForSpeci from '../Componants/ContantForSpeci/ContantForSpeci'
import Footer from '../Componants/Footer/Footer'
import HomeBlog from '../Componants/HomeBlog/HomeBlog'
import Letschat from '../Componants/LetsChat/LetsChat'
import Specification2nd from '../Componants/Specification2nd/Specification2nd'
import GetinTouch from '../Componants/GetinTouch/GetinTouch'
import NavbarNew from '../Componants/Navbar/NavbarNew'

export default class Specification extends Component {
    render() {
        return (
            <>
                {/* <Navbar></Navbar> */}
                <NavbarNew></NavbarNew>
                <ContantForSpeci></ContantForSpeci>
                {/* <Letschat></Letschat> */}
                <Specification2nd></Specification2nd>
                <GetinTouch></GetinTouch>
                <HomeBlog></HomeBlog>
                <Footer></Footer>
            </>
        )
    }
}
