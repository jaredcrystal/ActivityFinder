var Login = React.createClass({
    getInitialState: function(){
        return {
            keyWords: [],
            priceMin: 0, 
            priceMax: Infinity,
            sort: "popularity"
        };
    },

    handleTextFilter: function(){
        this.setState({
            keyWords: this.refs.filterText.value.split(', ')
        })
    },

    handlePriceMin: function(){
        this.setState({
            priceMin: this.refs.priceMin.value
        })
    },

    handlePriceMax: function(){
        this.setState({
            priceMax: this.refs.priceMax.value
        })
    },

    handleSort: function(){
        this.setState({
            sort: this.refs.sort.value
        })
    },

    clear: function(){
        this.setState({
            keyWords: [],
            priceMin: 0, 
            priceMax: Infinity,
            sort: "popularity"
        })
        this.refs.filterText.value = ""
        this.refs.priceMin.value = ""
        this.refs.priceMax.value = ""
        this.refs.sort.value = "popularity"
    },

  render: function(){
    return (
        <div id="wrapper">
        <div id="sidebar-wrapper">
            <ul className="sidebar-nav">
                <li className="sidebar-brand">
                        Filters
                </li>
                <hr/>
                <li>
                    <table><tbody><tr>
                    <td>
                    <button onClick={this.clear}>Clear Filters</button>
                    </td><td>&nbsp;</td><td>
                    Sort by:
                    <select ref="sort" onChange={this.handleSort}>
                      <option value="popularity">Popularity</option>
                      <option value="price">Price</option>
                    </select>
                    </td>
                    </tr></tbody></table>
                </li>
                <hr/>
                <li>
                    <p>Key words</p>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="e.g. outdoors, date, cheap, winter" 
                        ref="filterText"
                        onChange={this.handleTextFilter}/>
                </li>
                <hr/>
                <li>
                    <p>Price Range</p>
                    <p>
                    $<input 
                        type="text" 
                        size="5" 
                        placeholder="0" 
                        ref="priceMin"
                        onChange={this.handlePriceMin}/>

                     &nbsp;-&nbsp; 

                    $<input 
                        type="text" 
                        size="5" 
                        placeholder="10" 
                        ref="priceMax"
                        onChange={this.handlePriceMax}/>
                    </p>
                </li>
                <hr/>
                <li>
                    <p>Distance</p>
                    <p>
                    <input type="text" size="5" placeholder="15" />
                    &nbsp;miles
                    </p>
                </li>
            </ul>
        </div>

        <div id="page-content-wrapper">
            <div className="container-fluid">
                <div className="row">
                    <div id="none" className="col-lg-12">
                        <h1>Welcome to Activity Finder</h1>
                        <p>Use the filters on the left to find the perfect activity! Or, browse some of our top rated activities:</p>
                        <br/><br/>
                    </div>
                </div>
            </div>
            <ActivityList 
                data={DATA} 
                keyWords={this.state.keyWords} 
                priceMin={this.state.priceMin} 
                priceMax={this.state.priceMax}
                sort={this.state.sort}/>
        </div>

    </div>

      );
  }
})

module.exports = Login;