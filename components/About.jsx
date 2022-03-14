import React from 'react';
import { Link ,Outlet ,useParams ,NavLink , useNavigate, useLocation} from 'react-router-dom';



const About = () => {
  return (
    <div>
        <h1>About</h1>
        <Link className='btn btn-primary m-3' to="/about/courses">Courses</Link>
        <Link className='btn btn-success' to="/about/bundle">Bundle</Link>
        <Outlet />
    </div>
  )
};

const Courses =()=>{

  const routeList = ["anil","anuska","hari","susila"];
  const popRoute = routeList[Math.floor(Math.random() * routeList.length)]
  return(
    <>
      <div>
        <h1>This is Courses of the links</h1>
        <NavLink className='btn btn-danger' style={({isActive})=>{
          return{
            backgroundColor : isActive ? "red" : "purple"
          }
        }} to={`/about/courses/${popRoute}`} >{popRoute}</NavLink>
        <NavLink className='btn btn-light' to={`/about/courses/test`} >Test</NavLink>
        <Outlet />
      </div>
    </>
  )
}

const Bundle =()=>{
  return(
    <>
    <div>
      <h1>This is Bundle of the links</h1>
    </div>
    </>
  )
}

const CourseId = () => {
  const navigate = useNavigate();
  const {courseId} = useParams();
  return(
    <div>
      <h1>The URL element in courses is {courseId}</h1>
      <button 
      onClick={()=>{
        navigate("/dashboard", {state : "399"});
      }}
      className='btn btn-success' >Price</button> 
      <Link to='/dashboard' state={"DJANGO"}>Test Link</Link>
    </div>
  )
}

const DashBoard =()=>{
  const location = useLocation();
  return(
    <>
    <div>
      <h1>This is the dashboard carrying all information {location.state}</h1>
    </div>
    </>
  )
}

export {About , Courses , Bundle, CourseId , DashBoard}