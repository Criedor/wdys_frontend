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

  const downloadJson = () =>{
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(compare, undefined, 2));
    var dlAnchorElem = document.getElementById('downloadAnchorElem');
    dlAnchorElem.setAttribute("href",     dataStr     );
    dlAnchorElem.setAttribute("download", `${translationPage.pagename}.json`);
  }
  
  useEffect(()=>{
    Axios
      .get(`https://wdys.herokuapp.com/translation/pages/${pageID}`)
      .then((res) => { 
        setTranslationPage(res.data.translationpage)
        setCompare(res.data.result)
      })
      .catch((err) => console.log(err))
  },[pageID])



  return (
    <>
    {translationPage && compare ?
    <div className="body-compare">
      <div className="title-gray title-green  white">
        <div>{translationPage.pagename}</div>
        <div className="white" onClick={()=>downloadJson()}><a href="" className="white download" id="downloadAnchorElem">Download as JSON</a></div>
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
              <div className={`compare-txt }`} key={uniqid()}>
            {item.depth>0?<div className="child" >→</div>:""}{item.baseText}
              </div>
              <div className={`compare-txt ${item.depth>0?"child":""}`} key={uniqid()}>
                {item.translation}
              </div>
              </>
            ))}
          </div>
      </div>:
      <div className="mt30">
        There are no translations available yet for this page. Did you assign a translator?
      </div>}
    </>
  );
};

export default Compare;
