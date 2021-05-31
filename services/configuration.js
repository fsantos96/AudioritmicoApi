const configurationList = [];

function getAllConfigurations() {
    return new Promise((resolve, reject) => {
        resolve({
            configurations: configurationList
        });
    })
}

function setConfigurations(configuration) {
    configurationList.push(configuration);
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

const service = {
    getAllConfigurations: getAllConfigurations,
    setConfigurations: setConfigurations,
    deleteConfigurations: deleteConfigurations,
    updateConfigurations: updateConfigurations
}

module.exports = service;