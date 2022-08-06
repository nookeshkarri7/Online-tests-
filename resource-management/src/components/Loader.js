import { Puff } from 'react-loader-spinner'
import { LoaderDiv } from './StyledComponents'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function Loader() {
    return (<LoaderDiv>
        <Puff
            height="80"
            width="80"
            radisu={1}
            color="#4fa94d"
            ariaLabel="puff-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        /></LoaderDiv>
    )
}
