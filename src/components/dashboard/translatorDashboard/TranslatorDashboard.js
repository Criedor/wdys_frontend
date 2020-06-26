import React from 'react';
import Sidebar from '../sidebar/Sidebar'
import CrumbsAction from '../crumbsAction/CrumbsAction';
import CardTranslators from '../cards/CardTranslators'
import '../Dashboard.css';


const TranslatorsDashboard = () => {

    
  return (

    <div className='dashboard'>
        <Sidebar />
        <div className='body'>
            <CrumbsAction />
            <div className='body-translators'>
                <CardTranslators />
            </div>
        </div>
    </div>

  );
}

export default TranslatorsDashboard;