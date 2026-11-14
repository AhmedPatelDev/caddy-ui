# caddy/ui — modified fork

<!-- dockerhub:both:start -->
> **This is a modified fork of [zackwag/caddy-ui](https://github.com/zackwag/caddy-ui), not the original project. It is not affiliated with or endorsed by the upstream maintainers.**
>
> For installation, configuration, environment variables, API documentation, and support, use the original project: [GitHub](https://github.com/zackwag/caddy-ui) · [documentation](https://zackwag.github.io/caddy-ui/).
>
> **Fork changes:**
> - Purple accent theme for the default dark and light palettes.
> - Optional authentication-disabled mode for deployments behind forward authentication, enabled with `CADDY_UI_AUTH_DISABLED=true`.
<!-- dockerhub:both:end -->

## Original project

- **Source and README:** <https://github.com/zackwag/caddy-ui>
- **Documentation:** <https://zackwag.github.io/caddy-ui/>
- **Docker Hub:** [backend](https://hub.docker.com/r/zackwag/caddy-ui-backend) · [frontend](https://hub.docker.com/r/zackwag/caddy-ui-frontend)

## Build this fork

The upstream Docker Hub images do not include these changes. Build and publish your own backend and frontend images:

```bash
docker build -t YOURUSER/caddy-ui-backend:latest ./src/backend
docker build -t YOURUSER/caddy-ui-frontend:latest ./src/frontend
docker push YOURUSER/caddy-ui-backend:latest
docker push YOURUSER/caddy-ui-frontend:latest
```

Use the original project's Compose example, replacing both `image:` values. Keep the backend service named `caddy-ui-backend`.

## License

This fork retains the upstream MIT license. See [LICENSE](LICENSE).

<details>
<summary>Upstream documentation links</summary>

These anchors keep the inherited docs build working. Every link points to the original project.

<!-- ANCHOR: overview -->
See the [upstream project README](https://github.com/zackwag/caddy-ui#readme).
<!-- ANCHOR_END: overview -->

<!-- ANCHOR: api-endpoints -->
See the [upstream API documentation](https://zackwag.github.io/caddy-ui/api.html).
<!-- ANCHOR_END: api-endpoints -->

<!-- ANCHOR: architecture -->
See the [upstream architecture documentation](https://zackwag.github.io/caddy-ui/architecture.html).
<!-- ANCHOR_END: architecture -->

<!-- ANCHOR: custom-nginx -->
See the [upstream build and Nginx documentation](https://zackwag.github.io/caddy-ui/building.html).
<!-- ANCHOR_END: custom-nginx -->

<!-- ANCHOR: environment-variables -->
See the [upstream environment variable reference](https://zackwag.github.io/caddy-ui/configuration.html).
<!-- ANCHOR_END: environment-variables -->

<!-- ANCHOR: authentication -->
See the [upstream authentication documentation](https://zackwag.github.io/caddy-ui/configuration.html#authentication).
<!-- ANCHOR_END: authentication -->

<!-- ANCHOR: frontend-features -->
See the [upstream feature documentation](https://zackwag.github.io/caddy-ui/features.html).
<!-- ANCHOR_END: frontend-features -->

<!-- ANCHOR: backend-features -->
See the [upstream feature documentation](https://zackwag.github.io/caddy-ui/features.html).
<!-- ANCHOR_END: backend-features -->

<!-- ANCHOR: prometheus-metrics -->
See the [upstream integrations documentation](https://zackwag.github.io/caddy-ui/integrations.html).
<!-- ANCHOR_END: prometheus-metrics -->

<!-- ANCHOR: homepage-widget -->
See the [upstream integrations documentation](https://zackwag.github.io/caddy-ui/integrations.html).
<!-- ANCHOR_END: homepage-widget -->

<!-- ANCHOR: auth-migration -->
See the [upstream release documentation](https://zackwag.github.io/caddy-ui/releases.html).
<!-- ANCHOR_END: auth-migration -->

<!-- ANCHOR: image-tags -->
See the [upstream release documentation](https://zackwag.github.io/caddy-ui/releases.html).
<!-- ANCHOR_END: image-tags -->

<!-- ANCHOR: quick-start-prerequisites -->
See the [upstream quickstart guide](https://zackwag.github.io/caddy-ui/setup.html).
<!-- ANCHOR_END: quick-start-prerequisites -->

<!-- ANCHOR: quick-start-admin-api -->
See the [upstream quickstart guide](https://zackwag.github.io/caddy-ui/setup.html).
<!-- ANCHOR_END: quick-start-admin-api -->

<!-- ANCHOR: quick-start-directories -->
See the [upstream quickstart guide](https://zackwag.github.io/caddy-ui/setup.html).
<!-- ANCHOR_END: quick-start-directories -->

<!-- ANCHOR: quick-start-auth -->
See the [upstream quickstart guide](https://zackwag.github.io/caddy-ui/setup.html).
<!-- ANCHOR_END: quick-start-auth -->

<!-- ANCHOR: quick-start-compose -->
See the [upstream quickstart guide](https://zackwag.github.io/caddy-ui/setup.html).
<!-- ANCHOR_END: quick-start-compose -->

<!-- ANCHOR: quick-start-deploy -->
See the [upstream quickstart guide](https://zackwag.github.io/caddy-ui/setup.html).
<!-- ANCHOR_END: quick-start-deploy -->

</details>
