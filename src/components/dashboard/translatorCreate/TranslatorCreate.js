import React from "react";
import { Link } from "react-router-dom";
import SelectAutocomplete from "../selectFields/SelectAutocomplete";
import "../Dashboard.css";

const TranslatorCreate = () => {
  // const { userID } = useParams();

  return (
    <div className="body-project-create">
      <div className="col-center-full">
        <form>
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
            <SelectAutocomplete id={"trans-create-trans-lang"} />
          </div>
          <Link to={`/translators`}>
            <button className="action blue" type="submit">
              Create
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default TranslatorCreate;
