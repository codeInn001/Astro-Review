 import React from 'react';
 
const Tours = ({ tours }) => {
 
const [readMore, setReadMore] = React.useState(false)
 
return(
 
<step>
 
<div className="title">
 
  <h2>Our Tours</h2>
 
</div>
 
<div>
 
  {
 
    tours.map((tour) => {
 
      return (
 
          <article className="single-tour">
 
            <img width='400' src={tour.image} alt={tour.name} />
 
            <footer>
 
              <div className="tour-info">
 
                <h4>{tour.name}</h4>
 
                <h4 className="tour-price">${tour.price}</h4>
 
              </div>
 
            <p>
 
 {readMore ? tour.info: `${tour.info.substring(0,200)} . . .`}
  
 <button onClick={() => setReadMore(!readMore)}>{readMore ? 'read less' : 'read more'}</button>     
  
 </p>
 
            </footer>
 
          </article>
 
      )
 
    })
 
  }
 
</div>
 
</step>
 
)
 
};
 
export default Tours
