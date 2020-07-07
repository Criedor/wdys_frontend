import React, {useEffect, useState, useContext} from "react";
import { Visibility } from "@material-ui/icons";
import { Link, useHistory } from "react-router-dom";
import Axios from 'axios'
import moment from 'moment'
import "../cards/Card.css";
import "../tables/Tables.css";
import "../Dashboard.css"
import "./Translation.css"
import UserContext from "../../../contexts/UserContext";



const Translation = () => {
  const {userId} = useContext(UserContext)
  const [pages, setPages] = useState()
  const [page, setPage] = useState(0)
  const history = useHistory()
  
  useEffect(() => {
    Axios
    .get(`https://wdys.herokuapp.com/translation/${userId}`, {headers: {'Content-Type':'application/json'}})
    .then((res) => { 
      console.log(res.data);
      setPages(res.data);
    })
    .catch((err) => console.log(err))
  }, [userId]);



  return (
    <>
    {pages &&
    <div className="body-translation">
      <div>
        <div className="title-gray">
            Assigned Pages
        </div>
        {pages.length>0?<div className="assigned-proj-TR header table-grid">
        <div>Page Name</div>
          <div>Translation language</div>
          <div>Deadline</div>
          <div>View</div>
        </div>:
        <div className="mt30">There are currently no pages assigned to you.</div>
        }
        {pages.map((item) => (
          <div className="assigned-proj-TR table-grid" key={item.projectname}>
            <div>{item.pagename}</div>
            <div>{item.baselang}</div>
            <div>{moment(item.deadline).format('DD-MM-YYYY')}</div>
            <div className="center">
              <Visibility onClick={()=>setPage(item)}/>
            </div>
          </div>
        ))}
      </div>
      {page ===0?
      <div>
        <div className="title-gray">
          Project Details
        </div>
        <div className="mt30">
          Select a page to see details.
        </div>
      </div>
      :
      <div>
        <div className="card-translation ">
          <div className="card-top green-bg">
             {page.pagename}
          </div>
          <div className="card-bottom ">
            <div className="page-info mt0">
              Translate form:<strong> {page.base_lang}</strong>
            </div>
            <div className="page-info">
              To:<strong> {page.lang}</strong>
            </div>
            <div className="page-info">           
              Due by: <strong>{moment(page.deadline).format('DD-MM-YYYY')} </strong>
            </div>
            <div className="page-info">
              Link: <a className="green" href={page.page_url} target="_blank" rel="noopener noreferrer" alt={page.pagename}><strong> {page.page_url}</strong></a>
            </div>
            <div className="page-info">
              Descritpion
              <p className="page-description">{page.description}</p>
            </div>
            <div className="center">
              <Link to={``}>
                <button className="blue action " onClick={(e)=>{e.preventDefault(); history.push(`/translation/${page._id}`)}}>REVIEW</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      }
    </div>
    }
  </>
  );
};

export default Translation;