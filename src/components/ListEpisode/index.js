import axios from "axios";
import { useEffect, useState } from "react";

const ListEpisode = ({ episode }) => {
  const [state, setState] = useState();
  useEffect(() => {
    const getData = async () => {
      await axios.get(episode).then((data) => {
        setState(data.data);
      });
    };
    getData();
  }, [episode]);
  return (
    <div className="episode">
      <p>
        Nº {state && state.id} - {state && state.name}
      </p>
    </div>
  );
};

export default ListEpisode;
