import GetStockData from "./models/stocks.js"
import ResultsView from "./views/stocks-view.js"
import SearchController from "./controllers/stocks-controller.js"

window.addEventListener('load',function(e){

    const model = new GetStockData();
    const view = new ResultsView();
    const controller = new SearchController(model,view);
    controller.configUI();
})
