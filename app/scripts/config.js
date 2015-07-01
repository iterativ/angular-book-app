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

angular.module('config', [])
    .constant('ENV', {
        'name': 'development',
        'esHost': 'localhost:9200',
        'bookNotesIndex': 'booknotes',
        'notesType': 'note'
    });
