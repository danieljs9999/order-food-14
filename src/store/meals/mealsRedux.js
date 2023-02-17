export const mealsActionTypes = {
  GET_MEALS_SUCCESS: "GET_MEALS_SUCCESS",
  GET_MEALS_STARTED: "GET_MEALS_STARTED",
  GET_MEALS_FAILED: "GET_MEALS_FAILED",
};

const initialState = {
  meals: [],
  isLoading: false,
};

export const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case mealsActionTypes.GET_MEALS_STARTED:
      return {
        ...state,
        isLoading: true,
      };

    case mealsActionTypes.GET_MEALS_SUCCESS:
      return {
        ...state,
        meals: action.payload,
        isLoading: false,
      };

    case mealsActionTypes.GET_MEALS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
