define([
    'base/tool'
], function(Tool) {

    var bubbleChart = Tool.extend({
        init: function(parent, options) {

            this.name = 'bubble-chart';
            this.template = "tools/_examples/bubble-chart/bubble-chart";
            this.placeholder = options.placeholder;

            this.state = options.state;

            //add components
            this.addComponent('_gapminder/header', {
                placeholder: '.vizabi-tool-title'
            });
            this.addComponent('_examples/bubble-chart', {
                placeholder: '.vizabi-tool-viz'
            });
            this.addComponent('_gapminder/timeslider', {
                placeholder: '.vizabi-tool-timeslider'
            });
            this.addComponent('_gapminder/buttonlist', {
                placeholder: '.vizabi-tool-buttonlist',
                buttons: [{
                    id: "geo",
                    title: "Country",
                    icon: "globe"
                }],
                data: options.data
            });

            this._super(parent, options);

        },


        getQuery: function() {
            //build query with state info

            var query = [{
                from: 'data',
                select: _.union(['geo', 'geo.name', 'time', 'geo.region'],this.model.getState("indicator")),
                where: {
                    geo: this.model.getState("show").geo,
                    'geo.category': this.model.getState("show")['geo.category'], 
                    time: this.model.getState("timeRange")
                }
            }];

            return query;
        }
    });

    return bubbleChart;
});