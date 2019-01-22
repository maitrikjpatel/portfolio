/**
 * @param {ReactContext} Array of all links
 * @returns {Array} Array of all images
 */

function importAll(r) {
  let AllImages = {};
  r.keys().map((item, index) => { 
    AllImages[item.replace('./', '')] = r(item); 
  });
  return AllImages;
}

export default importAll