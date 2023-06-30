import React, { useEffect} from "react";
import style from "./NotFound.module.css"
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";


function Error404(props) {

    const navigate = useNavigate();

        useEffect(() => {
        navigate('/notFound');
    }, [navigate]);

    return(
        <div className={style.errorBox}>
            <div className={style.errorImageBox}>
                <p>4</p>
                <img className={style.errorImage} src="https://staticdelivery.nexusmods.com/mods/1151/images/528-0-1447526230.png" alt="" />
                <p>4</p>
            </div>
            <div className={style.errorTextBox}>
                <h3 >Page not found</h3>
                <p>The page you are looking doesn´t exist or another error has occured</p>
                <Link className={style.errorLink} to={'/home'}><button><FontAwesomeIcon icon={faArrowLeft} />  Go back Home</button></Link>
            </div>
            
        </div>
    )
}

export default Error404;