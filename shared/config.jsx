export default {
    node: process.env.NODE_ENV || 'development',
    isProduction: process.env.NODE_ENV === 'production',
    isTest: process.env.NODE_ENV === 'test',
    isDevelopment: !!!process.env.NODE_ENV || process.env.NODE_ENV === 'development',
    appName: process.env.NEXT_PUBLIC_APP_NAME,
}