import ReactDOM from "react-dom";
import { ChildAsFC } from "./props/Child";
import GuestList from "./state/GuestList";

const App = () => {
	return (
		<div>
			<GuestList />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
