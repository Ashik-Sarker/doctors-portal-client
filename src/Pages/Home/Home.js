import React from 'react';
import Footer from '../Shared/Foter/Footer';
import Banner from './Banner';
import ContactUs from './ContactUs';
import ExceptionalDental from './ExceptionalDental';
import Info from './Info';
import MakeAnAppointment from './MakeAnAppointment';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div style={{boxSizing:"border-box"}}>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <ExceptionalDental></ExceptionalDental>
            <MakeAnAppointment></MakeAnAppointment>
            <Testimonials></Testimonials>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;