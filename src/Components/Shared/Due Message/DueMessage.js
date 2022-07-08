import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';

const DueMessage = () => {

    const [student, setStudent] = useState([]);
    const [user, loading] = useAuthState(auth);
    const [date, setDate] = useState(new Date());
    const formattedDate = format(date, 'PP');

    let myArray = formattedDate.split(' ');
    console.log(myArray);

    let newDate = myArray[1][0], leapYear = parseInt(myArray[2]);
    if (myArray[1].length > 2) {
        newDate += myArray[1][1];
    }

    newDate = parseInt(newDate);

    let monthLimit;
    if (myArray[0] === 'Jan') monthLimit = 31;
    else if (myArray[0] === 'Feb') monthLimit = 28;
    else if (myArray[0] === 'Mar') monthLimit = 31;
    else if (myArray[0] === 'Apr') monthLimit = 30;
    else if (myArray[0] === 'May') monthLimit = 31;
    else if (myArray[0] === 'Jun') monthLimit = 30;
    else if (myArray[0] === 'Jul') monthLimit = 31;
    else if (myArray[0] === 'Aug') monthLimit = 31;
    else if (myArray[0] === 'Sep') monthLimit = 30;
    else if (myArray[0] === 'Oct') monthLimit = 31;
    else if (myArray[0] === 'Nov') monthLimit = 30;
    else if (myArray[0] === 'Dec') monthLimit = 31;

    if ((0 === leapYear % 4) && (0 !== leapYear % 100) || (0 === leapYear % 400)) {
        monthLimit = 29;
    }

    console.log(newDate, monthLimit);

    useEffect(() => {
        fetch(`https://infinite-cliffs-52841.herokuapp.com/students?email=${user?.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${sessionStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setStudent(data))
    }, [user])

    if (loading) return;

    return (
        <div>
            {
                ((student[0]?.due === 1 && user) && (newDate >= 15 && newDate <= monthLimit)) && <p className='text-danger fw-bold'>
                    You have a due of this month. <br /> If you already paid please contact NTH support. <br /> Thank you for being with us.
                </p>
            }
            {
                (student[0]?.due === 2 && user) && <p className='text-danger fw-bold'>
                    Seems like you have'nt paid last month. <br />You will lose access from {myArray[0]} 14.
                </p>
            }
        </div>
    );
};

export default DueMessage;