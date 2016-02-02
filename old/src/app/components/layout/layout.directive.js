/**
 * Created by jphoff on 10/18/2015.
 */
'use strict';

import template   from './layout.tpl';
import { LayoutController } from './layout.controller';

export default function () {

  return {
    restrict: 'E',
    replace: true,
    templateUrl: template.name,
    controller: LayoutController,
    controllerAs: 'ul',
    scope: {}
  };
}
