class ConfigManager {
  constructor(defaultConfig = {}) {
    this.config = {
      theme: "light",
      language: "en",
      notifications: true,
      autoSave: false,
      ...defaultConfig,
    };
  }

  updateConfig(newSettings) {
    // TODO: Implement this method
    this.config = {
      ...this.config,
      ...newSettings,
    };
  }

  getSettings(...keys) {
    // TODO: Implement this method
    return keys.map((key) => [key, this.config[key]]);
  }

  validateConfig() {
    // TODO: Implement this method
    const validations = {
      theme: typeof this.config.theme === 'string',
      language: typeof this.config.language === 'string',
      notifications: typeof this.config.notifications === 'boolean',
      autoSave: typeof this.config.autoSave === 'boolean',
    }
    return {
      vaild: Object.values(validations).every(Boolean),
    ...validations
  }
  }
}


// Create a new ConfigManager instance with default settings
const manager = new ConfigManager();

// Test the updateConfig method
console.log('Initial configuration:', manager.config);
manager.updateConfig({ theme: 'dark', autoSave: true });
console.log('Updated configuration:', manager.config);

// Test the getSettings method
const settings = manager.getSettings('theme', 'autoSave', 'language');
console.log('Retrieved settings:', settings);

// Test the validateConfig method
console.log('Configuration validation:', manager.validateConfig());

// Create a ConfigManager instance with invalid settings
const invalidManager = new ConfigManager({ theme: 123, language: true, notifications: 'true', autoSave: 'false' });
console.log('Invalid configuration validation:', invalidManager.validateConfig());


// Initial configuration: { theme: 'light', language: 'en', notifications: true, autoSave: false }
// Updated configuration: { theme: 'dark', language: 'en', notifications: true, autoSave: true }
// Retrieved settings: { theme: 'dark', autoSave: true, language: 'en' }
// Configuration validation: { valid: true, theme: true, language: true, notifications: true, autoSave: true }
// Invalid configuration validation: { valid: false, theme: false, language: false, notifications: false, autoSave: false }