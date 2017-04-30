declare var require: any

const _assignIn = require('lodash.assign');

// Config Settings
export const DEFAULT_DROPDOWN_CONFIG =  {
    highlight: false,
    create:false,
    persist:true,
    plugins: ['dropdown_direction', 'remove_button'],
    dropdownDirection: 'down',
};

export const config_time = _assignIn({}, DEFAULT_DROPDOWN_CONFIG, {
    labelField: 'label',
    valueField: 'label',
    searchField: ['label']
});

export const METRICS_DATATYPE_DROPDOWN_CONFIG = _assignIn({}, DEFAULT_DROPDOWN_CONFIG, {
    labelField: 'Type',
    valueField: 'Id',
    searchField: ['Type'],
    sortField: [
        {
            field: 'Type',
            direction: 'asc'
        },
        {
            field: '$score'
        }
    ]
});

export const METRICS_NAME_DROPDOWN_CONFIG = _assignIn({}, DEFAULT_DROPDOWN_CONFIG, {
    labelField: 'Name',
    valueField: 'Id',
    searchField: ['Name'],
    sortField: [
        {
            field: 'Name',
            direction: 'asc'
        },
        {
            field: '$score'
        }
    ]
});

export const METRICS_TIMEPERIOD_DROPDOWN_CONFIG = _assignIn({}, DEFAULT_DROPDOWN_CONFIG, {
    labelField: 'label',
    valueField: 'label',
    searchField: ['label']
});

export const METRICS_VALUETYPE_DROPDOWN_CONFIG = _assignIn({}, DEFAULT_DROPDOWN_CONFIG, {
    labelField: 'label',
    valueField: 'label',
    searchField: ['label']
});

export const METRICS_ARITHMETICOPERTAION_DROPDOWN_CONFIG = _assignIn({}, DEFAULT_DROPDOWN_CONFIG, {
    labelField: 'label',
    valueField: 'label',
    searchField: ['label']
});

// Options Settings
export const METRICS_TIMEPERIOD_OPTIONS = [
        {label: 'Yesterday'},
        {label: 'Today'}
];

export const METRICS_VALUETYPE_OPTIONS = [
        {label: 'Day'},
        {label: 'Plan'},
        {label: 'MTD'},
        {label: 'YTD'}
];

export const METRICS_ARITHMETICOPERTAION_OPTIONS = [
        {label: '+'},
        {label: '-'},
        {label: '*'},
        {label: '/'},
        {label: '='}
];
