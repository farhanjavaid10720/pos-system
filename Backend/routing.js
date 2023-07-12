// const constants = require("./constants/constant");
// const controller = require("./app/auth/auth.controller");
// const userController = require("./app/user/user.controller");

// module.exports = function (app) {
//   app.use(`${constants.API_PREFIX}/auth`, controller);
//   app.use(`${constants.API_PREFIX}/user`, userController);
// };

const constants = require("./constants/constant");
const controller = require("./app/auth/auth.controller");
const userController = require("./app/user/user.controller");
const scannerController = require("./app/barcodeScanner/barcodeScanner.controller");
const cardTerminalController = require("./app/cardPaymentTerminal/cardPaymentTerminal.controller");
const cashDrawerController = require("./app/cashDrawer/cashDrawer.controller");
const cashierTerminalController = require("./app/cashierTerminal/cashierTerminal.controller");
const cashlessPaymentController = require("./app/cashlessPaymentSolutions/cashlessPaymentSolutions.controller");
const customerDisplayController = require("./app/customerDisplay/customerDisplay.controller");
const customerTabletController = require("./app/customerFacingTablet/customerFacingTablet.controller");
const loyaltyProgramController = require("./app/customerLoyaltyProgram/customerLoyaltyProgram.controller");
const timeClockController = require("./app/employeeTimeClock/employeeTimeClock.controller");
const inventoryManagementController = require("./app/inventoryManagementSystem/inventoryManagementSystem.controller");
const kitchenDisplayController = require("./app/kitchenDisplaySystem/kitchenDisplaySystem.controller");
const kitchenPrinterController = require("./app/kitchenPrinter/kitchenPrinter.controller");
const managementTerminalController = require("./app/managementTerminal/managementTerminal.controller");
const mobileDeviceController = require("./app/mobileDevices/mobileDevices.controller");
const onlineOrderingController = require("./app/onlineOrderingIntegration/onlineOrderingIntegration.controller");
const itemDisplayController = require("./app/order-itemDisplay/order-itemDisplay.controller");
const poleDisplayController = require("./app/poleDisplay/poleDisplay.controller");
const receiptPrinterController = require("./app/receiptPrinter/receiptPrinter.controller");
const securityCameraController = require("./app/securityCameras/securityCameras.controller");
const selfServiceKioskController = require("./app/selfServiceKiosk/selfServiceKiosk.controller");
const signatureCaptureController = require("./app/signatureCaptureDevice/signatureCaptureDevice.controller");
const voucherScannerController = require("./app/voucherCouponScanner/voucherCouponScanner.controller");
const weighingScaleController = require("./app/weighingScale/weighingScale.controller");
const forgetController = require("./app/auth/forget.controller");
const { Auth } = require("./app/auth/auth.middleware");

module.exports = function (app) {
  app.use(`${constants.API_PREFIX}/auth`, controller);
  app.use(`${constants.API_PREFIX}/user`, Auth, userController);
  app.use(`${constants.API_PREFIX}/forget`, forgetController);
  app.use(`${constants.API_PREFIX}/barcode-scanner`, Auth, scannerController);
  app.use(
    `${constants.API_PREFIX}/card-payment-terminals`,
    Auth,
    cardTerminalController
  );
  app.use(`${constants.API_PREFIX}/cash-drawers`, Auth, cashDrawerController);
  app.use(
    `${constants.API_PREFIX}/cashier-terminals`,
    Auth,
    cashierTerminalController
  );
  app.use(
    `${constants.API_PREFIX}/cashless-payment-solutions`,
    Auth,
    cashlessPaymentController
  );
  app.use(
    `${constants.API_PREFIX}/customer-displays`,
    Auth,
    customerDisplayController
  );
  app.use(
    `${constants.API_PREFIX}/customer-facing-tablets`,
    Auth,
    customerTabletController
  );
  app.use(
    `${constants.API_PREFIX}/loyalty-program`,
    Auth,
    loyaltyProgramController
  );
  app.use(
    `${constants.API_PREFIX}/employee-time-clocks`,
    Auth,
    timeClockController
  );
  app.use(
    `${constants.API_PREFIX}/inventory-management-systems`,
    Auth,
    inventoryManagementController
  );
  app.use(
    `${constants.API_PREFIX}/kitchen-display-systems`,
    Auth,
    kitchenDisplayController
  );
  app.use(
    `${constants.API_PREFIX}/kitchen-printers`,
    Auth,
    kitchenPrinterController
  );
  app.use(
    `${constants.API_PREFIX}/management-terminals`,
    Auth,
    managementTerminalController
  );
  app.use(
    `${constants.API_PREFIX}/mobile-devices`,
    Auth,
    mobileDeviceController
  );
  app.use(
    `${constants.API_PREFIX}/online-ordering-integrations`,
    Auth,
    onlineOrderingController
  );
  app.use(
    `${constants.API_PREFIX}/order-item-displays`,
    Auth,
    itemDisplayController
  );
  app.use(`${constants.API_PREFIX}/pole-displays`, Auth, poleDisplayController);
  app.use(
    `${constants.API_PREFIX}/receipt-printers`,
    Auth,
    receiptPrinterController
  );
  app.use(
    `${constants.API_PREFIX}/security-cameras`,
    Auth,
    securityCameraController
  );
  app.use(
    `${constants.API_PREFIX}/self-service-kiosks`,
    Auth,
    selfServiceKioskController
  );
  app.use(
    `${constants.API_PREFIX}/signature-capture-devices`,
    Auth,
    signatureCaptureController
  );
  app.use(
    `${constants.API_PREFIX}/voucher-scanners`,
    Auth,
    voucherScannerController
  );
  app.use(
    `${constants.API_PREFIX}/weighing-scales`,
    Auth,
    weighingScaleController
  );
};
