import React, { Fragment } from "react";
import Navbar from "../Componants/Navbar/Navbar";
import OurBlogHead from "../Componants/OurBlogHead/OurBlogHead";
import RecentBlogs from "../Componants/RecentBlogs/RecentBlogs";
import Chat from "../Componants/Chat/Chat"
import Footer from "../Componants/Footer/Footer"
import LetsChat from "../Componants/LetsChat/LetsChat";
import TabBlog from "../Componants/TabBlog/TabBlog";
import TabEx from "../Componants/TabEx/TabEx";
import NavbarNew from "../Componants/Navbar/NavbarNew";


// Fat arrow function
const OurBlogs = () => {
    return (
        <Fragment>
            {/* <Navbar></Navbar> */}
            <NavbarNew></NavbarNew>
            <OurBlogHead></OurBlogHead>
            <RecentBlogs></RecentBlogs>
            <TabBlog />
            {/* <TabEx /> */}
            {/* <LetsChat></LetsChat> */}
            <Chat imageSrc={require("../Componants/Chat/about-blog-catagary.png")}></Chat>
            <Footer></Footer>
        </Fragment>
    );
};
export default OurBlogs;
