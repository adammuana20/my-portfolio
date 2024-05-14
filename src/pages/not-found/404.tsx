import Button from "../../components/button/Button.component";
import { IoHomeOutline } from "react-icons/io5";

import './404.styles.scss'

const NotFound = () => {
    return (
        <div className='not-found-container'>
            <div className='content'>
                <div className='content-title'>
                    Oops! Something went wrong!
                </div>
                <div className='content-description'>
                    The page you were looking is not found!
                </div>
            </div>
            <div className='w-48 mt-4'>
            <Button
                label={`Return to Home`}
                iconSVG={IoHomeOutline}
                buttoncolor={'main-btn'}
                iconcolor={`#fff`}
                link={`/`}
            />
            </div>
        </div>
    )
}

export default NotFound