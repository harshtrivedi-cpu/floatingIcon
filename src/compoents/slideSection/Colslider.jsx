import './Colslider.scss';
import BikeIcon from './../../assets/bikes.svg';
import NewIcon from './../../assets/NewIcon.svg';
import Offers from './../../assets/offers.svg';
import Compare from './../../assets/Compare.svg';
import news from './../../assets/news.svg';
import Scooter from './../../assets/Scooter.svg';
import finance from './../../assets/finance.svg';
import StarIcon from './../../assets/ai_icon.svg';
import Electric_vechicle from './../../assets/Electric_vechicle.svg';


const items = [
  {
    title: "BikeDekho AI",
    sub_title: "Get personalised shortlist",
    icons: [StarIcon],
    color: "pink"
  },
 {
    title: "Scooter",
    sub_title: "With best offers",
    icons: [Scooter],
    color: "Scooter"
  },

    {
    title: "Bikes",
    sub_title: "With best offers",
    icons: [BikeIcon],
    color: "Bikes"
  },

   {
    title: "Electric Vehicles",
    sub_title: "With best offers",
    icons: [Electric_vechicle],
    color: "Electric_vechicle"
  },
  {
    title: "Offers",
    sub_title: "With best offers",
    icons: [Offers],
    color: "Offers"
  },
 
  {
    title: "Compare",
    sub_title: "With best offers",
    icons: [Compare],
    color: "Compare"
  },
    {
    title: "Finance",
    sub_title: "With best offers",
    icons: [finance],
    color: "Finance"
  },
 

  {
    title: "News",
    sub_title: "With best offers",
    icons: [news],
    color: "News"
  },

];

export default function Colslider() {
  const columns = [];
  for (let i = 0; i < items.length; i += 2) {
    columns.push(items.slice(i, i + 2));
  }

  return (
    <div>
      <div className="heading_text">Search the right bike</div>

      <div className="colslider">
        {columns.map((column, colIndex) => (
          <div className="colslider-column" key={colIndex}>
            {column.map((item, index) => (
              <div className={`colslider-item ${item.color}`} key={index}>
                {item.title === "BikeDekho AI" && (
                  <img src={NewIcon} alt="new" className="new_icon" />
                )}
<div className='text_container'>

                <div className="text">{item.title}</div>
                <div className="sub_text">{item.sub_title}</div>
  </div>
                <div className="icons">

                  <img src={item.icons} alt="icon" />

                </div>

              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
