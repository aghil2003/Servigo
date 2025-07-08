// import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "./Authslice";

// const store = configureStore({
//   reducer: {
//     auth: authReducer,
//   },
// });

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Authslice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// ✅ These are the recommended types for use in components
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
