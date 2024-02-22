import {fas} from "@fortawesome/free-solid-svg-icons";
import {library} from "@fortawesome/fontawesome-svg-core";

import {Sidebar} from "./components/Sidebar";

library.add(fas);

const App = () => {
    return (
        <Sidebar/>
    )
}

export default App;
