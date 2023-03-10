// import jokes from "./jokes.json" assert { type: "json" };
// console.log(jokes);

// export default jokes;
import Sentiment from "sentiment";
const sentiment = new Sentiment();

async function getJoke(){
    //const URL = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religous,political,racist,sexist,explicit"
    const response = await fetch(URL);
    const result = await response.json();

    const jokeToAnalyze = result.joke || `${result.setup} ${result.delivery}`;
    const { score } = sentiment.analyze(jokeToAnalyze);
    if(score < 0){
        return await getJoke();
    }
    return result;
}


//getJoke();

export default {
    getJoke
};