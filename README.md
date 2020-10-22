# whoopsmonitor-alert-teams
Alert that sends message to the Teams via its webhook.

## Build
```sh
docker build -t whoopsmonitor-alert-teams .
```

## Run image
```bash
docker run --rm --env-file .env whoopsmonitor-alert-teams
```

## Environmental variables
- `WM_WEBHOOK_URL` - Teams URL of the webhook.

### Example
Details of the check in Whoops Monitor configuration tab or for the `.env` file.

```yaml
WM_WEBHOOK_URL=http://...
```
