function SearchController(model,view){
    this.model = model;
    this.view = view;

    //selects the form element
    this.configUI = function (){
        const form = document.querySelector("#the-form");
        form.addEventListener("submit", this.userSubmit)
    }

    //grabs user input
    this.userSubmit = (e) => {
        e.preventDefault();
        const symbol = e.currentTarget.stocksymbol.value.trim();
        const model = this.model.search(symbol);
        this.view.showView(model)
        // console.log(symbol)
    }
    return this
}

export default SearchController