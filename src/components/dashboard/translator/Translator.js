import React, { useContext, useState, useEffect } from "react";
// import { useRouteMatch } from "react-router-dom";
// import CardProjects from "../cards/CardProjects";
import CardTranslators from "../cards/CardTranslators";
import UserContext from "../../../contexts/UserContext";
import Axios from "axios";
let uniqid = require('uniqid');

const Translator = () => {
  
    const [translators, setTranslators] = useState([]);
    const { userId } = useContext(UserContext);

    // API call to load the Tranlator's section for TM
  useEffect(() => {
    let url = `https://wdys.herokuapp.com/translators/${userId}/initial`
    Axios
    .get(url, {headers: {'Content-Type':'application/json'}})
    .then((res) => { 
        setTranslators(res.data);
        // console.log(res.data)
    })
    .catch((err) => console.log(err))
  }, [userId]);
  
  return (
    <div className="body-project">
      {translators.map(translator => 
        <CardTranslators 
        key={uniqid()} 
        id={translator._id}
        transName={translator.displayname}
        transLangs={translator.translator_langs}
        transEmail={translator.email}
        />
      )}
    
    </div>
  );
};

export default Translator;
