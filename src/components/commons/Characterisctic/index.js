import './style.scss';

const Characterisctic = ({label, contentText, cap}) => {
    return ( 
        <div className="characteristic">
            <span className="label">{label}</span>
            <span className={cap ? "content-text cap" : "content-text"}>{contentText}</span>
        </div>
     );
}
 
export default Characterisctic;