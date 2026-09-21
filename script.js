const fields = {
  appName: document.getElementById('appName'),
  bundleId: document.getElementById('bundleId'),
  version: document.getElementById('version'),
  platform: document.getElementById('platform'),
  minimumOs: document.getElementById('minimumOs'),
  ipaFile: document.getElementById('ipaFile'),
  fileSize: document.getElementById('fileSize'),
  bundlePath: document.getElementById('bundlePath'),
  archiveType: document.getElementById('archiveType')
};

const preview = {
  name: document.getElementById('previewName'),
  version: document.getElementById('previewVersion'),
  bundleId: document.getElementById('previewBundleId'),
  platform: document.getElementById('previewPlatform'),
  minimumOs: document.getElementById('previewMinimumOs'),
  ipaFile: document.getElementById('previewIpaFile'),
  fileSize: document.getElementById('previewFileSize'),
  bundlePath: document.getElementById('previewBundlePath'),
  archiveType: document.getElementById('previewArchiveType')
};

function syncPreview() {
  preview.name.textContent = fields.appName.value || 'Paste here';
  preview.version.textContent = `Version: ${fields.version.value || 'Paste here'}`;
  preview.bundleId.textContent = fields.bundleId.value || 'Paste here';
  preview.platform.textContent = fields.platform.value || 'Paste here';
  preview.minimumOs.textContent = fields.minimumOs.value || 'iOS Paste here';
  preview.ipaFile.textContent = fields.ipaFile.value || 'Paste here';
  preview.fileSize.textContent = fields.fileSize.value || 'Paste here';
  preview.bundlePath.textContent = fields.bundlePath.value || 'Paste here';
  preview.archiveType.textContent = fields.archiveType.value || 'Paste here';
}

Object.values(fields).forEach((field) => {
  field.addEventListener('input', syncPreview);
});

syncPreview();
