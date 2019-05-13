var data = d3.json('data.json')

var width = 600;
var height = 500;

var svg = d3.select('body')
            .append('svg')
            .attr('height',height)
            .attr('width',width);

var xScale = d3.scaleLinear()
                .domain([0,100])
                .range([0,100]);

var rect = d3.select('svg')
              .data(data)
              .enter()
              .append('rect')
              .attr('x',function(d,i){
                return i * 4;
              })
              .attr('y',function(d){
                return height
              })
