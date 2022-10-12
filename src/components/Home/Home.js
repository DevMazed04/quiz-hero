import React from 'react';
import './Home.css';
import headerImg from '../../images/quiz-header.jpg';
import Topics from '../Topics/Topics';

const Home = () => {
   return (
      <section>
         <div className='mt-5 border-danger header mx-auto rounded-4 px-0 py-2  d-flex justify-content-between  align-items-center ps-4 py-3 py-sm-0 header-bg'>
            <div className='text-start w-50'>
               <h2>What will you learn today?</h2>
               <small className='text-secondary'>Welcome to my <strong>Quiz Hero</strong> website. You can enrich your knowledge by participating the quizes based on various topics.</small>
            </div>
            <div>
               <img className='rounded-4' src={headerImg} alt="" width="130px" />
            </div>
         </div>

         <Topics></Topics>
      </section>
   );
};

export default Home;
