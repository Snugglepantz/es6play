'use strict';

class LogController {
  constructor(LogService) {
    this.logService = LogService;
    //this.toastService = ToastService;
  }

  info(info) {
    this.logService.info(info);
    //this.toastService.message(info, 10000);
  }
}

LogController.$inject = ['LogService'];

export { LogController };
