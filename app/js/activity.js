var Comments = require("./comments.js");
var api = require("./api.js");

var Activity = React.createClass({
	getInitialState: function(){
		return {
			comment: "",
		}
	},

	handleLike: function(){
		this.props.item.upvotes++;
		api.updateActivity(this.props.item, function(){
			this.forceUpdate();
		}.bind(this))

	},

	handleComments: function(){
      this.props.item.showComments = !this.props.item.showComments;
      this.forceUpdate();
	},

	render: function(){

		if(this.props.item.upvotes > 14){
			var heart = <span 
							onClick={this.handleLike} 
							className="glyphicon glyphicon-heart redHeart" 
							id="rightAlign" 
							aria-hidden="true">
						</span>
		}else{
			var heart = <span 
							onClick={this.handleLike} 
							className="glyphicon glyphicon-heart heart" 
							id="rightAlign" 
							aria-hidden="true">
						</span>
		}

		return (
	        <div className="panel panel-primary" key={this.props.key}>
	        	<div className="panel-heading">
	        		<h1 className="panel-title">
	        			{this.props.item.title}
	        			{heart}
	        		</h1>
	        	</div>
	        	<div className="panel-body">
					<div><pDesc>{this.props.item.description}</pDesc></div>
					<div>Price: ${this.props.item.price}</div>
					<div>Address: {this.props.item.address}</div>
					<div>Awesome Factor: <pVotes>{this.props.item.upvotes}</pVotes></div>
					<div className="">Tags: &nbsp;
					{
						this.props.item.tags.map(function(tag, i) {
							return (
								<span key={i}><span className="label label-info">{tag}</span> </span>
							);
						})
					}
					</div>
					<br/>
					<button className="btn btn-primary" onClick={this.handleLike}>Like</button>
					<button className="btn btn-primary"onClick={this.handleComments} id="rightAlign" >Show/Hide Comments</button>
					<Comments activity={this.props.item}/>
					<br/>
				</div>
	        </div>
		)
	}
});

module.exports = Activity;
