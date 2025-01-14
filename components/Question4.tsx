import { expression } from "@/data/expression";
import { Fragment, useState } from "react";

interface Props {
    setQuestionIndex: any
}
export default function Question4 (props: Props) {

    const { setQuestionIndex } = props
    const [isHovered, setIsHovered] = useState(false);

    const [data, setData] = useState<any>(
        {
            currExpression: expression.sad,
            showNextButton: false,
            answer: ""

        }
    )


    const handleButton = (answer:string) => {
        setData((curr:any) => (
            {
                ...curr,
                currExpression: expression.excited,
                showNextButton: true,
                answer: answer

            }
        ))
    }
    return (
        <Fragment>
            <div className="max-w-[500px] flex flex-col items-center m-auto mt-20">
            <img src={data.currExpression} width={200}/>
            <p className="text-3xl font-semibold text-center">Love,

Sana basahin mo, kahit ito lang. 

Sobrang pinagsisisihan ko lahat ng ginawa at nasabi ko sa’yo. Pinagsisisihan ko na nasaktan kita at ako ‘yung naging dahilan ng gabi gabi mong pagluha, hindi ito tulad ng ibang mensahe ko, na magmamakaawa sa’yong balikan ako at itigil mo ang mundong ginagalawan mo para lang sumabay sa agos ng mundong meron ako. 

Masakit palang isipin na hindi ko na makakasama sa paggising ko sa umaga ‘yung nakasama kong maglakad sa gitna ng ulan habang namimili ng mga gamit para sa bagong nilipatang bahay. Ang sakit sa dibdin isipin na imbes sa pagbabalat lang ng sibuyas tayo naluluha sa tuwing magkasama nating lulutuin ‘yung mga paborito nating ulam, ngayon lumuluha na rin tayo, pero hindi dahil sa pagkakaroon ng hiniwang sibuyas, kundi sa sakit na dulot ng paghihiwalay gawa ng sarili kong kasalanan. 

Gusto kong sabihin sa’yo, na humihingi ako ng tawad sa pagiging dahilan ng gabi gabing pagluha mo. Pangako, magiging mas malakas at mas matalino ako sa mga susunod pang mga panahon, kasi naniniwala ako na ako pa rin dapat ‘yung magpupunas ng luha mo. 

Pasensya ka na kung hindi kita kayang bitawan, hindi ko naman intensyon na masaktan ka, naging mahina ako sa paghawak ng mga problema. Akala ko kasi lahat madadaan ko sa mabilisang solusyon. 

Humihingi ako ng tawad sa pagiging dahilan para maramdaman mo ulit na mag isa ka na lang sa kwartong madilim, na sumisimbolo sa kawalan ng pag asa. Pangako, hindi mo man gusto na makita ako ulit, pero sana hayaan mo akong magdala ng liwanag at makakain para lang hindi ka mahirapang lumabas gawa ng nakakabulag na dilim at hindi ka mahirapang gumalaw gawa ng nakakasuklam na gutom. 

Pasensya ka na at humihingi na naman ako ng pasensya, patawarin mo ako at humihingi na naman ako ng tawad. Sa mga oras na nanghihina ka, pangako na magiging malakas ako para sa’yo. Hindi ito ang tamang panahon para ipakita sa’yo na panghihinaan ako ng loob. Gusto kong malaman mo na mas matimbang ‘yung pagmamahal na meron ako kaysa sa mga sugat at sakit na naidulot ko. 

Sorry, pasensya, patawad kung nararamdaman mong makulit ako. Sadyang hindi ko lang mapigilan na mahalin ka, kahit sa malayo. 

Patawarin mo ako, pero hindi ko kayang bitawan ‘yung taong kumapit sa akin nung walang wala ako. 

Tatanggapin ko lahat ng sakit na ibabato mo, hangga’t kaya ko, ipapakita ko sa’yong worth it kang ipaglaban, kahit sa mga panahong kahit ‘yung sarili mo hindi mo na kayang ipaglaban. Muli’t muli, mahal na mahal kita at hindi ko hahayaang maramdaman mo ulit na may mali at may kulang sa’yo. Hayaan mo lang akong ibigay ko ‘yung pagmamahal ko sa’yo. Hindi naman na ako mag-e-expect ng instant forgiveness, besides, ine-earn ‘yan at hindi binibigay basta basta. 

Muli’t muli, mahal na mahal kita. Sana mapatawad mo pa ako. </p>
            <br></br>
            <p className="text-2xl font-semibold text-center">Your Answer: {data?.answer}</p>
            <br></br>
            <br></br>
            <div className="flex gap-4">
                <button onClick={() => handleButton("Yes, I will forgive you IF ipapakita mong deserving ka")} className={`${data.showNextButton? "hidden": "block"}`}>Yes, I will forgive you IF ipapakita mong deserving ka</button>
                <button 
                    onClick={() => 
                    handleButton("Oo, please come back to me na :>")} 
                    className={`${data.showNextButton? "hidden": "block"}`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {isHovered? "Oo, please come back to me na :>": "Nope"}
                </button>
                <button onClick={() => setQuestionIndex((curr:number) => curr+1)} className={`${data.showNextButton? "block": "hidden"}`}>Next</button>
            </div>
            </div>
      </Fragment>
    )
}