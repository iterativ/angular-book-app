/**
 * Iterativ GmbH
 * http://www.iterativ.ch/
 *
 * Copyright (c) 2015 Iterativ GmbH. All rights reserved.
 *
 * Created on 02/07/15
 * @author: pawel.kowalski@iterativ.ch
 */
'use strict';

angular.module('itApp')
    .service('es', ['esFactory', 'ENV', function es(esFactory, ENV) {
        return esFactory({
            host: ENV.esHost,
            requestTimeout: 60000
        });
    }]);
