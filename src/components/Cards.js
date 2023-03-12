import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards' id={'projects'}>
      <h1>PROJECTS</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-1.jpg'
              text='This JavaScript-based to-do list application offers a user-friendly interface that 
              utilizes HTML and CSS to easily sort and organize tasks by completion status as well as 
              by the date they were added, making it simple to prioritize and manage a busy schedule.'
              label='To-Do List'
              path='https://dennisliangshu.github.io/to-do-list/'
            />
            <CardItem
              src='images/img-2.jpg'
              text='This web application is a sophisticated inventory management system that 
              seamlessly integrates various technologies such as JavaScript, JSP, Ajax calls, 
              MySQL, HTML, and CSS to provide an intuitive user experience for managing inventory.'
              label='Inventory Management System'
              path='http://cis-linux2.temple.edu:8080/SP22_3308_tul14986'
            />
          </ul>
          <ul className='cards__items'>
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;