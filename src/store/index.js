import { createStore } from "vuex";
import control from "../modules/controlReptiles/store";
export default createStore({
  modules: {
    control,
  },
});
