import {LoginPage} from "../app/login/login.page";
import {ListPrmPage} from "./modules/gestionParcModule/prm/listPrm/listPrm.page";

// The page the user lands on after opening the app and without a session
export const FirstRunPage = LoginPage;

// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
export const MainPage = "listPrm";

