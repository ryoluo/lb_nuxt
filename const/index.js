export const isLocal = process.env.APP_ENV === 'local'
export const baseURL = isLocal ? 'http://localhost' : 'https://lotus-base.com'
