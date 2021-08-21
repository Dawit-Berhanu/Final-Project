import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel } from 'react-bootstrap'
import  carousel  from './carousel.css'
import SearchBtn from './SearchBtn'


const Home = () => {
    return (
      <section className="dispImage">
          <Carousel>
                <Carousel.Item interval={4000}>
                    <div className="image">
                        <img
                        
                        src="images/annie-spratt-NsYaoO0Bn-A-unsplash.jpg"
                        alt="First slide"
                        />
                    </div>
    
                    <Carousel.Caption>
                    <div className="serBtn">
                     <SearchBtn/>
                    </div>
                        <h3 className="livestock">LiveStock</h3>
                        <p> Feeds for <span>livestock</span> are made from animal by-products. 
                            These include blood meal and meat and bone scraps..</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <div className="image">
                        <img
                        src="images/ethio.jpg"
                        alt="Second slide"
                        />
                    </div>
                    <Carousel.Caption>
                    <div className="serBtn">
                     <SearchBtn/>
                    </div>
                    <h3 className="FarmQ"> Traditional Farming</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                <div className="image">
                <img
                    src="images/roberto-bernardi-haXsyxD9Yg8-unsplash.jpg"
                    alt="Third slide"
                    />
                
                </div>
                    <Carousel.Caption>

                    <div className="serBtn">
                     <SearchBtn/>
                    </div>
                    
                    <h3 className="farm-machine">Farming Development</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>    

      </section>
    )
}

export default Home
