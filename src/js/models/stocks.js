function GetStockData() {
    
    this.apiBaseUrl = "https://www.alphavantage.co/query";
    this.apiKey = "T9R9QKXQGBWI6XO3";
    this.apiFunction = "GLOBAL_QUOTE";

    this.init = function () {
        const result = this.query('https://www.alphavantage.co/query?function=Global_Quote&symbol=IBM&apikey=T9R9QKXQGBWI6XO3')
        return result;
    }

    this.query= async function(url){
        const req = await fetch(url);
        const res = await req.json();
        return res;
     }

    //waits for user input (symbol), then creates new url using the base url and parameters
    //returns the JSON object
    this.search = async function (symbol) {
        let url = new URL(this.apiBaseUrl + "?");

        const params = new URLSearchParams();
        params.set("symbol", symbol);
        params.set("function",this.apiFunction)
        params.set("apikey", this.apiKey);

    
        url = url + params;

        const req = await fetch(url);
        const res = await req.json();

        // console.log(url)
        // console.log(res["Global Quote"]["01. symbol"])
        return res["Global Quote"];
    }
    return this;
}

export default GetStockData