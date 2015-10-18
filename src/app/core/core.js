'use strict';

import angular from 'angular';
import {ToastService} from './services/toast/toast.service';

export var coreModule = angular.module('coreModule', [])
  .service('ToastService', ToastService);
