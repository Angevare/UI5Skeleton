sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("SKE.UI5Skeleton.controller.Main", {
		handleListItemPress: function (evt) {
			// show in a pop-up which list element was pressed
	      jQuery.sap.require("sap.m.MessageBox");
			sap.m.MessageBox.show(
				"You pressed item: " + evt.getSource().getBindingContext(), {
					icon: sap.m.MessageBox.Icon.INFORMATION,
					title: "function hanldeListItemPress",
					actions: [sap.m.MessageBox.Action.OK]
				}
			);
		}
	});
});