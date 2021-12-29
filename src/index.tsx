import ReactDOM from "react-dom";
import { ChildAsFC } from "./props/Child";

const App = () => {
	return (
		<div>
			<h1>Hi there!</h1>
			<ChildAsFC color="white" onClick={() => console.log("click")} />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
