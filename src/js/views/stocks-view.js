import ejs from "ejs";

//template for displaying the results of the query
const resultsView = `
<aside>
    <h2>Stock Ticker Info for <span class="ticker"><%=data["01. symbol"]%></span></h2>
    <p>Symbol: <span class="info"><%=data["01. symbol"]%></span><p>
    <p>Current Price: <span class="info"><%=data["05. price"]%></span> on <span class="info"><%=data["07. latest trading day"]%></span></p>
    <p>Previous Close Price: <span class="info"><%=data["08. previous close"]%></span></p>
</aside>
`

//template when user input returns undefined or empty
const noResultsView = `
<aside>
    <h3> There are no results matching this search!</h3>
</aside>
`
//function that adds the templates to the DOM
function ResultsView() {
    //targets the div that will show the results
    this.view = document.querySelector(".insert-here");
    
    //displays the results using user input
    this.showView = function(data) {
        //removeChildElement() clears the container ("aside")
        this.removeChildElements();
        data.then((data) =>{
            console.log(data)
        
            //checks if user input is valid, or if the result doesn't return an object
            if(data == null || data == undefined || data == "" || Object.keys(data).length == 0){
                this.removeChildElements();
                const elem = ejs.render(noResultsView);
                this.view.insertAdjacentHTML("afterbegin", elem);
            }
            else
            {
                // this.view.insertAdjacentHTML("afterbegin", elem);
                this.showResult(data);
            }
        })
    }

    this.showResult = function(data){
        this.removeChildElements();
        const elem = ejs.render(resultsView, {data:data})
        this.view.insertAdjacentHTML("afterbegin", elem);
    }

    //clear page function
    this.removeChildElements = function (){
        this.view.querySelectorAll("aside").forEach(item => {
            this.view.removeChild(item);
        })
    }
    return this
}

export default ResultsView