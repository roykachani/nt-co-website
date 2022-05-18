const api = {
	get: async () => import('./defaultData.json').then((res) => res.default),
};

export default api;
