"use client"

import AudioPlay from "@/components/AudioPlay";
import Question from "@/components/Question";
import Question1 from "@/components/Question1";
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
    />
  ]

  

  return (
    <div>
      <AudioPlay isPlay={isPlay} />
      {sections[questionIndex]}
    </div>
  );
}
