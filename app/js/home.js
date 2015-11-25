var ActivityList = require("./activityList.js");

var DATA = [
  {
    "title": "Nickel City", 
    "description": "Arcade games for a nickel! Great for a cheap date.",
    "price": "5.00", 
    "tags": ["cheap", "gaming", "arcade", "nickel", "date"], 
    "seasons": ["spring", "summer", "fall", "winter"], 
    "address": "1515 S State St, Orem, UT 84097",
    "creator": "alphaMale",
    "upvotes": "45",
    "comments" : [
      {
        "user": "Blue42",
        "comment": "Great Place! Had tons of fun here."
      },
      {
        "user": "Red5",
        "comment": "Some of the machines were broken. Overall great place."
      }
    ]
  },
  {
    "title": "Frisbee Golf", 
    "description": "Go to a park and pick targets to make a course.",
    "price": "0.00", 
    "tags": ["free", "utdoors", "frisbee", "golf"], 
    "seasons": ["spring", "summer", "fall"], 
    "address": "Any Park",
    "creator": "Blue42",
    "upvotes": "3",
    "comments": []
  },
  {
    "title": "Little Ceasars",
    "description": "Best cheap dinner option.",
    "price": "5.39",
    "tags": ["dinner", "cheap", "pizza", "party"],
    "season": ["spring", "summer", "fall", "winter"],
    "address": "434 N 900 EAST, PROVO, UT 84606",
    "creator": "Ceasar",
    "upvotes": "139",
    "comments": []
  }
];


var Home = React.createClass({
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
                    <button href="#">Clear Filters</button>
                    &nbsp; &nbsp; &nbsp;
                    <button href="#">Search</button>
                </li>
                <hr/>
                <li>
                    <p>Key words</p>
                    <input type="text" className="form-control" placeholder="e.g. outdoors, date, cheap" />
                </li>
                <hr/>
                <li>
                    <p>Price Range</p>
                    <p>
                    $<input type="text" size="5" placeholder="0" />
                     &nbsp;-&nbsp; 
                    $<input type="text" size="5" placeholder="10" />
                    </p>
                </li>
                <hr/>
                <li>
                    <p>Season</p>
                    <div className="checkbox">
                      <label><input type="checkbox" value=""/>Spring</label>
                      <label><input type="checkbox" value=""/>Summer</label>
                    </div>
                    <div className="checkbox">
                      <label><input type="checkbox" value=""/>Fall</label>
                      <label><input type="checkbox" value=""/>Winter</label>
                    </div>
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
            <ActivityList data={DATA} />
        </div>

    </div>

      );
  }
})

// API object
var api = {
    // get the list of activities (sorted), call the callback when complete
    getItems: function(cb) {
        var url = "/api/activities";
        $.ajax({
            url: url,
            dataType: 'json',
            type: 'GET',
            //headers: {'Authorization': localStorage.token},
            success: function(res) {
                if (cb)
                    cb(true, res);
            },
            error: function(xhr, status, err) {
                // if there is an error, remove the login token
                delete localStorage.token;
                if (cb)
                    cb(false, status);
            }
        });
    }
};

module.exports = Home;