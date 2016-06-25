const spawn = require('child_process').spawn;

// Exec commands
// cordova run browser
// browser-sync start --proxy "http://127.0.0.1:8000" --files "www/dist.js"

function startCordovaPreview() {
  return new Promise((resolve, reject) => {
    const proc = spawn('cordova', ['run', 'browser']);
    var isResolved = false;

    proc.stdout.on('data', data => {
      if (!isResolved) {
        resolve();
        isResolved = true;
      }
      console.log(`stdout: ${data}`);
    });

    proc.stderr.on('data', data => {
      console.log(`stderr: ${data}`);
    });

    proc.on('error', err => {
      reject({ err });
    });

    proc.on('close', (code, signal) => {
      reject({ code, signal });
    });
  });
}

function startBrowserSync() {
  return new Promise((resolve, reject) => {
    const proc = spawn('browser-sync', ['start', '--proxy', "http://127.0.0.1:8000", '--files', "www/*"]);
    var isResolved = false;

    proc.stdout.on('data', data => {
      if (!isResolved) {
        resolve();
        isResolved = true;
      }
      console.log(`stdout: ${data}`);
    });

    proc.stderr.on('data', data => {
      console.log(`stderr: ${data}`);
    });

    proc.on('error', err => {
      reject({ err });
    });

    proc.on('close', (code, signal) => {
      reject({ code, signal });
    });
  });
}

startCordovaPreview().then(() => {
  return startBrowserSync();
}).catch((any) => {
  console.log(`Catch any error: ${any}`)
});
