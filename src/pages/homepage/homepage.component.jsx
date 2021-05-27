import React from 'react'
import Video from '../../components/video/video.component'
import Container from '../../components/container/container.component'
import ImgComare from  '../../components/imagecompare/imagecompare.component'
import './homepage.styles.css'
import Title from '../../components/title/title.component'
import CustomBtn from '../../components/custombtn/custombtn.component'


const HomePage = () => (
    <div className="home-content">
        <Video  />
        <Container>
            <div className="row wid-parent overflow-wrap">
                    <div className="col-md-6 col-sm-12">
                          <Title></Title>
                    </div>
                    
                     <div className="col-md-6 col-sm-12">
                        <p className="title_description">
                             We have combined the best-of-breed technology platforms with an eye towards relieving you of administrative burden. Matterport 3D scans augmented by TruePlan are used to generate consistent Xactimate sheets that are delivered in accord with Actionable Insights compliance rule sets. Each mpartial is produced with full transparency, unprecedented forensic photography, and infallible geospatial data that collectively result in rapid approvals.
                        </p>
                     </div>
            </div>
            <ImgComare></ImgComare>
            <div className="try-btn text-center">
                    <CustomBtn>Try it Today</CustomBtn>
            </div>
           
         </Container>
         
      
    </div>
);
export default HomePage;


