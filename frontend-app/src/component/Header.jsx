import { Link } from "react-router"

export const Header = () =>{

    return(
        <>
        <h2 className="font-bold underline bg-red-300"> header page</h2>

        <Link to={'/about'} >about</Link>
       


        </>
    )
}