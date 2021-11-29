import axios from "axios";
import { NEXT_LOCATION } from "../store/actionCreator";


export const requestTo = async (dispatch, url) => {
  await axios.get(url)
  .then((data) => {
    dispatch(NEXT_LOCATION(data))
  });
};

