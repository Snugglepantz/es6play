'use strict';

class LogController {
  constructor(LogService) {
    this.logService = LogService;
  }

  info(info) {
    this.logService.info(info);
  }
}

LogController.$inject = ['LogService'];

export { LogController };
