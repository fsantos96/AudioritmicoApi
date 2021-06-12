const configurationList = [];

function getAllConfigurations() {
    return new Promise((resolve, reject) => {
        resolve({
            configurations: configurationList
        });
    })
}

function setConfigurations(configuration) {
    configurationList.push({
            id: configurationList.length,
            color: configuration.color,
            rangeType: configuration.rangeType,
            range: configuration.range
    });

    return new Promise((resolve, reject) => {
        resolve({
            configurations: configurationList
        });
    })
}

function deleteConfigurations(id) {
    var index = configurationList.findIndex(config => {
        return id == config.id;
    })

    if(index > -1) {
        configurationList.splice(index, 1);

        return new Promise((resolve, reject) => {
            resolve({
                configurations: configurationList
            });
        })
    }
}

function updateConfigurations(configuration) {
    var index = configurationList.findIndex(config => {
        return configuration.id == config.id;
    })

    if(index > -1) {
        configurationList[index] = configuration;

        return new Promise((resolve, reject) => {
            resolve({
                configurations: configurationList
            });
        })
    }

    return new Promise((resolve, reject) => {
        resolve({
            configurations: configurationList
        });
    })
}

function getArduinoConfig() {
    const configurations = configurationList.map(config => {
        return {
            min: config.range.min,
            max: config.range.max,
            color: config.color
        }
    });

    return new Promise((resolve, reject) => {
        resolve({
            amountConfigurations: configurationList.length,
            configurations: configurations
        });
    })
}

const service = {
    getAllConfigurations: getAllConfigurations,
    setConfigurations: setConfigurations,
    deleteConfigurations: deleteConfigurations,
    updateConfigurations: updateConfigurations,
    getArduinoConfig: getArduinoConfig
}

module.exports = service;