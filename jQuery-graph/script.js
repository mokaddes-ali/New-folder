$(document).ready(function(){
    window.onload = function () {
var options = {
	title: {
		text: "Column Chart in jQuery for data show"              
	},
    axisY: {
        title : 'Percentage of work experiance'
    },
     axisX: {
        title : 'Name of Technology'
    },
	data: [              
	{
		type: "column",
		dataPoints: [
			{ label: "jQuery",  y: 20  },
			{ label: "Laravel", y: 20  },
			{ label: "React", y: 35  },
			{ label: "WordPress",  y: 50  },
			{ label: "Shopify",  y: 28  }
		]
	}
	]
};

$(".bar-chart-container").CanvasJSChart(options);
}
})