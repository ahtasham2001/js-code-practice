// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// stack (primitive) heap (non primitive)

// stack example:
let youtubeChannel = "Ahtasham Naeem";
let channelName = youtubeChannel;
console.log(channelName);
console.log(youtubeChannel);

// heap example:

let userName={
    name: "Ahtasham",
    email: "ahtasham@google.com"
}

console.log(userName);
let userName2 = userName;
console.log(userName);
console.log(userName2);