import './Cardds.css';
import Button from 'react-bootstrap/Button';


function Cardds(props) {

  return (
    <>
     <div className="ag-format-container">
  <div className="ag-courses_box">
    <div className="ag-courses_item">
      <div className="ag-courses-item_link">
        <div className="ag-courses-item_bg" />
        <div className="ag-courses-item_title">
        <h3>{props.agesubject}</h3>
        <div style={{ flex: 1, backgroundColor: "#FFF", height: "2px" }} />
        <h6>{props.agentdescription}</h6>
        </div>
        <div className="ag-courses-item_date-box">
         {/* <h6>{props.agentdescription}</h6> */}
         <div style={{ flex: 1, backgroundColor: "#FFF", height: "2px" }} />
          <span className="ag-courses-item_date"><h6>Status: {props.agestatus}</h6>
          <h6>Employee Comment : {props.employeecomment}</h6>
         <h6>Priority: {props.agepriority}</h6></span>
        </div>
        </div>
    </div>
  </div>
</div>

    </>
  )
}


export default Cardds;



