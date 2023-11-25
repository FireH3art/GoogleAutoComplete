import moment from "moment";

export const ADDHISTORY = 'ADDHISTORY';
export const SHOWHISTORY='SHOWHISTORY';

export const AddHistory = (data) => {
    return async (dispatch) => {
        data.searchTime=moment().format('MMMM Do YYYY h:mm:ss a');
        dispatch({ type: ADDHISTORY, info: data });
    }
}

export const ShowHistory = (data) => {
    return async (dispatch) => {
        dispatch({ type: SHOWHISTORY, info: data });
    }
}