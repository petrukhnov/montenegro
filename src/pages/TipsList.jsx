import { BasicPage } from "../components/BasicPage";
import Settings from "@mui/icons-material/Settings";

export const TipsListPage = () =>{
return (
        <div className="content" style={{border: "1px solid green"}}>

            <div className="collectionCard">
                <h1>Airport
                -------------</h1>
                <h3>-Wash hands</h3>
                <h3>-Wait security</h3>
                <h3>-Drink water</h3>
            </div>
            <div className="collectionCard" >
                <h1>Minecraft
                -----------------</h1>
                <h3>-Do not dig under yourself</h3>
                <h3>-Loot every village you can</h3>
                <h3>-Watch the tutorials</h3>
                <h3>-Approaches creepers</h3>
            </div>
            <div className="collectionCard" >
                <h1>CS:Go
                -----------------</h1>
                <h3>-Squat when you shoot</h3>
                <h3>-Don't buy skins when you're at level 1</h3>
                <h3>-When you play, look at the map</h3>
            </div>
            <div className="collectionCard" >
                            <h1>Hay Day
                            -----------------</h1>
                            <h3>-Help others when they need help</h3>
                            <h3>-Sell things you don't need</h3>
                            <h3>-Buy things from Greg</h3>
                        </div>
        </div>



    );
}
