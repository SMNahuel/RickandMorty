import { connect, useDispatch } from "react-redux";
import {
  SELECT_FILTER_GENDER,
  SELECT_FILTER_STATUS,
  CLEAR_FILTER,
} from "store/actionCreator";

const Filter = ({ gender, status }) => {
  const dispatch = useDispatch();

  const handleFiltergGender = (e) => {
    const { id } = e.target;
    dispatch(SELECT_FILTER_GENDER(id));
  };
  const handleFilterStatus = (e) => {
    const { id } = e.target;
    dispatch(SELECT_FILTER_STATUS(id));
  };

  const handleClear = () => {
    dispatch(CLEAR_FILTER());
  };
  return (
    <div className="containerFilter">
      <div className="column">
        <p>Filtros</p>
        <div className="row">
          <div className="column">
            <p>Por genero</p>
            <div className="row">
              {gender === "male" ? (
                <button
                  onClick={(e) => handleFiltergGender(e)}
                  className="buttonPageActive"
                  id="male"
                >
                  Hombre
                </button>
              ) : (
                <button
                  onClick={(e) => handleFiltergGender(e)}
                  className="buttonPage"
                  id="male"
                >
                  Hombre
                </button>
              )}

              {gender === "female" ? (
                <button
                  onClick={(e) => handleFiltergGender(e)}
                  className="buttonPageActive"
                  id="female"
                >
                  Mujer
                </button>
              ) : (
                <button
                  onClick={(e) => handleFiltergGender(e)}
                  className="buttonPage"
                  id="female"
                >
                  Mujer
                </button>
              )}
              {gender === "unknown" ? (
                <button
                  onClick={(e) => handleFiltergGender(e)}
                  className="buttonPageActive"
                  id="unknown"
                >
                  Desconocidos
                </button>
              ) : (
                <button
                  onClick={(e) => handleFiltergGender(e)}
                  className="buttonPage"
                  id="unknown"
                >
                  Desconocidos
                </button>
              )}
            </div>
          </div>
          <div className="column">
            <p>Por estado</p>
            <div className="row">
              {status === "alive" ? (
                <button
                  onClick={(e) => handleFilterStatus(e)}
                  className="buttonPageActive"
                  id="alive"
                >
                  Vivo
                </button>
              ) : (
                <button
                  onClick={(e) => handleFilterStatus(e)}
                  className="buttonPage"
                  id="alive"
                >
                  Vivo
                </button>
              )}
              {status === "dead" ? (
                <button
                  onClick={(e) => handleFilterStatus(e)}
                  className="buttonPageActive"
                  id="dead"
                >
                  Muerto
                </button>
              ) : (
                <button
                  onClick={(e) => handleFilterStatus(e)}
                  className="buttonPage"
                  id="dead"
                >
                  Muerto
                </button>
              )}
              {status === "unknown" ? (
                <button
                  onClick={(e) => handleFilterStatus(e)}
                  className="buttonPageActive"
                  id="unknown"
                >
                  Desconocidos
                </button>
              ) : (
                <button
                  onClick={(e) => handleFilterStatus(e)}
                  className="buttonPage"
                  id="unknown"
                >
                  Desconocidos
                </button>
              )}
              <button
                onClick={() => handleClear()}
                className="buttonPage"
                
              >
                Sin filtros
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    gender: state.gender,
    status: state.status,
  };
};

export default connect(mapStateToProps)(Filter);
