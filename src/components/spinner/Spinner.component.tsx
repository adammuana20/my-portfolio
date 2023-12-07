import './Spinner.styles.scss'

const Spinner = () => {
    return (
        <div className="spinner-overlay" data-testid='spinner'>
            <div className="spinner-container"></div>
        </div>
    )
}


export default Spinner