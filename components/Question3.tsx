import { expression } from "@/data/expression";
import { Fragment, useState } from "react";

interface Props {
    setQuestionIndex: any
}
export default function Question3 (props: Props) {

    const { setQuestionIndex } = props
    const [isHovered, setIsHovered] = useState(false);

    const [data, setData] = useState<any>(
        {
            currExpression: expression.shy_cute,
            showNextButton: false,
            answer: ""

        }
    )


    const handleButton = (answer:string) => {

        const express:any = {
            "Oo Sobra": expression.sad,
            "Hmmm hindi naman": expression.yey
        }

        if(answer.toLowerCase() == "oo sobra") {
            setQuestionIndex((curr:number) => curr+1)
        }else {
            setData((curr:any) => (
                {
                    ...curr,
                    currExpression: express[answer],
                    showNextButton: answer.toLowerCase() == "hmmm hindi naman",
                    answer: answer
    
                }
            ))
        }
    }
    return (
        <Fragment>
            <div className="max-w-[500px] flex flex-col items-center m-auto mt-20">
            <img src={data.currExpression} width={200}/>
            <p className="text-3xl font-semibold text-center">I apologize for everything. Galit ka pa ba sa akin?</p>
            <br></br>
            <p className="text-2xl font-semibold text-center">Your Answer: {data?.answer}</p>
            <br></br>
            <br></br>
            <div className="flex gap-4">
                <button onClick={() => handleButton("Hmmm hindi naman")} className={`${data.answer.toLowerCase() == "hmmm hindi naman"? "hidden": "block"}`}>Hmmm hindi naman</button>
                <button 
                    onClick={() => 
                    handleButton("Oo sobra")} 
                    className={`${data.answer.toLowerCase() == "hmmm hindi naman"? "hidden": "block"}`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    Oo sobra
                </button>
                <button onClick={() => setQuestionIndex((curr:number) => curr+2)} className={`${data.showNextButton? "block": "hidden"}`}>Next</button>
            </div>
            </div>
      </Fragment>
    )
}