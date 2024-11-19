export const AuthInterceptor = (config) => {
    config.headers.Authorization = `Bearer YOUR_API_KEY_HERE`;
    return config;
}
    