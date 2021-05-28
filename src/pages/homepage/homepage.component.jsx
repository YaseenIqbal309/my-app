import React from 'react'
import Video from '../../components/video/video.component'
// import Container from '../../components/container/container.component'
import ImgComare from  '../../components/imagecompare/imagecompare.component'
import './homepage.styles.css'
import Title from '../../components/title/title.component'
import CustomBtn from '../../components/custombtn/custombtn.component'
import 'bootstrap/dist/css/bootstrap.min.css';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'



const HomePage = () => (
    <div className="home-content">
        <Video  />
        <Container>
            <div className="row wid-parent overflow-wrap">
                    <div className="col-md-6 col-sm-12">
                          <Title>
                          GROUND-TRUTH DATA EVERYONE TRUSTS
                          </Title>
                    </div>
                    
                     <div className="col-md-6 col-sm-12">
                        <p className="title_description">
                             We have combined the best-of-breed technology platforms with an eye towards relieving you of administrative burden. Matterport 3D scans augmented by TruePlan are used to generate consistent Xactimate sheets that are delivered in accord with Actionable Insights compliance rule sets. Each mpartial is produced with full transparency, unprecedented forensic photography, and infallible geospatial data that collectively result in rapid approvals.
                        </p>
                     </div>
            </div>
            <div className="img-comparator text-center">
                    <ImgComare></ImgComare>
            </div>
           
            <div className="try-btn text-center">
                    <CustomBtn>Try it Today</CustomBtn>
            </div>


           
         </Container>
         <div className="work bg-light mt-5 pt-4 pb-4">
             <Container>
             <Title centerTitle>
                 How it Work
             </Title>
             <div className="data-points">
                    <Row no-gutter>
                        <Col md='4' sm='12'>
                            <div className="data-point-item">
                                <Row>
                                    <Col md='4' sm='12' className='data-number'>
                                        1
                                    </Col>
                                    <Col md='8' sm='12' className='data-text text-center'>
                                        <a className='text-decoration-none text-black-hover' href="#">Perform pre-mitigation and post-mitigation scans with a Matterport Pro Series camera.</a>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col md='4' sm='12'>
                        <div className="data-point-item">
                                <Row>
                                    <Col md='4' sm='12' className='data-number'>
                                        2
                                    </Col>
                                    <Col md='8' sm='12' className='data-text text=center'>
                                        <a  className='text-decoration-none text-black-hover' href="#">Submit the Matterport scans via the mpartial portal and then go back to what you do great.</a>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col md='4' sm='12'>
                        <div className="data-point-item">
                                <Row>
                                    <Col md='4' sm='12' className='data-number'>
                                        3
                                    </Col>
                                    <Col md='8' sm='12' className='data-text text-center'>
                                        <a  className='text-decoration-none text-black-hover' href="#">
R                                           eceive a well-formatted, fully documented Xactimate PDF, ESX & Matterport TruePlan SKX.</a>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        
                    </Row>

             </div>
             <div className="try-btn text-center mt-4">
                    <CustomBtn>Get Started</CustomBtn>
            </div>


             
             </Container>
            
         </div>
        
        <div className="waterfall">
            <Container>
                <Title centerTitle>
                    WaterFall Fee Structure
                </Title>

            </Container>
        </div>
           
         
      
    </div>
);
export default HomePage;


