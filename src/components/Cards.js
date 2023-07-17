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
              src='images/img-4.jpg'
              text='This fully responsive portfolio website that you are on right now is built using 
              HTML, CSS, JavaScript and React JS. The web components utilize React Hooks 
              to implement state and props. The website itself is hosted using GitHub pages fully integrated with React JS.'
              label='Portfolio Website'
              path='/'
              link='/'
              git='https://github.com/DennisLiangShu/dennisliangshu.github.io'
            />

            <CardItem
              src='images/img-3.jpg'
              text='This web application functions as a secure user login/logoff system that features 
              an email authentication code, user registration and password reset functionality built 
              using PHP sessions, CSS Boostrap and a back-end MySQL database that stores user information.'
              label='Secure User Login System'
              path='https://cis-linux2.temple.edu/~tul14986/project/index.php'
              link='https://cis-linux2.temple.edu/~tul14986/project/index.php'
              git='https://cis-linux2.temple.edu/~tul14986/project/index.php'
            />

            <CardItem
              src='images/img-2.jpg'
              text='This weather web application utilizes ReactJS, Bootstrap, and ChartJS to provide 
              an intuitive user experience for accessing weather information. By integrating the 
              OpenWeather API and OpenCageData API, users can obtain accurate weather data for 
              different locations.'
              label='Weather App (in progress)'
              path='https://dennisliangshu.github.io/weatherapp/'
              link='https://dennisliangshu.github.io/weatherapp/'
              git='https://github.com/DennisLiangShu/weatherapp'
            />

          </ul>
          {/*
          <ul className='cards__items'>
            
            <CardItem
              src='images/img-1.jpg'
              text='This JavaScript-based to-do list application offers a user-friendly interface that 
              utilizes HTML and CSS to easily sort and organize tasks by completion status as well as 
              by the date they were added, making it simple to prioritize and manage a busy schedule.'
              label='To-Do List'
              path='https://dennisliangshu.github.io/to-do-list/'
              link='https://dennisliangshu.github.io/to-do-list/'
              git='https://github.com/DennisLiangShu/to-do-list'
            />

            <CardItem
              src='images/img-5.jpg'
              text='This web application functions as a word frequency tracker as well as a word
              counter for user uploaded .txt files. It parses through the uploaded file and uses 
              a Hashmap to map words to frequency numbers while also calculating the total word count. '
              label='Word Count Program'
              path='https://dennisliangshu.github.io/text-word-counter-/'
              link='https://dennisliangshu.github.io/text-word-counter-/'
              git='https://github.com/DennisLiangShu/text-word-counter-'
            />
          </ul>
  */}
        </div>
      </div>
    </div>
  );
}

export default Cards;