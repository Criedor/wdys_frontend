import React, {useState, useContext} from "react";
import { useHistory } from "react-router-dom";
import SelectAutocompleteTranslatorCreate from "../selectFields/SelectAutocompleteTranslatorCreate";
import Axios from 'axios'
import UserContext from "../../../contexts/UserContext";
import ModalContext from "../../../contexts/ModalContext";
import "../Dashboard.css";

const TranslatorCreate = () => {
  const history = useHistory()
  const {userId, langs } = useContext(UserContext)
  const { setTranslatorCounter } = useContext(ModalContext)
  const [selectedLangs, setSelectedLangs] = useState([])
  
  const getLangs = (LangsInput) => {
    setSelectedLangs(LangsInput)
  }

  const create = (e)=>{
    e.preventDefault()
    
    Axios
      .post(`https://wdys.herokuapp.com/translators/create`,{"email":e.target[1].value, "translator_langs":selectedLangs.length===0?langs[1].langname:selectedLangs, "displayname":e.target[0].value, "user_id":userId})
      .then((res) => { 
          setTranslatorCounter(0)
          history.push("/translators")
      })
      .catch((err) => console.log(err))
  }





  return (
    <div className="body-project-create">
      <div className="col-center-full">
        <form onSubmit={(e)=>create(e)}>
          <div className="field-wrapper">
            <label htmlFor="trans-create-name">Name *</label>
            <input
              id="trans-create-name"
              className="custom-input"
              type="text"
              placeholder="Full name"
            />
          </div>

          <div className="field-wrapper">
            <label htmlFor="trans-create-email">Email *</label>
            <input
              id="trans-create-email"
              className="custom-input"
              type="email"
              placeholder="example@email.com"
            />
          </div>

          <div className="field-wrapper">
            <label htmlFor="trans-create-trans-lang">
              Select Language(s) *
            </label>
            <SelectAutocompleteTranslatorCreate id={"trans-create-trans-lang"} getLangs={getLangs}/>
          </div>
            <button className="action blue" type="submit">
              Create
            </button>
        </form>
      </div>
    </div>
  );
};

export default TranslatorCreate;
