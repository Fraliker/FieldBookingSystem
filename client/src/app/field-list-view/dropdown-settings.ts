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

export const DURATION_OPTIONS = [
        {label: '30'},
        {label: '60'},
        {label: '90'},
        {label: '120'}
];

export const DURATION_CONFIG = _assignIn({}, DEFAULT_DROPDOWN_CONFIG, {
    labelField: 'label',
    valueField: 'label',
    searchField: ['label']
});



export const TIME_DROPDOWN_CONFIG = _assignIn({}, DEFAULT_DROPDOWN_CONFIG, {
    labelField: 'label',
    valueField: 'label',
    searchField: ['label']
});


export const TIME_OPTIONS = [
  {label: '8:00 AM'},
  {label: '8:30 AM'},
  {label: '9:00 AM'},
  {label: '9:30 AM'},
  {label: '10:00 AM'},
  {label: '10:30 AM'},
  {label: '11:00 AM'},
  {label: '11:30 AM'},
  {label: '12:00 PM'},
  {label: '12:30 PM'},
  {label: '1:00 PM'},
  {label: '1:30 PM'},
  {label: '2:00 PM'},
  {label: '2:30 PM'},
  {label: '3:00 PM'},
  {label: '3:30 PM'},
  {label: '4:00 PM'},
  {label: '4:30 PM'},
  {label: '5:00 PM'},
  {label: '5:30 PM'},
  {label: '6:00 PM'},
  {label: '6:30 PM'},
  {label: '7:00 PM'},
  {label: '7:30 PM'},
  {label: '8:00 PM'}
];
