let uniqueDevices = devicenames.filter((elem, index) => devicenames.indexOf(elem) === index);
console.log(uniqueDevices)


}

function deviceNamesSystem(devicenames) {
    // Write your code here
    let deviceMap = {};
    for (let i = 0; i< devicenames.length; i++) {
        deviceMap[devicenames[i]] = true;
        if (deviceMap[devicenames[i]])   
    }
     
    
}