import React from 'react';
import Typical from 'react-typical';
import { ReactComponent as Coder } from './images/Coder.svg'
import { ReactComponent as Translator } from './images/Translator.svg'
import { ReactComponent as Manager } from './images/manager.svg'
import './Entry.css';
import '../../global.css'



const Entry = () => {
  return (
    <>
      <div className=' entry'>
          {/* <h1>What did you say?</h1> */}
          
          <h1> <Typical
          steps={[
            'Hello world', 3000, 
            'Hallo Welt', 3000, 
            'Привет мир', 3000,
            'Bonjour le monde', 3000, 
            // 'Hello Wereld', 5000, 
            // 'Olá Mundo', 5000,
            // 'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਦੁਨਿਆ', 5000, 
            'What did you say?', 10000
          ]}
          loop={Infinity}
          wrapper="p" 
          />
          </h1>
          <h3>The contextual translations solution</h3>
        </div>

      <div className='entry-2col '>
        <div>
          <Coder style={{height:'400px'}} />
        </div>
        <div>
          <Translator style={{height:'400px'}} />
        </div>
      </div>
      <div className=' entry-1col'>
        <h1>Managing the beast</h1>
      </div>
      <div className='entry-2col '>
        <div className='center issue' >
          <div>
          <h1>The issue</h1>
          <p className='light-50'>
            Managing translations can be a daunting task. Burying yourself in excel files, managing versions with translators, explaning the context of your product.
          </p>
          <p>
            Does this sounds familiar?
          </p>
          </div>
        </div>
        <div className='issue-manager' >
          <Manager style={{height:'400px'}} />
        </div>
        </div>
    
    </>
  );
}

export default Entry;