function downloadFile(filePath, fileName) {
  const link = document.createElement('a');
  link.href = filePath;
  link.download = fileName || filePath.split('/').pop();
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}