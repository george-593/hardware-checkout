module.exports = (req, res, next) => {
	if (req.isAuthenticated()) {
		next();
	} else {
		res.status(401).json({ error: "Not authenticated" });
	}
};