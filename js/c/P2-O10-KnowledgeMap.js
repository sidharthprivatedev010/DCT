DCLite.register("P2-O10-KnowledgeMap", "\n\n<dc-import name=\"TplA\" page=\"{{page}}\" hint-size=\"100%,1200px\"></dc-import>\n", function (DCLogic) {

class Component extends DCLogic {
  renderVals() {
    return { page: {"lens":"Owner","role":"Owner role","scope":"Group · all businesses","rid":"O-10","nav":"Knowledge Map","title":"Knowledge Map · KPI tree for root cause","q":"How does a KPI trace back through principles, entities and functions to its root causes?","trust":"Illustrative knowledge depiction; synthetic data","frame":"tools/knowledge_depiction/kpi-tree.html","kpis":[],"drill":[],"equiv":{"Owner":{"h":"P2-O10-KnowledgeMap.dc.html","same":true}}} };
  }
}
return Component;
});
