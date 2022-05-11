export const isLocal = process.env.APP_ENV === 'local'
export const baseURL = isLocal ? 'http://localhost:3000' : 'https://lotus-base.com'
export const proxyURL = isLocal ? 'http://localhost:8000' : 'https://lotus-base.com'
