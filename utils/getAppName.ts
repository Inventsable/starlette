export default function getAppName() {
  if (window.__adobe_cep__)
    return JSON.parse(window.__adobe_cep__.getHostEnvironment()).appName;
  else null;
}
