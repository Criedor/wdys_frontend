import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import Axios from 'axios'
import "../cards/Card.css";
import "../tables/Tables.css";
import "../Dashboard.css";
import "./Compare.css";
let uniqid = require('uniqid');


const Compare = () => {
  const { pageID } = useParams()
  const [translationPage, setTranslationPage] = useState()
  const [compare, setCompare] = useState()
  const rows = []

  useEffect(()=>{
    Axios
      .get(`https://wdys.herokuapp.com/translation/pages/${pageID}`)
      .then((res) => { 
        console.log(res)
        setTranslationPage(res.data.translationpage)
        setCompare(res.data.result)
      })
      .catch((err) => console.log(err))
  },[pageID])



  return (
    <>
    {translationPage && compare &&
    <div className="body-compare">
      <div className="title-gray title-green  white">
        <div>{translationPage.pagename}</div>
        </div>
        <div className="compare">
            <div className="title-gray">
              <div>Original</div>
            </div>
            <div className="title-gray">
              <div>Translation</div>
            </div>
            {compare.map((item) => (
              <>
              <div className={`compare-txt ${item.depth>0?"child":""}`} key={uniqid()}>
                {item.baseText}
              </div>
              <div className={`compare-txt ${item.depth>0?"child":""}`} key={uniqid()}>
                {item.translation}
              </div>
              </>
            ))}
          </div>
      </div>}
    </>
  );
};

export default Compare;
