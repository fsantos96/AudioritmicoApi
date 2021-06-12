const configurationList = [
    {
        id: 1,
        color: 0,
        rangeType: 1
    },
    {
        id: 2,
        color: 2,
        rangeType: 2
    }
];

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

const service = {
    getAllConfigurations: getAllConfigurations,
    setConfigurations: setConfigurations,
    deleteConfigurations: deleteConfigurations,
    updateConfigurations: updateConfigurations
}

module.exports = service;