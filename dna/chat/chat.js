// Get list of chat Users / Members
function listMembers() {return getlink(App.DNA.Hash, "member",{Load:true});}

// Get list of chat Admins
function listAdmins() {return getlink(App.DNA.Hash, "admin",{Load:true});}

// Authorize a new agent_id to participate in this holochain
// agent_id must match the string they use to "hc init" their holochain, and is currently their email by convention
function addMember(x) {
    commit("membership",{Links:[{Base:App.DNA.Hash,Link:x,Tag:"member"}]})
}

// Initialize by adding agent to holochain
function genesis() {
    commit("membership",{Links:[{Base:App.DNA.Hash,Link:App.Agent.Hash,Tag:"member"}]})
    //commit("membership",{Links:[{Base:App.DNA.Hash,Link:App.Agent.Hash,Tag:"room"}]})
    return true;
}

function validatePut(entry_type,entry,header,sources) {
    return validate(entry_type,entry,header,sources);
}
function validateCommit(entry_type,entry,header,sources) {
    return validate(entry_type,entry,header,sources);
}
// Local validate an entry before committing ???
function validate(entry_type,entry,header,sources) {
    return false;
}

function validateLink(linkingEntryType,baseHash,linkHash,tag,sources){return true}
