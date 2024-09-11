"use client"

import AudioPlay from "@/components/AudioPlay";
import Question from "@/components/Question";
import Question1 from "@/components/Question1";
import Question2 from "@/components/Question2";
import Question3 from "@/components/Question3";
import Question4 from "@/components/Question4";
import Question5 from "@/components/Question5";
import { expression } from "@/data/expression";
import Image from "next/image";
import { Fragment, useEffect, useRef, useState } from "react";
// import palagi from "@/public/assets/musics/palagi.mp3"



export default function Home() {

  const [questionIndex, setQuestionIndex] = useState<number>(0)
  const [isPlay, setIsPlay] = useState<boolean>(false)

  const sections = [
    <Question1 
      setIsPlay={setIsPlay}
      setQuestionIndex={setQuestionIndex}
    />,
    <Question2
      setQuestionIndex={setQuestionIndex}
    />,
    <Question3
      setQuestionIndex={setQuestionIndex}
    />,
    <Question4
      setQuestionIndex={setQuestionIndex}
    />,
    <Question5
      setQuestionIndex={setQuestionIndex}
    />
  ]

  

  return (
    <div>
      <AudioPlay isPlay={isPlay} />
      {sections[questionIndex]}
    </div>
  );
}
