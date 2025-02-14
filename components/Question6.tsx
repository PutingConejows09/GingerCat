import { expression } from "@/data/expression";
import { Fragment, useState } from "react";

interface Props {
    setQuestionIndex: any
}
export default function Question6 (props: Props) {

    const { setQuestionIndex } = props
    const [isHovered, setIsHovered] = useState(false);

    const [data, setData] = useState<any>(
        {
            currExpression: expression.shy_cute,
            showNextButton: false,
            answer: ""

        }
    )


    const handleButton = (answer:string, part: "right" | "left") => {

        if(part == "right") {
            setQuestionIndex((curr:number) => curr+1)
        } else {
            setData((curr:any) => (
                {
                    ...curr,
                    currExpression: expression.wow,
                    showNextButton: true,
                    answer: answer
    
                }
            ))
        }

    }
    return (
        <Fragment>
            <div className="max-w-[500px] flex flex-col items-center m-auto mt-20">
            <img src={data.currExpression} width={200}/>
            <p className="text-3xl font-semibold text-center">{"Gusto ko sanang ituloy yung sa Enchanted Kingdom natin ng February 14 kung ok lang, kung hindi naman, baka pwede kitang mailabas and magpunta tayo sa preferred place mo. Gusto lang talaga kitang kausapin. :>"}</p>
            <br></br>
            <p className="text-2xl font-semibold text-center">Your Answer: {data?.answer}</p>
            <br></br>
            <br></br>
            <div className="flex gap-4">
                <button onClick={() => handleButton("Oo naman sure na sure", "left")} className={`${data.showNextButton? "hidden": "block"}`}>Oo naman sure na sure</button>
                <button 
                    onClick={() => 
                    handleButton("Ayaw ko", "right")} 
                    className={`${data.showNextButton? "hidden": "block"}`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    Ayaw ko
                </button>
                <button onClick={() => setQuestionIndex((curr:number) => curr+2)} className={`${data.showNextButton? "block": "hidden"}`}>Next</button>
            </div>
            </div>
      </Fragment>
    )
}