'use strict';

import template   from './home-logger.tpl';
import { LogController } from './log.controller';

export default function () {

  return {
    restrict: 'E',
    templateUrl: template.name,
    controller: LogController,
    controllerAs: 'vm',
    scope: {}
  };
}
