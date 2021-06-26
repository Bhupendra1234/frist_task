import React from 'react'
import Header from '../../Header'
import { Carousel } from 'antd'
import 'antd/dist/antd.css';
const index = () => {
    return (
        <div>
            <Header/>
            <main role="main">
            
                    <Carousel autoplay>
                            <div>
                            <img src="./static/img/first.jpg" alt="Health vision" style={{ width: '100%', height: '550px' }} />
                            </div>
                            <div>
                            <img src="./static/img/second.jpg" alt="Health vision" style={{ width: '100%', height: '550px' }} />

                            </div>
                            <div>
                            <img src="./static/img/third.jpg" alt="Health Vision" style={{ width: '100%', height: '550px' }} />

                            </div>
                   </Carousel>
                           

                <div class="container marketing">
                    <div class="row merg">
                        <div class="col-lg-4" >
                            <img class="rounded-circle" src="./static/img/clock.jpg" alt="CLock Image" width="140" height="140" />
                            <h1 class="manage">Quick Prediction</h1>
                            <p class="sfont" >We have used light ML model that can load within no time without compromising on the accuracy of the prediction. Light models quickly load which helps in better response of the page.</p>
                        </div>
                        <div class="col-lg-4">
                            <img class="rounded-circle" src="./static/img/multiple.jpg" alt="Checklist image" width="140" height="140" />
                            <h1 class="manage">Wide Range</h1>
                            <p class="sfont">This Web-App provides a wide range of predicting the contamination multiple infectious diseases like Kidney disease, Diabetes, Liver Infection, Heart Disease & Breast Cancer.</p>
                        </div>
                        <div class="col-lg-4">
                            <img class="rounded-circle" src="./static/img/accuracy.jpg" alt="Accuracy Image" width="140" height="140" />
                            <h1 class="manage">Highly Accurate</h1>
                            <p class="sfont"> Though this app provides a wide range and high speed the accuracy has not been compromised. Hyper-parameters have been selected very carefully so that the accuracy is not hampered.</p>
                        </div>
                    </div>

                    <hr class="featurette-divider" />
                       <div class="row">
                        <div class="col-lg-6">
                            <h1 class="featurette-heading">Less Doctors<span class="text-muted">: India is facing a huge shortage of Doctors</span></h1>
                            <p class="sfont">India has shortage of an estimated 600,000 doctors and 2 million nurses, say scientists who found that lack of staff who are properly trained in administering antibiotics is preventing
                                patients from accessing live-saving drugs. Even when antibiotics are available, patients are often unable to afford them. High out-of-pocket medical costs to the patient are compounded by limited
                                government spending for health services according to the report by the Center for Disease Dynamics, Economics & Policy (CDDEP) in the US.In India, 65 per cent of health expenditure is out-of-pocket,
                                and such expenditures push some 57 million people into poverty each year.</p>
                        </div>
                        <div class="col-lg-6">
                            <img class="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" src="./static/img/doctor.jpg" alt="Health Care Professionals" />
                        </div>
                    </div>
                    <hr class="featurette-divider" />
                    <div class="row featurette merg">
                        <div class="col-md-7 order-md-2">
                            <h1 class="featurette-heading">Low Accessibility<span class="text-muted">: Non-uniform Accessibility to Healthcare across nation</span></h1>
                            <p class="sfont">The healthcare industry faces unique challenges in every country. When it comes to the last mile delivery of health services even advanced economies struggle to set up the right
                                infrastructure for seamless integration of different functions. For a country like India the challenges take on a different meaning when we consider the vast area and the sheer number of potential
                                beneficiaries. There are additional challenges like diversity of population, challenges unique to a specific geographic area and digital literacy to name a few.</p>
                        </div>
                        <div class="col-md-5 order-md-1">
                            <img class="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" src="./static/img/staff.jpg" alt="Generic placeholder image" />
                        </div>
                    </div>
                    <hr class="featurette-divider" />
                    <div class="row featurette merg">
                        <div class="col-md-7">
                            <h1 class="featurette-heading">Affordability: <span class="text-muted">Good healthcare facilities still a dream of the common people in India</span></h1>
                            <p class="sfont">It is the biggest problem many Poor and marginalised are hit the most as by the government estimates, approx. 63 million people are faced with poverty every year because of their
                                healthcare expenditure. Using the technology in a better way healthcare can be made affordable for everyone. eople from across the globe were flocking to India for treatment in the areas of
                                cardiac by-pass, bone-marrow transplants, hip replacements. Dwelling on the various health indices and parameters, Dr. Saraswath said that India figured poorly in various indicators like
                                infant mortality and lagged behind not only emerging economies but many of the sub-Saharan countries</p>
                        </div>
                        <div class="col-md-5">
                            <img class="featurette-image " data-src="holder.js/500x500/auto" src="./static/img/aff.jpg" alt="Generic placeholder image" height="280" />
                        </div>
                    </div>
                    <hr class="featurette-divider" />

                </div>
                <footer class="container">
                    <p class="float-right sfont"><a href="#">Back to top</a></p>

                </footer>
            </main>
        </div>
    )
}

export default index
