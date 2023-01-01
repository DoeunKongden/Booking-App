import React from 'react'
import './hotel.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import EmailList from '../../components/emailList/EmailList'
import Footer from '../../components/footer/Footer'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCircleXmark, faCircleArrowLeft, faCircleArrowRight, faDirections } from '@fortawesome/free-solid-svg-icons'

function Hotesl() {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  //Temporary Image array
  const photos = [
    {
      src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80"
    },
    {
      src: "https://images.unsplash.com/photo-1583522862857-bd9f6d34a236?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      src: "https://images.unsplash.com/photo-1583522843296-3e19341aecb8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      src: "https://images.unsplash.com/photo-1584315280210-fe9296b51706?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1489&q=80"
    }
  ]


  const handleOpen = (index) => {
    setSlideNumber(index);
    setOpen(true);
  }

  const handleMove = (direction) => {
    let newSlideNumber;
    if (direction == "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1
    }

    setSlideNumber(newSlideNumber);
  }

  return (
    <div>
      <Navbar />
      <Header type='list' />
      <div className='hotelContainer'>
        {open && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} onClick={() => setOpen(false)} className='close' />
          <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => handleMove("l")} />
          <div className="sliderWrapper">
            <img src={photos[slideNumber].src} alt="/" className="sliderImg" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handleMove("r")} />
        </div>}
        <div className="hotelWrapper">
          <button className='bookNow'>Reserve or Book Now</button>
          <h1 className="hotelTitle">Sokha Hotel</h1>
          <div className='hotelAddress'>
            <FontAwesomeIcon icon={faLocationDot} />
            Steung Mean Chey
          </div>
          <span className='hotelDistance'>
            Excellent location 5km from Phnom Penh center
          </span>
          <span className='hotelPriceHighLight'>
            Book a stay over $90 at this property and get a free taxi
          </span>

          <div className="hotelImages">
            {photos.map((photo, index) => {
              return (
                <div className="hotelImageWrapper">
                  <img onClick={() => handleOpen(index)} src={photo.src} className='hotelImage' alt="/" />
                </div>
              )
            })}
          </div>

          <div className="hotelDetails">
            <div className="hotelDetailsText">
              <h1 className="hotelTitle">Hotel Sokha 5 Star</h1>
              <p className="hotelDesc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt rerum laboriosam earum provident commodi excepturi est qui consequatur obcaecati. Unde minus
                architecto consequuntur. Nostrum voluptatem impedit suscipit. Libero, similique ex?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam nostrum quisquam
                ea, quod dolores repellendus possimus nihil ab in pariatur veritatis exercitationem enim dolor eaque. Tempora alias minus nisi maiores!
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay</h1>
              <span>Located in the real heart of Cambodia, this property has an excellent location score 9.0</span>
              <h2><b>$400</b>(9-night)</h2>
              <button>Reserve or Book now</button>
            </div>
          </div>
        </div>
        <EmailList />
        <Footer />
      </div>
    </div>
  )
}

export default Hotesl