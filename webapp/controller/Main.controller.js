sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("SKE.UI5Skeleton.controller.Main", {
		handleListItemPress: function (evt) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		 	var selectedPurchaseOrder = evt.getSource().getBindingContext().getProperty("purchaseOrder");
			oRouter.navTo("detail", {
				purchaseOrder: selectedPurchaseOrder
			});
		},
		
		handleSearch: function (evt) {
			var filters = [];
			var query = evt.getParameter("query");
			if (query && query.length > 0) {
				var filter = new sap.ui.model.Filter("purchaseOrder", sap.ui.model.FilterOperator.Contains, query);
				filters.push(filter);
			}
	
			var list = this.getView().byId("List");
			var binding = list.getBinding("items");
			binding.filter(filters);			
		}
	});
});