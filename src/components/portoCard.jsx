import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye';
import { useNavigate } from 'react-router-dom';

const PortoCard = ({ title, image, hoverImage, linktoWeb, icon }) => {
      let base_url = "https://template.bomboraweb.com/";
      const navigate = useNavigate()

      const handleOrderClick = (template) => {
      navigate(`/form-pemesanan?template=${template}&paket=Growth`)
      }

      return (
            <>
                  <div className={`bg-bombora-100 aspect-[5/4] rounded-lg overflow-hidden shadow-lg group transition-all w-full`}>
                        <div className='w-full h-[75%] overflow-hidden relative group'>
                              <img src={`${base_url}/image/${image}`} alt={title} className='w-full h-full object-cover' />
                              {hoverImage && (
                              <img 
                                    src={hoverImage} 
                                    alt="" 
                                    className='absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-300' 
                              />
                              )}
                        </div>

                        <div className='px-5 py-2 md:py-4 h-[25%] flex justify-between items-center'>
                              <h2 className='text-xs xs:text-sm md:text-base'>{title}</h2>
                              {icon === 'link' && <a href={`https://${linktoWeb}`} target='_blank'>
                                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='hover:scale-110 transition-all' />
                              </a>}
                              {icon === 'template' &&
                                   <div className="flex gap-4">
                                     <a onClick={() => handleOrderClick(`${linktoWeb}`)} target='_blank'>
                                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='hover:scale-110 transition-all' />
                                    </a>
                                    <a href={`https://template.bomboraweb.com/templates/${linktoWeb}`} target='_blank'>
                                          <FontAwesomeIcon icon={faEye} className='hover:scale-110 text-xl transition-all' />
                                    </a>
                                   </div>
                              }
                        </div>
                  </div>
            </>
      );
};
PortoCard.propTypes = {
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      hoverImage: PropTypes.string,
      linktoWeb: PropTypes.string,
      icon: PropTypes.string,
};

export default PortoCard;
