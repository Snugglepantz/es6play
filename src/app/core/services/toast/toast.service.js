'use strict';

import 'Dogfalo/materialize';

class ToastService {
  constructor() {}

  message(message, timeout) {
    Materialize.toast(message, timeout || 5000);
  }
}

export { ToastService };
