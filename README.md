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


## Shared variables
Every check will receive these variables to work with:

 - `WM_CHECK_NAME`, name of the check you entered in monitor.
 - `WM_CHECK_EXIT_CODE`, ok (0), warning (1) or critical (2).
 - `WM_CHECK_OUTPUT`, output related to the check result.
