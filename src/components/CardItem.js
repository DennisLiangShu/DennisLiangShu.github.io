import React from 'react';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <a className='cards__item__link' href={props.path} target="_blank" rel="noopener noreferrer">
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt="temp"
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
            <div className='cards__item__div'>
              <a className='cards__item__btn' href={props.link} target="_blank" rel="noopener noreferrer"><span>LIVE APP</span></a>
              <a className='cards__item__btn' href={props.git} target="_blank" rel="noopener noreferrer"><span>LEARN MORE</span></a>
            </div>
          </div>
        </a>
      </li>
    </>
  );
}

export default CardItem;