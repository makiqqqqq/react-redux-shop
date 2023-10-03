import Router from "@/components/Router";
import store from "@/store";
import { Suspense } from "react";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <Router />
      </Suspense>
    </Provider>
  );
}

export default App;
