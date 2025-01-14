import { useEffect, useRef, useState } from "react";

interface Props {
    isPlay: boolean
}
export default function AudioPlay(props:Props) {

    const isPlay = props

    const [currMusicIndex, setCurrMusicIndex] = useState<number>(0)
    const musics = [    
        "assets/musics/Ikaw at ako.mp3"
    ]


    const audioRef = useRef<any>(null);

    useEffect(() => {
        if(isPlay) {
            if (audioRef.current) {
                audioRef.current.play().catch((error:any) => {
                    console.error('Error attempting to play audio:', error);
                });
            }
        }
    },[isPlay])

    // const handlePlayAudio = () => {
    //     if (audioRef.current) {
    //         audioRef.current.play().catch((error:any) => {
    //             console.error('Error attempting to play audio:', error);
    //         });
    //     }
    // };

    const handleTrackEnd = () => {
        if (audioRef.current) {
        const nextTrackIndex = (currMusicIndex + 1) % musics.length;
        setCurrMusicIndex(nextTrackIndex);
        }
    };

    useEffect(() => {
        const audioElement = audioRef.current;
        if (audioElement) {
        audioElement.addEventListener('ended', handleTrackEnd);
        return () => {
            audioElement.removeEventListener('ended', handleTrackEnd);
        };
        }
    }, [currMusicIndex]);
    return (
        <audio 
            ref={audioRef}
            src={musics[currMusicIndex]} 
            autoPlay 
        />
    )
}