import css from "../Filter/Filter.module.css"
import PropTypes from 'prop-types';
const Filter=({value,onChange})=>{
    return(
        <div className={css.filter__box}>
            <label className={css.find} htmlFor="find">Find contacts by name</label>
            <input className={css.input} type="text" id="find" value={value} onChange={onChange}></input>
        </div>
    )
}
Filter.propTypes={
    value:PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired,
}
export default Filter