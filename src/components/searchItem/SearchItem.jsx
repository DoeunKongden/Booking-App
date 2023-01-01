import './searchItem.css'

function SearchItem() {
    return (
        <div className='searchItem'>
            <img src="https://cf.bstatic.com/xdata/images/hotel/square200/98235778.webp?k=d3cd35cd37233b20b93a53a1f70d844857f4290eac98a7ccf8a6ccf17a4a170a&o=&s=1" className='searchItemImg' alt="image not found" />

            <div className="siDesc">
                <h1 className='siTitle'>Opens in new window
                    Rei Kandoeng AngkorOpens in new window
                </h1>
                <span className='siDistance'>0.8 km from center</span>
                <span className='siTaxiOp'>Free airport taxi</span>
                <span className='siSubTitle'>
                    Studio Apartment With Air Conditioning
                </span>
                <span className='siFeatures'>
                    Entire studio / 1 bathroom / 21m 1 full bed
                </span>
                <span className='siCancelOp'>Free Cancellation</span>
                <span className='siCancelOpSubTitle'>You can cancel later, so lock in this great price today !</span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>

                <div className="siDetialTexts">
                    <span className="siPrice">123$</span>
                    <span className="siTaxOp">Include taxes and fees</span>
                    <button className='siCheckButton'>See availability</button>
                </div>
            </div>
        </div>
    )
}

export default SearchItem