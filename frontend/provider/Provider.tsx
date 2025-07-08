// "use client";

// import { Provider } from "react-redux";
// import  store  from "../redux/store";


// export default function Providers({ children }: { children: React.ReactNode }) {
//   return (
//     <Provider>
//   <ThemeProvider>
//     {children}
//   </ThemeProvider>
// </Provider>

    
//   );
// }

// <Provider store={store}>
    //     {children}
    // </Provider>

    "use client";

import { Provider } from "react-redux";
import store from "../redux/store";
import { ThemeProvider } from "@/components/userdashboard/theme-provider"; // make sure this is imported

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </Provider>
  );
}
