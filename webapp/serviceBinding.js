function initModel() {
	var sUrl = "/sap/opu/odata/sap/ZZ_C_PURCHASECONTRACTS_CDS/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}