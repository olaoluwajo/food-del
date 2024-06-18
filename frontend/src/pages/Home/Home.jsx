import { useState } from "react";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import Hero from "../../components/Hero/Hero";
import "./Home.css";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";

function Home() {
	const [category, setCategory] = useState("All");

	return (
		<div>
			<Hero />
			<ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} setCategory={setCategory} />
      <AppDownload />
		</div>
	);
}

export default Home;
