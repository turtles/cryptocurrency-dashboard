export const REGISTER_REFRESH_INTERVAL = 'REGISTER_REFRESH_INTERVAL';
export const CLEAR_REFRESH_INTERVAL = 'CLEAR_REFRESH_INTERVAL';

export const registerRefreshInterval = (intervalId) => ({
    type: REGISTER_REFRESH_INTERVAL,
    intervalId
});

export const clearRefreshInterval = () => ({
    type: CLEAR_REFRESH_INTERVAL,
});

