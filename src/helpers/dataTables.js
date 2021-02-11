
// Overall Information

export const overallInformationColumns = [
  {
    Header: 'Name',
    accessor: 'processName', // accessor is the "key" in the data
  },
  {
    Header: 'Customer',
    accessor: 'processCustomer',
  },
  {
    Header: 'Program Name',
    accessor: 'processProgramName',
  },
  {
    Header: '# of Machines',
    accessor: 'noOfMachinesPerProcess',
  },
  {
    Header: 'Tac Time',
    accessor: 'tacTime',
  },
]

export const overallInformationDataModal = {
  processName: '',
  processCustomer: '',
  processProgramName: '',
  noOfMachinesPerProcess: 1,
  tacTime: 1
}

// Machine By Process

export const machineByProcessColumns = [
  {
    Header: 'Process Name',
    accessor: 'overallInformation.processName', // accessor is the "key" in the data
  },
  {
    Header: 'Machine Name',
    accessor: 'machineName', // accessor is the "key" in the data
  },
  {
    Header: 'Tac Time',
    accessor: 'tacTime',
  },
  {
    Header: 'Sensor Code',
    accessor: 'sensorCode',
  },
]

export const machineByProcessDataModal = {
  
  machineName: '',
  tacTime: 1,
  sensorCode: ''
}

// Working Shifts

export const workingShiftsColumns = [
  {
    Header: 'Machine Name',
    accessor: 'machineByProcess.machineName',
  },
  {
    Header: 'Shift Name',
    accessor: 'shiftName', // accessor is the "key" in the data
  },
  {
    Header: 'Start Time',
    accessor: 'startTime',
  },
  {
    Header: 'End Time',
    accessor: 'endTime',
  },
  {
    Header: 'Work Days',
    accessor: 'workDays',
  },
]

export const workingShiftsDataModal = {
  shiftName: '',
  startTime: '',
  endTime: '',
  workDays: 1,
}

// TSNU

export const tsnuColumns = [
  {
    Header: 'Machine Name',
    accessor: 'machineByProcess.machineName',
  },
  {
    Header: 'Machine Number',
    accessor: 'machineNo', // accessor is the "key" in the data
  },
  {
    Header: 'Time (Min)',
    accessor: 'timeMin',
  },
  {
    Header: 'Description',
    accessor: 'description',
  },
]

export const tsnuDataModal = {
  machineNo: '',
  timeMin: '',
  description: '',
}

// Alert Criteria

export const alertCriteriaColumns = [
  {
    Header: 'Machine Name',
    accessor: 'machineByProcess.machineName',
  },
  {
    Header: 'Traffic Light Color',
    accessor: 'trafficLightColor', // accessor is the "key" in the data
  },
  {
    Header: 'OEE Min',
    accessor: 'oeeMin',
  },
  {
    Header: 'OEE Max',
    accessor: 'oeeMax',
  },
  {
    Header: 'TimeOut',
    accessor: 'timeOut',
  },
]

export const alertCriteriaDataModal = {
  trafficLightColor: '',
  oeeMin: '',
  oeeMax: '',
  timeOut: '',
}