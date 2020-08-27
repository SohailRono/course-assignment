import React, { useState } from 'react';
import fakeData from '../../FakeData';
import Course from '../Courses/Course';
import Cart from '../Cart/Cart';


const MainCourse = () => {
    const [courses, setCourses] = useState(fakeData);
    const [cart, setCart] = useState([]);

    const handleEnollNow = (course) => {
        const newCart = [...cart,course];
        setCart(newCart);
    }

    const style = {
        
    }

    return (
        <div className="row container-fluid ">
            <div className="col-md-10 border-right border-warning">
                {
                    courses.map(course => <Course course={course} handleEnollNow={handleEnollNow}></Course>)
                }
            </div>
            <div className="col-md-2 m-3" style={{color: "red", position:"fixed", right:"0%"}}>
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default MainCourse;