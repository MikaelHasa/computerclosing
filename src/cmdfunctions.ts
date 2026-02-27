const { spawn } = require('child_process');
function shutdown() {
  spawn('shutdown /s', [], { shell: true, stdio: 'inherit' });
}

function eep() {
  spawn('shutdown -h', [], { shell: true, stdio: 'inherit' });
}



export { shutdown, eep };