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
        'esHost': 'http://736223940c885939b11c6e89b3398563.eu-west-1.aws.found.io:9200',
        'bookNotesIndex': 'booknotes',
        'notesType': 'note'
    });
