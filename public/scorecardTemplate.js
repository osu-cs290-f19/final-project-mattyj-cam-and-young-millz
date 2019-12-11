(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['scoreCard'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<section class=\"cards\">\n<div class=\"card\" data-score=\""
    + alias4(((helper = (helper = helpers.score || (depth0 != null ? depth0.score : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"score","hash":{},"data":data,"loc":{"start":{"line":2,"column":30},"end":{"line":2,"column":39}}}) : helper)))
    + "\" data-name=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":2,"column":52},"end":{"line":2,"column":60}}}) : helper)))
    + "\" data-photoURL=\""
    + alias4(((helper = (helper = helpers.photoURL || (depth0 != null ? depth0.photoURL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"photoURL","hash":{},"data":data,"loc":{"start":{"line":2,"column":77},"end":{"line":2,"column":89}}}) : helper)))
    + "\" data-place=\""
    + alias4(((helper = (helper = helpers.place || (depth0 != null ? depth0.place : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"place","hash":{},"data":data,"loc":{"start":{"line":2,"column":103},"end":{"line":2,"column":112}}}) : helper)))
    + "\">\n    <div class=\"card-contents\">\n      <div class=\"post-image-container\">\n        <img src="
    + alias4(((helper = (helper = helpers.photoURL || (depth0 != null ? depth0.photoURL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"photoURL","hash":{},"data":data,"loc":{"start":{"line":5,"column":17},"end":{"line":5,"column":29}}}) : helper)))
    + ">\n      </div>\n    </div>\n    <div class=\"scorecard-info-container\">\n      <a href=\"#\" class=\"card-title\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":9,"column":37},"end":{"line":9,"column":45}}}) : helper)))
    + "</a>\n      <span class=\"card-score\">$"
    + alias4(((helper = (helper = helpers.score || (depth0 != null ? depth0.score : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"score","hash":{},"data":data,"loc":{"start":{"line":10,"column":32},"end":{"line":10,"column":41}}}) : helper)))
    + "</span>\n  </div>\n</div>\n</section>\n";
},"useData":true});
templates['leaderboard'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <section id = \"cards\">\n"
    + ((stack1 = container.invokePartial(partials.scoreCard,(depth0 != null ? depth0.singlepost : depth0),{"name":"scoreCard","data":data,"indent":"      ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    </section>\n\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "\n<section id=\"cards\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.scoreData : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":4},"end":{"line":13,"column":13}}})) != null ? stack1 : "")
    + "</section>\n<section id=\"losers\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.restData : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":2},"end":{"line":18,"column":11}}})) != null ? stack1 : "")
    + "</section>\n\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.scoreCard,depth0,{"name":"scoreCard","data":data,"indent":"      ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.loserCard,depth0,{"name":"loserCard","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<body>\n\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.display : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":3,"column":0},"end":{"line":21,"column":7}}})) != null ? stack1 : "")
    + "</body>\n";
},"usePartial":true,"useData":true});
})();