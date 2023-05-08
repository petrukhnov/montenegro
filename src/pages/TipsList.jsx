import { BasicPage } from "../components/BasicPage";
import Settings from "@mui/icons-material/Settings";

export const TipsListPage = () =>{

const cards = [
  {"title":"Airport", "tips":["Wash hands", "Wait security", "Drink water"]},
  {"title":"Minecraft", "tips":["Do not  dig under yourself", "Loot every village you can", "Watch the tutorials",
  "Approaches creepers"]},
  {"title":"CS:Go", "tips":["Squat when you shoot", "Don't buy skins when you're at level 1",
  "When you play look at the map"]},
  {"title":"Hay Day", "tips":["Help others when they need help", "Sell things you don't need",
    "Buy things from Greg"]},
  ];



return (
        <div className="content" style={{border: "1px solid green"}}>


            {cards.map(function(card){
                 return (
                 <div className="collectionCard">
                     <h1>{card.title} </h1>
                     <hr/>
                         {card.tips.map(function(tip) {
                           return (<h3>-{tip}</h3>)
                        })}
                 </div>
                 )
            })}
        </div>

    );
}
