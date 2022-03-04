import React from "react"
import Lanidng from "./landing/landing"
import Product from "./product/product"
import Page2 from "./page2/page2"
import Page3 from "./page3/page3"
import Community from "./community/communityOutfit"
import Plans from "./Plans/Plans"
import Faq from "./faq/faq"

const Main = ()=>{
return(
    <>
    <Lanidng />
    {/* <Product /> */}
    <Community />
    {/* <Plans /> */}
    <Page3 />
    <Faq />
    <Page2 />
    </>
)
}
export default Main