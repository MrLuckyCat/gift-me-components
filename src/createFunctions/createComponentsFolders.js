import { mkdirSync } from "fs";
import setComponentsNames from "../setFunctions/setComponentsNames.js";
import { componentsPath } from "../../bin/index.js";

function createComponentsFolders() {
  const componentsNames = setComponentsNames();

  componentsNames.forEach((componentName) => {
    mkdirSync(`${componentsPath}/${componentName}`);
  });

  return componentsNames;
}

export default createComponentsFolders;
