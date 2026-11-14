const SAFE_METHODS = new Set(['GET', 'HEAD', 'OPTIONS']);

// CSRF binds a write to an ambient browser credential. With authentication
// explicitly disabled there is no such credential to protect, and requiring a
// short-lived anonymous session would break long-running open deployments.
// Cross-site origin checks still apply in that mode.
export function createCsrfMiddleware(sessions, { isAuthDisabled = () => false } = {}) {
    return (req, res, next) => {
        if (isAuthDisabled() || SAFE_METHODS.has(req.method) || sessions.verifyCsrfToken(req)) return next();
        // No headerless exemption: every browser write needs a valid context.
        // Read-only integration tokens cannot authorize any write or bypass this.
        return res.status(403).json({ code: 'CSRF_INVALID', error: 'Refresh the session before retrying this operation' });
    };
}
