import React, {useEffect, useState, useContext} from "react";
import { Visibility } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Axios from 'axios'
import "../cards/Card.css";
import "../tables/Tables.css";
import "../Dashboard.css"
import "./Translation.css"
import UserContext from "../../../contexts/UserContext";



const Translation = () => {
  const {userId} = useContext(UserContext)
  const [baseProjects, setBaseProjects] = useState()
  const [assignedPages, setAssignedPages] = useState()
  
  useEffect(() => {
    Axios
    .get(`https://wdys.herokuapp.com/translation/${userId}`, {headers: {'Content-Type':'application/json'}})
    .then((res) => { 
      console.log(res.data.baseprojects);
      console.log(res.data.assignedPages)
      setBaseProjects(res.data.baseprojects);
      setAssignedPages(res.data.assignedPages)
    })
    .catch((err) => console.log(err))
  }, [userId]);



  return (
    <>
    {assignedPages && baseProjects &&
    <div className="body-translation">
      <div>
        <div className="title-gray">
            Assigned Projects
        </div>
        <div className="assigned-proj-TR header table-grid">
          <div>Project Name</div>
          <div>Base language</div>
          <div>Deadline</div>
          <div>View</div>
        </div>
        {assignedPages.map((item) => (
          <div className="assigned-proj-TR table-grid" key={item.projectname}>
            <div>{item.projectname}</div>
            <div>{item.baselang}</div>
            <div>{item.deadline}</div>
            <div className="center">
              <Visibility />
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className="title-gray">
            Page Details
        </div>
        <div className="card-translation ">
          <div className="card-top green-bg">
             Page Name
          </div>
          <div className="card-bottom ">
            <div className="page-info mt0">
              Translate form:<strong> BASELANG</strong>
            </div>
            <div className="page-info">
              To:<strong> TRANSLATION LANG</strong>
            </div>
            <div className="page-info">
              Assigned on: <strong>ASSIGNED DATE</strong>
            </div>
            <div className="page-info">           
              Due by: <strong>DATE DATE </strong>
            </div>
            <div className="page-info">
              Link: <a className="green" href="DATA:PAGE_URL" alt="GIVE ME A NAME"><strong> PAGE URL</strong></a>
            </div>
            <div className="page-info">
              Status: <strong>STATUS</strong>
            </div>
            <div className="page-info">
              Descritpion
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </p>
            </div>
            <div className="center">
              <Link to={``}>
                <button className="blue action ">REVIEW</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    }
  </>
  );
};

export default Translation;