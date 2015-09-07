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
        'esHost': 'http://a2af205aa287d01f7f8d1edd7ef77016.eu-west-1.aws.found.io:9200',
        'bookNotesIndex': 'booknotes',
        'notesType': 'note',
        'tasksIndex': 'tasks',
        'tasksType': 'task'
    });
