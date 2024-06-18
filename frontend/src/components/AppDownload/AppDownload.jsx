import { assets } from "../../assets/assets";
import "./AppDownload.css";

function AppDownload() {
	return (
		<div className="app-download" id="app-download">
			<p>
				For better experience <br /> Tomato App{" "}
			</p>

			<div className="app-download-platform">
				<img src={assets.play_store} alt="" />
				<img src={assets.app_store} alt="" />
			</div>
		</div>
	);
}

export default AppDownload;
