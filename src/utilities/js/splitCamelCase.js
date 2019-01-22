/**
 * @param {String} : string you want to merge 
 * @param {String} : second string you want to join
 * @returns {String} : combined string
 */

function splitCamelCase(s) {
  return s.split(/(?=[A-Z])/).join(' ');
}

export default splitCamelCase