import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { render } from 'react-dom';
import { AiOutlineHome, AiTwotoneCalendar} from 'react-icons/ai';

function Main () {


    return (
        <>
            <div className="main-container">
                <div className="card">
                    <div className="phone-email-container">
                        <p className="phone-title hours-title">contact</p>
                        <p className="phone-title">address</p>
                        <a href="https://goo.gl/maps/zDr2mo87nZnra3797" target="_blank" className="phone-number">Salon VIP</a>
                        <a href="https://goo.gl/maps/zDr2mo87nZnra3797" target="_blank" className="phone-number">730 Camino Del Rio N,</a>
                        <a href="https://goo.gl/maps/zDr2mo87nZnra3797" target="_blank" className="phone-number">San Diego, CA</a>
                        <a href="https://goo.gl/maps/zDr2mo87nZnra3797" target="_blank" className="phone-number">92108</a>
                    </div>
                    <div className="phone-email-container">
                        <p className="phone-title">phone</p>
                        <a className="phone-number" href="tel:619-549-8080">(619)-549-8080</a>
                    </div>
                    <div className="phone-email-container">
                        <p className="phone-title">email</p>
                        <a className="phone-number" target="_blank" href="mailto:sarahvaughanstylist@gmail.com">sarahvaughanstylist@gmail.com</a>
                    </div>
                </div>
                <a href="https://www.schedulicity.com/scheduling/SVA6BT/services" target="_blank" className="book-now">book now</a>
                <div className="card">
                    <div className="phone-email-container">
                        <p className="phone-title hours-title">hours</p>
                        <p className="hours phone-title">Tuesday</p>
                        <p className="hours phone-number">9am - 5pm</p>
                        <p className="hours phone-title">Wednesday</p>
                        <p className="hours phone-number">12pm - 8pm</p>
                        <p className="hours phone-title">Friday</p>
                        <p className="hours phone-number">9am - 5pm</p>
                        <p className="hours phone-title">Saturday</p>
                        <p className="hours phone-number">9am - 5pm</p>
                        <p className="hours phone-title">Sunday, Monday and Thursday</p>
                        <p className="hours phone-number">Closed</p>
                    </div>
                </div>
            </div>
            <div className="main-container two">
                <div className="card card-one-thirds">
                    <div className="phone-email-container">
                        <p className="phone-title hours-title">about</p>
                        <p className="about">Sarah Vaughan has been doing hair and loving it since 1998. She has worked in top salons from the Pacific Northwest to Honolulu and now San Diego. From classic to creative Sarah believes your hair should compliment and help you feel and look your best!</p>
                        <p className="phone-title hours-title">additional information</p>
                        <p className="about">Sarah is now located at Salon V.I.P. and conveniently located in Mission Valley. Salon V.I.P. is an intimate boutique Aveda Salon. Parking is available in building garage visitor parking or on street.</p>
                    </div>
                </div>
                <div className="card card-two-thirds">
                    <div className="phone-email-container">
                        <p className="phone-title hours-title">testimonials</p>
                        <p className="testimonial">I will follow Sarah Vaughan wherever she goes. As a short hair fanatic, she is the master of the pixie and the five point</p>
                        <p className="testimonial-name">- Roselle E.</p>
                        <p className="testimonial">I walked out feeling like a million bucks. I won't go to anyone else from now on, she got the cut, color, and style just right!</p>
                        <p className="testimonial-name">- Roselle E.</p>
                        <p className="testimonial">Sarah understands what you want. She consults really well, and makes you feel really confident leaving the salon. She knows how to balance simple and bold. You won't be disappointed</p>
                        <p className="testimonial-name">- Lena C.</p>                    
                    </div>
                </div>
            </div>
            <div className="main-container three">
            <a href="https://www.schedulicity.com/scheduling/SVA6BT/services" target="_blank" className=" book-now book-now-20">book now</a>
                <div className="card card-full">
                    <div className="phone-email-container">
                        <p className="phone-title hours-title">services</p>
                        <p className="hours phone-title">color</p>
                        <p className="services phone-number">Full range of custom color services including consultation and finish styling. Highlighting, balayage, hair painting, global applications, and more.</p>
                        <p className="services phone-title">cut</p>
                        <p className="services phone-number">Includes consultation, shampoo and finish styling</p>
                        <p className="services phone-title">smoothing treatments</p>
                        <p className="services phone-number">Pure Brazilian and Cezanne Professional smoothing systems.</p>
                        <p className="services phone-title">extensions</p>
                        <p className="services phone-number">Hot Heads and Hairlocs Hair Extension Services provided. Consultation required prior to service.</p>
                        <p className="services phone-title">special event styling</p>
                        <p className="services phone-number">Weddings, special events and more. On-location or in-salon, hair styling services provided for groups or individuals.</p>
                        <p className="services phone-title">consultation</p>
                        <p className="services phone-number">Complimentary consultations provided prior to any service or anytime!</p>
                    </div>
                </div>
            </div>
            <div className="main-container four">
                <div className="card map-card">
                    <div className="phone-email-container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13420.076176725897!2d-117.1583222!3d32.7652292!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfcda105995d9b746!2sSalon%20V.I.P.%20AVEDA!5e0!3m2!1sen!2sus!4v1613951783625!5m2!1sen!2sus" width="600" height="450" className="g-map" allowFullScreen="" loading="lazy"></iframe>
                    </div>
                </div>
                <div className="card card-two-thirds">
                    <div className="phone-email-container">
                        <p className="phone-title hours-title">rates</p>
                        <p className="hours phone-title">womens cut</p>
                        <p className="services phone-number">$75</p>
                        <p className="services phone-title">mens ccut</p>
                        <p className="services phone-number">$55</p>
                        <p className="services phone-title">partial highlight</p>
                        <p className="services phone-number">$110</p>
                        <p className="services phone-title">full highlight</p>
                        <p className="services phone-number">$125</p>
                        <p className="services phone-title">single process color</p>
                        <p className="services phone-number">$80</p>
                        <p className="services phone-title">harilocs/hotheads extensions</p>
                        <p className="services phone-number">consult requited for accrate rate</p>
                        <p className="services phone-title">perms</p>
                        <p className="services phone-number">consult requited for accrate rate</p>
                    </div>
                </div>
            </div>
        </>  
    )
};

export default Main;
