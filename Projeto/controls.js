export function initControls(camera, rendererDomElement) {
    let controls = new PointerLockControls(camera, rendererDomElement);
    document.addEventListener('click', function() {
       controls.lock();
    }, false);
    return controls;
   }
   