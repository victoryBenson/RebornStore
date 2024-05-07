import { Puff, Rings, RotatingSquare } from "react-loader-spinner"

export const Explore = () =>  {
       return (
        <Rings
            visible={true}
            height="40"
            width="40"
            color="#FFFFF0"
            wrapperStyle={{}}
    /> ) 
}

export const NotfoundGif = () => {
    return (
        <RotatingSquare
          visible={true}
          height="100"
          width="100"
          color="#45382c"
          />
    )
}