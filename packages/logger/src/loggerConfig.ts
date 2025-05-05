export const transmitLogLevel = 'warn';

export const PINO_ERROR_KEY = 'error';

type Dictionary = { [key: string]: string };
type LogInfo = {
  env: Dictionary;
  level: Dictionary;
  category: Dictionary;
};

export const logInfo: LogInfo = Object.freeze({
  env: {
    SERVER: 'server',
    CLIENT: 'client',
  },
  level: {
    DEBUG: 'debug',
    INFO: 'info',
    WARN: 'warn',
    ERROR: 'error',
    FATAL: 'fatal',
  },
  category: {
    SERVER: 'Server/NodeJS',
    CONFIG: 'Configuration',
    CONTENT: 'HeadlessServer/Content',
    SEARCH: 'HeadlessServer/Search',
    GEODATA: 'GeoData',
    SETTINGS: 'HeadlessServer/Settings',
    DONATIONPURPOSE: 'HeadlessServer/DonationPurpose',
    FORM: 'DonationServiceAPI/Form',
    CAPTCHA: 'Captcha',
    DONATION: 'DonationServiceAPI/Donation',
    TRANSACTIONCONFIG: 'DonationServiceAPI/TransactionConfig',
    COMMENT: 'ElasticSocialAPI',
    PAGINATION: 'Pagination',
    RENDERING: 'React/Rendering',
    REDIRECT: 'Server/Redirect',
    BROWSERSESSION: 'React/BrowserSession',
    FETCHREQUEST: 'Request/Fetch',
    RETRYREQUEST: 'Request/Retry',
    ADITIONREQUEST: 'Request/Adition',
    TRACKING: 'Tracking',
  },
});
