let Osm = require("os");
let osType = Osm.type();
let osPlatform = Osm.platform();
let osRelease = Osm.release();      
let osArch = Osm.arch();
let osUptime = Osm.uptime();            
let osTotalMemory = Osm.totalmem();
let osFreeMemory = Osm.freemem();   
let osHostname = Osm.hostname();
let osNetworkInterfaces = Osm.networkInterfaces();  
console.log("OS Type:", osType);
console.log("OS Platform:", osPlatform);        

console.log("OS Release:", osRelease);
console.log("OS Architecture:", osArch);    
console.log("OS Uptime (seconds):", osUptime);
console.log("Total Memory (bytes):", osTotalMemory);
console.log("Free Memory (bytes):", osFreeMemory);
console.log("Hostname:", osHostname);

console.log("Network Interfaces:", osNetworkInterfaces);
console.log("Network Interfaces:", JSON.stringify(osNetworkInterfaces, null, 2));   
console.log("Network Interfaces:", Object.keys(osNetworkInterfaces).map(iface => ({
    name: iface,
    details: osNetworkInterfaces[iface]
})));           

