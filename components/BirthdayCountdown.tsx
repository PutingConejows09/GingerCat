import { expression } from "@/data/expression";
import dayjs from "dayjs"
import { useEffect, useState } from "react";
import Footer from "./Footer";

export default function BirthdayCountdown() {

    const [dateCountDown, setDateCountDown] = useState<any>(
        {
            hours:0,
            mins:0,
            sec:0
        }
    )


    useEffect(() => {
        setInterval(() => {
            if(!checkBirthdate()){
                countDown()
            }

        },1000)
    },[])

    const countDown = () => {
        const today = dayjs()
        const birthdate = dayjs('2025-02-10')
    
        const differenceInSec = birthdate.diff(today, 'second');
        const hours = Math.floor(differenceInSec / 3600);
        const mins = Math.floor((differenceInSec % 3600) / 60);
        const sec = differenceInSec % 60;

        setDateCountDown((curr:any) => (
            {
                hours: hours,
                mins: mins,
                sec:sec
            }
        ))
    }

    const checkBirthdate = () => {

        const birthdate = dayjs('2025-02-10')
        const today = dayjs().startOf('day');
        const isToday = today.isSame(birthdate, 'day');

        return isToday
    }

    return (
        <div>
            <div className="mt-10">
                {
                    checkBirthdate() 

                    ? <div>
                        <img src={expression.happy_birthday} className="m-auto" height={100}/>
                        <h1 className="text-center text-3xl font-bold">Happy Birthday my one and only Jemjem Rosell Ramirez - Pagaduan!!!</h1>
                     </div>

                    : <div>
                        <img src={expression.birthday_countdown} className="m-auto" height={100}/>
                        <h1 className="text-center text-3xl">Birthday Countdown</h1>
                        <h1 className="text-center text-3xl font-bold">{dateCountDown.hours} hr/s  {dateCountDown.mins} min/s {dateCountDown.sec} s</h1>
                     </div>
                }
                
            </div>   
            <Footer /> 
        </div>
    )
}