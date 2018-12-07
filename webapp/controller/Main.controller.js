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
		}
	});
});