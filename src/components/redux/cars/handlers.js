export const handleFulfilledCars = (state, { payload }) => {
  state.entities = payload;
};

export const handleFulfilled = state => {
  state.isLoading = false;
};

export const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

export const handleRejected = (state, { error }) => {
  state.isLoading = false;
  state.error = error.message;
};
