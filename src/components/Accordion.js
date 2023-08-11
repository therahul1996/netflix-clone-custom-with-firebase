import React, {useState} from 'react'
const Accordion = ({title, content}) => {
  
    const [isActive, setIsActive] = useState(false);
  return (
    <div className='accordion-item'>
    <div className='accordion-title' onClick={() => setIsActive(!isActive)}>
        <div><h3>{title}</h3></div>
        <div><span className={`${isActive && 'icon-active'}`}>+</span></div>
    </div>
    {isActive && <div className='acccordion-content'><p>{content}</p></div>}
    </div>
  )
}

export default Accordion