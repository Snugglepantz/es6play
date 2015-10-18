'use strict';

class LogService {
  constructor($log) {
    this.$log = $log;
  }

  info(info) {
    this.$log.info(info);
  }

  debug(debug) {
    this.$log.debug(debug);
  }

  error(error) {
    this.$log.error(error);
  }
}

LogService.$inject = ['$log'];

export { LogService };
