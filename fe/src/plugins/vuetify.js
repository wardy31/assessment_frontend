import "material-design-icons-iconfont/dist/material-design-icons.css";
import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "md",
  },
  theme: {
    themes: {
      light: {
        primary: "#AF3033",
        secondary: "#F8F8F8",
        accent: "#6C6C6C",
        error: "#b71c1c",
      },
    },
  },
});
