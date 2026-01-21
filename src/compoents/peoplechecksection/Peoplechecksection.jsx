import './Peoplechecksection.scss';
import star_icon from '../../assets/search_icon.svg';
import right_arrow from '../../assets/right_arrow.svg';
export default function Peoplechecksection() {
  return (
    <div className="people_check_section_container">
    <img src={star_icon} alt="People Check" className='star_icon' />
    <div className='text_section'>
          <p className='upper_text'>People check before buying</p>
      <p className='lower_text'>Explain the real differences between all variants, that matter.</p>
    </div>
    <img src={right_arrow} alt="Arrow Right" className='side_arrow' />
    </div>
  );
}