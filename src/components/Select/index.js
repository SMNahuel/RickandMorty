import { useDispatch } from 'react-redux';
import { SELECT_ESPECIES } from 'store/actionCreator';
import {Species} from '../../enum';

const Select = () => {
    const dispatch = useDispatch()

    const handleSelect = (e) => {
        dispatch(SELECT_ESPECIES(e.target.value))
    }
    
    return(
        <div className="containerSelect">
            <select className="selectSpecie" onChange={(e) => handleSelect(e)}>
                <option default value={null}>Selecciona una especie</option>
                {
                    Species.map((specie,index) => {
                        return <option key={index} value={specie.value}>{specie.name}</option>
                    })
                }
            </select>
        </div>
    )
}

export default Select;