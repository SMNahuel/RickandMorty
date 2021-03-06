import axios from "axios";
import {
  FIRST_REQUEST_LOCATION,
  NEXT_LOCATION,
  REQUEST_TO_RESIDENTS,
} from "store/actionCreator";

export const requestTo = async (dispatch, reisdents) => {
  await axios.get(reisdents).then((data) => {
    dispatch(NEXT_LOCATION(data));
  });
};

export const firstRequest = async (dispatch) => {
  axios.get("https://rickandmortyapi.com/api/location").then((data) => {
    dispatch(FIRST_REQUEST_LOCATION(data));
  });
};

export const requestResidents = async (dispatch, residents, navigate) => {
  const result = [];
  residents.map(async (resident) => {
    await axios.get(resident).then(({ data }) => {
      result.push(data);
    });
  });
  dispatch(REQUEST_TO_RESIDENTS(result));
  setTimeout(function () {
    navigate("/locations/residents");
  }, 3000);
};

export const filterGender = (residents, gender) => {
  let newContainer = residents.filter((resident) => {
   return resident.gender.toLowerCase() === gender;
  });
  return newContainer;
};

export const filterStatus = (residents, status) => {
  let newContainer = residents.filter((resident) => {
   return resident.status.toLowerCase() === status;
  });
  return newContainer;
};

export const filterGenderStatus = (residents, gender, status) => {
  let newContainer = residents.filter((resident) => {
    return resident.status.toLowerCase() === status && resident.gender.toLowerCase() === gender;
   });
   return newContainer;
};
