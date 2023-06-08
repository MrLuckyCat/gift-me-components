import { input } from "../../bin/index.js";
import writeConfigFile from "../writeFunctions/writeConfigFile.js";

function createConfigFile() {
  if (shouldCreateConfigFile()) {
    writeConfigFile();
  }
}

function shouldCreateConfigFile() {
  const shouldCreateFile = input(
    "Would you like to create a config file to quickly create components? (Y/n): "
  );

  return ["Y", "y", "yes", "Yes"].includes(shouldCreateFile);
}

export default createConfigFile;
